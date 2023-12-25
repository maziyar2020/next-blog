import Link from "next/link";


export default function Custom404() {


    return (
        <div className="bg-[#191923] text-white w-full h-screen flex items-center justify-center relative">
            <div className="blog__bg absolute w-full h-full opacity-[0.05!important]"></div>
            <div className="w-[400px] bg-second h-[400px] flex flex-col items-center justify-between px-4 py-6">
                <p className="text-3xl eng text-center">404</p>
                <div className="text-3xl"> Page not found </div>
                <Link href="/">
                    <a className="text-center text-[#ffc107] w-28 h-10 cursor-pointer flex items-center justify-center px-2 rounded">
                        Go Home
                    </a>
                </Link>
            </div>
        </div>
    )
}