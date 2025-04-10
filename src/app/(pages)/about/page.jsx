"use client"

import SectionTitle from "@/app/components/SectionTitle/SectionTitle";
import Link from "next/link";
import { useRouter } from "next/navigation";

const AboutPage = () => {
    const router = useRouter();

    return (
        <section className='about-page'>
            <SectionTitle title="About Page" />

            <div className="my-5 flex gap-5 justify-center items-center text-sm">
                <Link href={'/about/address'}>
                    <button className="px-5 py-1.5 rounded-md border outline-none border-gray-300 hover:bg-gray-100 bg-transparent font-semibold text-slate-700">Address Page</button>
                </Link>
                <button className="px-5 py-1.5 rounded-md border outline-none border-gray-300 hover:bg-gray-100 bg-transparent font-semibold text-slate-700" onClick={() => router.push('/about/address')}>Navigate Address</button>
                <button className="px-5 py-1.5 rounded-md border outline-none border-gray-300 hover:bg-gray-100 bg-transparent font-semibold text-slate-700" onClick={() => router.push('/about/user-info')}>User Info</button>
            </div>
        </section>
    );
};

export default AboutPage;