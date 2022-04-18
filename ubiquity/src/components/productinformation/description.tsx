import React from 'react';
import { useLocation } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../ts-utils/hooks';
import { useEffect } from 'react';
import { Header } from '../index'
import Banner from './banner'
import { fetchOneProduct } from '../../redux/slices/productslice';

export const Description = () => {
  const { device, loading } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const location = useLocation(); 


  useEffect(() => {
    dispatch(fetchOneProduct(location.pathname.replace('/product/', ''))); 
  }, [dispatch, location.pathname])

  const imgUrl = (): string => {
      return `https://static.ui.com/fingerprint/ui/icons/${device.icon.id}_257x257.png`
  }

  return (
    <>
    <Header /> 
    <Banner />
    {loading ? (
      <>
      <div>Loading product data...</div>
      </>
    ) : (
    <>
    <section className='description__card' >
        <img className="description__image"src={imgUrl()} alt="device"></img>
        <section className='description__text'>
            <article className='description__productline' >
              <div>Productline</div>
              <div>{device.line.name}</div>
            </article>
            <article className='description__Id' >
              <div>ID</div>
              <div>{device.line.id}</div>
            </article>
            <article className='description__name' >
              <div>Name</div>
              <div>{device.product.name}</div>
            </article>
            <article className='description__shortname' >
              <div>Shortname</div>
              <div>{device.shortnames.join(', ')}</div>  
            </article>
            {device.unifi && (
            <>
              {device.unifi.network?.radios?.ng?.maxPower && (
                <article className='description__power' >
                  <div>Max. Power</div>
                  <div>{device.unifi.network.radios.ng.maxPower} W</div>
                </article>
              )}
              {device.unifi.network?.radios?.ng?.maxSpeedMegabitsPerSecond && (
                <article className='description__speed' >
                  <div>Speed</div>
                  <div>{device.unifi.network?.radios?.ng?.maxSpeedMegabitsPerSecond} Mbps</div>
                </article>
              )}
              {device.unifi?.network?.numberOfPorts && (
                <article className='description__ports' >
                  <div>Number of Ports</div>
                  <div>{device.unifi.network.numberOfPorts}</div>
                </article>
              )}
            </>
            )}
        </section>
    </section>
    </>
    )}
    </>
  )
}

export {}; 