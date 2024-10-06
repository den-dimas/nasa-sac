import axios from "./axios.server";

export const getOSD379 = async () => {
  try {
    const response = await axios.get(`/get-379`);

    if (!response || !response.data) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getOSD665 = async () => {
  try {
    const response = await axios.get(`/get-665`);

    if (!response || !response.data) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getaOSD379 = async () => {
  try {
    const response = await axios.get(`/geta-379`);

    if (!response || !response.data) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getaOSD665 = async () => {
  try {
    const response = await axios.get(`/geta-665`);

    if (!response || !response.data) {
      return [];
    }

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};
