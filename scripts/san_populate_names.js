#!/usr/bin/env node

const { parse } = require("fast-csv");
const { createClient: createClientWrite } = require("contentful-management");
const fs = require("fs");
const assert = require("assert");

const LOCALE = "en-US";
const generateRandomString = (length = 6) => {
  return Math.random().toString(20).substring(0, length);
};

async function write_to_contentful(data, kudoboard, writer, year) {
  for (const person of data) {
    const entryId = generateRandomString(22);
    const result = await writer.createEntryWithId(
      "person", // content type ID. Check contentful on the type's ID
      entryId,
      {
        fields: {
          name: {
            [LOCALE]: person.Name
          },
          faculty: {
            [LOCALE]: [person.Faculty]
          },
          gradYear: {
            [LOCALE]: year
          }
        }
      });

    const published_person = await result.publish();
    console.log(`${person.Name} is published: ${published_person.isPublished()}`);

    if (!kudoboard.fields.hasOwnProperty("people")) {
      kudoboard.fields.people = {};
      kudoboard.fields.people[LOCALE] = [];
    }

    kudoboard.fields.people[LOCALE].push({
      sys: {
        type: "Link",
        linkType: "Entry",
        id: published_person.sys.id
      }
    });
  }

  await kudoboard.update().then(kudo => kudo.publish());
}

async function process_names(data) {
  // data = [
  //  {
  //    Name: ...,
  //    Faculty: ...
  //  },
  //  ...
  // ]

  const environment = "master"; // master | development
  const year = "2022";

  // Set up your env variable
  const writer = await createClientWrite({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
  })
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(environment));


  const kudoboards = await writer.getEntries({
    content_type: "kudoboard",
    "fields.year[equal]": year
  });

  assert(kudoboards.items.length === 1, "There are more than 1 matching kudoboards");
  const kudoboard = kudoboards.items[0];

  await write_to_contentful(data, kudoboard, writer, year);
}


function main() {
  const data = [];
  const csv_path = "/home/lauwsj/Desktop/pinus_san.csv";

  fs.createReadStream(csv_path)
    .pipe(parse({ headers: true }))
    .on("error", error => console.log(error))
    .on("data", row => {
      data.push(row);
    })
    .on("end", async rowCount => {
      console.log(`Parsed ${rowCount} rows`);
      await process_names(data);
    });
}

main();
