import React from 'react'
import { ClockIcon } from '@heroicons/react/outline'
import Link from 'next/link'
import InterActionBtns from './InterActionBtns'
import { FaUser } from 'react-icons/fa'
const PostList = ({ blogsData, noInterActions }) => {
    return (
        blogsData.map((item, index) => {
            return <div
                key={index}
                className="mb-4 bg-second rounded-md overflow-hidden flex flex-col"
            >
                {/* image */}
                <div className="aspect-w-16 aspect-h-9">
                    <Link href={`/posts/${item.hashId}/${item.slug}`}>
                        <a>
                            <img src={item.coverImage} alt="" className="rounded w-full h-full object-cover object-center cursor-pointer" />
                        </a>
                    </Link>
                </div>
                {/* content */}
                <div className="rounded-none bg-second p-4 flex flex-col w-full justify-between flex-1">
                    <Link href={`/posts/${item.hashId}/${item.slug}`}>
                        <a className="mb-2 font-medium cursor-pointer text-[#fff]">{item.title}</a>
                    </Link>
                    <div className="flex flex-col">
                        <div className="flex items-center justify-between p-2">
                            <div className="flex items-center">
                                <FaUser className="w-5 h-5 rounded-full ring-1 ring-gray-300" />
                                <span className="mr-2 text-sm text-gray-500">{item.author.name}</span>
                            </div>
                            <div>
                                <Link href={`/blogs/${item.category.title}`}>
                                    <a>
                                        <span className="text-xs px-2 py-1 rounded-full bg-[#191923] text-blue-600 hover:bg-blue-300 hover:text-white transition-all duration-200 ease-linear cursor-pointer">{item.category.title}</span>
                                    </a>
                                </Link>
                            </div>
                        </div>
                        <div className={`items-center justify-between mt-1 px-1 ${noInterActions ? 'hidden' : 'flex'}`}>
                            <InterActionBtns post={item} isLarge={false} />
                        </div>
                        <div className="flex gap-2 mt-2 bg-[#191923] py-2 px-2 rounded items-center">
                            <ClockIcon className="h-4 w-4 stroke-gray-500" />
                            <span className="text-xs text-gray-500">زمان مطالعه :</span>
                            <span className="text-xs text-gray-500">{item.readingTime}</span>
                            <span className="text-xs">دقیقه</span>
                        </div>
                        <Link href={`/posts/${item.hashId}/${item.slug}`}>
                            <a className="w-24 h-10 mt-4 bg-[#ffc107] flex items-center justify-center rounded-xl ">
                                ادامه مطلب
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        })
    )
}

export default PostList
