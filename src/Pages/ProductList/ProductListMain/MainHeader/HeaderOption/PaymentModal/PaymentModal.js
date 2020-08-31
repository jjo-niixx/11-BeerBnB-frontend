import React, { Component } from "react";
import styled from "styled-components";

export default class PaymentModal extends Component {
  render() {
    return <PaymentModalContainer />;
  }
}

const PaymentModalContainer = styled.div`
  position: absolute;
`;
