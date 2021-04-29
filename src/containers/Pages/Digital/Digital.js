import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../components/marginer";
import { Digitallink} from "../../../components/linkCard/digitallink/digitallink"
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

export function  Digital(props) {
  return (
    <Element id = "Digital">
    <MoreAboutContainer >
      <SectionTitle>More About Digital & Emerging Technologies</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Digital Transformation is the ability to leverage tools and technology, powered by data, to deliver great business and customer experiences through frictionless processes and interactions.
       </H3>     
      </AboutText>
      </AboutContainer>
     
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
         <AboutText>
             <Marginer direction="vertical" margin="2rem" />
             At Dataset, we believe that organizations strive to delight their customers.  With this in mind, our approach to Digital begins with an outside – in lens.  Through this approach, we look at how an organization deals with its customers and offers its products or services. This could also include partners, resellers, etc., but our focus here is the top-line growth. </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
     
      
      <AboutContainer>
        <AboutText>  
          <Marginer direction="vertical" margin="1rem" />
          Digital is not a project; it is a continuous organizational program. There is no right or wrong answer as to where an organization is on its Digital Maturity curve. Technology and Use Cases evolve constantly; you just need to get started. A Digital Maturity Assessment is a good place to start to identify your highest priority Use Cases. </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <Marginer direction="vertical" margin="1rem" />
          Solving for multiple Use Cases will requires careful integration and well thought through data flows.  {"  "}  <Linktag style={{ color :"#807a7a"}} to = '/Governance'>  Data Governance </Linktag> {" "}   too, plays an integral part in successful Digital transformations. At Dataset, Data is our DNA.  Let our experts guide you through your Digital Transformation.</AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3> Discover Dataset's Digital Capabilities </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      < Digitallink/>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Become more agile, responsive, and innovative through Digital Transformation</H3>     
      </AboutText>
      </AboutContainer>
     
    </MoreAboutContainer>

    </Element>
  );
}