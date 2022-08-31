import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { getAuthorizationStatus } from '../../store/user-data/selectors';
import FormComment from '../form-comment/form-comment';
import ReviewsItem from '../reviews-item/reviews-item';
import { sortRecentToOld } from '../../utils/utils';
import { Comments } from '../../types/comments';
import { AuthorizationStatus } from '../../types/const';
import { CommentValue } from '../../const';

type CommentsType = {
  comments:Comments | null,
  currentId: number,
}

function ReviewsList({comments,currentId}: CommentsType) : JSX.Element {

  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  if(comments) {comments = [...comments].sort(sortRecentToOld).slice(CommentValue.Min,CommentValue.Max);}
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments?.length}</span></h2>
      <ul className="reviews__list">
        {comments?.map((comment)=> <ReviewsItem key={comment.id} comment={comment} />)}
      </ul>
      {authorizationStatus === AuthorizationStatus.Auth ?
        <FormComment currentId={currentId}/>
        :
        '' }
    </section>
  );
}

export default ReviewsList;
