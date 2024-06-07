import CONFIG from './config';

const API_ENDPOINT = {
  CULTURE: `${CONFIG.BASE_URL}/cultures`,
  TOURS: `${CONFIG.BASE_URL}/tours`,
  DETAIL: (id) => `${CONFIG.BASE_URL}/detail/${id}`,
};

export default API_ENDPOINT;
