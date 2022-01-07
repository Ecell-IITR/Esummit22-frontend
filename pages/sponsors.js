import React from "react";
import Sponsor from "../components/sponsors-card";
import Footer from "../components/footer";
import { NextSeo } from "next-seo";
import Content from "../components/content";

export default function Sponsors() {
  <NextSeo
    title="E-Summit'22 Sponsors"
    description=" Our grand event of E-summit'22 is organised under patronage of Start-up India, UNESCO with TIDES IITR Alumni Association etc. as principal sponsors, Codingal, Callido etc. as event partners and many other companies as service, platform, community and media partners."
    canonical={`https://www.esummit.in/sponsors`}
    openGraph={{
      url: `https://www.esummit.in/sponsors`,
      title: "Sponsors",
      description:
        "GeeksforGeeks, Codingal, Divami Labs, Amar Ujala and Venture Folks are the companies partnering with E-Cell to conduct E-Summit'22. ",
      site_name: `Sponsors E-Summit'22`,
    }}
    additionalMetaTags={[
      {
        name: "Sponsors Page",
        content:
          "Principal Sponsors, Media Sponsors, Event Sponsors, Service Sponsors, Platform Sponsors, Community Sponsors.",
      },
    ]}
  />;
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
      format: ".png",
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
  return (
    <div>
      <h1 className="sponsorspage-title">ASSOCIATE SPONSORS</h1>
      <div className="sponsorpage-container">
        {AssociateSponsors.map((d, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={d.title}
            format={d.format}
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
      <Footer />
    </div>
  );
}
