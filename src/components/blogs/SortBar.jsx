// icons
import { AdjustmentsIcon } from '@heroicons/react/outline'
// router
import { useRouter } from 'next/router'
// hooks
import { useState } from 'react'

const sortbarOptions = [
    { label: 'محبوب ترین', id: 'popular' },
    { label: 'پر بازدیدترین', id: 'most' },
    { label: 'جدید ترین', id: 'newest' },
]

const SortBar = () => {
    const router = useRouter()
    const [sort, setSort] = useState(router.query.sort || 'popular')

    const sortHandler = (id) => {

        setSort(id)

        router.replace({
            query: { ...router.query, sort: id },
        });

    }

    return (
        <div className="rounded bg-second px-4 flex items-start flex-col md:flex-row md:items-center md:p-4 mb-4 w-full">
            <div className="gap-x-2 items-center ml-4 flex lg:hidden p-0 py-2 md:p-0">
                <AdjustmentsIcon className="w-6 h-6 stroke-[#8c8c8e]" />
                <span className="text-[#8c8c8e]">مرتب سازی :</span>
            </div>
            <ul className="flex items-center justify-between gap-x-2">
                {
                    sortbarOptions.map((item, index) => {
                        return <li
                            className={`px-1 md:px-3 py-4 sm:text-normal md:text-md text-white relative cursor-pointer
                                ${item.id === sort ? 'text-[] text-md' : ''}
                            `}
                            key={index}
                            onClick={() => { sortHandler(item.id) }}
                        >
                            {item.label}
                            {item.id === sort &&
                                (<span className="absolute bottom-0 right-1 h-[3px] w-[75px] md:w-[95px] bg-[#ffc107]"></span>)
                            }
                        </li>
                    })
                }
            </ul>
        </div >
    )
}

export default SortBar
