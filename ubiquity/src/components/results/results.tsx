import React from 'react'
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import Table from './table';
import Grid from './grid';
import { devices } from '../../redux/slices/productslice';
import Nextpage from './nextpage';
import Prevpage from './prevpage';
import Noresult from './noresult';

const Results = () => {
  const { list, page } = useAppSelector((state) => state.layout)
  const { devices, amount } = useAppSelector((state) => state.products)
  

  return (
    <>
     {list ? (
      <table className='productcontainer__table'>
        <thead>
          <tr className='table__row'>
            <th>{amount} devices</th>
            <th>PRODUCT LINE</th>
            <th>NAME</th>
          </tr>
        </thead>
        <tbody>
          <Table />
        </tbody>
      </table>
     ) : (
       <section className='productcontainer__grid'>
         <div className='productcontainer__amountofdevices'>{amount} devices</div>
         <Grid />
       </section>
     )}
     {amount === 0 && (
      <Noresult />
    )}
     <span className='pagination'>
       <section className='prevbtn__container'>
        {(page > 0) && (
          <Prevpage />
        )}
       </section>
       <div>{15*page+1}-{15*(page+1) > amount ? amount : 15*(page+1)} of {amount}</div>
       <section className='nextbtn__container'>
          {(amount > 15*(page+1)) && (
            <Nextpage /> 
          )}
       </section>
     </span>
    </>
  )
}

export default Results