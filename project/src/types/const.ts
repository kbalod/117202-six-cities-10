export enum AppRoute {
  Main = '/',
  Login = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum APIRoute {
  Main = '/',
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Favorites = '/favorite',
  Reviews = '/comments',
  Nearby = '/nearby',
}

export type City = {
  name: string;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
  }
};
