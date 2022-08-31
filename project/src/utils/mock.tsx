import { address, datatype, date, image, internet, name, random } from 'faker';
import { Comment, User } from '../types/comments';
import { Offer, Offers } from '../types/offers';
import { OfferData, UserData} from '../types/state';

const makeFakeUserInfo = (): User => ({
  id: datatype.number(),
  avatarUrl: image.imageUrl(),
  isPro: datatype.boolean(),
  name: name.firstName()
});
const makeFakeUserData = (): UserData => ({
  id:datatype.number(),
  email:internet.email(),
  token:datatype.string(),
});
const makeFakeCityName = (): string => (address.cityName());

const makeFakeOffer = () : Offer => (
  (
    {
      city: {
        name: address.cityName(),
        location: {
          latitude: datatype.float(),
          longitude: datatype.float(),
          zoom: 13,
        }
      },
      previewImage: image.imageUrl(),
      images: new Array(3).fill(null).map(() => (image.image())),
      title: random.word(),
      isFavorite: datatype.boolean(),
      isPremium: datatype.boolean(),
      rating: datatype.number({ min: 0, max: 5, precision: 0.1}),
      type: random.word(),
      bedrooms: datatype.number({min: 1, max: 5}),
      maxAdults: datatype.number({min: 1, max: 5}),
      price: datatype.number({min: 1, max: 999}),
      goods: new Array(5).fill(null).map(() => (random.words())),
      host: {
        id: datatype.number(),
        name: name.firstName(),
        isPro: datatype.boolean(),
        avatarUrl: image.imageUrl()
      },
      description: random.words(10),
      location: {
        latitude: datatype.float(),
        longitude: datatype.float(),
        zoom: 13,
      },
      id: datatype.number()
    })
);

const makeFakeComment = () : Comment => ({
  comment: random.words(10),
  date: String(date.recent()),
  id: datatype.number(),
  rating: datatype.number({ min: 0, max: 5, precision: 0.1}),
  user: {
    avatarUrl: image.imageUrl(),
    id: datatype.number(),
    isPro: datatype.boolean(),
    name: name.firstName(),
  }
});

const makeFakeOffersData = (): Offers => new Array(5).fill(null).map(() => makeFakeOffer());

const makeFakeOfferData = (): OfferData => (
  {
    room: makeFakeOffer(),
    comments: new Array(11).fill(null).map(() => makeFakeComment()),
    nearby: new Array(3).fill(null).map(() => makeFakeOffer())
  }
);

export {makeFakeUserInfo,makeFakeCityName,makeFakeOffersData,makeFakeOfferData,makeFakeOffer,makeFakeUserData};
