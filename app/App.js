import React from "react";
import ReactDOM from "react-dom";
import dotenv from 'dotenv';

import Container from "./container/Container";
import { ProvidePlayer } from "./context";

dotenv.config();

const App = () => {
  return (
    <ProvidePlayer>
      <Container />
    </ProvidePlayer>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
