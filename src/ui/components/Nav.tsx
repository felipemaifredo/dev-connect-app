//
import styles from "./styles/nav.module.css"

//
import { FaHome } from "react-icons/fa"
import { FaBell } from "react-icons/fa6"
import { MdOutlineExplore } from "react-icons/md"

//
import { JSX } from "react"
import { Link } from "@/src/i18n/routing"

//
import { UseLogo } from "./UseLogo"

//
type menuOptionsTypes = {
    icon: JSX.Element
    title: string
    link: string
}

//
const menuOptions: menuOptionsTypes[] = [
    {
        icon: <FaHome />,
        title: "Feed",
        link: "/feed",
    },{
        icon: <MdOutlineExplore />,
        title: "Explorar",
        link: "/explore",
    },{
        icon: <FaBell />,
        title: "Notifications",
        link: "/notifications",
    },
]

export const Nav = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.nav_container}>
                <UseLogo />
                <div className={styles.menu_container}>
                    {menuOptions.map((menuOpt: menuOptionsTypes) => (
                        <Link 
                            key={menuOpt.link}
                            href={menuOpt.link as any}
                            className={styles.link_menu_opt}
                        >
                            {menuOpt.icon} {menuOpt.title}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    )
}
