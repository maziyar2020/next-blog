// icons
import { UserIcon } from "@heroicons/react/outline"
// hooks
import { useState } from "react";
// util method to return persian date
import { ToPersianDate } from "utilities/PersianDate";
// components
import CommentForm from "./CommentForm";

const SingleComment = ({ comment, postId }) => {
    const [onReply, setOnReply] = useState(false)

    return (
        <div className="bg-second rounded-xl p-4 mb-8">
            <div className="flex items-center justify-start">
                <UserIcon className="h-12 w-12 stroke-gray-400" strokeWidth={1} />
                <div className="flex flex-col justify-between mr-4">
                    <span className="block text-sm text-gray-400">{comment.writer.name}</span>
                    <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">{ToPersianDate(comment.createdAt)}</span>
                </div>
            </div>
            <div className="mt-4 leading-10">
                {comment.content}
            </div>
            <button onClick={() => { setOnReply(!onReply) }} className="text-sm p-4 cursor-pointer 
             text-blue-600 ">
                {
                    !onReply ?
                        <span>پاسخ دادن به این نظر</span> :
                        <span>صرف نظر از جوابدهی</span>
                }
            </button>
            {/* if onReply was true show the form */}
            {
                onReply &&
                <div className="mt-8 pb-10">
                    <span className="font-normal md:text-md text-gray-300">در حال پاسخ به {comment.writer.name}</span>
                    <CommentForm postId={postId} responseTo={comment._id} setOnReply={setOnReply} />
                </div>
            }
        </div>
    )
}

export default SingleComment
