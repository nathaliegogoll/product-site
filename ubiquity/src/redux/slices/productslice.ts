import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit"; 
import { Products, Search, Device } from '../../ts-utils/interfaces';

export type FetchProducts = (path: string) => Promise<any>;

export const fetchProducts = createAsyncThunk( 
    'fetchProducts', 
    async (searchParams:Search, thunkAPI) => { 
        try {
            const data = await fetch(`http://localhost:8080/${searchParams.page}/${searchParams.line}?search=${searchParams.value}`); 
            const products = await data.json();
            return products;

        } catch (err) {
            console.log(err);
        }
    } 
  ) 

  export const fetchOneProduct = createAsyncThunk( 
    'fetchOneProduct', 
    async (id:string, thunkAPI) => { 
        try {
            const data = await fetch(`http://localhost:8080/id/${id}`); 
            const product = await data.json();
            return product;

        } catch (err) {
            console.log(err);
        }
    } 
  ) 

const initialState = { devices: [], device: {} as Device, search: '', error: false, loading: true, amount: 0, line: 'all' } as Products;

export const devices = createSlice( { 
      name:'devices', 
      initialState,
      reducers: {
          addSearch: (state : Products, action) => {
            state.search = action.payload;
          },
          addDevice: (state: Products, action) => {
              state.device = action.payload;
          },
          clearDevice: (state: Products) => {
            state.device = {} as Device;
            state.loading = true;
        },
        addFilter: (state: Products, action) => {
          state.line = action.payload;
        },
        clearFilter: (state: Products) => {
          state.line = 'all';
        }
      }, 
      extraReducers: (builder) => {
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.devices = action.payload.devices;
        state.amount = action.payload.amount;
        })
        builder.addCase(fetchProducts.rejected, (state) => {
        state.loading = false;
        state.error = true;
        })
        builder.addCase(fetchOneProduct.fulfilled, (state, action) => {
        state.device = action.payload;
        state.loading = false;
        })  
        builder.addCase(fetchOneProduct.rejected, (state) => {
        state.loading = false;
        state.error = true; 
        }) 
      }
  }); 
  
export const { addSearch, addDevice, clearDevice, addFilter, clearFilter } = devices.actions;
export default devices.reducer;