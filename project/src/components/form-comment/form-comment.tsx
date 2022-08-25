import { useState ,FormEvent} from 'react';
import { useAppDispatch } from '../../hooks';
import { useAppSelector } from '../../hooks/useAppSelector/useAppSelector';
import { postReviewAction } from '../../store/api-action';
import { changeNewCommentError } from '../../store/errors-data/errors-data';
import { getNewCommentError } from '../../store/errors-data/selectors';
import FormRating from '../form-rating/form-rating';
import { UserComment } from '../../types/comments';
import { ReviewLength } from '../../const';

type FormReviewProps = {
  currentId: number;
};

function FormComment({currentId}: FormReviewProps): JSX.Element {
  const dispatch = useAppDispatch();
  const newCommentError = useAppSelector(getNewCommentError);

  const [formState, setFormState] = useState<UserComment>(
    {
      rating: 0,
      comment: '',
      id: currentId
    }
  );
  const [formDisabled, setFormDisabled] = useState<boolean>(false);

  const handleFieldChange = (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>): void => {
    const {name, value} = evt.target;
    setFormState({...formState, [name]: value});
    dispatch(changeNewCommentError(false));
  };

  const clearNewCommentError = () => setTimeout(() => {
    dispatch(changeNewCommentError(false));
  }, 25000);

  const getRatingFields = () => {
    const ratingFields = [];
    for (let i = 5; i > 0; i--) {
      ratingFields.push(
        <FormRating key={i} index={i} handleFieldChange={handleFieldChange}
          isChecked={Number(formState.rating) === i} isDisabled={formDisabled}
        />
      );
    }
    return ratingFields;
  };

  const onSubmit = async (newReview: UserComment) => {
    await dispatch(postReviewAction(newReview));
    setFormDisabled(false);
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    setFormDisabled(true);
    onSubmit(formState);
    setFormState({...formState, comment: '', rating: 0});
    clearNewCommentError();
  };

  return (
    <form className={`reviews__form form ${newCommentError ? '' : ''}`}
      action="#"
      method="post"
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {getRatingFields()}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        value={formState.comment}
        onChange={handleFieldChange}
        id="comment" name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        disabled={formDisabled}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        {newCommentError ?
          <p style={{ backgroundColor: '#Bf3356'}}className='comment-error'>Ocurred an error during posting your comment :( Please, try one more time.</p> :
          <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
          </p>}
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!(formState.rating > 0
            && formState.comment.length >= ReviewLength.Min
            && formState.comment.length < ReviewLength.Max)}
        >Submit
        </button>
      </div>
    </form>
  );
}

export default FormComment;
