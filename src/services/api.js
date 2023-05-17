import axios from "axios";
import { getWithoutHeader } from "./config";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const getInstrumentData = getWithoutHeader(
  `${API_URL}/api/domains?populate=*`
);
export const getIndikatorData = (id) => {
  const data = getWithoutHeader(
    `${API_URL}/api/aspeks/${id}?populate=indikators`
  );
  return data();
};

export const getDetailIndikatorData = (id) => {
  const data = getWithoutHeader(`${API_URL}/api/indikators/${id}?populate=*`);
  return data();
};

export const getListApps = getWithoutHeader(`${API_URL}/api/applications`);

export const getDetailApp = (id) => {
  const data = getWithoutHeader(`${API_URL}/api/applications/${id}`);
  return data();
};
