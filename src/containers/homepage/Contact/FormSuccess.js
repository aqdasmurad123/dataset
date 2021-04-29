import React from 'react';
import './Form.css';
import { Marginer } from "../../../components/marginer";
const FormSuccess = () => {

  return (
    <div className='form-content-right'>
      <span className='close-btn' onClick={() => window.location.reload()}>×</span>
      <h1 className='form-success'>We have received your request!</h1>
      <Marginer direction="vertical" margin="2rem" />
      <img className='form-img-2' src='img/submit.PNG' alt="" />
    </div>
  );
};

export default FormSuccess;
