import dayjs from 'dayjs';
import { ONE_STAR, SortType } from './const';
import { Offer, Offers } from './types/offers';

export function calculateRating (rating:number) {
  const result = Math.round(rating) * ONE_STAR;
  return result.toString().concat('%');
}

export function humanizeDate (data: string) {
  return dayjs(data).format('MMMM-YYYY');
}

export const getOffersByCity = (offers: Offers, city: string) => offers.filter((offer) => offer.city.name === city);

const sortHighToLow = (offerA: Offer, offerB: Offer) => offerB.price - offerA.price;

const sortLowToHigh = (offerA: Offer, offerB: Offer) => offerA.price - offerB.price;

const sortByTopRated = (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating;

export const getSortedOffers = (offers: Offers, sortType: string) => {
  let sortedOffers = offers;
  switch (sortType) {
    case SortType.LowToHigh:
      sortedOffers.sort(sortLowToHigh);
      break;
    case SortType.HighToLow:
      sortedOffers.sort(sortHighToLow);
      break;
    case SortType.TopRatedFirst:
      sortedOffers.sort(sortByTopRated);
      break;
    default:
      sortedOffers = offers;
  }
  return sortedOffers;
};
