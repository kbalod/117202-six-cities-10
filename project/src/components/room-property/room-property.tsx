import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { fetchAddToFavoritesAction} from '../../store/api-action';
import { getComments } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import ReviewsList from '../reviews-list/reviews-list';
import { calculateRating } from '../../utils';
import { Offer } from '../../types/offers';
import { AuthorizationStatus } from '../../types/const';
import { AppRoute, MAX_IMAGE_COUNT, MIN_IMAGE_COUNT } from '../../const';

type Room = {
  room:Offer,
}

function RoomProperty ({room}:Room) : JSX.Element {
  const countStars = calculateRating(room.rating);
  const comments = useAppSelector(getComments);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const {isFavorite,id} = room;

  const handleFavoriteButtonClick = () => {
    if (authorizationStatus === AuthorizationStatus.Auth) {
      dispatch(fetchAddToFavoritesAction({status: +(!isFavorite), id}));
    } else {
      navigate(AppRoute.Login);
    }
  };


  return(
    <>
      <div className="property__gallery-container container">
        <div className="property__gallery">
          {room.images.slice(MIN_IMAGE_COUNT, MAX_IMAGE_COUNT).map((image) => (
            <div className="property__image-wrapper" key={image}>
              <img className="property__image" src={image} alt="Studio" />
            </div>)
          )}
        </div>
      </div>
      <div className="property__container container">
        <div className="property__wrapper">
          <div className="property__mark"
            hidden={!room.isPremium}
          >
            <span>Premium</span>
          </div>
          <div className="property__name-wrapper">
            <h1 className="property__name">
              {room.title}
            </h1>
            <button
              className={`property__bookmark-button ${room.isFavorite ? 'property__bookmark-button--active' : ''} button`}
              type="button"
              onClick={handleFavoriteButtonClick}
            >
              <svg className="property__bookmark-icon" width="31" height="33">
                <use xlinkHref="#icon-bookmark"></use>
              </svg>
              <span className="visually-hidden">To bookmarks</span>
            </button>
          </div>
          <div className="property__rating rating">
            <div className="property__stars rating__stars">
              <span style={{ width: countStars }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="property__rating-value rating__value">{room.rating}</span>
          </div>
          <ul className="property__features">
            <li className="property__feature property__feature--entire">
              {room.type}
            </li>
            <li className="property__feature property__feature--bedrooms">
              {room.bedrooms}
            </li>
            <li className="property__feature property__feature--adults">
              {room.maxAdults}
            </li>
          </ul>
          <div className="property__price">
            <b className="property__price-value">&euro;{room.price}</b>
            <span className="property__price-text">&nbsp;night</span>
          </div>
          <div className="property__inside">
            <h2 className="property__inside-title">What&apos;s inside</h2>
            <ul className="property__inside-list">
              {room.goods.map(
                (commodity) => (
                  <li className="property__inside-item" key={commodity}>
                    {commodity}
                  </li>)
              )}
            </ul>
          </div>
          <div className="property__host">
            <h2 className="property__host-title">Meet the host</h2>
            <div className="property__host-user user">
              <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                <img className="property__avatar user__avatar" src={room.host.avatarUrl} width="74" height="74" alt="Host avatar" />
              </div>
              <span className="property__user-name">
                {room.host.name}
              </span>
              <span className="property__user-status">
                {room.host.isPro ? 'Pro' : ''}
              </span>
            </div>
            <div className="property__description">
              <p className="property__text">
                {room.title}
              </p>
            </div>
          </div>
          <ReviewsList comments={comments} currentId={room.id} />
        </div>
      </div>
    </>
  );
}

export default RoomProperty;

