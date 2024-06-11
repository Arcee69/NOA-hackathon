export const appUrls = {
    //AUTH ENDPOINTS
    LOGIN_URL: "/api/auth/signin",
    SIGNUP_URL: "/api/auth/register",
    FORGETPASSWORD_URL: "/api/auth/forgot-password",
    RESET_PASSWORD_URL: "/api/auth/reset-password",

    //CREATE CONTEST ENDPOINT
    CREATE_BASIC_INFO_URL: "/api/create",
    CREATE_USER_DETAILS_URL: "/api/create_details",
    CREATE_WINNER_SELECTION_URL: "/api/create_selection",
    CREATE_PRIZES_URL: "/api/create_prizes",
    CREATE_ENTRY_URL: "/api/create_entry",

    GET_ALL_CONTEST_URL: "/api/fetch_all_contest",
    GET_ALL_OPEN_CONTEST_URL: "/api/contest/open",
    GET_LIVE_CONTEST_BY_A_PARTICULAR_CREATOR_URL: "/api/fetch_all_my_live_contest",
    GET_NUMBER_OF_ALL_LIVE_CONTEST_BY_A_PARTICULAR_CREATOR_URL: "/api/number_of_my_live_contest",
    GET_ALL_PARTICIPANT_URL: "/api/fetch_participants",
    GET_ALL_ENTRIES_URL: "/api/fetch_entries",
};

    // VERIFY_OTP_URL: "/api/auth/verify-otp",
    // RESET_PASSWORD_WITH_OTP_URL: "/api/auth/reset-password-otp",
    // SOCIAL_AUTH_URL: "/api/v1/user/social/authenticate", // ?service=google
    // NEWSLETTER_URL: "/api/v1/newsletter/subscribe",