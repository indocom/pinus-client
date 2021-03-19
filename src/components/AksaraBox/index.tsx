import React from "react";
import Image from "next/image";
import Text from "src/components/Text";

interface OwnProps {
	bgImage?: string;
	title: string;
	description: string;
	hyperlink: string;
}

const AksaraBox: React.FC<OwnProps> = ({
	bgImage = "/assets/aksaraImages/aksara-newspaper.png",
	title,
	description,
	hyperlink = "https://aksarapinus.wordpress.com/",
}) => {
	return (
		<div className={`flex flex-col max-w-sm lg-min:max-w-lg justify-start`}>
			<div
				className={`bg-aksaraBox bg-no-repeat flex flex-col break-words`}
			>
				<div className={`max-w-sm lg-min:max-w-lg`}>
					<Image
						alt="Some Image"
						src={bgImage}
						layout="responsive"
						width="25"
						height="15"
					></Image>
				</div>
				<div className={`text-2xl m-4`}>
					<Text variant="aksaraTextheader">{title}</Text>
				</div>
				<div className={`ml-4 max-h-24 lg-min:h-24 overflow-ellipsis overflow-hidden lg-min:w-96 lg-min:pr-4`}>
					{description}
				</div>
				<div className={`text-red-500 ml-4 mb-4 mr-4 `}>
					<a href={hyperlink}>Read More!</a>
				</div>
			</div>
		</div>
	);
};

export default AksaraBox;
