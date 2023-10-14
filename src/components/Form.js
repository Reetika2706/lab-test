import React, { useState, Component } from "react";
import Reciept from "./Reciept.js";
import "./globalcss.css";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      sender: "0xF1Ee89d8D4b8ef9d4615343E625521D83E773b72",
      reciever: "0x9F15C73C418760528d3D02597C3fD0fb4664a5EFS",
      amount: "",
      reciept: null,
    };
  }

  handleInputChange = (e) => {
    this.setState({ amount: e?.target?.value });
  };

  handleSendAmount = (event) => {
    event.preventDefault();
    const reciept = {
      blockNumber: 12345, // Static block number
      sender: "0xF1Ee89d8D4b8ef9d4615343E625521D83E773b72",
      reciever: "0x9F15C73C418760528d3D02597C3fD0fb4664a5EFS",
      amount: this.state.amount,
      transactionHash:'0x2zjRDqDXXM0XTH946Q92dUcJMUdixJYnYyOcHYfe0idldcQX0kVNgSA6uj00fJTo',
      blockHash:' 0xm57fAx9zibIhJzvuBmESoMcDTRGEorXMqpGhZmI2oYkmQo8XUymMiVjPQI4OwpQY',
      blockNumber:10,
      gasUsed:2100
    };
    this.setState({ reciept: { ...reciept } });
  };
  render() {
    return (
      <div class="transfercss">
        <h1>Transfer</h1>
        <p>{`From: ${this.state.sender}`}</p>
        <p>{`TO: ${this.state.reciever}`}</p>
        <form onSubmit={this.handleSendAmount}>
          <input
            type='number'
            value={this.amount}
            onChange={this.handleInputChange}
            required
          />
          <button type='submit'>Send</button>
        </form>
        {this.state.reciept ? <Reciept reciept={this.state.reciept} /> : ""}
      </div>
    );
  }
}

export default Form;
