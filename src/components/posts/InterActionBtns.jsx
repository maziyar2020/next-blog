// axios
import http from '@/services/httpService'
// icons
import {
    AnnotationIcon,
    BookmarkIcon,
    HeartIcon,
} from '@heroicons/react/outline'

import {
    HeartIcon as HeartFull,
    BookmarkIcon as BookMarkFull
} from '@heroicons/react/solid'
// router
import { useRouter } from 'next/router'

import toast from 'react-hot-toast'
// util method to reload page without scroll
import { RouterPush } from 'utilities/RouterPush'





const InterActionBtns = ({ isLarge, post }) => {
    const router = useRouter()


    const likeHandler = (postId) => {
        http.put(`/posts/like/${postId}`).then(({ data }) => {
            const message = data.message

            if (message.includes('Unliked')) {
                toast.success('پست مورد نظر انلایک شد', {
                    position: "top-center"
                })
            }
            if (message.includes('successfully')) {
                toast.success('پست مورد نظر لایک شد', {
                    position: "top-center"
                })
            }

            RouterPush(router)
        }).catch(err => {
            toast.error(err.response.data.message)
        })
    }

    const bookmarkHandler = (postId) => {
        http.put(`/posts/bookmark/${postId}`).then(({ data }) => {
            const message = data.message
            if (message.includes('Unbookmared ')) {
                toast.success('پست از بوک مارک پاک شد', {
                    position: "top-center"
                })
            }
            if (message.includes('successfully')) {
                toast.success('پست بوک مارک شد', {
                    position: "top-center"
                })
            }


            RouterPush(router)
        }).catch(err => {
            toast.error(err.response.data.message)
        })
    }
    // set icon size base on props
    const iconSize = `${isLarge ? "w-8 h-8" : 'w-4 h-4'}`
    const textSize = `${isLarge ? 'text-lg' : 'text-sm'}`

    return (
        <div className={`flex items-center ${isLarge ? "gap-x-4 " : 'gap-x-1'}`}>
            <button className="bg-[#191923] flex px-1 py-1 rounded-lg gap-x-1 items-center justify-center">
                <AnnotationIcon className={`stroke-gray-400 ${iconSize} `} />
                <span className={`${textSize} text-gray-400`}>{post.commentsCount}</span>
            </button>
            <button
                className="bg-[#191923] flex px-1 py-0.5 rounded-lg gap-x-1 text-red-500 hover:bg-red-500 hover:text-red-100 transition-all duration-200"
                onClick={() => likeHandler(post._id)}
            >
                {post.isLiked ? <HeartFull className={`${iconSize} fill-current`} /> : <HeartIcon className={`${iconSize} stroke-current`} />}
                <span className={`${textSize} text-current`}>{post.likesCount}</span>
            </button>
            <button className="bg-[#191923] flex px-1 p-0.5 rounded-lg gap-x-1 text-blue-500 
            hover:bg-blue-500 hover:text-white transition-all duration-200 "
                onClick={() => { bookmarkHandler(post._id) }}
            >
                {
                    post.isBookmarked ?
                        <BookMarkFull className={`${iconSize} fill-current`} />
                        : <BookmarkIcon className={`${iconSize} stroke-current`} />
                }
            </button>
        </div >
    )
}

export default InterActionBtns
