// components
import CommentForm from "./CommentForm"
import SingleComment from "./SingleComment"
import ReplyComments from "./ReplyComment"

import React from "react"

const PostComment = ({ post }) => {


    return (
        <div className="mt-10">
            {/* heading */}
            <h2 className="font-normal text-[20px] mb-5">نظرات کاربران</h2>
            {/* comments */}
            {
                post.comments.map((cmt, index) => {
                    return !cmt.responseTo && cmt.status === 2 &&
                        <React.Fragment key={cmt._id}>
                            <SingleComment comment={cmt} postId={post._id} />
                            <ReplyComments
                                comments={post.comments}
                                parentId={cmt._id}
                                postId={post._id}
                            />
                        </React.Fragment>
                })
            }
            {/* comments input */}
            <div className="mt-8 pb-10">
                <span className="font-normal text-gray-300 md:text-lg">ارسال نظر جدید</span>
                <CommentForm postId={post._id} responseTo={null} />
            </div>
        </div>
    )
}

export default PostComment
