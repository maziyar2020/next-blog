// components
import React from 'react'
import SingleComment from './SingleComment'

const ReplyComment = ({ parentId, comments, postId }) => {
    return comments.map((comment, index) => {
        return parentId === comment.responseTo &&
            <div className="mr-4 " key={index}>
                <React.Fragment >
                    <SingleComment comment={comment} postId={postId} />
                    <ReplyComment comments={comments} parentId={comment._id} postId={postId} />
                </React.Fragment>
            </div>
    })
}

export default ReplyComment
