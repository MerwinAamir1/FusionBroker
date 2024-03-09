import axios from 'axios';

const BASE_URL = 'https://ftl.fasttrack.net/v1';

export const getStockData = async (ticker, start, end, olhv, unadj, appid, token) => {
  const url = `${BASE_URL}/data/${ticker}/range?start=${start}&end=${end}&olhv=${olhv}&unadj=${unadj}`;

  try {
    const response = await axios.get(url, {
      headers: {
        Accept: 'application/json',
        appid,
        token,
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
