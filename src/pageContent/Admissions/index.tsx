import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { Text, Button, Navbar, Content } from "pinus-ui-library";

import { BLOCKS } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { DocMeta } from "src/lib/ssg";

import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

interface OwnProps extends DocMeta {
  navItems: Content[];
}

const options = {
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => (
      <div>
        <Text fontSize="6xl" fontWeight="bold" color="black">
          {children}
        </Text>
        <br />
      </div>
    ),
    [BLOCKS.HEADING_2]: (_node, children) => (
      <div>
        <Text fontSize="4xl" fontWeight="bold" color="black">
          {children}
        </Text>
      </div>
    ),
    [BLOCKS.HEADING_3]: (_node, children) => (
      <div>
        <Text fontSize="3xl" fontWeight="bold" color="black">
          {children}
        </Text>
      </div>
    ),
    [BLOCKS.HEADING_4]: (_node, children) => (
      <div>
        <Text fontSize="2xl" fontWeight="bold" color="black">
          {children}
        </Text>
      </div>
    ),
    [BLOCKS.PARAGRAPH]: (_node, children) => (
      <div>
        <Text>{children}</Text>
        <br />
      </div>
    ),
    [BLOCKS.UL_LIST]: (_node, children) => (
      <div>
        <ul
          style={{
            listStyleType: "disc",
          }}
        >
          {children.map((x, idx) => (
            <li
              key={idx}
              style={{
                display: "inline",
                lineHeight: "1px",
                padding: 0,
              }}
            >
              {x}
            </li>
          ))}
        </ul>
      </div>
    ),
    [BLOCKS.OL_LIST]: (_node, children) => (
      <div>
        <ol
          style={{
            listStyleType: "decimal",
            marginLeft: "1.5em",
          }}
        >
          {children.map((x, idx) => (
            <li
              key={idx}
              style={{
                display: "inline",
                lineHeight: "1px",
                padding: 0,
              }}
            >
              {x}
            </li>
          ))}
        </ol>
      </div>
    ),
    [BLOCKS.EMBEDDED_ASSET]: (node, _) => {
      const { contentType } = node.data.target.fields.file;
      if (contentType.includes("image")) {
        return (
          <div>
            <img
              src={`https://${node.data.target.fields.file.url}`}
              height={node.data.target.fields.file.details.image.height}
              width={node.data.target.fields.file.details.image.width}
              alt={node.data.target.fields.description}
            />
          </div>
        );
      } else {
        // TODO: Support other contentTypes in the future, if necessary
        throw TypeError(
          `The following contentType has not been implemented: ${contentType}`
        );
      }
    },
    [BLOCKS.EMBEDDED_ENTRY]: (node, _) => {
      return (
        <div>
          <ReactMarkdown
            children={node.data.target.fields.table}
            remarkPlugins={[gfm]}
            components={{
              table: ({ node, ...props }) => (
                <table style={{ border: "1px solid #555" }} {...props} />
              ),
              tr: ({ node, ...props }) => (
                <tr style={{ border: "1px solid #555" }} {...props} />
              ),
            }}
          />
        </div>
      );
    },
  },
};
const AdmissionsContent: React.FC<OwnProps> = ({
  chapter,
  subchapter,
  section,
  navItems,
  post,
}) => {
  const router = useRouter();
  const paramsSlug = router.query.slug;

  let slug: string;
  if (Array.isArray(paramsSlug)) {
    slug = paramsSlug.join("-"); // Should not occur
    throw TypeError(`Received the following array: [${paramsSlug.join(",")}]`);
  } else {
    slug = paramsSlug;
  }

  const currPageNum = parseInt(slug.split("-")[1]);

  const contentRef = useRef(null);
  const firstUpdate = useRef(true);
  useEffect(() => {
    if (firstUpdate.current) {
      firstUpdate.current = false;
      return;
    }

    contentRef.current.scrollIntoView();
  });

  return (
    <div className={`grid grid-cols-6 min-h-screen w-screen overflow-hidden`}>
      <div
        className={`lg:hidden col-start-1 col-span-2 bg-black px-24 pb-40 space-y-4`}
      >
        <span>&nbsp;</span>
        <Text fontSize="5xl" fontWeight="bold" color="white">
          For Incoming Freshmen
        </Text>
        <Text color="white">
          All you need to know about NUS, applying to NUS, fees and funding, and
          accommodation options offered.
        </Text>
        <div className={`mb-5`}>
          <Navbar contents={navItems} color="white" />
        </div>
      </div>
      <div
        className={`lg:col-span-6 col-span-4 bg-transparent shadow-inner shadow-4xl`}
      >
        <div ref={contentRef} className={`lg:py-20 lg:px-10 p-20`}>
          <Text
            fontSize="xl"
            fontWeight="normal"
            color="rgba(87, 87, 87, 0.48)"
          >{`${chapter} | ${subchapter}`}</Text>
          <span>&nbsp;</span>
          <Text fontSize="5xl" fontWeight="bold">
            {section}
          </Text>
          <div> {documentToReactComponents(post, options)}</div>
          <div className={`flex flex-row justify-between mt-20`}>
            {currPageNum > 1 && (
              <div className="mr-auto">
                <Button
                  onClick={() => {
                    router.push(
                      `/admissions/${slug.split("-")[0].toLocaleLowerCase()}-${
                        currPageNum < 10 ? "0" : ""
                      }${currPageNum - 1}`
                    );
                  }}
                  label="Prev"
                  variant="secondary"
                />
              </div>
            )}
            {currPageNum <
              navItems[
                navItems.map((x) => x.title).indexOf(chapter)
              ].children.reduce(
                (sum, subchapter) => subchapter.children.length + sum,
                0
              ) && (
              <div className="ml-auto">
                <Button
                  onClick={() => {
                    router.push(
                      `/admissions/${slug.split("-")[0].toLocaleLowerCase()}-${
                        currPageNum < 9 ? "0" : ""
                      }${currPageNum + 1}`
                    );
                  }}
                  label="Next"
                  variant="secondary"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdmissionsContent;
