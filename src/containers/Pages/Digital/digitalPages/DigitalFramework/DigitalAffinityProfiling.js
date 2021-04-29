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

export function DigitalAffinityProfiling(props) {
  return (
    <Element id = "DigitalAffinityProfiling">
    <MoreAboutContainer >
      <SectionTitle>Digital Affinity Profiling</SectionTitle>
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
        Leading businesses are moving beyond personalization of their messaging. Organizations may use this multifactorial analysis to perform micro-segmentation and create communication and marketing programmes that are specific to each consumer.This research will provide additional details about the customers' probability of churn, brand loyalty, NPS, lifetime value, and the explanations for channel preference or shifts in channel preference, based on the Consumer Data Journey. It can also aid the Next Best Action in fortifying your relationship with your client.
       </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      
      <AboutContainer>
            <AboutText>
            Anticipated Benefits:
            <Marginer direction="vertical" margin="2rem" />
         <ul>
             <li>Digital Assets have become more effective..</li>
             <li>a well-thought-out digital media strategy.</li>
            <li>An increase in conversion rates.</li>
             <li>Upselling and increased customer loyalty..</li>
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
      <H3> Dataset’s lock-in-step approach works with organizations to ensure smooth alignment between business goals and the tools to get you there.
        </H3>
    </MoreAboutContainer>
    </Element>
  );
  }