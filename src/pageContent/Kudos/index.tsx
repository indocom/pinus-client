import React, { FC, useEffect, useState } from "react";
import { Dropdown } from "pinus-ui-library";
import {
  getPeopleKudos,
  getPeopleFromKudoboard,
} from "src/utils/contentful/kudo";
import ContentCard from "../../components/Kudos/ContentCard";
import styles from "./styles.module.css";
import SeniorCard, { SeniorProps } from "../../components/Kudos/SeniorCard";
import { ClientKudo, ContentfulPerson } from "src/utils/contentful/types";
import SanWriteContent from "../SanWrite";
import { ActionMeta, ValueType } from "src/utils/dropdown/types";
import { Entry } from "contentful";

function convertNameToUrl(name: string): string {
  const url: string = "/kudos/" + name.toLowerCase().replaceAll(" ", "-");
  return url;
}
interface SeniorsYearProp {
  year: number;
}
export const Seniors: FC<SeniorsYearProp> = ({year}) => {
  const [originalData, setOriginalData] =
    React.useState<Entry<ContentfulPerson>[]>();
  const [filteredData, setFilteredData] =
    React.useState<Entry<ContentfulPerson>[]>();

  React.useEffect(() => {
    async function getNames() {
      const people = await getPeopleFromKudoboard(year);
      people.sort((a, b) => (a.fields.name > b.fields.name ? 1 : -1));
      setOriginalData(people);
      setFilteredData(people);
    }
    getNames();
  }, []);

  if (!originalData || !filteredData) {
    return <div></div>;
  }
  const convertPeopleToSeniorProp: Array<SeniorProps> = filteredData.map(
    (x) => ({
      name: x.fields.name,
      faculty: x.fields.faculty,
      seniorUrl: convertNameToUrl(x.fields.name),
      gradYear: x.fields.gradYear,
    })
  );

  const handleOptionsChange = (value: ValueType, actionMeta: ActionMeta) => {
    try {
      const action = actionMeta.action;
      switch (action) {
        case "clear": {
          setFilteredData(originalData);
          break;
        }
        default: {
          handleFilteredData();
          break;
        }
      }
    } catch (err) {
      console.debug(err);
    }

    function handleFilteredData(): void {
      const labelChosen = value.label;
      const newFilteredData = originalData.filter((senior) =>
        senior.fields.name.includes(labelChosen)
      );
      setFilteredData(newFilteredData);
    }
  };

  const options = originalData.map((senior) => {
    return {
      value: senior.fields.name,
      label: senior.fields.name,
    };
  });

  return (
    <>
      <div className={styles.page}>
        <div className={styles.dropdown}>
          <Dropdown
            options={options}
            isMulti={false}
            onChange={handleOptionsChange}
          />
        </div>
        <div className={styles.containerSenior}>
          {convertPeopleToSeniorProp.map((data) => {
            return (
              <div className={styles.columnSenior}>
                <div className={styles.kudo}>
                  <SeniorCard
                    name={data.name}
                    faculty={data.faculty}
                    seniorUrl={data.seniorUrl}
                    gradYear={data.gradYear}
                  ></SeniorCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

function reorder(original: ClientKudo[]): ClientKudo[][] {
  if (original == undefined) {
    return [];
  }
  // LocalKudo divided into 3 roughly equal columns
  const ans = [[], [], []];

  // Current estimate of column length
  const lengths = [0, 0, 0];

  const maxCardWidth = 340;
  for (let i = 0; i < original.length; i++) {
    const height =
      original[i].image === null
        ? 0
        : original[i].image.fields.file.details.image.height;
    const width =
      original[i].image === null
        ? 0
        : original[i].image.fields.file.details.image.width;
    const weighted_height =
      original[i].image === null
        ? 0
        : width > maxCardWidth
        ? (height / width) * 12 + 3
        : (height / maxCardWidth) * 12 + 3;

    // Find which column is minimum
    const minimum = Math.min(...lengths);
    const which_col = lengths.indexOf(minimum);

    // Updating the length estimates
    const text_height_est = Math.floor(original[i].text.length / 57.5);
    lengths[which_col] =
      lengths[which_col] +
      (text_height_est === 1 ? 2 : text_height_est) +
      6 +
      weighted_height;

    // Putting the new LocalKudo into the correct column
    ans[which_col] = ans[which_col].concat(original[i]);
  }
  return ans;
}

const ModalWindow = ({
  isShown,
  setIsShown,
  slug,
  setSubmit,
  isLoading,
  setLoading,
}) => {
  const handleCloseButtonClick = () => {
    if (!isLoading) {
      setIsShown(!isShown);
    }
  };
  return (
    <div className={styles.modal} id="modalBackground">
      <div className={styles.modalContent}>
        <button
          className={[styles.wishButton, styles.close].join(" ")}
          onClick={handleCloseButtonClick}
        >
          {" "}
          X{" "}
        </button>

        <SanWriteContent
          setIsShown={setIsShown}
          setSubmit={setSubmit}
          name={slug}
          isLoading={isLoading}
          setLoading={setLoading}
        />
      </div>
    </div>
  );
};

export const KudosContent = (props) => {
  const [kudos, setKudos] = useState<ClientKudo[]>([]);
  const [hasKudos, setHasKudos] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);
  const [pageWidth, setPageWidth] = useState(0);
  const [isLoading, setLoading] = useState<boolean>(false);
  const slug = props.person;
  let name: string = props.person as string;
  name = name
    .split("-")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");

  useEffect(() => {
    async function getKudos() {
      const contents: ClientKudo[] = await getPeopleKudos(name);
      setKudos(contents);

      if (contents !== undefined && contents !== null && contents.length > 0) {
        setHasKudos(true);
      }
    }

    getKudos();
  }, []);

  useEffect(() => {
    async function getData() {
      const newData = await getPeopleKudos(slug);
      setKudos(newData);
    }
    if (isSubmitted) {
      getData();
      setSubmit(false);
    }
  }, [isSubmitted]);

  useEffect(() => {
    if (kudos === null || kudos === undefined) {
      setHasKudos(false);
    } else {
      setHasKudos(true);
    }
  }, [kudos]);

  document.onclick = function (e) {
    if ((e.target as HTMLElement).id == "modalBackground" && !isLoading) {
      setIsShown(false);
    }
  };

  if (typeof window !== "undefined") {
    const firstRendering = pageWidth === 0;
    if (firstRendering) {
      setPageWidth(window.innerHeight);
    }
    window.addEventListener("resize", function () {
      setPageWidth(this.document.body.clientWidth);
    });
  }

  return (
    <>
      <div>
        {isShown ? (
          <ModalWindow
            isShown={isShown}
            setIsShown={setIsShown}
            slug={name}
            setSubmit={setSubmit}
            isLoading={isLoading}
            setLoading={setLoading}
          />
        ) : null}
      </div>
      {hasKudos && (
        <div className={styles.page}>
          <div className={`text-center pt-12 sm:pt-10`}>
            <button
              className={styles.wishButton}
              onClick={() => {
                setIsShown(!isShown);
              }}
            >
              Write to {name}{" "}
            </button>
          </div>
          {pageWidth < 750 ? (
            <div className={styles.containerSmol}>
              {kudos.map((kudo) => {
                return (
                  <div className={styles.kudoSmol}>
                    <ContentCard
                      description={kudo.text}
                      from={kudo.writer}
                      image={kudo.imageUrl}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className={styles.container}>
              {reorder(kudos).map((column) => (
                <div className={styles.column}>
                  {column.map((kudo) => {
                    return (
                      <div className={styles.kudo}>
                        <ContentCard
                          description={kudo.text}
                          from={kudo.writer}
                          image={kudo.imageUrl}
                        />
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
      {!hasKudos && (
        <div className={styles.page}>
          <div className={`text-center pt-12 sm:pt-10`}>
            <button
              className={styles.wishButton}
              onClick={() => {
                setIsShown(!isShown);
              }}
            >
              Write to {name}{" "}
            </button>
          </div>
          <div className={styles.container}>
            <ContentCard
              description={
                name +
                " has not gotten any well wishes. Be the first to send your well wishes to " +
                name +
                "!"
              }
              from="admin"
            />
            <div>
              {isShown ? (
                <ModalWindow
                  isShown={isShown}
                  setIsShown={setIsShown}
                  slug={slug}
                  setSubmit={setSubmit}
                  isLoading={isLoading}
                  setLoading={setLoading}
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
