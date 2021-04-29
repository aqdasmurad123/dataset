import React from 'react';
import { Button } from '../../../globalStyle';
import {  Element } from "react-scroll";
import { IconContext } from 'react-icons';
import { Marginer } from "../../../components/marginer";

import {
  LinkSection,
  LinkWrapper,
  LinkContainer,
  LinkCard,
  LinkCardInfo,
  LinkCardPlan,
  LinkCardFeatures,
  LinkCardFeature
} from '../linkElement';

export function Digitallink() {
  return (
    <Element name="DigitallinkSection" id = "Digitallink">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <LinkSection>
        <LinkWrapper>
          <LinkContainer>
          <LinkCard to='/DigitalFramework'>
              <LinkCardInfo>   
                <LinkCardPlan>Digital Framework</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Delight your customersand lead them with your Digital Framework.</LinkCardFeature>
                </LinkCardFeatures>
                <Marginer direction="vertical" margin="2rem" />
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/DigitalSolution'>
              <LinkCardInfo>   
                <LinkCardPlan>Digital Solutions</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Convert the use cases into digital solutions that can last.</LinkCardFeature>
                </LinkCardFeatures>
                <Marginer direction="vertical" margin="2rem" />
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/EmergingTechnologies'>
              <LinkCardInfo>   
                <LinkCardPlan>Emerging Technologies</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>It will pave the way for innovation within your industry.</LinkCardFeature>
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
