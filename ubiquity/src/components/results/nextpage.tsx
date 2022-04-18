import React from 'react'
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import { nextPage } from '../../redux/slices/layoutslice';

const Nextpage = () => {

    const dispatch = useAppDispatch(); 

    const handleClick = () => {
        dispatch(nextPage());
    }

  return (
    <button onClick={handleClick} className='pagination__next'>Next page</button>
  )
}

export default Nextpage