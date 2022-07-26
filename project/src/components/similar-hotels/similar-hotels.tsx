import { Offers } from '../../types/offers';
import CardHotel from '../main-card-hotel/main-card-hotel';

type SimilarHotelsType = {
  offers: Offers;
  cardHotelType:string;
}
function SimilarHotels ({offers,cardHotelType}: SimilarHotelsType) : JSX.Element {
  return (
    <div className="near-places__list places__list">
      {offers.slice(0,3).map((offer)=> (
        <article key={offer.id} className="near-places__card place-card">
          <CardHotel key={offer.id} offer={offer} cardHotelType={cardHotelType} />
        </article>
      ))}
    </div>
  );
}
export default SimilarHotels;
