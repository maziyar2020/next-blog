import Link from "next/link"
// state management
import { useDispatch, useSelector } from "react-redux"
import {
    closeExpandsHandler,
    navbarStatusChange,
    overlay
} from "src/redux/page/pageActions"
import { signOut } from "src/redux/user/userActions"


const NavbarPhone = ({ pageName }) => {
    const dispatch = useDispatch()
    const pageInfo = useSelector(state => state.pageData)
    const userData = useSelector(state => state.userSignIn)

    const { navExpand, bioExpand } = pageInfo

    const handleClickNavbar = () => {
        dispatch(closeExpandsHandler(false))
        if (navExpand) {
            dispatch(navbarStatusChange(false))
            dispatch(overlay(false))
        } else {
            dispatch(navbarStatusChange(true))
            dispatch(overlay(true))
        }
    }

    return (
        <nav className={`
        fixed nav-phone top-0 right-0
        w-full text-white lg:hidden transition-all
        duration-500 ease-in overflow-hidden
        ${navExpand ? 'h-[240px]' : 'h-[80px]'}
        ${bioExpand ? 'active pointer-events-none' : ''}`}
        >
            <p className={`absolute top-7 right-0 left-0 text-center`}>{pageName}</p>
            <div
                className={`absolute nav-phone__bubble
                h-[80px] w-[80px]
                cursor-pointer
                z-20 right-0 top-0 flex flex-col items-center justify-center ${navExpand ? 'active' : ''}`}
                onClick={handleClickNavbar}
            >
                <span></span>
                <span></span>
            </div>
            <div className="pt-[80px] px-[30px] nav-phone__menu">
                <i className={`relative w-full mb-4 flex`}></i>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 ">
                    <div className="grid md:grid-cols-[repeat(2,1fr)]
                    grid-cols-[repeat(2,1fr)]
                    gap-5
                      items-center justify-center
                       text-center text-sm font-extralight" dir="rtl">

                        <Link href="/">
                            <a className="nav-phone-link rounded w-full h-full p-2 md:p-3 cursor-pointer">
                                صفحه اصلی
                            </a>
                        </Link>
                        <Link href="/blogs">
                            <a className="nav-phone-link rounded w-full h-full p-2 md:p-3 cursor-pointer">
                                بلاگ
                            </a>
                        </Link>
                        {
                            userData?.user ? (
                                <>
                                    <div className="nav-phone-link rounded w-full h-full p-2 md:p-3 cursor-pointer">
                                        {userData?.user.name}
                                    </div>
                                    <div className="nav-phone-link rounded w-full h-full p-2 md:p-3 cursor-pointer text-red-500"
                                        onClick={() => dispatch(signOut())}
                                    >خروج</div>
                                </>
                            ) : (
                                <>
                                    <Link href="/signin">
                                        <a className="nav-phone-link rounded w-full h-full p-2 md:p-3 cursor-pointer">
                                            ورود کاربر
                                        </a>
                                    </Link>
                                    <Link href="/signup">
                                        <a className="nav-phone-link rounded w-full h-full p-2 md:p-3 cursor-pointer">
                                            ثبت نام
                                        </a>
                                    </Link>

                                </>
                            )
                        }

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavbarPhone
