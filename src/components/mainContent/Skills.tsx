import { BiLogoTypescript, BiLogoPostgresql } from "react-icons/bi";
import { SiPhp, SiShadcnui, SiExpress, SiHono, SiMysql, SiMongodb, SiMariadb, SiDrizzle, SiPrisma, SiSequelize, SiPostman } from "react-icons/si";
import { RiNextjsFill, RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { FaNode, FaLess, FaSass, FaGitAlt, FaGithub } from "react-icons/fa";
import { DiRedis, DiJqueryLogo, DiMysql } from "react-icons/di";


export default function Skills() {
    return (
        <section className="my-10" id="skills">
            <h1 className="text-purple-200 text-3xl mb-4 font-bold text-center">Skills</h1>
            <div className="md:flex flex-wrap lg:flex-nowrap gap-y-8 lg:gap-16 justify-evenly">
                <div className="md:w-1/2 mb-8 lg:w-1/3">
                    <h3 className="font-bold text-center mb-4">Languages</h3>
                    <ul className="flex flex-wrap gap-8 items-center justify-center">
                        <li><BiLogoTypescript className="text-slate-500" size={32}/></li>
                        <li><SiPhp className="text-slate-500" size={32}/></li>
                        <li><DiMysql className="text-slate-500" size={32}/></li>
                    </ul>
                </div>

                <div className="md:w-1/2 mb-8 lg:w-1/3">
                    <h3 className="font-bold text-center mb-4">Frameworks</h3>
                    <ul className="flex flex-wrap gap-8 items-center justify-center">
                        <li><RiReactjsLine className="text-slate-500" size={32}/></li>
                        <li><RiNextjsFill className="text-slate-500" size={32}/></li>
                        <li><DiJqueryLogo className="text-slate-500" size={32}/></li>
                        <li><RiTailwindCssFill className="text-slate-500" size={32}/></li>
                        <li><SiShadcnui className="text-slate-500" size={32}/></li>
                        <li><FaNode className="text-slate-500" size={32}/></li>
                        <li><SiExpress className="text-slate-500" size={32}/></li>
                        <li><SiHono className="text-slate-500" size={32} /></li>
                    </ul>
                </div>

                <div className="md:w-1/2 mb-8 lg:w-1/3">
                    <h3 className="font-bold text-center mb-4">Styling Preprocessors</h3>
                    <ul className="flex flex-wrap gap-8 items-center justify-center">
                        <li><FaLess className="text-slate-500" size={32}/></li>
                        <li><FaSass className="text-slate-500" size={32}/></li>
                    </ul>
                </div>

                <div className="md:w-1/2 mb-8 lg:w-1/3">
                    <h3 className="font-bold text-center mb-4">Databases &amp; ORMs</h3>
                    <ul className="flex flex-wrap gap-8 items-center justify-center">
                        <li><SiMysql className="text-slate-500" size={32}/></li>
                        <li><SiMongodb className="text-slate-500" size={32}/></li>
                        <li><BiLogoPostgresql className="text-slate-500" size={32}/></li>
                        <li><SiMariadb className="text-slate-500" size={32}/></li>
                        <li><DiRedis className="text-slate-500" size={32}/></li>
                        <li><SiDrizzle className="text-slate-500" size={32}/></li>
                        <li><SiPrisma className="text-slate-500" size={32}/></li>
                        <li><SiSequelize className="text-slate-500" size={32}/></li>
                    </ul>
                </div>

                <div className="md:w-1/2 mb-8 lg:w-1/3">
                    <h3 className="font-bold text-center mb-4">Devtools</h3>
                    <ul className="flex flex-wrap gap-8 items-center justify-center">
                        <li><FaGitAlt className="text-slate-500" size={32}/></li>
                        <li><FaGithub className="text-slate-500" size={32}/></li>
                        <li><SiPostman className="text-slate-500" size={32}/></li>
                    </ul>
                </div>
            </div>
        </section>
    )
}