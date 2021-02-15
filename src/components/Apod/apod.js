import React, { useState, useEffect } from "react";
import "./apod.css";

export default function Apod() {
  const [apod, setapod] = useState({});

  useEffect(() => {
    getNasapod();
  }, []);

  const getNasapod = async () => {
    const response = await fetch(
      "https://api.nasa.gov/planetary/apod?api_key=dXTOni9hbfDupYYJxTxW7eGEJ9pDgoQvplYBORVd"
    );

    const data = await response.json();
    setapod(data);
    console.log(data);
  };

  return (
    <div className='boxy'>
      <div className='poza'>
        {apod.media_type === "image" ? (
          <img id='pic' src={apod.url} alt={apod.title} />
        ) : (
          <iframe
            src={apod.url}
            title={apod.title}
            width='900px'
            height='800px'
            allowFullScreen
          />
        )}
      </div>
      <div className='apod'>
        <h1>{apod.title}</h1>
        <h2>{apod.date}</h2>
        <h3>{apod.copyright}</h3>
        <p>{apod.explanation}</p>
      </div>
    </div>
  );
}
