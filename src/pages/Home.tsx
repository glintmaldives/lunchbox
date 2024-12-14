import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Integration from '../components/Integration';
import WebApp from '../components/sections/WebApp';
import Stats from '../components/sections/Stats';
import OpenAPI from '../components/sections/OpenAPI';
import Resources from '../components/sections/Resources';
import CallToAction from '../components/sections/CallToAction';

const Home = () => {
  return (
    <>
      <Hero />
      <Features />
      <Integration />
      <WebApp />
      <Stats />
      <OpenAPI />
      <Resources />
      <CallToAction />
    </>
  );
};

export default Home;