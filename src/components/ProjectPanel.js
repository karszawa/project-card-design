import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Immutable from 'immutable';

import ProjectCard from './ProjectCard';

const ProjectLine = styled.div`
  display: flex;
  justify-content: ${ props => props.hasFreeSpace ? 'space-between' : 'space-around' };
  width: ${ props => props.width || 1000 }px;
  margin-bottom: ${ props => props.isLastLine ? 0 : 40 }px;
`;

export default class ProjectPanel extends PureComponent {
  static propTypes = {
    rows: PropTypes.number
  };

  render() {
    const rows = this.props.rows || 4;
    const columns = Math.ceil(this.props.projects.length / rows);
    const projectLines = Immutable.Range(0, columns).toArray().map((i) => {
      const projects = Immutable.Range(0, rows).toArray().map(Number.call, Number).map((j) => {
        return i * rows + j < this.props.projects.length ? <ProjectCard key={ j } { ... this.props.projects[i * rows + j] } /> : null;
      });

      return (
        <ProjectLine key={ i } isLastLine={ i + 1 === columns } hasFreeSpace={ rows === Math.min(this.props.projects.length - i * rows, rows) }>
          { projects }
        </ProjectLine>
      );
    });

    return <div>{ projectLines }</div>;
  }
}
