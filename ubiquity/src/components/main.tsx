import React from 'react'
import { Header, Search, Results } from '.';
import { useAppDispatch, useAppSelector } from '../ts-utils/hooks';
import { fetchProducts } from '../redux/slices/productslice';
import { useEffect } from 'react';

const Main = () => {
    const dispatch = useAppDispatch();

    const { loading, search, line } = useAppSelector((state) => state.products)
    const { page } = useAppSelector((state) => state.layout)
  
    useEffect(() => {
      dispatch(fetchProducts({value: search, page: page, line: line}))
    }, [search, page, dispatch, line])
  
  return (
    <>
      <Header /> 
      <Search /> 
    {loading ? (
      <div>loading products...</div>
      ) : (
      <Results />
    )}
    </>
  )
}

export default Main