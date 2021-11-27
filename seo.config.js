import { DefaultSeoProps } from "next-seo";

export const SITE_DESCRIPTION = `E-Cell IIT Roorkee is Asia's one of the Largest Entrepreneurship Promoting college body. Our flagship event E-Summit, has hosted some of the most prominent stalwarts of the industry over the years including but not limited to Startup expo, Ideastorm, Investors Vista, Saleable, product-a-thon, speaker events and much more `;

const defaultSEOConfig = {
  defaultTitle: "E-summit 22 IIT Roorkee",
  description: SITE_DESCRIPTION,
  
  openGraph: {
    type: "website",
    locale: "en_IN",
    site_name: "E-summit_22",
    title: "E-summit 22",
    description: "Official website of E-summit 22 IIT Roorkee ",
    images: [
      {
        url: "https://www.esummit.in/static/media/new-home-esummit.39c7033f.svg",
      },
    ],
  },
  twitter: {
    handle: "@ECell_IITR",
    cardType: "summary_large_image",
  },
  additionalMetaTags : [
    
      { name: 'keywords',
      content: 'esummit e-summit ecell entrepreneurship global summit 2022 iitr startup iit roorkee entrepreneur fest conference conclave Startup expo Ideastorm Investors Vista Saleable product-a-thon speaker events '}
  ]

  
};


export default defaultSEOConfig;
