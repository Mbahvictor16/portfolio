import Link from "next/link";
import { FaLinkedin, FaGithub, FaEnvelope} from "react-icons/fa"

export default function Contact() {
    return (
        <section className="my-10" id="contact">
            <h1 className="text-purple-200 text-3xl mb-4 font-bold text-center">Contact</h1>

            <div className="flex items-center justify-center gap-8">
                <Link href="https://linkedin.com/in/ifeanyimbah">
                    <FaLinkedin className="text-slate-500" size={32} />
                </Link>
                <Link href="https://github.com/Mbahvictor16">
                    <FaGithub className="text-slate-500" size={32} />
                </Link>
                <Link href="mailto:mbahifeanyivictor@gmail.com">
                    <FaEnvelope className="text-slate-500" size={32} />
                </Link>
            </div>
        </section>
    )
}