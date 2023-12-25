import { useRouter } from 'next/router'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeExpandsHandler } from '../../redux/page/pageActions'



const Layout = ({ children }) => {
    const router = useRouter();
    const dispatch = useDispatch()


    useEffect(() => {
        const exitingFunction = () => dispatch(closeExpandsHandler(false));

        router.events.on("routeChangeStart", exitingFunction);

        return () => {
            router.events.off("routeChangeStart", exitingFunction);
        };
    }, []);

    return <div className="min-h-screen min-w-full  bg-[#191923] relative overflow-hidden md:p-0 lg:p-4 ">
        {/* main page logic base on screen */}
        <div className="
          xl:max-w-screen-2xl
          lg:max-w-screen-lg
          md:max-w-full
          h-full
          min-h-full
          md:h-[calc(100vh - 39px)]
          bg-[#1e1e28]  bg-cover
          relative overflow-hidden
          mx-auto
          main-wrapper">
            {children}
        </div>
    </div>
}

export default Layout