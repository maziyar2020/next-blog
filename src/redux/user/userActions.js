
import http from '@/services/httpService'

import {
    SIGNIN_USERS_FAILURE,
    SIGNIN_USERS_REQUEST,
    SIGNIN_USERS_SUCCESS,
    SIGNUP_USERS_FAILURE,
    SIGNUP_USERS_REQUEST,
    SIGNUP_USERS_SUCCESS,
    SIGNOUT_USERS,
} from './userTypes'

import toast from 'react-hot-toast'


export const SignInUserRequest = () => {
    return {
        type: SIGNIN_USERS_REQUEST
    }
}

export const SignInUserSuccess = (user) => {
    return {
        type: SIGNIN_USERS_SUCCESS,
        payload: user
    }
}

export const SignInUserFailed = (error) => {
    return {
        type: SIGNIN_USERS_FAILURE,
        payload: error
    }
}
// signup
export const SignUpUserRequest = () => {
    return {
        type: SIGNUP_USERS_REQUEST
    }
}

export const SignUpUserSuccess = (user) => {
    return {
        type: SIGNUP_USERS_SUCCESS,
        payload: user
    }
}

export const SignUpUserFailed = (error) => {
    return {
        type: SIGNUP_USERS_FAILURE,
        payload: error
    }
}
// sign out
export const SignOutUser = () => {
    return {
        type: SIGNOUT_USERS
    }
}






export const userSignIn = (data) => {
    return (dispatch) => {
        const storage = localStorage
        dispatch(SignInUserRequest());
        http.post('/user/signin', data, { withCredentials: true })
            .then(({ data }) => {
                // we should hash this local storage into cookie in future
                storage.setItem('loggedIn', data.name)
                toast.success(`${data.name} خوش اومدی`, {
                    icon: '👏',
                    position: 'top-center',
                    style: {
                        borderRadius: '10px',
                        background: 'linear-gradient(159deg,#2d2d3a 0%,#2b2b35 100%)',
                        color: '#fff',
                    },
                })
                dispatch(SignInUserSuccess(data))
            })
            .catch(err => {
                toast.error(err?.response?.data?.message, {
                    position: 'bottom-center',
                    duration: 3000
                })
                dispatch(SignInUserFailed(err.message))
            })
    }
}

export const userSignUp = (data) => {
    return (dispatch) => {
        dispatch(SignUpUserRequest());
        http.post('/user/signup', data, { withCredentials: true })
            .then(({ data }) => {
                toast.success(`${data.name} اکانت شما ساخته شد`, {
                    position: 'top-center'
                })
                // account created
                dispatch(SignUpUserSuccess(data))
                // show welcome message
                toast.success(`${data.name} خوش اومدی`, {
                    icon: '👏',
                    position: 'top-center',
                    duration: 5000
                })
                // dispatch signIn
                dispatch(SignInUserSuccess(data))
            })
            .catch(err => {
                if (err.response.data.message.includes('phone')) {
                    toast.error(`شماره تلفن ثبت شده`,{
                        position: 'bottom-center',
                        duration: 5000
                    })
                }
                if (err.response.data.message.includes('Email')) {
                    toast.error(`ایمیل وجود دارد`,{
                        position: 'bottom-center',
                        duration: 5000
                    })
                }
                dispatch(SignUpUserFailed(err.message.response))
            })
    }
}

export const signOut = () => {
    return (dispatch) => {
        const storage = localStorage
        dispatch(SignOutUser)
        http.get('/user/logout', { withCredentials: true })
            .then(res => {
                // we should hash this local storage into cookie in future
                storage.removeItem('loggedIn')
                toast.success('خارج شدید')
                window.location.href = "/signin"
            })
            .catch(err => {

            })
    }
}

export const loadUserData = (store) => {
    http.get('/user/load', { withCredentials: true })
        .then(({ data }) => {
            store.dispatch(SignInUserSuccess(data))
        })
        .catch(err => {
            console.log(err.message);
        })
}