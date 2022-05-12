import {data} from '../data/slider';
import styles from '../styles/Slider.module.css'
import Image from 'next/image'
import Arrow from "../pictures/arrow.png"
import React, { useState } from 'react';


export default function Slider () {
    const [sliderNumber, setSliderNumber] = useState(0);
    
    const handleSlide = (value, prevState) =>{
        if(value === "r" ){
            if(sliderNumber < data.length -1 ){
                setSliderNumber(sliderNumber + 1);
            } else{
            setSliderNumber(0);
        }
        }
        else{
            if(sliderNumber < 1 ){
                setSliderNumber(data.length-1);
            }else{
            setSliderNumber(sliderNumber -1 );
            }
        }
    }
    return(
    <div className={styles.sliderContainer}>
    <div onClick={() => handleSlide("l")} className={styles.sliderContainer__arrow + " " + styles.sliderContainer__leftarrow } >
    <Image src={Arrow} style={{zIndex: '-1', bottom: "500px"}} alt="Left arrow" height="100 px" width ="50 px" /> 
    </div>
        <div className={styles.sliderContainer__picture}>
        {data.map((element, key) => 
             {return(
                 <div className={styles.sliderContainer__element} style={{
                     transform: `translate(${"-100" * sliderNumber + "vw"}, 0)`
                 }} key={key}>
                    <h2 className={styles.sliderContainer__title}>
                        {element.header}
                     </h2>
        <div>
        <Image src={element.imageSrc} style={{zIndex: '-1'}} alt={element.description}  />  
        </div>
        <h3 className={styles.sliderContainer__description}>
            {element.description}
        </h3>
    </div>
     )

    })}
     </div>
    <div className={styles.sliderContainer__arrow + " " + styles.sliderContainer__rightarrow } onClick={() => handleSlide("r")}><Image src={Arrow} style={{zIndex: '-1', transform: "rotate(180deg)", left: "5100px"}} alt="right arrow" height="100
 px" width ="50 px" /> </div>
    </div>
        )
}