import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../../../components/marginer";
import {DigitalSolutionlink  } from "../../../../../components/linkCard/digitallink/digitalSolutionlink/digitalSolutionlink";

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


export function DigitalSolution(props) {
  return (
    <Element id = "DigitalSolution">
    <MoreAboutContainer >
      <SectionTitle>Digital Solution</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Convert the use cases into digital solutions that can last.
       </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Dataset is a one-stop shop for all of your digital needs. Allow us to assist you in leveraging the power of data, artificial intelligence, and cutting-edge technology. Improve your business results by automating processes, fueling digital growth, and creating beautiful digital experiences.
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="1rem" />
      
      <AboutContainer>    
          
            <AboutText>
            <H3>Our Approach</H3>
            <Marginer direction="vertical" margin="1rem" />
            We offer the best mix of skills, resources, and technologies to meet the current and future digital transformation requirements. We provide the following services:
            <Marginer direction="vertical" margin="2rem" />
         <ul>
             <li>practical experience in delivering large-scale digital transformation initiatives.</li>
             <li>a team of business and IT experts who provide technical solutions to help companies achieve their goals.</li>
            <li>From strategy to execution and maintenance, we provide end-to-end digital transformation services..</li>
             
         </ul>
           </AboutText>
      </AboutContainer> 
      <Marginer direction="vertical" margin="2rem" />
      
      <H3> Featured Solutions:</H3>
      <Marginer direction="vertical" margin="2rem" />
      <DigitalSolutionlink/>
    </MoreAboutContainer>
    </Element>
  );
}