"use client";
import Image from "next/image"

import me from "../../../public/me.jpg"

export default function Intro() {
    return (
        <section className="lg:flex items-center justify-between gap-8 lg:h-[400px] py-8 my-10">
            <div className="lg:w-1/2 mb-16 lg:mb-0">
                <div className="w-4/5 lg:w-full mx-auto">
                    <h1 className="lg:text-8xl text-4xl">Hi 👋🏾, <br/><span
                        className="font-bold text-purple-200">I&apos;m Victor</span></h1>
                    <p className="font-bold mb-4">
                        <small>🧑🏾‍💻 Software Engineer | Building Scalable Apps | Passionate about Innovation & Teaching</small>
                    </p>
                </div>
            </div>

            <div className="lg:w-1/2">
                <div className="w-[300px] h-[300px] lg:w-[400px] mx-auto overflow-hidden rounded-full lg:h-[400px]">
                    <Image src={me} alt={"My picture"} width={400} height={400} className="w-full h-full object-cover" />
                </div>
            </div>
        </section>
    )
}