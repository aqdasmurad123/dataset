import React from 'react';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons/lib';

import { Marginer } from "../../../components/marginer";
import {
  BenefitSection,
  BenefitWrapper,
  BenefitContainer,
  BenefitCard,
  BenefitCardInfo,
  BenefitCardPlan,
  BenefitCardFeatures,
  BenefitCardFeature
} from '../BenefitElement';

export function BenifitOcr() {
  return (
    <Element >
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      < BenefitSection>
        <BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Editability</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Digital documents can be quickly edited and re-formatted depending on the job at hand, ensuring robust traceability.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
                <BenefitCardPlan>Accessibility</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Digital records are easily available, allowing for fast and efficient information retrieval.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
               <BenefitCardPlan>Storage Optimization</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Improves the protection and safety of high-value documents while reducing physical storage space requirements.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
          </BenefitContainer></ BenefitWrapper>
          <Marginer direction="vertical" margin="1rem" />
          < BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Efficiency</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>It eliminates the need for manual transcription, saving both time and money.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard></BenefitContainer>
        </ BenefitWrapper>
      </BenefitSection>
    </IconContext.Provider></Element>
  );
}
