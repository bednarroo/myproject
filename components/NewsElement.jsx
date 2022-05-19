import styles from '../styles/NewsElement.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Pizza (props)  {


return (
    <div className={styles.pizzaCard}>
    <div className={styles.pizzaCard__title}>
        <span>{props.news.name}</span>
    </div>

    <div className={styles.pizzaCard__description}>

    <div className={styles.pizzaCard__top}>
    <Image src={props.news.imgSRc}  />
    </div>

    <div className={styles.pizzaCard__bottom}>
        <div className={styles.pizzaCard__specs}>
            {props.news.description}
        </div>
        <Link href={`/news/${props.news.id}`}>
        <button className={styles.pizzaCard__btn}>
            Get more info!
        </button>
        </Link>
        

    </div>
        
    

    </div>




    </div>
)
}