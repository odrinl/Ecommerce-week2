import React from 'react';
import { useNavigate } from 'react-router-dom';

function ErrorMessage() {
  const navigate = useNavigate();
  return (
    <>
      <div className='container justify-content-center'>
        <button
          className='btn btn-outline-secondary mt-3'
          onClick={() => navigate(-1)}
        >
          &lt;&lt; &nbsp;Go Back
        </button>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='container bg-light text-gray text-center m-3 p-5'>
          <div className='error-page row'>
            <h1 className='error-code col-12'>404</h1>
            <p className='error-text'>Page not found</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ErrorMessage;
