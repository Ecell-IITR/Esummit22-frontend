import React, { useEffect, useState } from 'react';
import FetchApi from '../../utils/fetchAPI';
import { CA_PROFILE_API } from '../../utils/APIs';
import { getAuthToken } from '../../utils';
import CapLayout from '../../components/cap/capLayout';
import CA_Resources from '../../components/cap/ca_resources';
import withAuth from '../../utils/withAuth';

const ResourcesPage = () => {
  const [resourcesList, setResourcesList] = useState([]);

  useEffect(() => {
    FetchApi('get', CA_PROFILE_API, null, getAuthToken())
      .then((res) => {
        setResourcesList(res.data[0].resources_uploaded);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <CapLayout>
      <CA_Resources resources_list={resourcesList[0]} />
    </CapLayout>
  );
};

export default withAuth(ResourcesPage);
