import { DefaultSeoProps } from "next-seo";

export const SITE_DESCRIPTION = `E-Summit 22 is organised by E-Cell IIT Roorkee is Asia's one of the Largest Entrepreneurship Promoting college body.E-Summit has hosted some of the most prominent stalwarts of the industry over the years including but not limited to Startup expo, Ideastorm, Investors Vista, Saleable, product-a-thon, speaker events and much more `;

const defaultSEOConfig = {
  defaultTitle: "E-Summit 22 | IIT Roorkee ",
  description: SITE_DESCRIPTION,
  authorName: "Tech Team 2021-22 | E-Cell IIT Roorkee",
  openGraph: {
    type: "website",
    locale: "en_IN",
    site_name: "E-summit_22",
    title: "E-summit 22",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "https://www.esummit.in/fete-of-fortitude.png",
      },
    ],
  },
  twitter: {
    handle: "@ECell_IITR",
    cardType: "summary_large_image",
  },
  additionalMetaTags: [
    {
      name: "keywords",
      content:
        "e summit esummit e-summit ecell entrepreneurship global summit esummit iit esummit iitr esummit iit roorkee e summit 2022 iitr startup iit roorkee entrepreneur fest conference conclave Startup expo Ideastorm Investors' Vista Saleable product-a-thon speaker events",
    },
    {
      name: "hashtags",
      content:
        "#FeteOfFortitude #esummit22 #ecelliitr #entrepreneur #entrepreneurship #entrepreneurial #HailingTheHustlers #ThinkersToDoers #InspiringInnovators #startup #iit #iitroorkee #iit_roorkee #iitr #indianinstituteoftechnology #entrepreneurindia #entrepreneurminds #entrepreneurialspirit",
    },
  ],
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://www.esummit.in/favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "https://www.esummit.in/favicon.ico",
      sizes: "76x76",
    },
  ],
};

export default defaultSEOConfig;
