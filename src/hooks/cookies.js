export const createCookie = ({ name, value, validDays }) => {
  const date = new Date();
  date.setTime(date.getTime() + validDays * 24 * 60 * 60 * 1000);
  let expireDate = date.toUTCString();
  document.cookie = `${name}=${value}; expires=${expireDate}; path="/"`;
};

export const deleteCookie = ({ name }) => {
  createCookie({ name: name, value: null, validDays: null });
};
export const getCookies = ({ name }) => {
  const cDecoded = decodeURIComponent(document.cookie);
  const cArray = cDecoded.split("; ");
  let result = null;
  cArray.forEach((element) => {
    if (element.indexOf(name) == 0) {
      result = element.substring(name.length + 1);
    }
  });
  return result;
};
