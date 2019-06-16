import createFetch from "../utils/fetch";
import socket from 'socket.io-client'
// const io = socket()
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

export const remove = (path, data) => {
  console.log("Method DELETE is called...");
  return createFetch(
    {headers: {
     'Content-Type': 'application/json',
      'access-token': sessionStorage.getItem('access-token')|| ''
    }}
  ).delete(path, data);
}

export const  uploadFile = (file) => {
  let body = new FormData();
  body.append('file', file);
  return createFetch(
    {headers: {
     'Content-Type': 'application/json',
      'access-token': sessionStorage.getItem('access-token')|| ''
    }}
  ).post('/upload', body);
  // const headers = {
  //   'Content-Type': 'application/json',
  //   'access-token': sessionStorage.getItem('access-token')|| ''
  // };

  // let request = create({
  //   baseURL: Urls.baseUrl,
  //   headers: headers,
  //   timeout: timeout
  // });

  // let body = new FormData();
  // body.append('file', file);

  // return request.post(Urls.upload, body).then(res => {
  //   return res.data || {};
  // });
}


export default {
    get,
    post,
    put,
    remove,
    uploadFile,
}