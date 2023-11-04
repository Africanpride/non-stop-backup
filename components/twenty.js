/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ImagineHeader from '../components/Imagine';
import parse from 'html-react-parser'
import GridImages from '../components/gridImages';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Weather from '../components/weather';




export default function Twenty() {
    const miniTitle = parse(`For Participation  <span className='text-yellow-500 font-bold'>Information</span> And Other Matters.`)
    const sliderCss = `w-full h-[100%] text-center justify-center items-center relative`
    return (
        <>

                <section className="py-10 bg-black snap-y">
                <h1 className=" leading-tight text-center  px-5 py-10 my-5 text-slate-900 text-xl md:text-5xl tracking-tight font-extrabold  dark:text-white gradient mb-16">
                    {parse(`For 20+ Years, We've brought people together from all parts of the world in Praise &  Worship.`)}            
                </h1>

                <div className="md:mt-14 mt-4 relative sm:flex items-center justify-center">
                    <img src="https://i.ibb.co/KjrPCyW/map.png" alt="world map image" className="w-full xl:h-full h-96 object-cover object-fill sm:block hidden" />
                    <img src="https://i.ibb.co/SXKj9Mf/map-bg.png" alt="mobile-image" className="sm:hidden -mt-10 block w-full h-96 object-cover object-fill absolute z-0" />

                    <div className="invisible shadow-lg xl:p-6 p-4 sm:w-auto w-8/12 bg-white sm:absolute relative z-20 sm:mt-0 mt-4 left-0 xl:ml-56 sm:ml-12 xl:-mt-40 sm:-mt-12 rounded-neat dark:bg-slate-900">
                        <p className="text-3xl font-semibold dark:text-slate-100 text-gray-800">806 Hours</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Non-Stop worship Series</p>
                    </div>
                    <div className="invisible shadow-lg xl:p-6 p-4 w-48 sm:w-auto w-8/12 bg-white sm:absolute relative z-20 sm:mt-0 mt-4 xl:mt-80 sm:mt-56 xl:-ml-0 sm:-ml-12 rounded-neat dark:bg-slate-900">
                        <p className="text-3xl font-semibold dark:text-slate-100 text-gray-800">8K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Active Participation</p>
                    </div>
                    <div className="invisible shadow-lg xl:p-6 p-4 sm:w-auto w-full bg-white sm:absolute relative z-20 md:mt-0 sm:-mt-5 mt-4 right-0 xl:mr-56 sm:mr-24 rounded-neat dark:bg-slate-900">
                        <p className="text-3xl font-semibold dark:text-slate-100 text-gray-800">15K+</p>
                        <p className="text-base leading-4 xl:mt-4 mt-2 text-gray-600">Recently </p>
                    </div>

                </div>
                </section>
            


        </>
    )
}