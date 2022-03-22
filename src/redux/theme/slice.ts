import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../app/store";
import storage from 'local-storage-fallback';


const getInitialTheme = (): boolean => {
    const savedTheme = storage.getItem("theme__dark");
    console.log(savedTheme);
    return savedTheme ? JSON.parse(savedTheme) : true;
}


const initialState = {
    isDark: getInitialTheme(),
};


export const themeSlice = createSlice({
    name: 'blogposts',
    initialState,
    reducers: {
        switchTheme: (state, action: PayloadAction<boolean>) => {
            state.isDark = action.payload;
            storage.setItem("theme__dark", JSON.stringify(state.isDark));
            console.log(state.isDark)
        }
    }
});


const { actions, reducer } = themeSlice;

export const { switchTheme } = actions;

export default reducer;
