import React from "react";
import AuthorDataType from "../../types/AuthorDataType";
import Image from "react-bootstrap/Image";

interface Props {
  publishedDate: string;
  updatedDate: string;
  authorData: AuthorDataType;
}

const BylineComponent = (props: Props) => {
  const { publishedDate, updatedDate, authorData } = props;
  return (
    <div className="d-flex flex-column">
      <div style={{ height: 50 }}>
        <div>
          <Image src={authorData.thumbnail} roundedCircle fluid />
        </div>
        {authorData.title}
      </div>
      <div>published {publishedDate}</div>
      <div>updated {updatedDate}</div>
    </div>
  );
};

export default BylineComponent;
