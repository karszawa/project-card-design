import React, { PureComponent } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import ProjectTypeBatch from './ProjectTypeBatch';
import ProjectCondition from './ProjectCondition';
import AmountGauge from './AmountGauge';

import '../App.css';

const ProjectCardWrapper = styled.article`
  width: 226px;
  height: 393px;
  border-radius: 4px;
  background-color: white;
  box-shadow: 0 2px 4px 0 rgba(203, 203, 203, 0.5);
`;

const ProjectCardMask = styled.a.attrs({
  href: props => props.href
})`
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

const ProjectCardImage = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})`
  width: 100%;
  height: auto;
  border: none;
`;

const ProjectBody = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
`;

const BatchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ProjectTitle = styled.h1`
  color: #393939;
  font-weight: bold;
  font-size: 13px;
  text-align: left;
  overflow: hidden;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const UserThumbnailWrapper = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UserThumbnail = styled.img.attrs({
  src: props => props.src,
  alt: props => props.alt
})`
  width: 24px;
  height: 24px;
  border-radius: 2px;
`

const UserName = styled.span`
  font-size: 12px;
  color: #444;
  height: 32px;
  width: 160px;
  line-height: 16px;
  display: inline-block;
  text-align: left;
`;


export default class ProjectCard extends PureComponent {
  static propTypes = {
    title: PropTypes.string.isRequired,
    thumb: PropTypes.string.isRequired,
    projectUrl: PropTypes.string.isRequired,
    projectType: PropTypes.string.isRequired,
    goalPrice: PropTypes.number.isRequired,
    amount: PropTypes.number.isRequired,
    leftTime: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      thumb: PropTypes.string.isRequired
    })
  };

  render() {
    return (
      <ProjectCardWrapper>
        <ProjectCardMask href={ this.props.projectUrl }>
          <ProjectCardImage src={ this.props.thumb } alt={ this.props.title } />

          <ProjectBody>
            <BatchWrapper className="u_mb-10">
              <ProjectTypeBatch projectType={ this.props.projectType }/>
            </BatchWrapper>

            <ProjectTitle className="u_mb-10">
              { this.props.title }
            </ProjectTitle>

            <UserWrapper className="u_mb-10">
              <UserThumbnailWrapper>
                <UserThumbnail src={ this.props.user.thumb } alt={ this.props.user.name }/>
              </UserThumbnailWrapper>

              <UserName>
                { this.props.user.name }
              </UserName>
            </UserWrapper>

            <ProjectCondition className="u_mb-10" amount={ this.props.amount } leftTime={ this.props.leftTime }>
            </ProjectCondition>

            <AmountGauge amount={ this.props.amount } goalPrice={ this.props.goalPrice }/>
          </ProjectBody>
        </ProjectCardMask>
      </ProjectCardWrapper>
    );
  }
}
