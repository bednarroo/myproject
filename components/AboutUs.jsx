import styles from '../styles/AboutUs.module.css';
import Image from 'next/image';
import Link from 'next/link';
import AboutUsPicture from "../pictures/AboutUs2.jpg"
import Tomato from "../pictures/Tomato.png"

export default function AboutUs (props) {

    return(
        <section className={styles.aboutUs}>
            <h2 className={styles.aboutUs__title}>About us</h2>
            <div className={styles.aboutUs__container}>
            

            <div className={styles.aboutUs__left}>
            <Image src={AboutUsPicture}/>
            </div>



            <div className={styles.aboutUs__right}>
                <h3 className={styles.aboutUs__name}>Trio Pizza!</h3>
                <span className={styles.aboutUs__description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quia iure dignissimos aliquam in doloremque saepe fugit at, quae veritatis unde veniam aspernatur provident consequuntur optio distinctio. Nihil temporibus deleniti nulla ullam at, soluta adipisci quia dolore excepturi est praesentium doloribus. Tempore quas ut vitae, facere atque ipsa repellat labore?
                aspernatur provident consequuntur optio distinctio. Nihil temporibus deleniti nulla ullam at, soluta adipisci quia dolore excepturi est praesentium doloribus. Tempore quas ut vitae, facere atque ipsa repellat labore?</span>
                <Image src={Tomato} width="150px" height="150px"/>
            </div>
            

            </div>
                {props.btn==="1" ? <Link href={`/about`}><button className={styles.aboutUs__btn}>About Us</button></Link> : "" }
        
        
        </section>
    )
}