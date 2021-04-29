import React from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";
import { Element } from "react-scroll";
import {  Marginer} from "../../../components/marginer";
import {SuccessStorylink} from "../../../components/linkCard/SuccessStories/successstory"
const MoreAboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1em;
  margin-top:1rem;
`;





export function SuccessStories(props) {
  return (
    <Element id = "SuccessStories">
    <MoreAboutContainer >
      <SectionTitle>More About Our Success Story</SectionTitle>
      <Marginer direction="vertical" margin="2rem" />
      <SuccessStorylink/>
      
    </MoreAboutContainer>

    </Element>
  );
}