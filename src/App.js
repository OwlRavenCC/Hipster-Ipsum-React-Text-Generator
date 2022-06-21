import React, { useState, useEffect } from "react";
import "./index.css";

import FormGenerator from "./components/FormGenerator";
import Paragraphs from "./components/Paragraphs";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [paragraphs, setParagraphs] = useState(0);
  const [hipsumData, sethipsumData] = useState([]);

  const gethipsumData = async (paragraphs) => {
    setLoading(true);
    const req = await fetch(
      `http://hipsum.co/api/?type=hipster-centric&paras=${paragraphs}`
    );
    const res = await req.json();
    sethipsumData(res);
  };

  useEffect(() => {
    if (paragraphs !== 0) {
      gethipsumData(paragraphs);
    }
  }, [paragraphs]);

  return (
    <section className="main-app">
      <div className="title">
        <h1>Hipster Ipsum React-App Generator </h1>
        <div className="line"></div>
      </div>
      <FormGenerator
        loading={loading}
        setParagraphs={setParagraphs}
      ></FormGenerator>
      <Paragraphs hipsumData={hipsumData}></Paragraphs>
    </section>
  );
};

export default App;
