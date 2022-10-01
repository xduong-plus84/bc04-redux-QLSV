import React, { Component } from "react";
import QLSV_Form from "./QLSV_Form";
import QLSV_Table from "./QLSV_Table";

export default class Ex_QLSV extends Component {
  render() {
    return (
      <div className="container">
        <h1>Ex_QLSV</h1>
        <QLSV_Form />
        <QLSV_Table />
      </div>
    );
  }
}
