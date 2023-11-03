import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { retrieveServices} from "../../api";
import { retrievePopularServices } from "../../api";


export const getServices = createAsyncThunk('/services/getServices', async (arg, {rejectWithValue}) => {

    try {
        const {data} = await retrieveServices()
        
        console.log(data.data)
        return data.data
    } catch (error) {
        console.log(error)
    }
})

export const getPopularServices = createAsyncThunk('/services/getPopularServices', async (arg, {rejectWithValue}) => {
    try {
        const {data} = await retrievePopularServices()
        console.log(data.data)
        return data.data
    } catch (error) {
        console.log(error)
    }
})

const options = {
    name: 'services',
    initialState: {
        services: [],
        popularServices: [],
        isLoadingServices: false,
        failedToLoadServices:false,
        isLoadingPopularServices: false,
        failedToLoadPopularServices: false 
    },
    extraReducers: {
        [getServices.pending]: (state, {payload}) => {
            state.isLoadingServices = true;
            state.failedToLoadServices = false
        },
        [getServices.fulfilled]: (state, {payload}) => {
            state.isLoadingServices = false;
            state.services = [...payload]
            state.failedToLoadServices = false
        },
        [getServices.rejected]: (state, {payload}) => {
            state.isLoadingServices = false;
            statee.failedToLoadServices = false
        },
        [getPopularServices.pending]: (state, {payload}) => {
            state.isLoadingPopularServices = true
            state.failedToLoadPopularServices = false
        },
        [getPopularServices.fulfilled]: (state, {payload}) => {
            state.isLoadingPopularServices = false
            // console.log(payload)
            state.popularServices = [...payload]
            state.failedToLoadPopularServices = false
        },
        [getPopularServices.rejected]: (state, action) => {
            state.isLoadingPopularServices = false,
            state.failedToLoadPopularServices = false
        }
    }
}

const servicesSlice = createSlice(options)

export const selectServices = state => state.services.services
export const selectPopularServices = state => state.services.popularServices

export default servicesSlice.reducer