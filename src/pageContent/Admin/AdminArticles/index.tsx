import AdminLayout from "src/components/Admin/AdminLayout";
import Dropdown from "src/components/Dropdown";
import ContentPreview from "src/components/ContentPreview";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import Link from "next/link";
import { Post } from "src/api/postType";
import {
  loadPostsActionCreator,
  setFilter,
  setCategory,
  postsSelector,
} from "src/redux/post";
import Button from "src/components/Button";
import { Edit } from "react-feather";

const category = [
  { value: "manusia", label: "Manusia" },
  { value: "opini", label: "Opini" },
  { value: "modulus", label: "Modulus" },
];

const filter = [
  { value: "createdAt", label: "Posting Date" },
  { value: "author", label: "Author" },
  { value: "title", label: "Title" },
];

const AdminArticles: React.FC = () => {
  const posts = useSelector(postsSelector);
  console.log(posts);
  // TODO, create action creater for each option

  const dispatch = useDispatch();

  return (
    <AdminLayout>
      <div className={`h-full flex flex-col items-center`}>
        <div className={`w-full grid grid-cols-3 md:grid-cols-1 gap-6`}>
          <Dropdown
            option={category}
            defaultText={"Select The Category ... "}
            handleChange={(selectedOption) => {
              if (selectedOption === null) {
                dispatch(setCategory({ category: null }));
                return;
              } else {
                switch (selectedOption.value) {
                  case "manusia":
                    dispatch(setCategory({ category: 1 }));
                    break;
                  case "opini":
                    // dispatch filter by opini
                    dispatch(setCategory({ category: 2 }));
                    break;
                  case "modulus":
                    // dispatch filter by modulus
                    dispatch(setCategory({ category: 3 }));
                    break;
                }
              }
            }}
          ></Dropdown>
          <Dropdown
            option={filter}
            defaultText={"Filter by ..."}
            handleChange={(selectedOption) => {
              if (selectedOption === null) {
                dispatch(setFilter({ filter: null }));
                return;
              } else {
                switch (selectedOption.value) {
                  case "postedAt":
                    // dispatch filter by time
                    dispatch(setFilter({ filter: "createdAt" }));
                    break;
                  case "author":
                    dispatch(setFilter({ filter: "author" }));
                    break;
                  case "title":
                    dispatch(setFilter({ filter: "title" }));
                    break;
                }
              }
            }}
          ></Dropdown>
          <div
            className={`flex flex-row self-center place-self-end pr-20 xl-min:pr-36`}
          >
            <div className={`mr-2 mt-2 font-extrabold text-xl`}>
              Create Post
            </div>
            <Link href={`/admin/articles/create`} key={`create`}>
              <a className={``}>
                <Edit size={40} />
              </a>
            </Link>
          </div>
        </div>
        <div className={`flex flex-row flex-wrap justify-center`}>
          {posts.posts.map((item: Post) => {
            return (
              <div
                className={`mt-10 sm-min:m-4 sm-min:mb-4 lg-min:m-8 sm-min:mb-4 xl-min:m-12 xl-min:mb-4`}
                key={`Content-${item.id}`}
              >
                <ContentPreview
                  title={item.title}
                  description={item.description}
                  hyperlink="https://aksarapinus.wordpress.com/"
                />
                <div className={`flex flex-row justify-center`}>
                  <div className={`mr-2 mt-2 font-extrabold text-xl`}>
                    Edit Post
                  </div>
                  <Link
                    href={`/admin/articles/edit/${item.id}`}
                    key={`navbar-${item.id}`}
                  >
                    <a>
                      <Edit size={40} />
                    </a>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
        <div className={`mt-2 lg-min:mt-0 lg-min:mb-10`}>
          <Button
            variant="secondary"
            onClick={() => {
              // TODO
              dispatch(loadPostsActionCreator({ category: posts.category }));
            }}
          >
            Load More!
          </Button>
        </div>
      </div>
    </AdminLayout>
  );
};

export default AdminArticles;
