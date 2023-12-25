// react packages
import Link from 'next/link'
import Head from 'next/head'
// hooks
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// layout
import Layout from '@/containers/Layout'
// validations
import { useFormik } from 'formik'
import * as yup from 'yup'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { userSignIn } from 'src/redux/user/userActions'
// components
import NavbarPhone from '@/components/home/NavbarPhone'
import NavbarDesktop from '@/components/home/NavbarDesktop'
import Biography from '@/components/home/Biography'
import Overlay from '@/components/home/Overlay'
import BaseInput from '@/components/utils/BaseInput'




const initialValues = {
    email: '',
    password: ''
}


const validationSchema = yup.object({
    email: yup.string().required('ایمیل را وارد کنید').email('ایمیل نامعتبر است'),
    password: yup.string().required('وارد کردن رمز عبور ضروریست').min(8, 'رمز عبور حداقل 8 کراکتر میباشد')
})


const Singin = () => {
    const router = useRouter()
    const userInfo = useSelector(state => state.userSignIn)
    const pageInfo = useSelector(state => state.pageData)
    const { user, loading } = userInfo
    const { sidebarExpand } = pageInfo


    const dispatch = useDispatch()


    // redirect user if user logged in
    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])


    const onSubmit = (values) => {
        dispatch(userSignIn(values))
    }

    const formik = useFormik({
        validateOnMount: true,
        initialValues,
        onSubmit,
        validationSchema
    })

    return (
        <Layout>
            <Head>
                <title>WebApp - signin</title>
            </Head>
            <div className="flex flex-wrap relative">
                <div className="w-full flex  mx-auto inner-wrapper px-2 sm:px-8 pt-[80px] md:pt-0 lg:px-0 lg:pr-[80px] ">
                    <NavbarPhone pageName={'ورود کاربر'} />
                    <NavbarDesktop pageName={'ورود کاربر'} />
                    <Overlay />
                    <form
                        onSubmit={formik.handleSubmit}
                        className={`flex px-4 md:px-[10%] flex-col space-y-4 w-full md:pt-20 transition-all duration-500 ease-in ${sidebarExpand ? '-translate-x-36' : '-translate-x-0'}`}>
                        <h1 className="font-black text-3xl text-[#ffc107] mb-4 mt-3">ورود</h1>
                        <BaseInput label="ایمیل" name="email" formik={formik} />
                        <BaseInput label="رمز عبور" name="password" type='password' formik={formik} />

                        <button
                            type="submit"
                            disabled={!formik.isValid}
                            className="w-full py-2 rounded-lg bg-[#ffc107] text-white disabled:bg-[#ffc170] disabled:text-gray-50 mt-[30px]"
                        >
                            {!loading ? 'ورود' : 'LOADING'}
                        </button>

                        <Link href="/signup">
                            <p className="mt-4 py-4 cursor-pointer text-white text-center md:text-right">هنوز ثبت نام نکردی ؟</p>
                        </Link>
                    </form>
                    <Biography />
                </div>
            </div>
        </Layout>

    )
}

export default Singin
