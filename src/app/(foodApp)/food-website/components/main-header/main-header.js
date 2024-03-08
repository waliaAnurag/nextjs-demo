import Link from "next/link";
import LogoImage from "../../../../../asset/logo.png";
import mainHeaderStyles from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./main-header-background";
import NavigationLink from "../navLink/navigationLinks";

export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground />
            <header className={mainHeaderStyles.header}>
                <Link className={mainHeaderStyles.logo} href="/food-website" >
                    <Image src={LogoImage} alt=" A plate with food " priority />
                    HuNgRy ?
                </Link>
                <nav className={mainHeaderStyles.nav}>
                    <ul>
                        <li>
                            <NavigationLink hrefPart="meals" >
                                Meals
                            </NavigationLink>
                        </li>
                        <li>
                            <NavigationLink hrefPart="community" >
                                Foody Community
                            </NavigationLink>

                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}