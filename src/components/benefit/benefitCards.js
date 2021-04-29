import React from 'react';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons/lib';

import { Marginer } from "../../components/marginer";
import {
  BenefitSection,
  BenefitWrapper,
  BenefitContainer,
  BenefitCard,
  BenefitCardInfo,
  BenefitCardPlan,
  BenefitCardFeatures,
  BenefitCardFeature
} from './BenefitElement';

export function BenifitCard() {
  return (
    <Element >
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      < BenefitSection>
        <BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Fast Data Discovery</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature> AI solutions allow the efficient discovery of highly important and relevant information through fast and thorough data mining and analysis.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
                <BenefitCardPlan>Accurate Insights</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>AI solutions have the ability to process vast quantities of data and produce accurate and robust insights, allowing you to truly garner the value in your data.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
               <BenefitCardPlan>GPU Enabled</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>With Cloud-powered GPU's, the problem of running AI algorithms is a thing of the past. No need to purchase expensive hardware to create powerful models.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
          </BenefitContainer></ BenefitWrapper>
          <Marginer direction="vertical" margin="1rem" />
          < BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Fast Data Discovery</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature> AI solutions allow the efficient discovery of highly important and relevant information through fast and thorough data mining and analysis.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard></BenefitContainer>
        </ BenefitWrapper>
      </BenefitSection>
    </IconContext.Provider></Element>
  );
}
