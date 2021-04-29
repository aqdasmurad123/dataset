import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../../components/marginer";
import {DigitalFrameworklink} from "../../../../components/linkCard/digitallink/DigitalFrameworklink/DigitalFrameworklink";
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


export function DigitalFramework(props) {
  return (
    <Element id = "DigitalFramework">
    <MoreAboutContainer >
      <SectionTitle>Digital Framework</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Delight your customersand lead them with your Digital Framework.
       </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        It's important to put your customers at the forefront of your digital transformation. This is based on the assumption that all company functions, directly or indirectly, contribute to the distribution of goods and services to their intended customers.This does not mean that Digital is solely outwardly focused.It implies that in order to truly create frictionless interactions (internal and external), you must completely comprehend the systems' and processes' entire data trail.
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
        Dataset has created key accelerators to assist companies in focusing on friction points, optimising Use Cases, and articulating explicitly what resources, technology, and organizational changes are required for an effective and differentiating digital transformation.
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <SectionTitle>Featured Solutions</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <DigitalFrameworklink/>
      <Marginer direction="vertical" margin="2rem" />
    </MoreAboutContainer>
    </Element>
  );
}