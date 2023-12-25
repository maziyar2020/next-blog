// next packages
import Link from 'next/link'
import { useRouter } from 'next/router'

const CategoryDesktop = ({ postCategories }) => {


    const { query } = useRouter()

    return (
        <div className="w-full overflow-hidden h-[235px] bg-second rounded">
            {/* accordion header */}
            <div className="flex justify-between items-center p-4 cursor-pointer bg-second text-white"

            >
                <span>دسته بندی </span>
            </div>
            {/* accordion content */}
            <div className={`bg-transparent text-white`}>
                <Link href="/blogs">
                    <a>
                        <span className={`p-4 mb-1 flex w-full cursor-pointer ${!query.categorySlug && 'bg-[#ffc107] hover:bg-[#ffd34e]'}`}>همه مقالات</span>
                    </a>
                </Link>
                {
                    postCategories.map((item, index) => {
                        return <Link key={index} href={`/blogs/${item.englishTitle}`} >
                            <a>
                                <span className={`p-4 hover:bg-[#ffd34e] mb-1 flex w-full cursor-pointer 
                                ${query.categorySlug === item.englishTitle ? 'bg-[#ffc107] text-black hover:bg-[#ffd34e]' : ''}`}>
                                    {item.englishTitle}
                                </span>
                            </a>
                        </Link>
                    })
                }
            </div>
        </div>
    )
}

export default CategoryDesktop
