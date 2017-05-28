import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.dl`
  display: flex;
  flex-direction: column;
  margin: 0;
`;

const Title = styled.dt`
  color: #666;
  font-size: 12px;
  text-align: left;
`;

const Value = styled.dt`
  color: #444;
  font-size: 18px;;
  font-weight: bold;
  text-align: left;
  font-family: Helvetica, Arial, sans-serif;
`;

export default class ProjectCondition extends PureComponent {
  static propTypes = {
    amount: PropTypes.number.isRequired,
    leftTime: PropTypes.string.isRequired
  };

  render() {
    return (
      <Container className={ this.props.className }>
        <Item>
          <Title>支援総額</Title>
          <Value>{ this.props.amount.toLocaleString() }円</Value>
        </Item>

        <Item>
          <Title>残り</Title>
          <Value>{ this.props.leftTime }</Value>
        </Item>
      </Container>
    );
  }
}
