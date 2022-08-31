import { Link } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { fetchAddToFavoritesAction } from '../../store/api-action';
import { Offer } from '../../types/offers';
import { calculateRating } from '../../utils/utils';

type OfferType = {
  offer:Offer;
}

function FavoritePlace({offer}:OfferType) {
  const dispatch = useAppDispatch();
  const {isFavorite,id} = offer;
  const handleFavoriteButtonClick = () => {
    dispatch(fetchAddToFavoritesAction({status: +(!isFavorite), id}));
  };

  return(
    <article className="favorites__card place-card">
      {offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className="favorites__image-wrapper place-card__image-wrapper">
        <Link to={`/offer/${offer.id}`}>
          <img className="place-card__image" src={offer.previewImage} width="150" height="110" alt="Place"/>
        </Link>
      </div>
      <div className="favorites__card-info place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button ${(offer.isFavorite && 'place-card__bookmark-button--active')} button`}
            type="button"
            onClick={handleFavoriteButtonClick}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: calculateRating(offer.rating)}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <Link to={`/offer/${offer.id}`}>
          <h2 className="place-card__name">
            {offer.title}
          </h2>
        </Link>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
}

export default FavoritePlace;
