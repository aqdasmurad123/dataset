import React, { Component,useEffect } from "react";
import "./App.css";
import styled from "styled-components";
import { Homepage } from "./containers/homepage";
import { Cloud } from "./containers/Pages/Cloud";
import { Footer } from "./components/Footer/Footer";
import { Marginer } from "./components/marginer";
import { Navbar } from "./components/navbar";
import { TopSection } from "./containers/homepage/topSection";
import { BrowserRouter as Router , Switch,Route,withRouter, useLocation} from 'react-router-dom'
import { DataEngineering } from "./containers/Pages/DataEngineering";
import AI  from "./containers/Pages/ArtificalIntelligence/AI";
import { Governance } from "./containers/Pages/Governance/Governance";
import  OurJob  from "./containers/Pages/Job/job";
import { Digital } from "./containers/Pages/Digital/Digital";
import {SuccessStories} from "./containers/Pages/SuccessStory/SuccessStories";
import  Blog from "./containers/Pages/Blog/Blog";
import store from './store/store';
import jonone from "./containers/Pages/Job/Jobone"
import {Provider, provider} from 'react-redux';
import { About } from "./containers/Pages/About/About";
import { DigitalFramework } from "./containers/Pages/Digital/digitalPages/DigitalFramework";
import { CustomerDataJourney } from "./containers/Pages/Digital/digitalPages/DigitalFramework/CustomerDataJourney";
import { DigitalStrategyDevelopment }  from "./containers/Pages/Digital/digitalPages/DigitalFramework/DigitalStrategyDevelopment";
import { DigitalAffinityProfiling } from "./containers/Pages/Digital/digitalPages/DigitalFramework/DigitalAffinityProfiling";
import { DigitalGovernance } from "./containers/Pages/Digital/digitalPages/DigitalFramework/DigitalGovernance";
import { EmergingTechnologies } from "./containers/Pages/Digital/digitalPages/EmergingTechnologies/EmergingTechnologies";
import { DigitalSolution } from "./containers/Pages/Digital/digitalPages/DigitalSolutions/DigitalSolution";

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: black;
`;
function _ScrollToTop(props) {
  const { pathname } = useLocation();
        useEffect(() => {
         window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
        });
  }, [pathname]);
  return props.children
}
const ScrollToTop = withRouter(_ScrollToTop)
export default class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
  <Router>
    <PageContainer>
      <ScrollToTop>
      <Navbar/>
      <TopSection />
      <Switch>
         <Route path="/" exact component= {Homepage} />  
         <Route path='/About' exact component= {About} />
         <Route path='/cloud' exact component= {Cloud} /> 
         <Route path='/DataEngineering' exact component= {DataEngineering} />  
         <Route path='/ArtificialIntelligence' exact component= {AI} /> 
         <Route path="/jonone" component={jonone}/>
         <Route path='/Governance' exact component= { Governance} />
         <Route path='/Job' exact component= {OurJob} />
         <Route path='/Digital' exact component= {Digital} />
         <Route path='/SuccessStories' exact component= {SuccessStories} />
         <Route path='/Blog' exact component= {Blog} />
         <Route path='/DigitalFramework' exact component= {DigitalFramework} />
         <Route path='/CustomerDataJourney' exact component= {CustomerDataJourney} /> 
         <Route path='/DigitalStrategyDevelopment' exact component= {DigitalStrategyDevelopment} /> 
         <Route path='/DigitalAffinityProfiling' exact component= { DigitalAffinityProfiling } />
         <Route path='/DigitalGovernance' exact component= { DigitalGovernance} />
         <Route path='/EmergingTechnologies' exact component= { EmergingTechnologies} />
         <Route path='/DigitalSolution' exact component= { DigitalSolution} />
      </Switch>
    <Marginer direction="vertical" margin="4rem" />
      <Footer/>
      </ScrollToTop>
    </PageContainer>
    </Router>
    </Provider>
  );
}
}
