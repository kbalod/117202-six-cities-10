import { Offers } from '../../types/offers';
import CardHotel from '../main-card-hotel/main-card-hotel';

type Similar = {
  nearby: Offers | null,
  cardHotelType:string,
};
function SimilarHotels ({nearby,cardHotelType}: Similar) : JSX.Element {
  return (
    <div className="near-places__list places__list">
      {nearby?.map((offer)=> (
        <article key={offer.id} className="near-places__card place-card">
          <CardHotel key={offer.id} offer={offer} cardHotelType={cardHotelType} />
        </article>
      ))}
    </div>
  );
}
export default SimilarHotels;
