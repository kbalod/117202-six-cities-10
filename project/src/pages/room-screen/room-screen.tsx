import { useEffect } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { fetchNeighbourhoodAction, fetchOfferAction, fetchReviewsAction } from '../../store/api-action';
import { changeOfferDataError } from '../../store/errors-data/errors-data';
import { getOfferDataError } from '../../store/errors-data/selectors';
import { getNearby, getOffer} from '../../store/offer-data/selectors';
import Header from '../../components/header/header';
import Map from '../../components/map/map';
import RoomProperty from '../../components/room-property/room-property';
import SimilarHotels from '../../components/similar-hotels-list/similar-hotels';
import LoadingScreen from '../loading-screen/loading-screen';
import { AppRoute } from '../../const';

function RoomScreen () : JSX.Element {
  const dispatch = useAppDispatch();
  const currentId = Number(useParams().id);
  const room = useAppSelector(getOffer);
  const offerDataError = useAppSelector(getOfferDataError);
  const nearby = useAppSelector(getNearby);

  useEffect(() => {
    dispatch(fetchOfferAction(currentId));
    dispatch(fetchReviewsAction(currentId));
    dispatch(fetchNeighbourhoodAction(currentId));
  }, [currentId, dispatch]);

  if (!offerDataError) {
    if (!room || (room?.id !== currentId)) {
      return (<LoadingScreen />);
    }
  } else {
    dispatch(changeOfferDataError(false));
    return (<Navigate to={AppRoute.NotFound} />);
  }

  return(
    <div className="page">
      <Header/>
      <main className="page__main page__main--property">
        <section className="property">
          <RoomProperty room={room} />
          <Map places={nearby?.concat(room)} selectedPoint={room} city={room.city.name} typeMapMain={false}/>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              <SimilarHotels nearby={nearby} cardHotelType={'near-places'}/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}


export default RoomScreen;

