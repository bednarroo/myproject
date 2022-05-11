import styles from "../styles/Navbar.moduule.css"

const Navbar =  ()=> {
    return (
        <section>
            <div className={styles.userPreference}>

            </div>
            <div className={styles.navigation}>
                <div className={styles.navigation__logo}></div>
                <div className={styles.navigation__menu}></div>
            </div>
        </section>
    )
}

export default Navbar