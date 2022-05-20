import styles from "../../styles/Staff.module.css";
import { staff } from '../../data/staff'
import Member from "../../components/Member";
export default function Staff (){
    console.log(staff)
    return(
        <section>
            <div className={styles.staffContainer}>
                <div className={styles.staffContainer__title}>
                 <h2>Check out our Staff!</h2>   
                    </div>
                    <div className={styles.staffContainer__members}>
                    {staff.map(member => <Member key={member.id} member={member}/> )}
                    </div>
                    </div>
        </section>
    )
} 