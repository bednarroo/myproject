import Image from "next/image"
import styles from "../styles/Member.module.css"

export default function Member (props){
    return(

        <div className={styles.member}>
            <div className={styles.member__name}>
               <span>{props.member.name}</span> 
            </div>
            <div className={styles.member__img}>
            <Image src={props.member.imgSRc} alt="Girl in a jacket" />
            </div>
            <div className={styles.member__description}>
            <span>{props.member.description}</span> 
            </div>
        </div>
    )
}