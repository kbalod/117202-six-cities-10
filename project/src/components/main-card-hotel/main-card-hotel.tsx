import { Offer} from '../../types/offers';
import {Link} from 'react-router-dom';
import { calculateRating } from '../../utils';

type OfferType = {
 offer:Offer;
 onMouseEnter?: (offer:Offer) => void;
 cardHotelType: string;
}

function CardHotel({offer,onMouseEnter,cardHotelType}:OfferType) : JSX.Element{
  return (
    <>
      {offer.isPremium &&
      <div className="place-card__mark">
        <span>Premium</span>
      </div>}
      <div className={`${cardHotelType}__image-wrapper place-card__image-wrapper`} onMouseEnter={()=>{ if(onMouseEnter !== undefined){onMouseEnter(offer);}}}>
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="260" height="200" alt="Place"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${(offer.isFavorite && 'place-card__bookmark-button--active')} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calculateRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={`/offer/${offer.id}`}>{offer.title}</Link>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </>
  );
}

export default CardHotel;
