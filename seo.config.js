import { DefaultSeoProps } from "next-seo";

export const SITE_DESCRIPTION = `E-Cell IIT Roorkee is Asia's one of the Largest Entrepreneurship Promoting college body. Our flagship event E-Summit, has hosted some of the most prominent stalwarts of the industry over the years including but not limited to startup expo, Ideastorm, Investors Vista, Saleable, product-a-thon, speaker events and much more `;

const defaultSEOConfig = {
  defaultTitle: "Esummit",
  description: SITE_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: "en_IN",
    site_name: "Esummit",
    title: "Esummit",
    description: SITE_DESCRIPTION,
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
};

export default defaultSEOConfig;
