import { NameSpace } from '../../const';
import { Comments } from '../../types/comments';
import { Offer, Offers } from '../../types/offers';
import { State } from '../../types/state';

const getComments = (state: State): Comments | null => state[NameSpace.Offer].comments;
const getNearby = (state: State): Offers | null => state[NameSpace.Offer].nearby;
const getOffer = (state: State): Offer | null => state[NameSpace.Offer].room;

export {getComments, getNearby, getOffer};
