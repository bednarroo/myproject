import styles from '../styles/Pizza.module.css'
import React, { useState } from 'react';
import Image from 'next/image'



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
            {props.pizza.description}</div>
        <button className={styles.pizzaCard__btn}>Get more info!</button>

    </div>
        
    

    </div>




    </div>
)
}