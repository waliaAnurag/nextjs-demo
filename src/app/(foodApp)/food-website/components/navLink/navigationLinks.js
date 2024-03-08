"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import mainHeaderStyles from "../main-header/main-header.module.css"

export default function NavigationLink({ hrefPart, children }) {
    const path = usePathname()
    return (
        <Link className={path.includes(hrefPart) ? mainHeaderStyles.active : undefined} href={`/food-website/${hrefPart}`}>
            {children}
        </Link>
    )
}