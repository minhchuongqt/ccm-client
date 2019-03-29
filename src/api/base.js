import createFetch from "../utils/fetch";

export const get = (path, params) => {
  console.log("Method GET is called...");
//   return createFetch().get(path, params);
}

export const post= (path, params) => {
  console.log("Method GET is called...");
  return createFetch().post(path, params);
}

export const put = (path, params) => {
  console.log("Method GET is called...");
  return createFetch().put(path, params);
}

export const remove = (path, params) => {
  console.log("Method GET is called...");
  return createFetch().delete(path, params);
}

export default {
    get,
    post,
    put,
    remove
}