import Link from "next/link";
// utils
import { ToPersianDate } from "utilities/PersianDate";
import { PersianNumber } from "utilities/PersianNumber";
// components
import InterActionBtns from "@/components/posts/InterActionBtns";

import PostComment from "@/components/posts/post-comment/PostComment";
// icons

import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io'
import { FaTelegram, FaUser } from 'react-icons/fa'
// services
import http from "@/services/httpService";
// layout
import Layout from "@/containers/Layout";
import { useStore } from "react-redux";
// components
import NavbarDesktop from '@/components/home/NavbarDesktop';
import NavbarPhone from '@/components/home/NavbarPhone';
import Biography from '@/components/home/Biography';
import Overlay from '@/components/home/Overlay';
import BlogSlider from "@/components/swiper/BlogSlider";


const PostSlug = ({ postData }) => {
    const store = useStore()
    const pageData = store.getState().pageData
    const { sidebarExpand, overlay } = pageData

    return (
        <Layout>
            <div className="
            flex 
            flex-nowrap 
            relative"
                style={{ direction: 'ltr' }}
            >
                <Overlay />
                {/* only show + md size */}
                <NavbarDesktop pageName={postData.text} />
                {/* visible on - md size */}
                <NavbarPhone pageName={postData.text} />

                <Biography />

                {/* main content */}
                <div className={`hero relative text-white 
                ${overlay ? 'overflow-hidden' : 'overflow-y-auto'} 
                ${sidebarExpand ? 'drawer' : ''}`}
                >
                    <div className="flex flex-col px-4 pt-6" dir="rtl">
                        {/* post header */}
                        <header className="w-full flex pt-5
                         items-center md:items-start justify-between
                          flex-col md:flex-row rounded p-5
                           mb-10 bg-second">

                            <div className="flex gap-4 w-full justify-between items-center">

                                <div className="relative flex gap-4">
                                    <FaUser className="rounded-full w-20 h-20 ring-2 ring-gray-300" />
                                    {/* <img src='/images/mazi2.jpg'
                                        alt=""
                                        
                                    /> */}
                                    <div className="mt-1">
                                        <p className="text-md font-bold">{postData.author.name}</p>
                                        <p className="text-gray-500 text-sm">{postData.author.biography}</p>
                                        <div className="flex gap-2 text-sm text-gray-500">
                                            <span>خواندن</span>
                                            <span>{PersianNumber(postData.readingTime)}</span>
                                            <span>دقیقه</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-col">

                                    <Link href={`/blogs/${postData.category.title}`}>
                                        <a>
                                            <span className="relative rounded md:p-2 p-1 text-xs md:text-md bg-[#191923]">
                                                {postData.category.title}
                                            </span>
                                        </a>
                                    </Link>

                                    <div className="flex mt-4 text-sm text-center">
                                        <p className="w-full">{ToPersianDate(postData.createdAt)}</p>
                                    </div>

                                    {/* button to save this blog */}

                                    {/* <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
                                        <span className="ml-1 text-xs">
                                            {!postData.isBookmarked ? 'ذخیره' : 'ذخیره شده'}
                                        </span>
                                        {
                                            postData.isBookmarked ?
                                                <Bookmarked className="w-6" /> :
                                                <BookmarkIcon className="w-6" />
                                        }
                                    </button> */}

                                </div>

                            </div>
                        </header>
                        <div className="prose prose-zinc prose-2xl w-full
                        prose-h1:text-[30px] md:prose-h1:text-3xl prose-h1:font-medium
                        prose-h1:text-gray-200
                        prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold
                        prose-h2:text-gray-300
                        prose-p:text-base prose-p:leading-7
                        md:prose-p:text-lg md:prose-p:leading-10
                        prose-p:text-justify
                        prose-img:rounded-xl pb-8 max-w-none">
                            <h1>{postData.title}</h1>
                            <h2>عنوان تستی</h2>
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                            <h2>عنوان تستی</h2>
                            <img src={`${postData.coverImage}`} alt="" />
                            <p>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                        </div>
                        <div className="prose prose-xl max-w-none">
                            <div className="flex md:flex-row items-center justify-between pb-5">
                                <InterActionBtns post={postData} isLarge={true} />
                                <div className="flex items-center md:gap-x-4 gap-x-3 ">
                                    {/* share to telegram */}
                                    <a href={`https://telegram.me/share/url?url=https://fronthooks.ir/posts/${postData.slug}&text=${postData.title}`} >
                                        <FaTelegram className={`fill-gray-400 hover:fill-gray-500 transition-all duration-200 cursor-pointer`} size={32} />
                                    </a>
                                    {/* share to twitter */}
                                    <a href={`https://twitter.com/share/text=${postData.title}&url=https://fronthooks.ir/posts/${postData.slug}`} >
                                        <IoLogoTwitter className={`fill-gray-400 hover:fill-gray-500 transition-all duration-200 cursor-pointer`} size={32} />
                                    </a>
                                    {/* share to linkedIn */}
                                    <a href={`https://linkedin.com/sharing/share-offsite/?url=http://localhost:3000/posts/${postData.hashId}/${postData.slug}`} >
                                        <IoLogoLinkedin className={`fill-gray-400 hover:fill-gray-500 transition-all duration-200 cursor-pointer`} size={32} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="post__divider my-4"></div>
                        <p className="text-xl mb-6">پست های مشابه</p>
                        <div className="swiper__wrap relative text-[#cececa] mt-12">
                            <BlogSlider data={postData.related} noInterActions={true} />
                        </div>
                        <div>
                            <PostComment post={postData} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default PostSlug

export async function getServerSideProps({ query, req }) {

    const { data } = await http.get(`/posts/${query.PostSlug}`, {
        headers: {
            Cookie: req.headers.cookie || ''
        }
    })

    console.log(data.data);

    return {
        props: {
            postData: data.data
        }
    }
}