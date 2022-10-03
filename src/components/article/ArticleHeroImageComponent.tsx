import React from "react";
import Image from "react-bootstrap/Image";
import parse from "html-react-parser";
import MediaImageType from "../../types/MediaImageType";

interface Props {
  mediaImageData: MediaImageType;
}

const styles = {
  byline: {
    background: "var(--c-image-byline-bg)",
    color: "var(--c-white-color)",
    fontSize: "var(--fs-byline)",
    fontWeight: 400,
    fontFamily: "var(--ff-byline)",
    lineHeight: "var(--lh-byline)",
  },
  caption: {
    fontSize: "var(--fs-caption-l)",
    lineHeight: "var(--lh-caption-l)",
  },
};

const ArticleHeroImageComponent = ({ mediaImageData }: Props) => {
  return (
    <>
      <div className="position-relative">
        <Image
          src={mediaImageData.src}
          alt={mediaImageData.byline}
          className="w-100"
        />
        <div
          className="position-absolute bottom-0 end-0 p-2"
          style={styles.byline}
        >
          {mediaImageData.byline}
        </div>
      </div>
      <div className="mt-2" style={styles.caption}>
        {parse(mediaImageData.description)}
      </div>
    </>
  );
};

export default ArticleHeroImageComponent;
