import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../../../components/marginer";
import {  NavLink as Linktag} from 'react-router-dom';
const MoreAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  margin-top:1rem;
`;

const AboutContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 62.5rem;
  margin-top:1rem;

`;

const AboutText = styled.span`
  font-size: 1.25rem;
  color: #e2d5d5;
  font-weight: normal;
  line-height: 1.4;
  padding : 0.5rem;
  @media screen and (max-width: 480px) {
    font-size: 0.99rem;
    padding : 0.5rem;
  }
`;

const H3 = styled.h3`
  font-size: 1.75rem;
  line-height: 1.4;
  color: white;

  @media screen and (max-width: 480px) {
    font-size: 0.99rem;
  }
`;

export function DigitalGovernance(props) {
  return (
    <Element id = "DigitalGovernance">
    <MoreAboutContainer >
      <SectionTitle>Digital Governance</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Utilize Digital Affinity Profiling to increase the trust of your customers on an individual basis.
       </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Digital Solutions must be developed and implemented in a timely, agile, and scalable manner. Although this is important to help the company adapt to time-sensitive needs, continuous solution production can ultimately lead to sluggishness and decreased performance.
        </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      
      <AboutContainer>
            <AboutText>
            Between Digital Strategy and Digital Execution, the Digital Governance framework serves as a link. The structure adapts to each organization's specific environment and directs them through the four tenants of digital governance:
            <Marginer direction="vertical" margin="2rem" />
         <ul>
             <li>Customer/User Experience is a term that refers to a person's</li>
             <li>Security & Privacy of Data.</li>
            <li>Ownership and Management of Digital Assets.</li>
             <li>Innovation in the Digital Age.</li>
         </ul>
           </AboutText>
      </AboutContainer> 
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Dataset has been assisting companies in collecting, curating, and analysing data for over 2 years in order to help them obtain, attract, and entertain their customers.Learn how Data Governance can help accelerate the value of Customer Data Journeys  <Linktag style={{ color :"#807a7a"}} to = '/Governance'> here.</Linktag>
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="1rem" />
      <H3> Extract value and minimize Digital Pollution with Digital Governance.
          </H3>
    </MoreAboutContainer>
    </Element>
  );
}