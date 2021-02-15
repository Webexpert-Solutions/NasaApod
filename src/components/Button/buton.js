import React from "react";
import "./buton.css";
import { Link } from "react-router-dom";

export default function Buton() {
  return (
    <div>
      <Link to='/apod'>
        <button>See into the Stars!</button>
      </Link>
    </div>
  );
}
