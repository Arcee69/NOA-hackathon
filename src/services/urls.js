export const appUrls = {
    //AUTH ENDPOINTS
    LOGIN_URL: "/api/auth/signin",
    SIGNUP_URL: "/api/auth/register",
    FORGETPASSWORD_URL: "/api/auth/forgot-password",
    RESET_PASSWORD_URL: "/api/auth/reset-password",

    //CONTEST ENDPOINT
    CREATE_CONTEST_URL: "/api/contest/create",
    CREATE_PRIZES_URL: "/api/prizes/create",
    GET_ALL_CONTEST_URL: "/api/contest",
    GET_ALL_OPEN_CONTEST_URL: "/api/contest/open",
    GET_LIVE_CONTEST_BY_A_PARTICULAR_CREATOR_URL: "/api/fetch_all_my_live_contest",
    GET_NUMBER_OF_ALL_LIVE_CONTEST_BY_A_PARTICULAR_CREATOR_URL: "/api/number_of_my_live_contest",
    GET_ALL_PARTICIPANT_URL: "/api/fetch_participants",

    //QUIZ ENDPOINT
    CREATE_QUIZ_URL: "/api/quizzes/create",
    GET_ALL_QUIZ_URL: "/api/quizzes",
    GET_QUIZ_OVERVIEW_BY_ID_URL: "/api/quizzes/overview",
    GET_PARTICIPANT_URL: "/api/questions/participants",

    //QUESTIONS ENDPOINT
    CREATE_QUESTIONS_URL: "/api/questions/create",

    //ENTRIES ENDPOINT
    GET_ALL_ENTRIES_BY_ID_URL: "/api/entry/",

    //ADMIN ENDPOINT
    CREATE_ADMIN_URL: "/api/user/register-admin",
    ENABLE_DISABLE_ADMIN_URL: "/api/user/enable-disable",

    //ANALYTICS ENDPOINT
    GET_ANALYTICS: "/api/analytics",

    //ADMIN ENDPOINT
    GET_USERS: "/api/user/all",

    //PROFILE ENDPOINT
    UPDATE_PROFILE_URL: "/api/user/update",
    UPDATE_PASSWORD_URL: "/api/user/change-password",
    FETCH_PROFILE_URL: '/api/user'

};