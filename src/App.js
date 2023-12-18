import React from "react";
import "./style.css";
import Rating from "./components/Rating";
import Search from "./components/Search";
import Carousel from "./components/Carousel";
import Table from "./components/Table";
import StopWatch from "./components/StopWatch";
import Folder from "./components/Folder";

export default function App() {
  return (
    <div>
      <Search />
      <Carousel />
      <Rating />
      <Table />
      <StopWatch />
      <Folder />
    </div>
  );
}
