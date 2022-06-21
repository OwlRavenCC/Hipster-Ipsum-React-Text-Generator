import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FiChevronUp, FiChevronDown } from "react-icons/fi";

const FormGenerator = ({ setParagraphs }) => {
  const [paragraphInput, setparagraphInput] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setParagraphs(paragraphInput);
  };

  const increaseInput = (paragraphInput) => {
    if (paragraphInput >= 50) {
      return;
    } else {
      setparagraphInput(paragraphInput + 1);
    }
  };

  const reduceInput = (paragraphInput) => {
    if (paragraphInput <= 1) {
      return;
    } else {
      setparagraphInput(paragraphInput - 1);
    }
  };

  return (
    <form className="lorem-form" onSubmit={handleSubmit}>
      <div className="form-control">
        <label htmlFor="paragraph-number">Number of paragraphs: </label>
        <input
          type="number"
          min="1"
          max="50"
          step="1"
          id="paragraph-number"
          name="paragraph-number"
          value={paragraphInput}
          onChange={(e) => setparagraphInput(e.target.value)}
        />
        <span
          className="arrow up"
          onClick={() => increaseInput(paragraphInput)}
        >
          <FiChevronUp />
        </span>
        <span
          className="arrow down"
          onClick={() => reduceInput(paragraphInput)}
        >
          <FiChevronDown />
        </span>
      </div>

      <button className="generate-btn" type="submit">
        <span className="text">Generate</span>
        <span className="icon">
          <BsPencil />
        </span>
      </button>
    </form>
  );
};

export default FormGenerator;
