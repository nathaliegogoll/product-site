import React from 'react'
import searchIcon from '../../resources/Search-icon.png';
import exitIcon from '../../resources/Close-icon.png';
import { useState, useEffect } from 'react';
import { addSearch } from '../../redux/slices/productslice';
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import { clearPage } from '../../redux/slices/layoutslice';

const Searchfield = () => {
  const { search } = useAppSelector((state) => state.products)
  const [value, setValue] = useState(search);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch((clearPage()))
    dispatch(addSearch(value));
  }, [value, dispatch])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }


  const handleRemove = () => {
    setValue(' ');
  }

  return (
    <div className='search__field'>
        <div className='search__div'>
        <img src={searchIcon} alt="search icon"></img>
        <input
        type="text"
        placeholder='Search'
        value={value}
        onChange={e => handleChange(e)}
        ></input>
        </div>
        <img src={exitIcon} alt="exit icon" onClick={handleRemove}></img>
    </div>
  )
}

export default Searchfield