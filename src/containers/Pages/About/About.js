import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../components/marginer";
import BackgroundImg from "../../../assets/pictures/Client.PNG";
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

const MiddleContainer = styled.div`
  width: 39%;
  height : 25rem;
  padding-top:4.5rem;
  padding-bottom:4.5rem;
  align-content: center;
  background-image: url(${BackgroundImg});
  position: relative;
  @media screen and (max-width: 480px) {
   
    top:0rem;
    height:20rem;
    background-size:cover;
    background-position:center;
  }
`;
export function About(props) {
  return (
    <Element id = "About">
    <MoreAboutContainer >
      <SectionTitle>More   About   DATASET</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        
        We are an award-winning consultancy that recruits for contract and permanent positions in the Germany and Pakistan in the fields of technology, digital marketing, and design.
           
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        
        We are experts in assisting with Digital Transformation, Marketing, IoT, AI, and Data, as well as offering additional strategies for remote hiring and increasing workplace diversity.
          
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
      
        Dataset will assist you if you need to recruit digital talent or are searching for the next phase in your digital career.
          
      </AboutText>
      </AboutContainer>
      <AboutContainer>
          <SectionTitle>Our clients</SectionTitle>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      < MiddleContainer>
      
      </MiddleContainer>
      <Marginer direction="vertical" margin="2rem" />
      <SectionTitle>Our Values</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        <H3>
        Energy, Quality, Innovation, and Relationships are values we truly believe.
       </H3>     
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <AboutContainer>
      <AboutText>
        
        We are working to improve the recruiting process for both our clients and applicants using our digital skills, open collaboration, and creative tools.
          
      </AboutText>
      </AboutContainer>
      <Marginer direction="vertical" margin="2rem" />
      <SectionTitle>Our Mission</SectionTitle>
      <Marginer direction="vertical" margin="1rem" />
      <AboutContainer>
            <AboutText>
         <ul>
             <li> Change the way you hire.</li>
             <li>Assist our clients in expanding their businesses.</li>
            <li> Our candidates' futures will be furthered.</li>
             <li>Activate and remunerate our stakeholders</li>
             
         </ul>
            </AboutText>
      </AboutContainer>    
     

    </MoreAboutContainer>
    </Element>
  );
}