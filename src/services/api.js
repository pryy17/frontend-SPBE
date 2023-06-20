import axios from "axios";
import { getWithoutHeader } from "./config";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
// get data domain
export const getInstrumentData = getWithoutHeader(
  `${API_URL}/api/domains?populate=*`
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

export const getIndikatorLevelData = (id) => {
  const data = getWithoutHeader(
    `${API_URL}/api/indikators/${id}?populate[level_component][populate]=*`
  );
  return data();
};

// get data apps
export const getListApps = getWithoutHeader(`${API_URL}/api/applications`);

export const getDetailApp = (id) => {
  const data = getWithoutHeader(`${API_URL}/api/applications/${id}`);
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
export const getProvisionData = getWithoutHeader(`${API_URL}/api/ketentuan-umums`);

// get principle data
export const getPrincipleData = getWithoutHeader(`${API_URL}/api/principles`);