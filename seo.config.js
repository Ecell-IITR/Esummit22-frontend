import { DefaultSeoProps } from "next-seo";

export const SITE_DESCRIPTION = `Esummit`;

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
