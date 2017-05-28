import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  height: 18px;
  position: relative;
  background-color: #ccc;
  border-radius: 4px;
`;

const RedBar = styled.div`
  position: absolute;
  height: 100%;
  width: ${ props => props.proportion }%;
  border-radius: 4px;
  background-color: #e00314;
`;

const Number = styled.div`
  position: absolute;
  left: 10px;
  font-size: 12px;
  font-weight: bold;
  font-family: Arial, sans-serif;
  color: white;
  line-height: 18px;
`;

export default class AmountGauge extends PureComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    goalPrice: PropTypes.number.isRequired
  };

  render() {
    const proportion = 100.0 * this.props.amount / this.props.goalPrice

    return (
      <Container>
        <RedBar proportion={ Math.min(proportion, 100) } />
        <Number>{ Math.round(proportion) }%</Number>
      </Container>
    );
  }
}
