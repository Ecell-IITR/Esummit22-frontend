import React from 'react';
import Sponsor from '../components/sponsors-card';
import Footer from '../components/footer';
import { NextSeo } from 'next-seo';
import Content from '../components/content';
import Head from 'next/head';
export default function Sponsors() {
  <NextSeo
    title="E-Summit'22 Sponsors"
    description=" Our grand event of E-summit'22 is organised under patronage of Start-up India, UNESCO with TIDES IITR Alumni Association etc. as principal sponsors, Codingal, Callido etc. as event partners and many other companies as service, platform, community and media partners."
    canonical={`https://www.esummit.in/sponsors`}
    openGraph={{
      url: `https://www.esummit.in/sponsors`,
      title: 'Sponsors',
      description:
        "GeeksforGeeks, Codingal, Divami Labs, Amar Ujala and Venture Folks are the companies partnering with E-Cell to conduct E-Summit'22. ",
      site_name: `Sponsors E-Summit'22`,
    }}
    additionalMetaTags={[
      {
        name: 'Sponsors Page',
        content:
          'Principal Sponsors, Media Sponsors, Event Sponsors, Service Sponsors, Platform Sponsors, Community Sponsors.',
      },
    ]}
  />;

  const TitleSponsors = [
    {
      title: "Westbridge Capital",
      format: ".png",
    },
  ];
  const UnderPertro = [
    {
      title: "UNESCO",
      format: ".jpeg",
    },
  ];
  const SponsorPartner = [
    {
      title: "Sponsor Bull",
      format: ".png",
    },
  ];
  const StreamingPartner = [
    {
      title: "Crater.club",
      format: ".jpg",
    },
  ];
  const AssociateSponsors = [
    {
      title: "TIH",
      format: ".png",
    },
  ];
  const CertificatePartner = [
    {
      title: "Give My Certificate",
      format: ".png",
    },
  ];
  const LegaLconsultingPartner = [
    {
      title: "Startupstartkaro",
      format: ".png",
    },
  ];
  const TravellingPartner = [
    {
      title: "Zingbus",
      format: ".jpeg",
    },
  ];
  const MediaPartners = [
    {
      title: "Amar Ujala",
      format: ".png",
    },
    {
      title: "The Engineer Jokes",
      format: ".jpg",
    },
  ];
  const KnowledgePartner = [
    {
      title: "Venture Folks",
      format: ".png",
    },
  ];
  const Poductathon  = [
    {
      title: "GeeksforGeeks",
      format: ".png",
    },
    {
      title: "Sahicoin",
      format: ".jpg",
    },
    {
      title: "Rosenfeld",
      format: ".png",
    },
  ];
  const CaseChallenge  = [
    {
      title: "Divami Labs",
      format: ".jpeg",
    },
  ];
  const JuniorHackathonPartner  = [
    {
      title: "Codingal",
      format: ".png",
    },
  ];
  const ServicePartner  = [
    {
      title: "Yes Startups",
      format: ".jpeg",
    },
    {
      title: "Tricycle",
      format: ".PNG",
    },
  ];
  const LearningPartner  = [
    {
      title: "Henry Harvin",
      format: ".jpeg",
    },
  ];
  const CommunityPartner  = [
    {
      title: "Saday",
      format: ".png",
    },
  ];
  return (
    <div>

      <Head className='main-h1'>
          <h1 >E-summit 22 IIT Roorkee Sponsor Page</h1>
      <link rel="alternate" href="https://www.esummit.in/Sponsor" hreflang="en-in" /></Head>

      <h1 className="sponsorspage-title">TITLE SPONSORS</h1>
      <div className="sponsorpage-container">
        {TitleSponsors.map((d, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={d.title}
            format={d.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">CO-ORGANISER</h1>
      <div className="sponsorpage-container">
        {AssociateSponsors.map((d, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={d.title}
            format={d.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">UNDER PATRONAGE OF</h1>
      <div className="sponsorpage-container">
        {UnderPertro.map((d, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={d.title}
            format={d.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">PRODUCTATHON PARTNERS</h1>
      <div className="sponsorpage-container">
        {Poductathon.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">CASE CHALLENGE PARTNERS</h1>
      <div className="sponsorpage-container">
        {CaseChallenge.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">KNOWLEDGE PARTNERS</h1>
      <div className="sponsorpage-container">
        {KnowledgePartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">STREAMING PARTNERS</h1>
      <div className="sponsorpage-container">
        {StreamingPartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">SPONSOR PARTNERS</h1>
      <div className="sponsorpage-container">
        {SponsorPartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">LEGAL AND CONSULTING PARTNERS</h1>
      <div className="sponsorpage-container">
        {LegaLconsultingPartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">COMMUNITY PARTNERS</h1>
      <div className="sponsorpage-container">
        {CommunityPartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>

      <h1 className="sponsorspage-title">JUNIOR HACKATHON PARTNERS</h1>
      <div className="sponsorpage-container">
        {JuniorHackathonPartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">SERVICES PARTNERS</h1>
      <div className="sponsorpage-container">
        {ServicePartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">LEARNING PARTNERS</h1>
      <div className="sponsorpage-container">
        {LearningPartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">TRAVELLING PARTNERS</h1>
      <div className="sponsorpage-container">
        {TravellingPartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">CERTIFICATE PARTNERS</h1>
      <div className="sponsorpage-container">
        {CertificatePartner.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      <h1 className="sponsorspage-title">MEDIA PARTNERS</h1>
      <div className="sponsorpage-container">
        {MediaPartners.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
          />
        ))}
      </div>
      
      <Footer />
    </div>
  );
}
