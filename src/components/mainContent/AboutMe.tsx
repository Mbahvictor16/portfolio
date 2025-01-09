import Image from "next/image";
import workSpace from "../../../public/workspace.jpg";

export default function AboutMe() {
    return (
        <section className="my-10" id="about-me">
            <div className="lg:flex flex-row-reverse items-center justify-between gap-8 lg:h-[400px] py-8 my-10">
                <div className="lg:w-1/2 mb-16 lg:mb-0">
                    <div>
                        <h1 className="text-purple-200 text-3xl font-bold mb-4">About Me</h1>

                        <p className="text-xs lg:text-sm text-slate-500">Detail-oriented Full Stack Developer with a
                            proven track record of delivering high-quality, scalable web applications and systems.
                            Possessing comprehensive expertise in front-end and back-end technologies, including
                            Next.js, React, Node.js, and MongoDB, I have successfully developed and maintained solutions
                            that improve user experience and operational efficiency. Skilled in designing microservice
                            architectures, optimizing server response times, and implementing secure, responsive
                            interfaces. Demonstrated ability to streamline development processes, resulting in increased
                            platform performance and reduced deployment time. Committed to continuous improvement,
                            effective collaboration, and delivering tailored solutions that meet both technical and
                            business objectives.</p>
                    </div>
                </div>

                <div className="lg:w-1/2">
                    <div className="h-[300px] lg:w-[300px] overflow-hidden rounded-2xl lg:h-[300px]">
                        <Image src={workSpace} alt={"My picture"} width={400} height={400}
                               className="w-full h-full object-cover"/>
                    </div>
                </div>
            </div>
        </section>
    )
}