import React from 'react';
import { Button } from '../../../../globalStyle';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons';
import { Marginer } from "../../../../components/marginer";
import {
  LinkSection,
  LinkWrapper,
  LinkContainer,
  LinkCard,
  LinkCardInfo,
  LinkCardPlan,
  LinkCardFeatures,
  LinkCardFeature
} from '../../linkElement';

export function DigitalFrameworklink() {
  return (
    <Element name="DigitalFrameworklinkSection" id = "DigitalFrameworklink">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <LinkSection>
        <LinkWrapper>
          <LinkContainer>
          <LinkCard to='/DigitalStrategyDevelopment'>
              <LinkCardInfo>   
                <LinkCardPlan>Digital Strategy</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Fuel your organizational strategy with Digital.</LinkCardFeature>
                </LinkCardFeatures>
                <Marginer direction="vertical" margin="6rem" />
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/CustomerDataJourney'>
              <LinkCardInfo>   
                <LinkCardPlan>Customer Data Journey</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Remove pain points from your customers' end-to-end experience and delight them.</LinkCardFeature>
                </LinkCardFeatures>
                <Marginer direction="vertical" margin="2rem" />
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard> </LinkContainer>
            <LinkContainer>
            <LinkCard to='/DigitalAffinityProfiling'>
              <LinkCardInfo>   
                <LinkCardPlan>Digital Affinity Profiling</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Utilize Digital Affinity Profiling to increase the trust of your customers on an individual basis.</LinkCardFeature>
                </LinkCardFeatures>
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/DigitalGovernance'>
              <LinkCardInfo>   
                <LinkCardPlan>Digital Governance</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Digital Assets are living solutions that necessitate Digital Governance to deliver sustainable outcomes..</LinkCardFeature>
                </LinkCardFeatures>
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
         </LinkContainer></ LinkWrapper>
            <Marginer direction="vertical" margin="1rem" />
            
      </LinkSection>
    </IconContext.Provider></Element>
  );
}
