import React, { useState, useRef, useContext } from 'react';
import Counter from '../components/section/counter';
import CustomGradientBtn from '../components/customGradientBtn';
import Link from 'next/link';
import HomeSpeakers from '../components/home_page/home_speaker';
import HomeEvents from '../components/home_page/home_events';
import Faq from '../components/faq/faq';
import { ALL_EVENTS_API, SPEAKERS_API } from '../utils/APIs';
import FetchApi from '../utils/fetchAPI';
import { getUserRoleType } from '../utils';
import { AuthContext } from '../utils/auth-context';
import PayNowPopup from '../components/payNowPopup';
import Image from 'next/image';

import Head from 'next/head';
import { EventJsonLd } from 'next-seo';


export default function Home({ allEvents, allSpeakers,fourSpeakers }) {


  const { user } = useContext(AuthContext);
  const roleType = getUserRoleType();

  return (
    <div>
       <EventJsonLd
      name="IIT Roorkee E-summit 22"
      startDate="2022-01-21T00:00:00.000Z"
      endDate="2022-01-23T00:00:00.000Z"
      location={{
        name: 'remote',
        address: {

          addressCountry: 'India',
        },
      }}
      url="https://www.esummit.in"
      images={['https://www.esummit.in/_next/image?url=%2Fwebthemepng.png&w=640&q=75']}
      description="E-summit 22 organized by e-cell IIT Roorkee.E-summit is the most awaited event pan India by both entrepreneur and entrepreneurship enthusistes. Hope to see you at E-summit "
      
      performers={[
        {
          name: 'VARUN MAYYA ( AVALON META )',
        },
        {
          name: 'RAJ SHAMANI ( SHAMANI INDUSTRIES )',
        },
        {
          name: 'NEERAJ KHANDELWAL ( COINDCX )',
        },
        {
          name: 'RAHUL SHARMA ( ZETWERK )',
        },
        {
          name: 'AMITABH KANT ( NITI AAYOG )',
        },
        {
          name: 'SAURABH KAUSHIK (  PEOPLEIST ) ',
        },
      ]}
    />
      <section className='flex items-start justify-center landing overflow-hidden'>
        <div className='landing rotate '></div>
        <img src='/leftLine.svg' alt='leftLine' className='mainPage_side_img' />

        <div className='flex flex-col items-center text-center mx-auto' style={{marginTop:"42px"}}>
          <Head className='main-h1'>
          <h1 >E-summit 22 IIT Roorkee</h1>
          <link rel="alternate" href="https://www.esummit.in" hreflang="en-in" />

          </Head>
          <Image
            className='landing-page-text-png'
            src='/webthemepng.webp'
            alt='landing page text'
            width = "545%"
            height="120%"
    
          />
          {!user ? (
            <Link href='/register' passHref>
              <div className='landing-register-button'>
                {/* <CustomGradientBtn text="Register Now" color="black" /> */}
                Register Now
              </div>
            </Link>
          ) : (
            <>
              {roleType === 'CA' ? (
                <Link href='/cap/tasks' passHref>
                  <div className='landing-register-button'>
                    {/* <CustomGradientBtn text="Register Now" color="black" /> */}
                    Dashboard
                  </div>
                </Link>
              ) : (
                <Link href='/nonca/events' passHref>
                  <div className='landing-register-button'>
                    {/* <CustomGradientBtn text="Register Now" color="black" /> */}
                    Dashboard
                  </div>
                </Link>
              )}
            </>
          )}
        </div>

        <img src='/rightLine.svg' alt='rightLine' />
      </section>
      <hr />
      <div className='Seo-text'><p>E-Summit 22 is organised by E-Cell IIT Roorkee which is  one of the Largest Entrepreneurship Promoting college body in Asia.E-Summit has hosted some of the most prominent stalwarts of the industry over the years including but not limited to Startup expo, speaker events and much more </p></div>
      <HomeSpeakers fourSpeakers={fourSpeakers}  />
      <Link href='/speakers' passHref>
        <div className='home-view-all-button'>
          <CustomGradientBtn text='View All' color='black' />
        </div>
      </Link>
      <Counter />
      <PayNowPopup />
      {'  '}
      <HomeEvents allEvents={allEvents} />
      <div className='Seo-text'><p>To find a way out of the darkness that has engulfed us over the past two years, the Indian youth needs to take on the mantle and show us the path to a new world where optimism, creativity, innovation, and ambition thrive. The new edition of Entrepreneurship Summit is a 3-day event that is being organized with the vision of providing a platform that stimulates discussion on ideas that possess the potential to turn the issues troubling us into an opportunity to revolutionize the world. E-Summit’22 will present rays of hope so dazzling that they penetrate even the darkness that veils our eyes. The summit is being organized from 21 Jan to 23 Jan in online mode.</p></div>
      
      <Link href='/events' passHref>
        <div className='home-view-all-button'>
          <CustomGradientBtn text='View All' color='black' />
        </div>
      </Link>
      <div className='Seo-text'><p>E-Summit 2022 organized by ecell IIT Roorkee will bring every one with lithora of opportunity.Esummit 2022 organized between 21 Jan to 23 Jan which promates the idea of startup india also giving opportunity of networkink funding and much more. Hope to see you in E-summit 22 organized by IIT Roorkee </p></div>
      
      <Faq />
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );
  const get_all_events = await fetch(ALL_EVENTS_API);
  const get_all_speakers = await fetch(SPEAKERS_API);

  const allEvents = await get_all_events.json();
  const allSpeakers = await get_all_speakers.json();
  const fourSpeakers = allSpeakers.slice(0,4);
  return {
    props: {
      allEvents,
      allSpeakers,
      fourSpeakers,
    },
  };
}
