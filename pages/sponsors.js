import React from "react";
import Sponsor from "../components/sponsors-card";

export default function Sponsors() {
  const sponsorsPatronage = [
    {
      type: "Startup India",
      title: "Startup India",
      format: ".png",
      link: "https://www.startupindia.gov.in/",
    },
    {
      type: "UNESCO",
      title: "UNESCO",
      format: ".jpg",
      link: "https://en.unesco.org/",
    },
  ];
  const Principalsponsors = [
    {
      type: "Business Partner",
      title: "Tides",
      format: ".jpeg",
      link: "http://tides.iitr.ac.in/",
    },
    {
      type: "Title Partner",
      title: "IITR Heritage Foundation",
      format: ".png",
      link: "http://www.iitr-heritagefund.org/",
    },
    {
      type: "Golden Partner",
      title: "IITR Alumni Association",
      format: ".jpg",
      link: "http://iitraa.in/",
    },
  ];
  const EventPartners = [
    {
      type: "Event Partner",
      title: "Let's Transport",
      format: ".svg",
      link: "https://letstransport.in/",
    },
    { type: "Event Partner", title: "Codingal", format: ".png", link: "" },
    {
      type: "Knowledge Partner",
      title: "Clever Harvey",
      format: ".png",
      link: "",
    },
    {
      type: "Title & Event Partner",
      title: "Callido",
      format: ".png",
      link: "",
    },
    {
      type: "Event Partner",
      title: "Sanskrit Club",
      format: ".jpeg",
      link: "https://www.iitr.ac.in/sanskritclub/",
    },
  ];
  const ServicesPartners = [
    {
      type: "Cashback & Coupons Partner",
      title: "CashKaro",
      format: ".png",
      link: "https://cashkaro.com/",
    },
    {
      type: "Services Partner",
      title: "AWS",
      format: ".png",
      link: "https://aws.amazon.com/",
    },
    {
      type: "Services Partner",
      title: "MyWays",
      format: ".png",
      link: "https://www.myways.in/",
    },
    {
      type: "Video Editing Partner",
      title: "InVideo",
      format: ".png",
      link: "https://invideo.io/",
    },
    {
      type: "Services Partner",
      title: "FreshWorks",
      format: ".png",
      link: "https://www.freshworks.com/",
    },
    {
      type: "Workspace Partner",
      title: "OYO Workspaces",
      format: ".png",
      link: "#",
    },
  ];
  const PlatformPartners = [
    {
      type: "Platform Partner",
      title: "Hubilo",
      format: ".png",
      link: "https://hubilo.com/",
    },
    {
      type: "Platform Partner",
      title: "Hackerearth",
      format: ".png",
      link: "https://www.hackerearth.com/challenges/",
    },
  ];
  const CommunityPartners = [
    {
      type: "Community Partner",
      title: "Creators of Product",
      format: ".png",
      link: "https://meet.google.com/linkredirect?authuser=0&dest=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2Fcreatorsofproducts%2F%3ForiginalSubdomain%3Din",
    },
    {
      type: "Community Partner",
      title: "The Product Folks",
      format: ".jpeg",
      link: "https://www.theproductfolks.com/",
    },
    {
      type: "Community Partner",
      title: "A Junior VC",
      format: ".png",
      link: "https://ajuniorvc.com/",
    },
    {
      type: "Community Partner",
      title: "Coding Ninjas",
      format: ".png",
      link: "https://www.codingninjas.com/",
    },
    {
      type: "Community Partner",
      title: "Facebook Developer Circles",
      format: ".jpeg",
      link: "https://developers.facebook.com/developercircles/",
    },
    {
      type: "Community Partner",
      title: "Google Developers Group",
      format: ".png",
      link: "https://developers.google.com/community/gdg",
    },
    {
      type: "Community Partner",
      title: "Coding Blocks",
      format: ".png",
      link: "https://codingblocks.com/",
    },
  ];
  const MediaandOutreachPartners = [
    {
      type: "Outreach Partner",
      title: "Womennovator",
      format: ".jpeg",
      link: "http://www.womennovator.co.in/",
    },
    {
      type: "Blog Partner",
      title: "ED Times",
      format: ".png",
      link: "https://edtimes.in/",
    },
    {
      type: "Media and Outreach Partner",
      title: "Startup Talky",
      format: ".png",
      link: "https://startuptalky.com/",
    },
    {
      type: "Media and Outreach Partner",
      title: "DU Express",
      format: ".png",
      link: "https://duexpress.in/",
    },
    {
      type: "Magazine Partner",
      title: "entrepreneur India",
      format: ".jpg",
      link: "https://www.entrepreneur.com/in",
    },
    {
      type: "Media and Outreach Partner",
      title: "StartupNews.fyi",
      format: ".png",
      link: "https://www.startupnews.fyi/",
    },
    {
      type: "Media and Outreach Partner",
      title: "DU Beat",
      format: ".png",
      link: "https://dubeat.com/",
    },
    {
      type: "Media and Outreach Partner",
      title: "Youth Inc",
      format: ".png",
      link: "https://youthincmag.com/",
    },
  ];
  return (
    <>
      <div className="sponsorspage-title">UNDER PATRONAGE OF</div>
      <div className="sponsorpage-container">
        {sponsorsPatronage.map((d, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={d.title}
            format={d.format}
            link={d.link}
          />
        ))}
      </div>
      <div className="sponsorspage-title">PRINCIPAL SPONSORS</div>
      <div className="sponsorpage-container">
        {Principalsponsors.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
            link={c.link}
          />
        ))}
      </div>
      <div className="sponsorspage-title">EVENT PARTNERS</div>
      <div className="sponsorpage-container">
        {EventPartners.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
            link={c.link}
          />
        ))}
      </div>
      <div className="sponsorspage-title">SERVICES PARTNERS</div>
      <div className="sponsorpage-container">
        {ServicesPartners.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
            link={c.link}
          />
        ))}
      </div>
      <div className="sponsorspage-title">PLATFORM PARTNERS</div>
      <div className="sponsorpage-container">
        {PlatformPartners.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
            link={c.link}
          />
        ))}
      </div>
      <div className="sponsorspage-title">COMMUNITY PARTNERS</div>
      <div className="sponsorpage-container">
        {CommunityPartners.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
            link={c.link}
          />
        ))}
      </div>
      <div className="sponsorspage-title">MEDIA AND OUTREACH PARTNERS</div>
      <div className="sponsorpage-container">
        {MediaandOutreachPartners.map((c, i) => (
          <Sponsor
            key={i}
            sponsorsTitle={c.title}
            format={c.format}
            link={c.link}
          />
        ))}
      </div>
    </>
  );
}
