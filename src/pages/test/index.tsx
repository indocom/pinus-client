import { NextPage } from "next";
import Page from "src/components/Page";

import { Text, Button, Input } from "pinus-ui-library";
import { createClient } from "contentful-management";
import { useState } from "react";

const generateRandomString = (length=6)=>Math.random().toString(20).substr(2, length)

// The following should be in an API somewhere
const createPerson = (personName: string) => {
  const client = createClient({
    accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_MANAGEMENT_ACCESS_TOKEN
  });

  client.getSpace(process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID)
  .then(space => space.getEnvironment('master'))
  .then(env => {
    const entryId = generateRandomString(10);
    return env.createEntryWithId(
      "person", // content type ID. Check contentful on the type's ID
      entryId,
      {
        fields: {
          "name" : {
            'en-US': personName
          }
        }
      });
    })
  .then(entry => entry.publish())
  .then(entry => console.log(`Entry ${entry.sys.id} with name ${entry.fields.name} is published`))
  .catch(console.error);
}

// The above should be in an API somewhere

const Test: NextPage = () => {
  const [name, setName] = useState<string | null>(null);
  const handleCreatePerson = () => {
    if (name === null || name === "") {
      setName("");
      console.log("NO PERSON CREATED CUZ YOU NVR PUT NAME!!");
      return;
    }

    createPerson(name);
  }
    return (
        <Page
        bgImage="home"
        title="Perhimpunan Indonesia NUS"
        description="Fostering relationships among Indonesians in NUS, building bridges between Indonesians and NUS."
      >
          <Text>Testing</Text>
          <Input
            type="text"
            name="name"
            value={name || ""}
            placeholder="Target's name"
            onChange={(event) => setName(event.target.value)}
            onBlur={() => name === null && setName("")}
            isRequired={false}
          />
          <Button onClick={handleCreatePerson} label="Create Person" />
      </Page>
    )
}

export default Test;