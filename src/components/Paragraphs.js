import React from "react";

const Paragraphs = ({ hipsumData }) => {
  return (
    <div className="paragraph-container">
      {hipsumData.map((paragraphs, index) => {
        return <p key={index}>{paragraphs}</p>;
      })}
    </div>
  );
};

export default Paragraphs;
