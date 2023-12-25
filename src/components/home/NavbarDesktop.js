import Link from 'next/link'
// router
import { useRouter } from 'next/router'
// hooks
import { useEffect, useState } from 'react'
// state managment
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from 'src/redux/user/userActions'
import {
    closeExpandsHandler,
    overlay,
    sidebarExpandHandler
} from 'src/redux/page/pageActions'

const NavbarDesktop = ({ pageName }) => {
    const userInfo = useSelector(state => state.userSignIn)
    const pageInfo = useSelector(state => state.pageData)
    const { sidebarExpand } = pageInfo
    const { user } = userInfo

    const [disableHome, setDisableHome] = useState(false)
    const [disableSignIn, setDisableSignIn] = useState(false)
    const [disableSignUp, setDisableSignUp] = useState(false)
    const [disableBlogs, setDisableBlogs] = useState(false)

    const dispatch = useDispatch()

    const router = useRouter()

    useEffect(() => {
        switch (router.pathname) {
            case '/':
                setDisableHome(true)
            case '/signin':
                setDisableSignIn(true)
            case '/signup':
                setDisableSignUp(true)
            case '/blogs':
                setDisableBlogs(true)
            default:
                setDisableHome(false)
                setDisableSignIn(false)
                setDisableSignUp(false)
                setDisableBlogs(false)
                break;
        }

    }, [])

    const handleClickSidebar = () => {
        dispatch(closeExpandsHandler(false))
        if (sidebarExpand) {
            dispatch(sidebarExpandHandler(false))
            dispatch(overlay(false))
        } else {
            dispatch(sidebarExpandHandler(true))
            dispatch(overlay(true))
        }
    }


    return (
        <nav className={`navbar absolute top-0 hidden lg:flex ${sidebarExpand ? 'navbar-drawed' : ''}`}>
            {/* navbar btn */}
            <div className="navbar__collapse h-full w-full flex absolute top-0 right-0" dir="ltr">
                <div className={`navbar__collapse-btn cursor-pointer ${sidebarExpand ? "active" : ''}`} onClick={handleClickSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* navbar page text */}
            <div className={`navbar__text absolute ${sidebarExpand ? 'drawed' : ''}`}>
                <p className='relative top-0 left-0 text-center'>{pageName}</p>
            </div>

            {/* navbar list */}
            <ul className="navbar__list h-full w-full flex justify-center items-center text-[#8c8c8e] flex-col p-6" style={{ direction: "rtl" }}>
                <Link href="/" >
                    <a className={` flex items-center justify-start w-full h-9 ${sidebarExpand ? 'list-active' : ''} ${disableHome ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                        صفحه اصلی
                    </a>
                </Link>
                <Link href="/blogs">
                    <a className={` flex items-center justify-start w-full h-9 ${sidebarExpand ? 'list-active' : ''} ${disableBlogs ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                        وبلاگ
                    </a>
                </Link>
                <div className="my-4 w-full">
                    <div className={`navbar-divider ${sidebarExpand ? 'navbar-divider-active' : ''}`}></div>
                </div>
                {user ?
                    <>
                        <li className={` flex items-center justify-start w-full h-9 ${sidebarExpand ? 'list-active' : ''}`}>{user.name}</li>
                        <li className={` flex items-center justify-start w-full h-9 text-red-500 ${sidebarExpand ? 'list-active' : ''}`}
                            onClick={() => dispatch(signOut())} >
                            خروج
                        </li>
                    </>
                    :
                    <>
                        <Link href="/signin">
                            <a className={` flex items-center justify-start w-full h-9 ${sidebarExpand ? 'list-active' : ''} ${disableSignIn ? 'pointer-events-none' : 'pointer-events-auto'}`}>
                                ورود کاربر
                            </a>
                        </Link>
                        <Link href="/signup">
                            <a className={` flex items-center justify-start w-full h-9 ${sidebarExpand ? 'list-active' : ''} ${disableSignUp ? 'pointer-events-none' : 'pointer-events-auto'} `}>
                                ثبت نام
                            </a>
                        </Link>

                    </>
                }
            </ul>
        </nav>
    )
}

export default NavbarDesktop
