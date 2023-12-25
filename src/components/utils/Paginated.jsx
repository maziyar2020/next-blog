import React from 'react'
import { useRouter } from 'next/router'
// 
import Pagination from '@mui/material/Pagination'



const Paginated = ({ totalPages, page }) => {

    const router = useRouter()
    const pageHandler = (e, page) => {

        router.replace({
            query: { ...router.query, page: page },
        });

    }

    return (
        <>
            {
                totalPages > 1 &&

                <div className=" col-span-6 flex justify-center bg-second py-2 rounded text-white">

                    <Pagination
                        count={totalPages}
                        page={page}
                        color="primary"
                        dir='ltr'
                        onChange={pageHandler}
                    />

                </div>
            }
        </>

    )
}

export default Paginated
