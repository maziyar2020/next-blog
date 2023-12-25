import {
    NAVPHONE_EXPAND,
    BIO_EXPAND,
    EXPANDS_CLOSE,
    SIDEBAR_EXPAND,
    OVERLAY

} from './pageTypes'

const initState = {
    navExpand: false,
    sidebarExpand: false,
    bioExpand: false,
    overlay : false
}

export const userPageDataLoader = (state = initState, action) => {
    switch (action.type) {
        case NAVPHONE_EXPAND:
            return {
                ...state,
                navExpand: action.payload
            }
        case BIO_EXPAND:
            return {
                ...state,
                bioExpand: action.payload
            }
        case SIDEBAR_EXPAND:
            return {
                ...state,
                sidebarExpand: action.payload
            }
        case EXPANDS_CLOSE:
            return {
                ...state,
                navExpand: action.payload,
                sidebarExpand: action.payload,
                bioExpand: action.payload,
                overlay : action.payload
            }
        case OVERLAY:
            return {
                ...state,
                overlay : action.payload
            }

        default:
            return state
    }
}