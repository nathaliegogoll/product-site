import React from 'react'
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import { useNavigate } from 'react-router'
import { Device } from '../../ts-utils/interfaces';
import { addDevice } from '../../redux/slices/productslice';

const Table = () => {
    const { devices } = useAppSelector((state) => state.products)
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
    <tr className='table__row' key={device.icon.id} onClick={() => handleClick(device)}>
        <th><img src={imgUrl(index)} alt="device"></img></th>
        <th>{device.line.name}</th>
        <th>{device.product.name}</th>
    </tr>
    ))}
    </>
  )
}

export default Table