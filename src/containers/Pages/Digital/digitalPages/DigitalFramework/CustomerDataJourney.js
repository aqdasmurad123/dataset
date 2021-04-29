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


export function CustomerDataJourney(props) {
  return (
    <Element id = "CustomerDataJourney">
    <MoreAboutContainer >
      <SectionTitle>Customer Data Journey</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Remove pain points from your customers' end-to-end experience and delight them.
       </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Customers' journeys are not linear, and neither is the data you collect along the way. It's important to review all data points as you plan for incredible personal encounters in order to avoid and resolve pain points along the way.</AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Journey analysis examines the routes and touchpoints that make up the Customer Journey, as well as how data flows and integrates between systems and applications. As a result, the data offers insight into what is really going on and identifies important ways to enhance data connections, resulting in a better Customer Experience.
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="1rem" />
      <AboutContainer>
            <AboutText>
            Journey analyses have helped countless organizations:
            <Marginer direction="vertical" margin="2rem" />
         <ul>
             <li> Customer churn should be kept to a minimum.</li>
             <li>Create a channel that is united.</li>
            <li>Optimize the marketing mix and channels.</li>
             <li>Customer-facing processes and facilities should be optimized.</li>
             <li>Increase conversion rates</li>
         </ul>
           </AboutText>
      </AboutContainer> 
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Dataset has been assisting companies in collecting, curating, and analysing data for over 2 years in order to help them obtain, attract, and entertain their customers.Learn how Data Governance can help accelerate the value of Customer Data Journeys  <Linktag style={{ color :"#807a7a"}} to = '/Governance'> here.</Linktag>
         </AboutText>
      </AboutContainer>
      <SectionTitle>Let us map out your journey to success.</SectionTitle>
    </MoreAboutContainer>
    </Element>
  );
}