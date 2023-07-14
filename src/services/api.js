import axios from "axios";
import { getWithoutHeader } from "./config";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
// get data domain
export const getInstrumentData = getWithoutHeader(
  `${API_URL}/api/domains?populate[0]=domain_image&populate[1]=aspeks`
);

export const getDetailDomain = (id) => {
  const data = getWithoutHeader(`${API_URL}/api/domains/${id}?populate=*`);
  return data();
};

// get indikator
export const getIndikatorData = (id) => {
  const data = getWithoutHeader(`${API_URL}/api/aspeks/${id}?populate=*`);
  return data();
};

export const getDetailIndikatorData = (id) => {
  const data = getWithoutHeader(`${API_URL}/api/indikators/${id}?populate=*`);
  return data();
};

export const getSearchIndikatorData = (value) => {
  const data = getWithoutHeader(
    `${API_URL}/api/indikators?filters[$or][0][title][$contains]=${value}&filters[$or][1][ind][$contains]=${value}&populate=deep,3`
  );
  return data();
};

export const getIndikatorLevelData = (id) => {
  const data = getWithoutHeader(
    `${API_URL}/api/indikators/${id}?populate[level_component][populate]=*`
  );
  return data();
};

// get data apps
export const getListApps = getWithoutHeader(`${API_URL}/api/applications?[populate]=*`);

export const getDetailApp = (id) => {
  const data = getWithoutHeader(`${API_URL}/api/applications/${id}?[populate]=*`);
  return data();
};

export const getSearchAppData = (value) => {
  const data = getWithoutHeader(
    `${API_URL}/api/applications?filters[$or][0][name][$contains]=${value}&filters[$or][1][overview][$contains]=${value}`
  );
  return data();
};

// get about data
export const getAboutData = getWithoutHeader(`${API_URL}/api/abouts`);

// get procedures data
export const getProceduresData = getWithoutHeader(`${API_URL}/api/procedures`);
export const getDetailProcedureData = (id) => {
  const data = getWithoutHeader(
    `${API_URL}/api/procedures/${id}?populate=deep,3`
  );
  return data();
};

// get provision data
export const getProvisionData = getWithoutHeader(
  `${API_URL}/api/ketentuan-umums`
);

// get principle data
export const getPrincipleData = getWithoutHeader(`${API_URL}/api/principles`);
