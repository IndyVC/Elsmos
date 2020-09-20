export const ELSMOS_API = "http://10.0.2.2:5000"; //run ngrok http 5000 and paste output (http) here DONT FORGET /api

export const auth = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
};
