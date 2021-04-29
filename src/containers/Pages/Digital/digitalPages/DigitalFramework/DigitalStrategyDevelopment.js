import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../../../components/marginer";
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


export function DigitalStrategyDevelopment(props) {
  return (
    <Element id = "DigitalStrategyDevelopment">
    <MoreAboutContainer >
      <SectionTitle>Digital Strategy Development</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Fuel your organizational strategy with Digital.
       </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Successful companies see their digital strategies as a tool to help them achieve their overall business goals. Examining the organization's approach, finding areas that can benefit from digitalization, and then creating a roadmap are all examples of this.
       </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Although the definition appears to be straightforward. Many organisations, however, face challenges as a result of conflicting interests among decision-makers and overall organisational objectives. Adastra's experts will help you sort through these competing goals and develop a coherent Digital Transformation strategy.
        </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="1rem" />
      <AboutContainer>
            <AboutText>
            The four elements mentioned below are crucial to a successful digital strategy:
            <Marginer direction="vertical" margin="2rem" />
         <ul>
             <li>Tools and technology selection/implementation.</li>
             <li>Seamless data integration.</li>
            <li>Organizational Change Management.</li>
             <li>Value realization.</li>
         </ul>
           </AboutText>
      </AboutContainer> 
      <Marginer direction="vertical" margin="2rem" />
      
      <H3> Dataset’s lock-in-step approach works with organizations to ensure smooth alignment between business goals and the tools to get you there.
        </H3>
    </MoreAboutContainer>
    </Element>
  );
}