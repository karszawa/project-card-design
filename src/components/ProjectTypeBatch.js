import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const tintColor = '#969696';

const Batch = styled.div`
  width: 50px;
  height: 18px;
  border: 1px solid ${ tintColor };
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
`;

const NormalBatch = Batch.extend`
  color: ${ tintColor };
  background-color: white;
`;

const CharityBatch = Batch.extend`
  color: white;
  background-color: ${ tintColor };
`;

export default class ProjectTypeBatch extends PureComponent {
  static propTypes = {
    projectType: PropTypes.oneOf([ 'normal', 'charity' ])
  };

  render() {
    switch(this.props.projectType) {
      case 'normal': return (
        <NormalBatch>
          購入型
        </NormalBatch>
      );

      case 'charity': return (
        <CharityBatch>
          寄附型
        </CharityBatch>
      );

      default: return null;
    }
  }
}
