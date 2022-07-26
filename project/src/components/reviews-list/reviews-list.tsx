import { Comments } from '../../types/comments';
import FormComment from '../form-comment/form-comment';
import ReviewsItem from '../reviews-item/reviews-item';

type CommentsType = {
  comments:Comments
}

function ReviewsList({comments}: CommentsType) : JSX.Element {
  return(
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment)=> <ReviewsItem key={comment.id} comment={comment} />)}
      </ul>
      <FormComment />
    </section>
  );
}

export default ReviewsList;
