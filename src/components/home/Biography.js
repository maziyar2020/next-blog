// utils
import ChartJs from '../../../utilities/ChartJs'
import CountUp from 'react-countup';
// styled components
import ProgressBar from '@/components/utils/progress/ProgressBar';
// icons and images
import { FaInstagram, FaTelegramPlane, FaTwitter } from 'react-icons/fa';
import { TiTick } from "react-icons/ti";
// redux
import { useDispatch, useSelector } from 'react-redux';
import { bioExpandHandler, navbarStatusChange, overlay } from 'src/redux/page/pageActions';


const Biography = () => {
    const pageData = useSelector(state => state.pageData)
    const { bioExpand } = pageData
    const dispatch = useDispatch()

    const handleToggleSidebar = () => {
        dispatch(navbarStatusChange(false))
        if (bioExpand) {
            dispatch(bioExpandHandler(false))
            dispatch(overlay(false))
        } else {
            dispatch(bioExpandHandler(true))
            dispatch(overlay(true))
        }
    }



    return (
        <div
            className={`bg-[#20202a] 
            biography relative
            px-4 lg:flex
            ${bioExpand ? 'biography-active' : ''}`}
            dir="ltr"
        >
            <div className={`biography__shape absolute
                top-0 flex lg:hidden
                ${bioExpand ? 'biography__shape-active' : ''}`}
            >
                <div className="nav-phone__collapse-btn"
                    onClick={handleToggleSidebar}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            {/* sidebar content */}
            <div className="px-4 w-[258px]">
                <div className="
                    biography__header 
                    absolute left-0 top-0
                    flex flex-col items-center"
                >
                    <div className="biography__header-image relative">
                        <img
                            src="/images/mazi2.jpg"
                            className='w-[90px] h-[90px]
                            rounded-full ring-2
                            ring-slate-800'
                        />
                        <div
                            className="bubble absolute
                            right-0 bottom-0
                            w-4 h-4 rounded-full
                            bg-[#ffc107]"
                        />
                    </div>
                    <p className="text-sm text-[#fafafa] mt-4">مازیار موسوی</p>
                    <div className="text-white mt-3">
                        <p className="text-xs mb-1 text-gray-400">مید لول دولوپر</p>
                        <p className="text-sm text-gray-400 ">توسعه دهنده فرانت</p>
                    </div>
                </div>
                <div
                    className="biography__detail 
                        text-white  overflow-x-hidden
                        outline-none"
                >
                    {/* developer info */}
                    <ul className="biography__info py-4 text-[#c8c8ce] flex-col ">
                        <li className="biography__info-item 
                            flex flex-row 
                            items-center justify-between mb-2">
                            <span className="text-[#cacaca]" >ایرانی</span>
                            <p className="text-white">: ملیت</p>
                        </li>
                        <li className="biography__info-item 
                            flex flex-row 
                            items-center justify-between
                            mb-2">
                            <span className="text-[#cacaca]" >اهواز</span>
                            <p className="text-white">: شهر</p>
                        </li>
                        <li className="biography__info-item 
                            flex flex-row 
                            items-center justify-between
                            mb-2">
                            <span className="text-[#cacaca]" >09044900328</span>
                            <p className="text-white">: تلفن</p>
                        </li>
                        <li className="biography__info-item 
                            flex flex-row 
                            items-center justify-between
                            mb-2">
                            <span className="text-[#cacaca]" >26</span>
                            <p className="text-white">: سن</p>
                        </li>
                    </ul>
                    <div className="sidebar-divider" />
                    <div className="bio__chart flex items-center justify-between pt-5 pb-6">
                        {/* farsi chart */}
                        <div className="flex flex-col relative items-center justify-center">
                            <div className='absolute top-7 text-xs ml-1' >
                                <CountUp end={100} duration={3.5} /> %
                            </div>
                            <ChartJs dataNum={[100, 0]} duration={2500} />
                            <h5 className="mt-2 text-xs">فارسی</h5>
                        </div>
                        {/* english chart */}
                        <div className="flex flex-col relative items-center justify-center">
                            <div className='absolute top-7 text-xs ml-1'>
                                <CountUp end={70} duration={3} /> %
                            </div>
                            <ChartJs dataNum={[70, 30]} duration={2000} />
                            <h5 className="mt-2 text-xs">انگلیسی</h5>
                        </div>
                        {/* arabic chart */}
                        <div className="flex flex-col relative items-center justify-center">
                            <div className='absolute top-7 text-xs ml-0.5'>
                                <CountUp end={40} duration={3.5} /> %
                            </div>
                            <ChartJs dataNum={[40, 60]} duration={2500} />
                            <h5 className="mt-2 text-xs">عربی</h5>
                        </div>
                    </div>
                    {/*  */}
                    <div className="sidebar-divider" />
                    {/*  */}
                    <div className="bio__tech flex flex-col py-8 pb-7">
                        {/* html chart */}
                        <div className="flex flex-col mb-4">
                            <div
                                className="flex flex-nowrap
                                items-center justify-between
                                text-[#cacace]"
                            >
                                <p className="text-xs">Html</p>
                                <div className="flex mb-1 text-sm">
                                    <CountUp end={90} duration={1.5} />
                                    <p className='ml-1'>%</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <ProgressBar value={90} duration={1.5} />
                            </div>
                        </div>
                        {/* css chart */}
                        <div className="flex flex-col mb-4">
                            <div className="flex flex-nowrap
                             items-center justify-between
                            text-[#cacace]"
                            >
                                <p className="text-xs ">Css</p>
                                <div className="flex mb-1 text-sm">
                                    <CountUp end={85} duration={2} />
                                    <p className='ml-1'>%</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <ProgressBar value={85} duration={2} />
                            </div>
                        </div>
                        {/* js chart */}
                        <div className="flex flex-col mb-4">
                            <div className="flex flex-nowrap
                                items-center justify-between
                              text-[#cacace]"
                            >
                                <p className="text-xs">Javascript</p>
                                <div className="flex mb-1 text-sm">
                                    <CountUp end={75} duration={2.5} />
                                    <p className='ml-1'>%</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <ProgressBar value={75} duration={2.5} />
                            </div>
                        </div>
                        {/* React */}
                        <div className="flex flex-col mb-4">
                            <div className="flex flex-nowrap
                                items-center justify-between
                                text-[#cacace]"
                            >
                                <p className="text-xs">React</p>
                                <div className="flex mb-1 text-sm">
                                    <CountUp end={65} duration={3} />
                                    <p className='ml-1'>%</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <ProgressBar value={65} duration={3} />
                            </div>
                        </div>
                        {/* Vue */}
                        <div className="flex flex-col mb-4">
                            <div className="flex flex-nowrap items-center justify-between text-[#cacace]">
                                <p className="text-xs">Vue</p>
                                <div className="flex mb-1 text-sm">
                                    <CountUp end={60} duration={4} />
                                    <p className='ml-1'>%</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <ProgressBar value={60} duration={4} />
                            </div>
                        </div>
                        {/* nuxt */}
                        <div className="flex flex-col mb-4">
                            <div className="flex flex-nowrap items-center justify-between text-[#cacace]">
                                <p className="text-xs">Nuxt</p>
                                <div className="flex mb-1 text-sm">
                                    <CountUp end={60} duration={3} />
                                    <p className='ml-1'>%</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <ProgressBar value={60} duration={2.5} />
                            </div>
                        </div>
                        {/* next */}
                        <div className="flex flex-col mb-4">
                            <div className="flex flex-nowrap items-center justify-between text-[#cacace]">
                                <p className="text-xs">Next</p>
                                <div className="flex mb-1 text-sm">
                                    <CountUp end={80} duration={3.5} />
                                    <p className='ml-1'>%</p>
                                </div>
                            </div>
                            <div className="w-full">
                                <ProgressBar value={80} duration={3} />
                            </div>
                        </div>
                    </div>
                    {/*  */}
                    <div className="sidebar-divider" />
                    {/*  */}
                    <div className="pt-5 pb-2 flex flex-col ">
                        <div className="text-[#ffc107] flex flex-row items-center mb-3">
                            <TiTick className="fill-current stroke-current mr-2" />
                            <p className='text-sm text-[#8c8c8e]'>Tailwind , Materialize</p>
                        </div>
                        <div className="text-[#ffc107] flex flex-row items-center mb-3">
                            <TiTick className="fill-current stroke-current mr-2" />
                            <p className='text-sm text-[#8c8c8e]'>Bootstrap , BEM</p>
                        </div>
                        <div className="text-[#ffc107] flex flex-row items-center mb-3">
                            <TiTick className="fill-current stroke-current mr-2" />
                            <p className='text-sm text-[#8c8c8e]'>Restful api , Fake Api</p>
                        </div>
                        <div className="text-[#ffc107] flex flex-row items-center mb-3">
                            <TiTick className="fill-current stroke-current mr-2" />
                            <p className='text-sm text-[#8c8c8e]'>Async javascript , EcmaScript</p>
                        </div>
                        <div className="text-[#ffc107] flex flex-row items-center mb-3">
                            <TiTick className="fill-current stroke-current mr-2" />
                            <p className='text-sm text-[#8c8c8e]'>Git Knowleadge , GitLab</p>
                        </div>
                    </div>
                    {/*  */}
                    <div className="sidebar-divider" />
                    {/* biography bottom */}
                    <div className="biography__footer relative
                        lg:absolute
                        bottom-0 left-0
                        flex flex-row
                        items-center justify-center">
                        <div className="biography__footer-item text-[#8c8c8e] flex gap-8">
                            <FaInstagram size={20} className='stroke-current' />
                            <FaTwitter size={20} className='stroke-current' />
                            <FaTelegramPlane size={20} className='stroke-current' />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Biography
