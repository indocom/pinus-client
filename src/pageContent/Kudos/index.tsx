import React, { useState } from "react";
import { Dropdown } from "pinus-ui-library";
import {
  getPeopleSlugsFromKudoboard,
  getPeopleKudos,
} from "src/utils/contentful/kudo";
import ContentCard from "../../components/Kudos/ContentCard";
import styles from "./styles.module.css";
import SeniorCard, { SeniorProps } from "../../components/Kudos/SeniorCard";
import { LocalKudo } from "src/utils/contentful/types";
import SanWriteContent from "../SanWrite";

function convertNameToUrl(name: string): string {
  const url: string = "/kudos/" + name.toLowerCase().replaceAll(" ", "-");
  return url;
}

export const Seniors = (_) => {
  const [originalData, setOriginalData] = React.useState<Array<string>>();
  const [filteredData, setFilteredData] = React.useState<Array<string>>();

  React.useEffect(() => {
    async function getNames() {
      const names: string[] = await getPeopleSlugsFromKudoboard();
      names.sort();
      setOriginalData(names);
      setFilteredData(names);
    }
    getNames();
  }, []);

  if (!originalData || !filteredData) {
    return <div></div>;
  }

  const convertSlugToSeniorProp: Array<SeniorProps> = filteredData.map((x) => {
    return {
      name: x,
      seniorUrl: convertNameToUrl(x),
    };
  });

  interface ValueType {
    value: string;
    label: string;
  }

  interface ActionMeta {
    action: string;
    name?: string;
    option?: unknown;
    removedValues?: readonly ValueType[];
  }

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
      const newFilteredData = originalData.filter((seniorName: string) =>
        seniorName.includes(labelChosen)
      );
      setFilteredData(newFilteredData);
    }
  };

  const options = originalData.map((seniorName: string) => {
    return {
      value: seniorName,
      label: seniorName,
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
          {convertSlugToSeniorProp.map((data) => {
            return (
              <div className={styles.columnSenior}>
                <div className={styles.kudo}>
                  <SeniorCard
                    name={data.name}
                    seniorUrl={data.seniorUrl}
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

function reorder(original: LocalKudo[]): LocalKudo[][] {
  // LocalKudo divided into 3 roughly equal columns
  const ans = [[], [], []];

  // Current estimate of column length
  const lengths = [0, 0, 0];

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
      original[i].image === null ? 0 : (height / width) * 12;

    // Find which column is minimum
    const minimum = Math.min(...lengths);
    const which_col = lengths.indexOf(minimum);

    // Updating the length estimates
    lengths[which_col] =
      lengths[which_col] +
      Math.floor(original[i].text.length / 60) +
      5 +
      weighted_height;

    // Putting the new LocalKudo into the correct column
    ans[which_col] = ans[which_col].concat(original[i]);
  }
  return ans;
}

const ModalWindow = ({ isShown, setIsShown, slug, setSubmit }) => {
  const handleClick = () => {
    setIsShown(!isShown);
  };
  return (
    <div className={styles.modal} id="modalBackground">
      <div className={styles.modalContent}>
        <button
          className={[styles.wishButton, styles.close].join(" ")}
          onClick={handleClick}
        >
          {" "}
          X{" "}
        </button>

        <SanWriteContent
          setIsShown={setIsShown}
          setSubmit={setSubmit}
          name={slug}
        />
      </div>
    </div>
  );
};

export const KudosContent = (props) => {
  const Kudos: LocalKudo[] = props.kudos.contents;
  const [hasKudos, setHasKudos] = useState(Kudos !== undefined);
  const [kudos, setKudos] = useState(Kudos !== undefined ? Kudos : null);
  const [isShown, setIsShown] = useState(false);
  const [isSubmitted, setSubmit] = useState(false);
  const [pageWidth, setPageWidth] = useState(window.innerWidth);
  const Kudos_reordered = hasKudos ? reorder(kudos) : null;
  const slug = props.person;
  let name: string = props.person as string;
  name = name
    .split("-")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  React.useEffect(() => {
    async function getData() {
      const newData = await getPeopleKudos(slug);
      setKudos(newData);
    }
    if (isSubmitted) {
      getData();
      setSubmit(false);
    }
  }, [isSubmitted]);
  React.useEffect(() => {
    if (kudos === null) {
      setHasKudos(false);
    } else {
      setHasKudos(true);
    }
  }, [kudos]);

  document.onclick = function (e) {
    if ((e.target as HTMLElement).id == "modalBackground") {
      setIsShown(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("resize", function (_) {
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
          />
        ) : null}
      </div>
      {hasKudos && (
        <div className={styles.page}>
          <div className="text-center">
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
              {Kudos_reordered.map((column) => (
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
          <div className="text-center">
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
                />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
