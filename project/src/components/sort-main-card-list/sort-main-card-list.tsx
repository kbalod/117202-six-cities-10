import { useState } from 'react';
import { SortType } from '../../const';
import SortOptionList from '../sort-option-list/sort-option-list';

type SortListType = {
  sortType:string;
  setSortType: (sortType: string)=> void;
}

function SortMainCardList ({sortType,setSortType}: SortListType): JSX.Element {
  const [filterModalPopup,setFilterModalPopup] = useState(false);

  return(
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0} onClick={()=> setFilterModalPopup(!filterModalPopup)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${filterModalPopup && 'places__options--opened'}`}>
        {Object.values(SortType).map((option) =>
          (
            <SortOptionList
              key={option}
              option={option}
              setFilterModalPopup={setFilterModalPopup}
              sortType={sortType}
              setSortType={setSortType}
            />)
        )}
      </ul>
    </form>
  );
}

export default SortMainCardList;
