import API_ENDPOINT from '../globals/api-endpoint.js';
// import FavoriteRestaurantIdb from './fav-restaurants-idb.js';

class TravelinSource {
  static async Cultures() {
    const response = await fetch(API_ENDPOINT.CULTURE);
    const responseJson = await response.json();
    return responseJson.data;
  }
  
  static async Tours() {
    const response = await fetch(API_ENDPOINT.TOURS);
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async DetailCulture(id) {
    const response = await fetch(API_ENDPOINT.DETAILCULTURE(id));
    const responseJson = await response.json();
    return responseJson.data;
  }

  static async DetailTour(id) {
    const response = await fetch(API_ENDPOINT.DETAILTOUR(id));
    const responseJson = await response.json();
    return responseJson.data;
  }
}

export default TravelinSource;