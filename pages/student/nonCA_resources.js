import React, { useEffect, useState } from "react";
import FetchApi from "../../utils/fetchAPI";
import { NON_CA_PROFILE_API } from "../../utils/APIs";
import NonCAResources from "../../components/nonca/nonca_resources";
import { getAuthToken } from "../../utils";

const NonCAResourcesPage = () => {
  const [nonCA_resourcesList, setNonCA_ResourcesList] = useState([]);

  useEffect(() => {
    FetchApi("get", NON_CA_PROFILE_API, null, getAuthToken())
      .then((res) => {
        setNonCA_ResourcesList(res.data[0].resources_uploaded);
      })
      .catch((err) => console.log(err));
  }, []);
  return <NonCAResources nonCA_resources_list={nonCA_resourcesList[0]} />;
};

export default NonCAResourcesPage;
