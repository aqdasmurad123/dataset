
import React, { Component } from "react";
import styled from "styled-components";
import { SectionTitle } from "../../../components/sectionTitle";

import { connect } from "react-redux";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Container ,
  Col,
  Row,
  CardSubtitle,
  Button,
  Spinner,
} from "reactstrap";
 import {Link} from 'react-router-dom'
import {
  addPost,
  fetchPosts,
  deletePost,
  editPost,
} from "../../../store/actions/actions";




 class Blog extends Component {
   constructor(props){
     super(props)
   }
 
 componentDidMount = () => {
    this.props.fetchPosts();
  };
  
  render() {

  return (
    <Container>
    <Row>
      {this.props.posts.map((item, index) => {
        return (
          <Col lg="4">
            <h1>jbd,hmdb</h1>
            <Card key={index}>
              <CardImg top width="30%" src={item.blog_image} />
              <CardBody>
                <CardTitle tag="h5">{item.blog_title}</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">
                  <h5 classNam="B">
                    {" "}
                    <b> {item.blog_subtitle}</b>{" "}
                  </h5>
                </CardSubtitle>
            
                <CardText>
                  {" "}
                  <h5 classNam="B">{item.blog_text}</h5>
                </CardText>

                <Link to="/bbb  ">
                  <Button>Button</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </Row>
  </Container>
    
  );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    posts: state.posts.posts,
    userid: state.userid,
  };
};
export default connect(mapStateToProps, {
  fetchPosts,
})(Blog);

