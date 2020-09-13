export const ELSMOS_API = "http://273f0319ace1.ngrok.io/api"; //run ngrok http 5000 and paste output (http) here DONT FORGET /api

export const auth = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
};
