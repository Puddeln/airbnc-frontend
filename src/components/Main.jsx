import React, { useState, useEffect } from "react";
import axios from "axios";
import Filter from "../components/Filter";
import Grid from "./Grid";

function Main() {
  return (
    <>
      <Filter />
      <Grid />
    </>
  );
}

export default Main;
