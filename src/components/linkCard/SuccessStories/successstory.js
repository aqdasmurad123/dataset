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
} from '../linkElement';

export function SuccessStorylink() {
  return (
    <Element name="SuccessStoryLinkSection" id = "SuccessStorylink">
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <LinkSection>
        <LinkWrapper>
          <LinkContainer>
          <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Success Story: Royalty Forecasting and Advanced Pay Calculations</LinkCardPlan>
                
                <Marginer direction="vertical" margin="4rem" />
                <Button primary>For More...</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/'>
              <LinkCardInfo>   
                <LinkCardPlan>Success Story: Payments Monitoring and Reporting for Transportation Client</LinkCardPlan>
                
                <Marginer direction="vertical" margin="2rem" />
                <Button primary>For More...</Button>
              </LinkCardInfo>
            </LinkCard>
            <LinkCard to='/Blog'>
              <LinkCardInfo>   
                <LinkCardPlan>Success Story: Sybase to SQL Server Migration</LinkCardPlan>
                <Marginer direction="vertical" margin="7.5rem" />
                <Button primary>For More...</Button>
              </LinkCardInfo>
            </LinkCard>
         </LinkContainer></ LinkWrapper>
            <Marginer direction="vertical" margin="1rem" />
            
      </LinkSection>
    </IconContext.Provider></Element>
  );
}
