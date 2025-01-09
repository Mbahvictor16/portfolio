import React from "react";
import Link from "next/link";

export default function Navigation(): React.JSX.Element {
return (
    <nav>
        <ul className="hidden md:flex gap-8 lg:gap-12">
            <li>
                <Link href="#about-me">About Me</Link>
            </li>
            <li>
                <Link href="#experience">Experience</Link>
            </li>
            <li>
                <Link href="#skills">Skills</Link>
            </li>
            <li>
                <Link href="#contact">Contact</Link>
            </li>
        </ul>
    </nav>
)
}