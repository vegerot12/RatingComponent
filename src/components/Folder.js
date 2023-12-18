import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expanded, setExpanded] = useState(false);
  if (explorer.folderItems) {
    return (
      <>
        <div onClick={() => setExpanded((cur) => !cur)}>{explorer.name} </div>
        <ul style={{ display: expanded ? "block" : "none" }}>
          {explorer.folderItems.map((item) => (
            <Folder explorer={item} />
          ))}
        </ul>
      </>
    );
  } else {
    return <div>{explorer.name}</div>;
  }
};

export default Folder;
