import React, { Component } from "react";
import { Col, Container, Row , Input } from "reactstrap";


import {fetchJobs} from '../../../store/actions/actions'
import {connect} from 'react-redux'

class Jobone extends Component {
  
  componentDidMount=()=>{
    this.props.fetchJobs()
  }
  render() {
    var index=localStorage.getItem("index")
    console.log(this.props.jobs)
    return (
      <div>
        <Container className="container">
          <Row>
            <Col>
              <h1 className="job">{this.props.jobs[index].job_title}</h1>
              <h1 className="job">{this.props.jobs[index].job_jobPrice}</h1>
              <h1 className="job">{this.props.jobs[index].city}</h1>
              <p className="job">
              {this.props.jobs[index].job_description}
              </p>
            </Col>
            {/* <Row> */}
              <Col>
                <h4 className="job text-left">Responsibilities:</h4>
              <p>
              {this.props.jobs[index].requirements}
              </p>
              </Col>
              <Col>
                <h4 className="job">What's on offer?</h4>
                <p>
              {this.props.jobs[index].offer}
              </p>
              </Col>
              <Col>
                <h4  className="job">Experience, Skills & Qualifications:</h4>
                <p>
              {this.props.jobs[index].experience}
              </p>
                <p>
                  If you are looking for your next career step within a global
                  FTSE 100 company, and this sounds like you, please apply{" "}
                  <br /> for further information.
                </p>
              </Col>
              
            {/* </Row> */}
          {/* </Row> */}
        {/* </Container>
        <Container> */}
            {/* <Row> */}
                <Col className="text-center">
                <h3 >Apply for job</h3>
                <table class="table">
  <thead>
    
  </thead>
  <tbody>
    <tr>
   
      
      <td>First Name</td>
      <td>Last Name</td>
    </tr>
    <tr>
      
      <td>Email</td>
      <td>Phone</td>
    </tr>
       <tr>
      <td placeholder="type your message" style={{height:"40px"}}>
        type your message
        </td>
      </tr>

    
   
  </tbody>
</table>

<Input type="file"/>
              </Col>
            </Row>
        </Container>
       
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    jobs: state.posts.jobs,
    userid: state.userid,
  };
};  
export default connect(mapStateToProps, {
  fetchJobs,
  
})(Jobone);
