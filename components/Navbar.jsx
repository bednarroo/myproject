import Link from "next/link"
import Image from "next/image"
import styles from "../styles/Navbar.module.css"
import Icon from "../pictures/Trio.jpg"
import {Accesiblity} from "../pictures/Eye-solid"
import {User} from "../pictures/User"
import {Basket} from "../pictures/Basket"


const Navbar =  ()=> {
    return (
        <section>
            <div className={styles.userPreference}>
                <div className={styles.userPreference__element}>
                    <span className={styles.userPreference__description}>Accesiblity</span>
                <Accesiblity className={styles.userPreference__icon} />
                </div>

            </div>
            <div className={styles.navigation}>
                
                <div className={styles.navigation__logo}>
                    <a href="/">
                    <Image alt ="Trio Pizza" src={Icon} width="80px" height='80px' />
                    </a>
                </div>
                
                
                <div className={styles.navigation__menu}>
                    <ul className={styles.navigation__container}>
                        <li className={styles.navigation__link}>
                            <Link href="/news" passHref>
                                News
                            </Link>
                        </li>
                        <li className={styles.navigation__link}>
                        <Link href="/staff" passHref>
                            Staff
                        </Link>
                        </li>
                        <li className={styles.navigation__link}>
                        <Link href="/menu" passHref>
                            Menu
                        </Link>
                        </li>
                        <li className={styles.navigation__link}>
                        <Link href="/work" passHref>
                            Work
                        </Link>
                        </li>
                        <li className={styles.navigation__link}>
                        <Link href="/account" passHref>
                        <User/>
                        </Link>
                        </li>
                        <li className={styles.navigation__link}>
                        <Link href="/basket" passHref>
                        <Basket/>
                        </Link>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Navbar