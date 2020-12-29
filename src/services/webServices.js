import {API_URL } from "../config/constant";


function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      // if (response.status === 401) {
      //     // auto logout if 401 response returned from api
      //     logout();
      //     location.reload(true);
      // }
      // const error = (data && data.message) || response.statusText;
      // return Promise.reject(error);
    }
    return data;
  });
}
export function serviceOmdb(params) {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      apiKey: "faf7e5bb"
    }
  };
  return fetch(API_URL + `?apikey=${params.apiKey}&s=${params.s}&page=${params.page}`, headers).then(handleResponse)
}