import React from 'react'
import Searchfield from './searchfield';
import Layoutbuttons from './layoutbuttons';
import Filter from './filter';

const Search = () => {


  return (
      <section className='search'>
         <Searchfield />
        <section className='btn__container'>
            <Layoutbuttons />
            <Filter />
        </section>
      </section>
  )
}

export default Search