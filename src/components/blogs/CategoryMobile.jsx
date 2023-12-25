// next packages
import Link from 'next/link'
import { useRouter } from 'next/router'


const CategoryMobile = ({ postCategories }) => {

    const { query } = useRouter()

    return (
        <div className="flex md:hidden gap-x-4 pb-4 overflow-hidden">
            <Link href={`/blogs`} >
                <a>
                    <span className={`flex w-full cursor-pointer border border-gray-100 bg-white text-gray-600 rounded-3xl  px-3 py-1 text-xs whitespace-nowrap ${!query.categorySlug && 'bg-blue-800 text-white border-slate-400'}`}>
                        همه مقالات
                    </span>
                </a>
            </Link>
            {
                postCategories.map((item, index) => {
                    return <Link key={index} href={`/blogs/${item.englishTitle}`} >
                        <a>
                            <span className={`flex w-full cursor-pointer border border-gray-100 bg-white text-gray-600 rounded-3xl  px-3 py-1 text-xs whitespace-nowrap ${query.categorySlug === item.englishTitle && 'bg-blue-800 text-white border-slate-400'}`}>
                                {item.englishTitle}
                            </span>
                        </a>
                    </Link>
                })
            }
        </div>
    )
}

export default CategoryMobile
