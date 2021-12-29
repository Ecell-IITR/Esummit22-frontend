import { DefaultSeoProps } from "next-seo";

export const SITE_DESCRIPTION = `E-Cell IIT Roorkee is Asia's one of the Largest Entrepreneurship Promoting college body. Our flagship event E-Summit, has hosted some of the most prominent stalwarts of the industry over the years including but not limited to Startup expo, Ideastorm, Investors Vista, Saleable, product-a-thon, speaker events and much more `;

const defaultSEOConfig = {
  defaultTitle: "E-Summit 22 | IIT Roorkee ",
  description: SITE_DESCRIPTION,
  authorName: 'Tech Team 2021-22 | E-Cell IIT Roorkee',
  openGraph: {
    type: "website",
    locale: "en_IN",
    site_name: "E-summit_22",
    title: "E-summit 22",
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "publicEsummit_logo.png",
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
        "esummit e-summit ecell entrepreneurship global summit 2022 iitr startup iit roorkee entrepreneur fest conference conclave Startup expo Ideastorm Investors Vista Saleable product-a-thon speaker events ",
    },
    {
      name: "Hahstags",
      content:
        " #FeteOfFortitude #esummit22 #ecelliitr #entrepreneur #entrepreneurship #entrepreneurial #HailingTheHustlers #ThinkersToDoers #InspiringInnovators #startup #iit #iitroorkee #iit_roorkee #iitr #indianinstituteoftechnology #entrepreneurindia #entrepreneurminds #entrepreneurialspirit",
    },
  ],
};

export default defaultSEOConfig;
