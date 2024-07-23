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
import prizesReducer from "../features/board/createCampain/photoContest/prizesSlice";
import getAnalyticsReducer from "../features/board/analytics/getAnalyticsSlice";
import getAdminReducer from "../features/board/admin/getAdminSlice";
import createContestReducer from "../features/board/createCampain/photoContest/createContestSlice";
import uploadPhotoReducer from "../features/board/createCampain/photoContest/uploadPhotoSlice";
import getEntriesByIdReducer from "../features/board/entries/getEntriesByIdSlice";
import updatePasswordReducer from "../features/board/settings/updatePasswordSlice";
import updateProfileReducer from "../features/board/settings/updateProfileSlice";
import getProfileReducer from "../features/board/settings/getProfileSlice";
import createQuizReducer from "../features/board/quiz/createQuizSlice";
import getTransactionReducer from "../features/board/transaction/getTransactionSlice";


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
        prizes: prizesReducer,
        createContest: createContestReducer,
        analytics: getAnalyticsReducer,
        admins: getAdminReducer,
        uploadPic: uploadPhotoReducer,
        entriesById: getEntriesByIdReducer,
        updatePassword: updatePasswordReducer,
        updateProfile: updateProfileReducer,
        getProfile: getProfileReducer,
        createQuiz:createQuizReducer,
        allTransactions: getTransactionReducer
    });
  
    const persistedReducer = persistReducer(persistConfig, rootReducer)

    export const store = configureStore({
        reducer: persistedReducer,
        middleware: [thunk]
    });

export const persistor = persistStore(store)

