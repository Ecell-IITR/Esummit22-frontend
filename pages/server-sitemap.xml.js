import { getServerSideSitemap } from 'next-sitemap';
import { GetServerSideProps } from 'next';
import FetchApi from '../utils/fetchAPI';
import { ALL_EVENTS_API, HOST_URL } from '../utils/APIs';
export const getServerSideProps = async (ctx) => {
  const { data } = await FetchApi('GET', ALL_EVENTS_API, null);

  const fields = data.CompetitiveEvents.map(({ end_point }) => ({
    loc: `${HOST_URL}/events/${end_point}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
const XML = () => {};

export default XML;
