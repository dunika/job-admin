import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

import { Flex } from 'client/modules/shared/components';
import { Checkbox } from 'client/modules/forms';

const Result = styled.div`
  margin-bottom: 20px;
  width: 500px;
`;

const Title = styled(Result)`
  font-weight: bold;
  font-size: 21px;
  margin-bottom: 5px;
`;

const Description = styled.p`
  white-space: pre;
  margin-top: 5px;
  margin-bottom: 10px;
  white-space: pre-line;
`;

const PostedUrl = styled.a`
  display: block;
  margin-bottom: 5px;  
`;

const PostedStatus = styled.span`
  display: inline-block;
  color: #FFF;
  font-weight: bold;
  padding: 5px 15px;
  margin-bottom: 5px;
  background-color: #003399;
  ${({ isPosted }) => isPosted && `
    background-color: green;
  `}
`;

const Date = styled.p`
  font-size: 12px;
`;

const Info = styled.p`
  margin: 0 10px 0 0 ;
  font-weight: bold;
  &:first-child {
    &::after {
      padding-left: 7px;
      content: "|";
    }
  }
`;

const CheckboxArea = styled.div`
  cursor: pointer;
  margin-right: 10px;
  ${({ isSelected }) => isSelected && `
    background: red;
  `}
`;

const Source = styled.a`
  margin-right: 10px;
`;

const Job = ({ action, showFullDescription, toggle, isSelected, job }) => (
  <Result>
    <Flex>
      {toggle && <CheckboxArea
        onClick={() => toggle(job._id)}
        isSelected={isSelected}
      >
        <Checkbox
          checked={!!isSelected}
        />
      </CheckboxArea>}
      <div>
        <Title to={action} shallow>
          {job.title}
        </Title>
        <Flex>
          {job.company && <Info>
            {job.company}
          </Info>}
          {job.source === 'cv-library' && <Info>
            Cv Library
          </Info>}
          <Info>
            {job.location}
          </Info>
        </Flex>
        {job.fullAddress && job.fullAddress !== job.location && (
          <p
            style={{ fontSize: 12 }}
          >
            <strong>
            Full address: {job.fullAddress}
            </strong>
          </p>
        )}
        <Description
          dangerouslySetInnerHTML={{
            __html: `${showFullDescription ? job.description : `${job.description.substr(0, 100)}...`}`,
          }}
        />
        {job.urls.source && <Source
          target="_blank"
          href={job.urls.source}
        >
          View Source
        </Source>}
        {job.urls.posted && <PostedStatus isPosted={job.urls.posted}>
          {job.urls.posted ? 'Posted' : 'Not posted'}
        </PostedStatus>}
        {job.urls.posted && <PostedUrl target="_blank" href={job.urls.posted}>
          {job.urls.posted}
        </PostedUrl>}
        <Date>
          {moment(job.date).isValid() ? moment(job.date).format('dddd, MMMM, Do') : job.date}
        </Date>
      </div>
    </Flex>
  </Result>
);

export default Job;
