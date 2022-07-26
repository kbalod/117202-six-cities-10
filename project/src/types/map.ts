export type Point = {
  lat: number;
  lng: number;
  zoom: number;
};

export type City = {
  name: string;
  location:Point;
};

export type Points = Point[];
