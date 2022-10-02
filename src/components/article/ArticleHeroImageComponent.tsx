import React from "react";
import Image from "react-bootstrap/Image";
import parse from "html-react-parser";
import MediaImageType from "../../types/MediaImageType";

interface Props {
    mediaImageData: MediaImageType;
}

const ArticleHeroImageComponent = ({ mediaImageData }: Props) => {
  return (
    <>
      <div style={{ position: "relative" }}>
        <Image
          src={mediaImageData.src}
          fluid={true}
          alt="fgf"
          style={{ backgroundColor: "green" }}
        />
        <div
          style={{
            backgroundColor: "var(--c-image-overlay)",
            color: "var(--c-text-inverse)",
            position: "absolute",
            bottom: 0,
            right: 0,
          }}
        >
          {mediaImageData.byline}
        </div>
      </div>
      <div>{parse(mediaImageData.description)}</div>
    </>
  );
};

export default ArticleHeroImageComponent;
