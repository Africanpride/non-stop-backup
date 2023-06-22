import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone, faEnvelope, faMapLocation } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faInstagram, faLinkedin, faYoutubeSquare, faPinterest, faYoutube, faCheckSquare } from "@fortawesome/free-brands-svg-icons"
import Imagine2 from "../components/Imagine2";
import BlockCardInner from "../components/blockCardInner";
import BlockOne from "../components/block1";
import ImageBlock from '../components/imageBlock';
import parse from 'html-react-parser';
import ctl from "@netlify/classnames-template-literals";
import Feedback from '../components/feedback';


export default function Contact() {
  const sectionCss = ctl(`flex flex-col gap-4 my-5 px-2 md:px-5  md:flex-row justify-center items-center h-full `);
  const overlay = ctl(`absolute inset-0 bg-black opacity-50 z-10  rounded-neat	`)
  const gridBlock = ctl(`bg-slate-900 box-border rounded-neat aspect-square flex justify-center items-center p-5`)
  const miniTitle = parse(`For Participation  <span className='text-yellow-500 font-bold'>Information</span> And Other Matters.`)
  const feedbackCss = `dark:bg-slate-800 bg-slate-200 text-slate-900 dark:text-slate-300 shadow md:px-10 py-16 px-2 md:px-5 mb-16 mx-16 rounded-neat relative overflow-hidden`
  const bigTitle = parse(`Get in Touch`)
  const topTitle = parse(`Participation Information  &#8212; And other Matters.`)

  const mapLink = <Link href='https://www.google.com.gh/maps?q=logos+rhema+foundation+map&client=ubuntu&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiju6mI__jjAhWJHRQKHek_BtYQ_AUIEigC'><a className='cursor-pointer'> Click For Direction<br />To Location</a></Link>

  const twitterLink = <Link href='https://www.google.com.gh/maps?q=logos+rhema+foundation+map&client=ubuntu&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiju6mI__jjAhWJHRQKHek_BtYQ_AUIEigC'><a className='cursor-pointer'> Click For Direction<br />To Location</a></Link>

  const faceBookLink = <Link href='https://www.google.com.gh/maps?q=logos+rhema+foundation+map&client=ubuntu&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiju6mI__jjAhWJHRQKHek_BtYQ_AUIEigC'><a className='cursor-pointer'> Click For Direction<br />To Location</a></Link>

  const tiktokLink = <Link href='https://www.google.com.gh/maps?q=logos+rhema+foundation+map&client=ubuntu&um=1&ie=UTF-8&sa=X&ved=0ahUKEwiju6mI__jjAhWJHRQKHek_BtYQ_AUIEigC'><a className='cursor-pointer'> Click For Direction<br />To Location</a></Link>

  const youtubeLink = <Link href='https://www.youtube.com/channel/UCszsGdub8qkbJOz_rdx-5IA'>
    <a className='cursor-pointer'>Follow us Live<br />On Youtube </a>
  </Link>



  return (
    <>
      <section>
        <Imagine2 bigTitle={bigTitle} hidden={'hidden'} topTitle={topTitle} />
      </section>

      <Feedback />
      <section className={sectionCss}>

        <ImageBlock imgSrc='/images/non-stop-logo.jpg' />

        <BlockOne>
          <BlockCardInner
            title={'Youtube'}
            innerText={youtubeLink}
            fonts={'font-bold'}
            icon={faYoutube}
            bottomIcon
            displayBottom={true}
          />
        </BlockOne>

        <ImageBlock
          imgSrc='/images/akosua.jpg'
          // imageText={parse(`info@thenonstop.org`)}
          imageTextCss={`z-20 font-[montserrat] text-yellow-500 font-bold text-sm`}
        // overlay={overlay}
        />

        <BlockOne>
          <BlockCardInner title={'Physical LOcation'} fonts={'font-bold'}
            innerText={mapLink}
            icon={faMapLocation}
            displayBottom={true}
          />
        </BlockOne>
        <ImageBlock
          imgSrc='/images/24hours.jpg'
          imageText={parse(`info@thenonstop.org`)}
          imageTextCss={`z-20 font-[montserrat] text-yellow-500 font-bold text-md`}
          overlay={overlay}
        />
        <BlockOne>
          <BlockCardInner
            title={'Hotlines'}
            fonts={'font-bold'}
            innerText={parse('+233(0)208223547 <br /> +233(0)244844893 ')}
            icon={faPhone}
            bottomIcon
            displayBottom={true}
          />
        </BlockOne>
      </section>


    </>
  )
}