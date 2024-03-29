import Speaker_card from '../components/speaker-card';
import React, { useEffect, useState } from 'react';
import Footer from '../components/footer';
import { SPEAKERS_API } from '../utils/APIs';
import { NextSeo } from 'next-seo';
import Head from 'next/head';
export default function Speakers({ speakers }) {
  return (
    <div>
      <div className='bg-black text-white  Speaker_page_container'>
      <Head className='main-h1'>
          <h1 >E-summit 22 IIT Roorkee Speaker Page</h1>
          <link rel="alternate" href="https://www.esummit.in/speakers" hreflang="en-in" /></Head>
        <div className='Speaker_page_title'>Speakers</div>
        <div className='Speaker_Card_Container'>
          {speakers?.map((det, id) => {
            return (
              <div className='Speaker_Card_Loop' key={id}>
                <Speaker_card
                  name={det.speaker.name}
                  position={det.speaker.designation}
                  topic={det.topic}
                  date={det.date}
                  time={det.time}
                  image={det.speaker.profile_image}
                />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
      <NextSeo
        title={'E-Summit 22 | Speakers'}
        description={
          'E-Summit22 presents the Speaker Events which is focussed on three major conclaves,Billion Thoughts to Billions Conclave consists of founders of startups,Crypto Conclave has led to the assembly of founders of the Crypto Exchanges,We also have best angel investors and venture capitalist for Capital Concurrency Conclave.'
        }
        openGraph={{
          url: `https://www.esummit.in/speakers`,
          title: 'Speakers',
          description:
            'The list isn’t over yet! We’ve got you covered with power-packed sessions by the finest entrepreneurs of the country as well. Keep Calm and Stay Tuned, we’ve got entertainment too!',
          images: [
            {
              url: 'speaker_seo.png',
              alt: 'Speakers2022',
              type: 'image/jpeg/png',
            },
          ],

          site_name: 'Esummit',
        }}
        additionalMetaTags={[
          {
            name: 'Speakers Page',
            content:
              'Varun Mayya, Saurabh Kaushik, Rahul Sharma, Nikhil Kamath, Bhavish Aggarwal, Nithin Kamath',
          },
        ]}
      />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const response = await fetch(SPEAKERS_API);
  const speakers = await response.json();

  return {
    props: {
      speakers,
    },
  };
}
