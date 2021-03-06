import styles from "../../styles/News.module.css";
import NewsElement from "../../components/NewsElement";
import { news } from "../../data/news.js";

export default function News() {
    return ( 
    
    <section className={styles.container}>
        <div className={styles.container__left}>
        <div className={styles.container__sortTitle}>
            <span>Sort you order:</span>
            
        </div>
        <div className={styles.container__sortDate}>
            <span>Sort by date:</span>   
        </div>
        <div className={styles.container__sortCategory}>
            <span>Sort by category:</span>  
        </div>
        </div>
        <div className={styles.container__right}>
        {news.map( news => {
            return <NewsElement key={news.id} news={news} />;
        })}
        </div>

    </section>
    )
}



