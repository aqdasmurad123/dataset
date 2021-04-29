import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../../../components/marginer";
import {BenefitBlockchain} from "../../../../../components/benefit/EmergingTechBenefit/BenefitBlockchain";
import { BenifitOcr } from "../../../../../components/benefit/EmergingTechBenefit/BenefitOcr";
import { BenefitVoice } from "../../../../../components/benefit/EmergingTechBenefit/BenefitVoice";
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


export function EmergingTechnologies(props) {
  return (
    <Element id = "EmergingTechnologies">
    <MoreAboutContainer >
      <SectionTitle>Emerging  Technologies</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        It will pave the way for innovation within your industry.
       </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
          <H3>Blockchain</H3>
          <Marginer direction="vertical" margin="1rem" />
         <AboutText>
         Dataset creates blockchain applications that are capable of resolving security problems in your database. The system relies on a decentralised database made up of a series of "blocks" that are cryptographically connected using a hash value.
         </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <BenefitBlockchain/>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>  
          <H3>OCR</H3>
          <Marginer direction="vertical" margin="1rem" />
          Optical Character Recognition (OCR), the method of translating scanned print documents or images with text into digital text formats, can significantly enhance data entry and extraction from paper documents.
          </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <BenifitOcr/>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
        <AboutText>
          <H3>Voice Biometrics</H3>
          <Marginer direction="vertical" margin="1rem" />
          Make it easier for your clients by verifying their identity over the phone and removing the need for them to recall passwords and access codes. It only takes their speech, which is as special as a fingerprint, to accomplish this.
           </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <BenefitVoice/>
      <Marginer direction="vertical" margin="2rem" />
    
    </MoreAboutContainer>

    </Element>
  );
}