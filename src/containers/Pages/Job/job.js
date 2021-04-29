import React, { Component } from "react";
import { Button, Card, CardImg, Col, Container, Input, Row , Form, Label } from "reactstrap";




import {Link} from "react-router-dom"
import {fetchJobs,addNewCv} from '../../../store/actions/actions'
import {connect} from 'react-redux'
 class Job extends Component {
   constructor(props) {
     super(props);
     this.state={
       role:"",
       name:'',
       email:'',
       desireRole:'',
       salary:'',
       cvFile:''

     }
   }
   
  handlechange = (e, value) => {
   
    this.setState({
      [e.target.name]: e.target.value,
    });
   
  };
  handleFile = (e) => {
  
    this.setState({
      cvFile: e.target.files[0],
    });
   
  };
  handleSubmit = async (e) =>  {
  
    e.preventDefault();
    await this.props.addNewCv({
      
      role:this.state.role,
       name:this.state.name,
       email:this.state.email,
       desireRole:this.state.desireRole,
       salary:this.state.salary,
       cvFile:this.state.cvFile
    });
    this.setState({
      
      role:"",
       name:'',
       email:'',
       desireRole:'',
       salary:'',
       cvFile:''
    })
  };
   
  componentDidMount=()=>{
    this.props.fetchJobs()
  }
  setIndex=(index)=>{
    localStorage.setItem("index",index)
  }
  render() {
    return (
      <div>
        
        <hr />
        <br />
        <br />
        <h1 className="text-center">Featured Jobs</h1>
        {this.props.jobs.map((item,index)=>{
          
            return(
              <Container>
        
        
         
           
            
              <Row>
           
            <Col lg="6" className="text-right">
              <Card>
                <CardImg style={{height:'200px',width:'200px',position:'relative'}} src={item.job_image} />
              </Card>
            </Col>
            <Col  lg="6">
              <h5>{item.job_title}</h5>
              <h5>{item.job_jobPrice}</h5>
              <p>
               {item.job_description}
              </p>
             <Link to="/job1" onClick={this.setIndex(index)}> <Button>Find out more</Button></Link>
            </Col>
            
           
          </Row>
         
           </Container>
           )
          })}
        <Container>
          <Row className="text-center">
          <Col lg="5" className="text-center">
            <h1>Looking for New job ?</h1>
            <p>
              If you don't see a job here that suits your experience, send us a
              copy of your CV.{" "}
            </p>
            <p>
              Please note: We have seen a big increase in candidate applications
              due to the impact of covid19 on the global jobs market, so
              unfortunately we're time-limited to only contacting candidates who
              we can match to current/open job roles.
            </p>
            <p>
              If we can't match you to anything suitable straight away and you
              are happy for us to do so, we'll add your details to our system
              and update you as and when new roles come in. Just tick the 'Keep
              me updated with new jobs' box below.
            </p>
           
          {/* </Row>
          <br/>
          <Row className="text-center"> */}
              <h1>
                  Send Your CV
              </h1>
              
                  <Form onSubmit={this.handleSubmit}>
                  <Input  type="text" name="name" onChange={this.handlechange} placeholder="Name"  />
                  <br/>
                  <Input typ="email" name="email" onChange={this.handlechange} placeholder="email" />
                  <br/>
                  <Input type="text" name="desireRole" onChange={this.handlechange} placeholder="Desire Role"/>
                  <br/>
                  <Input className="mb-3" type="text" name="salary" onChange={this.handlechange}  placeholder="Desire Sallry"/>
                  
                  
                  <br/>
                    <Input className="text-left " name="role" onChange={this.handlechange} type="select">
                      <option value="" disbled selected>Select Role</option>
                    <option value="permanent role">Permanent Role</option>
                    <option value="contract role">Contract Role</option>
                    </Input>
                  
               
                    
                    <Input className="text-center" type="file" name="cvFile" onChange={this.handleFile} id="fileToUpload" />
                  
                   <Button>Submitt</Button>
                  </Form>
             
              </Col>
             
          </Row>
        </Container>
        <br/>
      
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
  fetchJobs,addNewCv
  
})(Job);