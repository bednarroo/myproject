import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Slider from "../components/Slider";
import Newest from "../components/Newest"
import React, { useState } from 'react';

export default function Home() {
  
  return (
    <>
    <Slider/>
    <Newest/>
    {/* <AboutUs/>
    <Socials/> */}

    </>
  )
}
