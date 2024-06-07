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

  static async Detail(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default TravelinSource;