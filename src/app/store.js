import { combineReducers, configureStore } from "@reduxjs/toolkit"
import storage from 'redux-persist/lib/storage';
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

import loginReducer from "../features/auth/loginSlice";
import signUpReducer from "../features/auth/signUpSlice";
import allContestReducer from "../features/board/dashboard/allContestSlice";
import allFeedDataReducer from "../features/board/dashboard/allFeedDataSlice";
import allParticularContestReducer from "../features/board/dashboard/allParticularContestSlice";
import basicInfoReducer from "../features/board/createCampain/photoContest/basicInfoSlice";
import userDetailsReducer from "../features/board/createCampain/photoContest/userDetailsSlice";
import winnerSelectionReducer from "../features/board/createCampain/photoContest/winnerSelectionSlice";
import prizesReducer from "../features/board/createCampain/photoContest/prizesSlice";
import entryReducer from "../features/board/createCampain/photoContest/entrySlice";


    const persistConfig = {
        key: 'root',
        storage,
    };

    const rootReducer = combineReducers({
        userLogin: loginReducer,
        userSignUp: signUpReducer,
        allContest: allContestReducer,
        allFeedData: allFeedDataReducer,
        allParticularContest: allParticularContestReducer,
        basicInfo: basicInfoReducer,
        userDetails: userDetailsReducer,
        winnerSelection: winnerSelectionReducer,
        prizes: prizesReducer,
        entry: entryReducer
    });
  
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    export const store = configureStore({
        reducer: persistedReducer,
        middleware: [thunk]
    });

export const persistor = persistStore(store)

