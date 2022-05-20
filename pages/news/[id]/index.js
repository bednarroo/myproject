import styles from "../../../styles/NewsOne.module.css";
import { news } from "../../../data/news.js";
import {useRouter} from 'next/router';


export default function News() {
    const router = useRouter()
    const querypath = router?.query.id;
    let categories = []
    news.forEach(element => {
    categories.push(...element.category)
    categories = new Set(categories);
    categories = Array.from(categories);    
});
        
    return ( 
    
    <section className={styles.container}>
        <div className={styles.container__left}>
        <div className={styles.container__sortTitle}>
            <span>Get more news:</span>
            
        </div>
        <div className={styles.container__sortDate}>
            <span>Get by date:</span>   
        </div>
        <div className={styles.container__sortCategory}>
            <span>Get by category:</span>
            {categories.map(category => <div style={{backgroundColor: "#782834", color: "white" }} className={styles.container__categoryElement}><span>{category}</span></div>)}
        </div>
        </div>
        <div className={styles.container__right}>
            <div className={styles.article__title}>
                <h2>{news[querypath]?.name}</h2>
            </div>
            <div className={styles.article__description}>
            <span>{news[querypath]?.description}</span>
            </div>
            <div className={styles.article__value}>
            <span>{news[querypath]?.content}</span>
            </div>
        </div>

    </section>
    )
}


