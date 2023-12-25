import {
    SIGNIN_USERS_FAILURE,
    SIGNIN_USERS_SUCCESS,
    SIGNIN_USERS_REQUEST,
    SIGNUP_USERS_FAILURE,
    SIGNUP_USERS_REQUEST,
    SIGNUP_USERS_SUCCESS
} from './userTypes'

const store = {
    loading: false,
    user: null,
    error : null
}


export const userSignInReducer = (state = store, action) => {
    switch (action.type) {
        case SIGNIN_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        // case2
        case SIGNIN_USERS_REQUEST:
            return {
                loading: true
            }
        // case 3
        case SIGNIN_USERS_FAILURE:
            return {
                user: null,
                error: action.payload
            }

        default:
            return state
    }
}

export const userSignUpReducer = (state = {}, action) => {
    switch (action.type) {
        case SIGNUP_USERS_SUCCESS:
            return {
                loading: false,
                user: action.payload,
            }
        // case2
        case SIGNUP_USERS_REQUEST:
            return {
                loading: true
            }
        // case 3
        case SIGNUP_USERS_FAILURE:
            return {
                user: null,
                error: action.payload
            }

        default:
            return state
    }
}