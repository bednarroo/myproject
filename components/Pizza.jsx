import styles from '../styles/Pizza.module.css';
import Image from 'next/image';
import Link from 'next/link';




export default function Pizza (props)  {


return (
    <div className={styles.pizzaCard}>
    <div className={styles.pizzaCard__title}>
        <span>{props.pizza.name}</span>
    </div>

    <div className={styles.pizzaCard__description}>

    <div className={styles.pizzaCard__top}>
    <Image src={props.pizza.imgSRc}  />
    </div>

    <div className={styles.pizzaCard__bottom}>
        <div className={styles.pizzaCard__specs}>
            {props.pizza.description}
        </div>
        <Link href={`/menu/${props.pizza.id}`}>
        <button className={styles.pizzaCard__btn}>
            Get more info!
        </button>
        </Link>
        

    </div>
        
    

    </div>




    </div>
)
}