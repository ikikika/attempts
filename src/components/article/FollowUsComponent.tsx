import React from "react";

const styles = {
  followUs: {
    backgroundColor: "#eee",
    borderTop: "1px solid red",
    fontSize: 14,
  },
  linkStyle: {
    textDecoration: "none",
    fontWeight: "bold",
    color: 'var(--c-link)'
  },
};

const FollowUsComponent = () => {
  return (
    <div className="p-2 mb-4 text-center" style={styles.followUs}>
      Follow us on{" "}
      <a
        href="https://www.instagram.com/todayonline/"
        rel="instagram noreferrer"
        style={styles.linkStyle}
        target="_blank"
      >
        Instagram
      </a>{" "}
      and{" "}
      <a
        href="https://www.tiktok.com/@todayonline"
        rel="tiktok noreferrer"
        style={styles.linkStyle}
        target="_blank"
      >
        Tiktok
      </a>
      , and join our{" "}
      <a
        href="https://t.me/todayonlinesg"
        rel="telegram noreferrer"
        style={styles.linkStyle}
        target="_blank"
      >
        Telegram
      </a>{" "}
      channel for the latest updates.
    </div>
  );
};

export default FollowUsComponent;
