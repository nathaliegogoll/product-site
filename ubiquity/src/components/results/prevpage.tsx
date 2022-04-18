import React from 'react'
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import { prevPage } from '../../redux/slices/layoutslice';

const Prevpage = () => {

    const dispatch = useAppDispatch(); 

    const handleClick = () => {
        dispatch(prevPage());
    }

  return (
    <button onClick={handleClick} className='pagination__next'>Previous page</button>
  )
}

export default Prevpage;