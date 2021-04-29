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

export function DigitalSolutionlink() {
  return (
    <Element name="DigitalSolutionlinkSection" id = "DigitalSolutionlink">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <LinkSection>
        <LinkWrapper>
          <LinkContainer>
          <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Formato</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Formato accelerates digital transformation by reducing costs and manual processes.</LinkCardFeature>
                </LinkCardFeatures>
                <Marginer direction="vertical" margin="3.5rem" />
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Creative Marketing</LinkCardPlan>
                <LinkCardFeatures>
                  <LinkCardFeature>Full-Service Creative Agency</LinkCardFeature>
                </LinkCardFeatures>
                <Marginer direction="vertical" margin="4rem" />
                <Button primary>Choose Plan</Button>
              </LinkCardInfo>
            </LinkCard>        
         </LinkContainer></ LinkWrapper>
            <Marginer direction="vertical" margin="1rem" />
            
      </LinkSection>
    </IconContext.Provider></Element>
  );
}