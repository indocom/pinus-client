import React from 'react';
import Image from 'next/image';

interface OwnProps {
  username: string;
  comment: string;
}

const commentBox: React.FC<OwnProps> = ({
  username,
  comment,
}) => {
  return (
    <div className={`mt-8 flex-row flex`}>
      <div className={`col-2`}>
        <Image src="/assets/icons/person.png" layout="fixed" width="40" height="40"></Image>
      </div>
      <div className={`pl-6 ml-6 border-black border-l-2 flex flex-col col-10`}>
        <div className={`border-black text-1xl lg-min:text-2xl font-bold`}>
          {username}
        </div>
        <div className={`mt-4 border-black text-1xl lg-min:text-2xl font-thin text-justify`}>
          {comment}
        </div>
      </div>
    </div>
  );
};

export default commentBox;