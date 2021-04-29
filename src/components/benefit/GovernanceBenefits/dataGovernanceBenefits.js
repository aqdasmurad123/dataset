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

export function dataGovernanceBenefits() {
  return (
    <Element >
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      < BenefitSection>
        <BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Well Understood</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature> Ensure that the company has a common language when it comes to data, so that it can be shared and used effectively.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
                <BenefitCardPlan>Data Is Trusted</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Ensure that your data is complete, true, reliable, and consistent, as well as delivered on time. Know where it came from and how it has changed.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
               <BenefitCardPlan>Mastered</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Ensure that your data has been matched, connected, and combined to provide a single source of truth through multiple systems.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
          </BenefitContainer></ BenefitWrapper>
          <Marginer direction="vertical" margin="1rem" />
          < BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Compliance</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Obtain self-service capabilities and use a more reliable, integrated, controlled, and trusted collection of data to make better business decisions.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard></BenefitContainer>
        </ BenefitWrapper>
      </BenefitSection>
    </IconContext.Provider></Element>
  );
}
