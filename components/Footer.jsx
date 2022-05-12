import styles from "../styles/Footer.module.css"
import Link from "next/link"

function Footer () {
    return(
        <section>
            <div className={styles.footer}>
            <div className={styles.footer__left}>
                <span className={styles.footer__copyrights}>
                    Created with love to next.js by Sebastian Wuczkowski
                </span>
                
                </div>
                <div className={styles.footer__right}>
                <ul className={styles.footer__linkContainer}>
                        <li className={styles.footer__link}>
                            <Link href="/news" passHref>
                                Contact
                            </Link>
                        </li>
                        <li className={styles.footer__link}>
                            <Link href="/news" passHref>
                                About Us
                            </Link>
                        </li>
                        <li className={styles.footer__link}>
                            <Link href="/news" passHref>
                                Privacy Policy
                            </Link>
                        </li>
                        <li className={styles.footer__link}>
                            <Link href="/news" passHref>
                                Terms of Use
                            </Link>
                        </li>
                        
                    </ul>
            </div>
            </div>
        </section>
    )
}

export default Footer;