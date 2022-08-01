

function SortOptionList({option,setFilterModalPopup,sortType,setSortType}:any): JSX.Element {
  return(
    <li className={`places__option ${sortType === option ? 'places__option--active' : ''}`}
      tabIndex={0}
      onClick={() =>{
        setSortType(option);
        setFilterModalPopup(false);}}
    >
      {option}
    </li>
  );
}

export default SortOptionList;
