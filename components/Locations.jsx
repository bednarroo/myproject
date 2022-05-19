import styles from '../styles/Locations.module.css';
import {location} from "../data/location"
import Location from "../components/Location";


export default function Locations (){
    return(
        <section className={styles.locations}>
            <h3 className={styles.locations__title}>Our locations:</h3>
            <div className={styles.locations__container}>
            {location.map(element => <Location key={element.id} props={element}/>)}
            </div>
        </section>
    )
}