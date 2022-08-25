import dayjs from 'dayjs';
import { ONE_STAR, SortType } from './const';
import { Comment } from './types/comments';
import { AuthorizationStatus } from './types/const';
import { Offer, Offers } from './types/offers';

export function calculateRating (rating:number) {
  const result = Math.round(rating) * ONE_STAR;
  return result.toString().concat('%');
}

export function humanizeDate (data: string) {
  return dayjs(data).format('MMMM-YYYY');
}

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const sortHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortByTopRated = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const getSortedOffers = (offers: Offers, sortType: string) => {
  let sortedOffers;
  switch (sortType) {
    case SortType.LowToHigh:
      sortedOffers = offers.slice().sort(sortLowToHigh);
      break;
    case SortType.HighToLow:
      sortedOffers = offers.slice().sort(sortHighToLow);
      break;
    case SortType.TopRatedFirst:
      sortedOffers = offers.slice().sort(sortByTopRated);
      break;
    default:
      sortedOffers = offers;
  }
  return sortedOffers;
};

export const getOffersByCity = (offers: Offers): {[key: string]: Offers} => ({
  'Paris': offers.filter((offer) => offer.city.name === 'Paris'),
  'Cologne': offers.filter((offer) => offer.city.name === 'Cologne'),
  'Brussels': offers.filter((offer) => offer.city.name === 'Brussels'),
  'Amsterdam': offers.filter((offer) => offer.city.name === 'Amsterdam'),
  'Hamburg': offers.filter((offer) => offer.city.name === 'Hamburg'),
  'Dusseldorf': offers.filter((offer) => offer.city.name === 'Dusseldorf')
});

export const sortRecentToOld = (commentA: Comment, commentB: Comment) => new Date(commentB.date).getTime() - new Date(commentA.date).getTime();

const ratingTitle: string[] = [
  'Run, Forest, run!',
  'Bad. Really bad :(',
  'Might be better!',
  'Good place!',
  'Awesome to stay!',
];

export const getTitle = (index: number) => ratingTitle.find((_item, idx) => index === (idx + 1));
