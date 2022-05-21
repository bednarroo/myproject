import styles from "../../styles/Menu.module.css";
import Pizza from "../../components/Pizza";
import { pizzas } from "../../data/pizzas.js";

export default function Menu() {
    return ( 
    
    <section className={styles.container}>
        <div className={styles.container__left}>
        <div className={styles.container__sortTitle}>
            <span>Sort you order:</span>
            
        </div>
        <div className={styles.container__sortPrice}>
            <span>Sort by price:</span>   
        </div>
        <div className={styles.container__sortCategory}>
            <span>Sort by category:</span>  
        </div>
        </div>
        <div className={styles.container__right}>
        {pizzas.map( pizza => {
            return <Pizza key={pizza.id} pizza={pizza} />;
        })}
        </div>

    </section>
    )
}




