import style from "../styles/Socials.module.css";
import Image from 'next/image';
import facebook from '../pictures/icons/facebook.png';
import linkedin from '../pictures/icons/linkedin.png';
import tiktok from '../pictures/icons/tiktok.png';
import twitter from '../pictures/icons/twitter.png';
import youtube from '../pictures/icons/youtube.png';



export default function Socials () {
    return(
        <section className={style.socials}>
            <div className={style.socials__container}>

            <div className={style.socials__element}>
                <Image src={facebook} height="50px"
                width="50px" />
            </div>
            <div className={style.socials__element}>
            <Image src={linkedin} height="50px"
                width="50px" />
            </div>
            <div className={style.socials__element}>
            <Image src={tiktok} height="50px"
                width="50px"  />
            </div>
            <div className={style.socials__element}>
            <Image src={twitter} height="50px"
                width="50px"  />
            </div>
            <div className={style.socials__element}>
            <Image src={youtube} height="50px"
                width="50px"  />
            </div>



            </div>
        </section>
    )
}