import { getTitle } from '../../utils';

type FormRatingProps = {
    index: number;
    isChecked: boolean;
    isDisabled: boolean;
    handleFieldChange: (evt: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void;
  }

function FormRating({isChecked, handleFieldChange, index, isDisabled}: FormRatingProps): JSX.Element {

  return (
    <>
      <input
        className="form__rating-input visually-hidden"
        name="rating"
        value={index} id={`${index}-stars`}
        type="radio"
        onChange={(evt) => {handleFieldChange(evt);}}
        checked={isChecked}
        disabled={isDisabled}
      />
      <label htmlFor={`${index}-stars`} className="reviews__rating-label form__rating-label" style={isDisabled ? {pointerEvents: 'none'} : {}} title={getTitle(index)}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </>
  );
}

export default FormRating;
