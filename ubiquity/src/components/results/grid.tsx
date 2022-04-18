import React from 'react'
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import { Device } from '../../ts-utils/interfaces';
import { addDevice } from '../../redux/slices/productslice';
import { useNavigate } from 'react-router'

const Grid = () => {
const { devices } = useAppSelector((state) => state.products);
const dispatch = useAppDispatch();
const navigate = useNavigate(); 

const imgUrl = (index: number): string => {
    const dev = devices[index];
    return `https://static.ui.com/fingerprint/ui/icons/${dev.icon.id}_257x257.png`
}    

const handleClick = async (device: Device) => {
  dispatch(addDevice(device));
  navigate(`/product/${device.icon.id}`);
}

  return (
    <>
    {devices.map((device, index) => (
    <section className='grid__card' key={device.icon.id} onClick={() => handleClick(device)}>
        <img className="grid__image"src={imgUrl(index)} alt="device"></img>
        <section className='grid__text'>
            <article className='grid__product' >{device.product.name}</article>
            <article className='grid__line' >{device.line.name}</article>
        </section>
    </section>
    ))}
    </>
  )
}

export default Grid