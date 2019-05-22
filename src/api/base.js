import createFetch from "../utils/fetch";

export const get = (path, params) => {
  console.log("Method GET is called...");
  return createFetch({
    headers: {
     'Content-Type': 'application/json',
    'access-token': sessionStorage.getItem('access-token') || ''
  }}).get(path, params);
}

export const post = (path, data) => {
  console.log("Method POST is called...");
  return createFetch({
    headers: {
   'Content-Type': 'application/json',
    'access-token': sessionStorage.getItem('access-token')|| ''
  }}).post(path, data);
}

export const put = (path, data) => {
  console.log("Method PUT is called...");
  return createFetch(
    {
      headers: {
     'Content-Type': 'application/json',
      'access-token': sessionStorage.getItem('access-token')|| ''
    }}
  ).put(path, data);
}

export const remove = (path) => {
  console.log("Method DELETE is called...");
  return createFetch(
    {headers: {
     'Content-Type': 'application/json',
      'access-token': sessionStorage.getItem('access-token')|| ''
    }}
  ).delete(path);
}

export default {
    get,
    post,
    put,
    remove
}