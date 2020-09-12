export const ELSMOS_API = "http://10.0.2.2:5000/api";

export const auth = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
};
