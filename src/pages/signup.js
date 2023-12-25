// validations
import { useFormik } from 'formik'
import * as yup from 'yup'
// layout
import Layout from '@/containers/Layout'
// packages
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
// redux
import { useDispatch, useSelector } from 'react-redux'
import { userSignUp } from 'src/redux/user/userActions'
// components
import NavbarDesktop from '@/components/home/NavbarDesktop'
import NavbarPhone from '@/components/home/NavbarPhone'
import BaseInput from '@/components/utils/BaseInput'
import Biography from '@/components/home/Biography'
import Overlay from '@/components/home/Overlay'

const Signup = () => {
    const router = useRouter()
    const userInfo = useSelector(state => state.userSignIn)
    const { user } = userInfo
    const pageInfo = useSelector(state => state.pageData)
    const { sidebarExpand } = pageInfo
    const dispatch = useDispatch()

    useEffect(() => {
        if (user) {
            router.push('/')
        }
    }, [user])

    const onSubmit = (values) => {
        dispatch(userSignUp(values))
    }

    const initialValues = {
        name: '',
        email: '',
        phoneNumber: '',
        password: '',
    }


    const validationSchema = yup.object({
        name: yup.string().required('پر کردن فیلد نام اجباری است').min(6, 'حداقل نام باید 6 حرف باشد'),
        email: yup.string().required('پر کردن فیلد ایمیل اجباری است').email('ایمیل نامعتبر است'),
        phoneNumber: yup.string().required('پر کردن فیلد تلفن اجباری است').matches(/^[0-9]{11}$/, 'شماره موبایل صحیح نیست'),
        password: yup.string().required('پر کردن فیلد رمز عبور اجباری است').min(8, 'رمز عبور حداقل 8 کاراکتر میباشد'),
    })

    const formik = useFormik({
        validateOnMount: true,
        initialValues,
        onSubmit,
        validationSchema
    })



    return (
        <Layout>
            <Head>
                <title>WebApp - signup</title>
            </Head>
            <div className="flex flex-wrap relative">
                <div className="w-full flex  mx-auto inner-wrapper px-2 sm:px-8 pt-[80px] md:pt-0 lg:px-0 lg:pr-[80px] ">
                    <NavbarPhone pageName={'ثبت نام'} />
                    <NavbarDesktop pageName={'ثبت نام'} />
                    <Overlay />
                    <form onSubmit={formik.handleSubmit}
                        className={`flex px-4 md:px-[10%] flex-col space-y-4 w-full md:pt-20 transition-all duration-500 ease-in ${sidebarExpand ? '-translate-x-36' : '-translate-x-0'}`}
                    >
                        <h1 className="font-black text-2xl text-[#ffc107] mb-4 mt-4">ثبت نام</h1>
                        <BaseInput label="نام و نام خانوادگی" name="name" formik={formik} />
                        <BaseInput label="ایمیل" name="email" formik={formik} />
                        <BaseInput label="شماره همراه" name="phoneNumber" formik={formik} />
                        <BaseInput label="رمز عبور" name="password" type="password" formik={formik} />
                        <button
                            type="submit"
                            disabled={!formik.isValid}
                            className="w-full py-2 rounded-lg bg-[#ffc107] text-white disabled:bg-[#ffc170] disabled:text-gray-50 mt-[30px]"
                        >
                            ورود
                        </button>
                        <Link href="/signin">
                            <p className="mt-4 py-4 cursor-pointer text-white text-center md:text-right">قبلا حساب ساختی ؟ وارد شو !</p>
                        </Link>
                    </form>
                    <Biography />
                </div>
            </div>

        </Layout>
    )
}

export default Signup
