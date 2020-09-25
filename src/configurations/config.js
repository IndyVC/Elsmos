export const ELSMOS_API = "http://358e34dcc01d.ngrok.io/api"; //run ngrok http 5000 and paste output (http) here DONT FORGET /api

export const auth = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return config;
};
