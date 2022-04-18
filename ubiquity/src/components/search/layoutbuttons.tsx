import React from 'react'
import gridView from '../../resources/gridview.png';
import gridViewActive from '../../resources/gridview_active.png';
import listView from '../../resources/listview.png';
import listViewActive from '../../resources/listview_active.png'
import { useAppDispatch, useAppSelector } from '../../ts-utils/hooks';
import { toggleLayout } from '../../redux/slices/layoutslice';

const Layoutbuttons = () => {
    const { list, grid } = useAppSelector((state) => state.layout)
    const dispatch = useAppDispatch();

    const isListActive = () => {
        if (list) {
            return listViewActive;
        }
        return listView;
    }

    const isGridActive = () => {
        if (grid) {
            return gridViewActive;
        }
        return gridView; 
    }

    const togglePageLayout = () => {
        dispatch(toggleLayout());
    }

  return (
    <>
        <button className='list__btn' onClick={() => togglePageLayout()}><img src={isListActive()} alt="listview"></img></button>
        <button className='grid__btn' onClick={() => togglePageLayout()}><img src={isGridActive()} alt="gridview"></img></button>
    </>
  )
}

export default Layoutbuttons;