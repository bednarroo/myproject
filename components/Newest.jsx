import Pizza from "../components/Pizza";
import { pizzas } from "../data/pizzas.js";
import styles from "../styles/Newest.module.css"

export default function Newest () {
    return (
<section className={styles.container}>
    <h2 className={styles.container__name}>
        The newest pizzas!
    </h2>
        <div className={styles.container__cards}>
            {pizzas.map((pizza, index = 1) => {
                if(index < 3) { return (
            <Pizza key={pizza.id} pizza={pizza} /> 
                )
        }
           index++
            })}
        </div>
</section>
    )
}