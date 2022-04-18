import React from 'react'
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import exitIcon from '../../resources/Close-icon.png';
import { toggleFilter, clearPage } from '../../redux/slices/layoutslice';
import { addFilter, clearFilter } from '../../redux/slices/productslice';
import check from '../../resources/Union.png'

const Filter = () => {
  const dispatch = useAppDispatch(); 
  const { filter } = useAppSelector((state) => state.layout);
  const { line } = useAppSelector((state) => state.products)

  const filterOptions = [
    {name: 'UniFi', id: 'unifi-network'}, 
    {name: 'UniFi LTE', id: 'unifi-lte'},
    {name: 'UniFi Protect', id: 'unifi-protect'},
    {name: 'UniFi Access', id: 'unifi-access'},
    {name: 'airMax', id: 'airmax'},
    {name: 'EdgeMax', id: 'edgemax'},
    {name: 'LTU', id: 'ltu'},
    {name: 'mFi', id: 'mfi'}]

  const toggleFilterView = () => {
    dispatch(toggleFilter())
  }

  const addFilterToSearch = (id:string) => {
    dispatch(clearPage())
    dispatch(addFilter(id))
  }

  const removeFilter = () => {
    dispatch(clearFilter())
  }

  return (
    <>
      <>
          <button onClick={toggleFilterView}className='filter__btn'>Filter</button>
        </>
          <>
            <section className={filter ? 'filter__container' : 'hidden'}>
              <span className='filter__top'>
                <div>Filter</div>
                <img src={exitIcon} onClick={toggleFilterView} alt="exit icon" ></img>
              </span>
              <section className='options__container'>
                <div className='options__title'>Product Line</div>
                {filterOptions.map(option => (
                <>
                <section className="options__row" key={option.id} onClick={() =>addFilterToSearch(option.id)}>
                    <input
                    type="radio"
                    id={option.name} 
                    name="option"
                    checked={line === option.id}
                    readOnly
                    />
                    <img src={check} alt="check"></img>
                    <label htmlFor={option.name} className="options__text">{option.name}</label>
                </section>
                </>  
              ))}
              <button onClick={removeFilter} className="options__clear">Clear filter</button>
              </section>
              </section>
          </>
    </>
  )
}

export default Filter