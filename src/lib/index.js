export function getStorage(key) {
  try {
    const getStorageItem = localStorage.getItem(key);
    if (!getStorageItem) return undefined;
    return JSON.parse(getStorageItem);
  } catch (e) {
    return null;
  }
}

export function setStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    return console.log(e);
  }
}
