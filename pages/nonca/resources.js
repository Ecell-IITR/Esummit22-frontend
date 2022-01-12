import NoncaNavbar from '../../components/nonca/nonca_navbar';
import React from 'react';
import NonCAResources from '../../components/nonca/nonca_resources';

const Home = () => {
  return (
    <div className='nonca-main-container'>
      <NoncaNavbar />
      <div>
        <NonCAResources />
      </div>
    </div>
  );
};

export default Home;
