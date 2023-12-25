// components
import Paginated from '@/components/utils/Paginated';
import CategoryDesktop from '@/components/blogs/CategoryDesktop';
import CategoryMobile from '@/components/blogs/CategoryMobile';
import SortBar from '@/components/blogs/SortBar';
import PostList from '@/components/posts/PostList';
import NavbarPhone from '@/components/home/NavbarPhone';
import NavbarDesktop from '@/components/home/NavbarDesktop';
// layouy
import Layout from '@/containers/Layout';
// services
import http from '@/services/httpService';
// query
import queryString from 'query-string'
import Biography from '@/components/home/Biography';
import Overlay from '@/components/home/Overlay';




export default function Blogs({ blogsData, postCategories }) {


    return (
        <Layout>
            <div className="inner-wrapper h-[100vh] md:h-[calc(100vh - 40px)] w-full md:px-0 md:p-0">
                <div className="w-full flex  mx-auto inner-wrapper pt-[80px] lg:pt-0 lg:pr-[80px] ">
                    <NavbarPhone />
                    <NavbarDesktop />
                    <Overlay />
                    < div className=" blog w-full px-2 md:px-4 pt-4 relative" >
                        <div className="absolute w-full h-full blog__bg" />
                        <div className="w-full">
                            <CategoryDesktop postCategories={postCategories} />
                            <div className="flex lg:hidden mt-4">
                                <SortBar />
                            </div>
                        </div>
                        <div className="relative text-white blog__detail">
                            <div className="hidden lg:flex">
                                <SortBar />
                            </div>
                            <div className="grid grid-cols-[1fr] md:grid-cols-[repeat(2,1fr)] lg:grid-cols-[1fr] xl:grid-cols-[repeat(2,1fr)] gap-5">
                                <PostList blogsData={blogsData.docs} />
                            </div>
                            <Paginated page={blogsData.page} totalPages={blogsData.totalPages} />
                        </div>
                    </div >
                    <Biography />
                </div>

            </div >
        </Layout>
    )
}


export async function getServerSideProps({ req, query }) {

    const { data: result } = await http.get(`/posts?limit=4&${queryString.stringify(query)}`, {
        headers: {
            Cookie: req.headers.cookie || ''
        }
    })
    const { data: postCategories } = await http.get("/post-category")
    const { data } = result
    return {
        props: {
            blogsData: data,
            postCategories: postCategories.data
        }
    }
}