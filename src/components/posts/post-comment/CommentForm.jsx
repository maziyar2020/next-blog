import http from '@/services/httpService'
import { useRouter } from 'next/router'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { RouterPush } from 'utilities/RouterPush'

const CommentForm = ({ postId, responseTo, setOnReply }) => {
    const [comment, setComment] = useState('')
    const router = useRouter()

    const submit = (e) => {
        e.preventDefault()

        const data = {
            postId,
            responseTo,
            content: comment
        }

        http.post('/post-comment/save-comment', data).then(res => {
            toast.success(`${res.data.message}`)
            if (setOnReply) setOnReply(open => !open)
            RouterPush(router)
        }).catch(err => {
            toast.error(err?.response?.data?.message)
        }).finally(() => {
            setComment('')
        })
    }

    return (
        <form>
            <textarea
                className="focus:ring-primary text-gray-500 p-4 rounded mt-5 mb-3 w-full border-none ring-2 
                    ring-slate-300 shadow-sm focus:outline-none focus:ring-2 dark:focus-within:ring-blue-500 resize-y"
                value={comment}
                onChange={(e) => { setComment(e.target.value) }}
                placeholder="نظرت رو برام بنویس"
            />
            <button onClick={submit} className=" max-auto py-3 px-2  w-full sm:w-52 bg-[#ffc107] rounded-xl text-white md:text-lg">
                ارسال نظر
                </button>
        </form>
    )
}

export default CommentForm
