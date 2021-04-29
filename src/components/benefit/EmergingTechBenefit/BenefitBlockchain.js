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

export function BenefitBlockchain() {
  return (
    <Element >
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      < BenefitSection>
        <BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Secured</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature> With a decentralised database and strong encryption mechanisms, you can effectively prevent breaches and malicious activities.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
                <BenefitCardPlan>Transparent</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>As the data is transmitted to all parties of the ledger and grants immediate access to specific information, it ensures accountability and reliability.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
            <BenefitCard >
              <BenefitCardInfo>
               <BenefitCardPlan>Efficient</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature>Streamline each transaction in a secure manner. There is no need for third-party interference with a single digital ledger.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard>
          </BenefitContainer></ BenefitWrapper>
          <Marginer direction="vertical" margin="1rem" />
          < BenefitWrapper>
          <BenefitContainer>
          <BenefitCard >
              <BenefitCardInfo>   
                <BenefitCardPlan>Traceability</BenefitCardPlan>
                <BenefitCardFeatures>
                  <BenefitCardFeature> Enhance auditability by storing, validating, and tracking data. Since blockchain data is decentralised, it can be held accountable.</BenefitCardFeature>
                </BenefitCardFeatures>
              </BenefitCardInfo>
            </BenefitCard></BenefitContainer>
        </ BenefitWrapper>
      </BenefitSection>
    </IconContext.Provider></Element>
  );
}
