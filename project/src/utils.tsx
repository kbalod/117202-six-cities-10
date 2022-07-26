import dayjs from 'dayjs';
import { ONE_STAR } from './const';

export function calculateRating (rating:number) {
  const result = Math.round(rating) * ONE_STAR;
  return result.toString().concat('%');
}

export function humanizeDate (data: string) {
  return dayjs(data).format('MMMM-YYYY');
}
