// icons
import { AdjustmentsIcon } from '@heroicons/react/outline'
// router
import { useRouter } from 'next/router'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { setPageQuery } from 'src/redux/page/pageActions'


const SortBar = () => {
    const router = useRouter()
    const pageData = useSelector(state => state.pageData)
    const { blogQuery, selectedQuery } = pageData
    const dispatch = useDispatch()

    const sortHandler = (id) => {
        dispatch(setPageQuery(id))
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
                    blogQuery.map((item, index) => {
                        return <li
                            className={`px-1 md:px-3 py-4 sm:text-normal md:text-md text-white relative cursor-pointer
                                ${item.name === selectedQuery ? 'text-[] text-md' : `${item.name}`}
                            `}
                            key={index}
                            onClick={() => { sortHandler(item.name) }}
                        >
                            {item.label}
                            {item.name === selectedQuery &&
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
