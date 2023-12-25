import http from '@/services/httpService'
import React from 'react'

const UploadPost = () => {

    const data = {
        "title" : "اموزش گام به گام منگو",
        "titleBrief": "منگو یک دیتابیس است",
        "slug": "mangodb-in-backend",
        "briefText":"قدرت mango در بک اند",
        "category": "6587ca00d88f96002996d2c9",
        "text":"mango چیست ؟",
        "coverImage": "https://s6.uupload.ir/files/mongo_po6t.png",
        "readingTime": "12"
    }
    
    const HandleClick = () => {
        const res = http.post('/posts/create', data)
        console.log(res);
    }

    return (
        <div className="mr-10">
            {data.title}
            <br />
            <button className="btn bg-red-100 px-3 py-2" onClick={HandleClick}>
                clicks
            </button>
        </div>
    )
}

export default UploadPost

