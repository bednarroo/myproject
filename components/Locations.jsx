import styles from '../styles/Locations.module.css';
import {location} from "../data/location"
import Location from "../components/Location";


export default function Locations (){
    return(
        <section className={styles.Locations}>
            {location.map(element => <Location props={element}/>)}
        </section>
    )
}