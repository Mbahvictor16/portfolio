import React from "react";
import Navigation from "@/components/Navigation";

export default function Header(): React.JSX.Element {
    return (
        <header className="flex items-center justify-between px-8 md:px-12 lg:px-16 py-8 h-26">
            <div className="italic font-extrabold text-2xl">
                {"<SoftwareVic 🍵/>"}
            </div>
            <Navigation />
        </header>
    )
}