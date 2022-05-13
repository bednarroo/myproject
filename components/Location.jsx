import styles from '../styles/Location.module.css';
import Image from 'next/image';


export default function Locations (element){
    return(
        <div className={styles.location}>
            {console.log(element.props)}
            <div className={styles.location__top}>
                <Image src={element.props.imgSRc}/>
            </div>
            <div className={styles.location__bottom}>
            <div className={styles.location__name}>
            {element.props.name}
            </div>
            <div className={styles.location__description}>
            {element.props.description}</div>
            <div className={styles.location__location}>
            {element.props.location}
            </div>
            </div>
            <div className={styles.location__circle}>
            <Image src={element.props.imgSRc}/>
            </div>
        </div>
    )
}