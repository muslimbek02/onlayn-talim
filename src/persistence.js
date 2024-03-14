export const getData = (key) => {
  return JSON.parse(window.localStorage.getItem(key) || null);
}

export const setData = (key, data) => {
  window.localStorage.setItem(key, JSON.stringify(data));
}

export const deleteData = (key) => {
  window.localStorage.removeItem(key);
}