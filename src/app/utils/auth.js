// utils/auth.js
const BASE_URL = 'https://ftl.fasttrack.net/v1/auth/login';

export const login = async (account, appid, pass) => {
  const url = `${BASE_URL}?account=${account}&pass=${pass}&appid=${appid}`;

  try {
    const response = await fetch(url);
    const userinfo = await response.json();

    if (userinfo.err === null) {
      const token = userinfo.token;
      return token;
    } else {
      throw new Error(userinfo.err.message);
    }
  } catch (error) {
    throw new Error(error.message);
  }
};
