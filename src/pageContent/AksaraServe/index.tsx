import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import ContentPreview from "src/components/ContentPreview";
import CommentBox from "src/components/CommentBox";
import ReplyBox from "src/components/ReplyBox";
import { textArray, commentArray } from "./stubs";
import * as S from "./styles";
import LinkFacebook from 'react-facebook-share-link';
import LinkTwitter from 'react-twitter-share-link';
import LinkLinkedin from 'react-linkedin-share-link';

interface OwnProps {
  bgImage?: string;
  title: string;
  author: string;
  text: string;
  date: string;
  tags: string[];
}

const AksaraServe: React.FC<OwnProps> = ({
  bgImage,
  title,
  author,
  text,
  date,
  tags,
}) => {
  const renderRelatedPost = () => {
    return (
      <div className={`flex flex-col flex-wrap items-center lg-min:flex-row lg-min :flex-wrap lg-min:justify-around lg-min:max-w-screen-lg`}>
        {textArray.map((item) => {
          return (
            <div className={`mt-10 lg-min:m-8`}>
              <ContentPreview
                title={item.title}
                description={item.description}
                hyperlink="https://aksarapinus.wordpress.com/"
              ></ContentPreview>
            </div>
          );
        })}
      </div>
    )
  }

  return (
    <>
      <div className={S.AksaraSection}>
        <div className={`min-h-screen w-4/5 flex flex-col justify-start items-center border-black border-b-2`}>
          <div className={`border-b-2 border-black text-1xl lg-min:text-3xl font-extrabold`}>
            [ak.sa.ra]
                    </div>
          <div className={`mt-16 border-black text-3xl lg-min:text-5xl font-extrabold`}>
            {title}
          </div>
          <div className={`mt-8 mb-8 border-black text-1xl lg-min:text-1xl`}>
            by {author}
          </div>
          <Image
              alt="postImage"
              src={bgImage}
              width="5000"
              height="2750"
            ></Image>
          <div className={`mt-8 mb-8 text-1xl lg-min:text-1xl text-justify whitespace-pre-line`}>
            {text}
          </div>
          <div className={`mt-8 mb-8 border-black text-1xl lg-min:text-2xl font-bold`}>
            share this:
                    </div>
          <div className={`flex flex-row`}>
            <LinkFacebook link='https://aksarapinus.wordpress.com/'>
              {link => (
                <a href={link} target='_blank'>
                  <Image
                    src="/assets/icons/facebook.png"
                    height={30}
                    width={30}
                  />
                </a>
              )}
            </LinkFacebook>
            <div className={`w-12`}></div>
            <LinkTwitter link='https://aksarapinus.wordpress.com/'>
              {link => (
                <a href={link} target='_blank'>
                  <Image
                    src="/assets/icons/twitter.png"
                    height={30}
                    width={30}
                  />
                </a>
              )}
            </LinkTwitter>
            <div className={`w-12`}></div>
            <LinkLinkedin link='https://aksarapinus.wordpress.com/'>
              {link => (
                <a href={link} target='_blank'>
                  <Image
                    src="/assets/icons/linkedin.png"
                    height={30}
                    width={30}
                  />
                </a>
              )}
            </LinkLinkedin>
          </div>
          <div className={`mt-8 mb-8 text-1xl lg-min:text-1xl text-justify justify-center flex`}>
            <div className={`ml-4 mr-4`}><Image src="/assets/icons/person.png" width="16" height="16"></Image> {author}</div>
            <div className={`ml-4 mr-4`}><Image src="/assets/icons/clock.png" width="16" height="16"></Image> {date}</div>
            <div className={`ml-4 mr-4 text-red-500`}><Image src="/assets/icons/label.png" width="16" height="16"></Image> {tags.join(", ")}</div>
          </div>
        </div>
        <div className={`w-4/5 flex flex-col justify-start`}>
          <div className={`mt-8 mb-8 border-black text-1xl lg-min:text-2xl font-bold`}>
            Related Posts:
          </div>
          {renderRelatedPost()}
        </div>
        <div className={`mt-8 pb-8 w-screen bg-aksara-comment flex flex-col items-center`}>
          <ReplyBox />
        </div>
        <div className={`w-4/5 mb-16`}>
          {commentArray.map((props) => <CommentBox {...props} />)}
        </div>
      </div>
    </>
  );
}

export default AksaraServe;