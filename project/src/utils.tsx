import { ONE_STAR } from './const';

export const calculateRating = (rating:number) =>{
  const result = Math.round(rating) * ONE_STAR;
  return result.toString().concat('%');
};
