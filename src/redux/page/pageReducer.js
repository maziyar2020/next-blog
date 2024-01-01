import {
    NAVPHONE_EXPAND,
    BIO_EXPAND,
    EXPANDS_CLOSE,
    SIDEBAR_EXPAND,
    OVERLAY,
    SET_PAGE_QUERY

} from './pageTypes'

const initState = {
    navExpand: false,
    sidebarExpand: false,
    bioExpand: false,
    overlay: false,
    blogQuery: [
        { label: 'جدید ترین', name: 'newest' },
        { label: 'پر بازدیدترین', name: 'most' },
        { label: 'محبوب ترین', name: 'popular' },
    ],
    selectedQuery: 'newest'
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
                overlay: action.payload
            }
        case OVERLAY:
            return {
                ...state,
                overlay: action.payload
            }
        case SET_PAGE_QUERY:
            return {
                ...state,
                selectedQuery: action.payload
            }

        default:
            return state
    }
}