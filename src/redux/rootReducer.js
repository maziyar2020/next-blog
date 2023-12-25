import { combineReducers } from 'redux'
import { userSignInReducer, userSignUpReducer } from './user/userReducer'
import { userPageDataLoader } from './page/pageReducer'

const rootReducer = combineReducers({
    userSignIn: userSignInReducer,
    userSignUp: userSignUpReducer,
    pageData : userPageDataLoader
})

export default rootReducer