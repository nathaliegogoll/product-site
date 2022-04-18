import React from 'react'
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import { useNavigate } from 'react-router'
import { clearDevice } from '../../redux/slices/productslice';
import backIcon from '../../resources/Back-icon.png'

const Banner = () => {
    const { device } = useAppSelector((state) => state.products)
    const navigate = useNavigate();
    const dispatch = useAppDispatch();  

    const handleClick = () => {
      dispatch(clearDevice())
      navigate('/');
    }

  return (
      <span className='banner'>
        <button className='banner__btn' onClick={() => handleClick()}><img src={backIcon} alt='Go back'></img></button>
        {device.product && (
          <article className='banner__name' >{device.product.name}</article>
        )}
      </span>
  )
}

export default Banner