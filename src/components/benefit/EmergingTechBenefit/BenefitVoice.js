import React from 'react';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons/lib';

import { Marginer } from "../../marginer";
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

export function BenefitVoice() {
  return (
    <Element >
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      < BenefitSection>
        <BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Reliable</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Even minor discrepancies in speech are recognised by voice biometrics, so you can always check your client's identity if their speech changes.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
                <BenefitCardPlan>Vocal Passwords</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Vocal passwords transcend conventional passwords by comparing predefined sentences with a stored voice sample from the client.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
               <BenefitCardPlan>Real-time Verification</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Identity testing is carried out in real-time with continuous-voice-analysis, resulting in less hassle and a more natural conversation.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
          </BenefitContainer></ BenefitWrapper>
          <Marginer direction="vertical" margin="1rem" />
          < BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Fraud Detection</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Make it easy to detect fraud. For identifying troublesome clients and detecting fraudulent conduct, voice recognition is a viable option.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard></BenefitContainer>
        </ BenefitWrapper>
      </BenefitSection>
    </IconContext.Provider></Element>
  );
}
