import React from 'react'
import Image from 'next/image';
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarChart, faPhone, faEnvelope, faMapLocation, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import ReactPlayer from 'react-player/youtube'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import Message from './message';

const CSMessage = () => {

  const [show, setShow] = useState(false);

  const router = useRouter();


  useEffect(() => {
    const handleComplete = () => {
      setShow(false);
    };
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router.events, show]);

  return <>

    <div className='z-20 dark:text-white text-slate-900  font-[oswald] leading-tight uppercase w-full 
     flex-col justify-center text-center text-md overflow-hidden hidden '>A message from the Chief Servant</div>

    <div 
    onClick={() => { setShow(true)}}
    className={`z-20  aspect-video  md:mx-48   
    relative flex justify-center items-center  shadow-lg  `}
    >

      <div className='popup-border text-4xl w-16 h-16 bg-red-500 z-20 cursor-pointer  
      rounded-full flex justify-center items-center relative ' >
        <FontAwesomeIcon
          icon={faPlay}
          className="text-lg text-white z-30 h-5 w-5 ">
        </FontAwesomeIcon>
      </div> 

      <div className='  aspect-video '>
        <Image
          src={`/images/worship.jpg`}
          alt='Message from The Chief Servant'
          layout='fill'
          // objectFit='fit'
          className={'object-cover object-center rounded-none md:rounded-neat'}
        />
      </div>

    </div>

  
    { show &&  (<div
      id='playContainer'
      // onClick={()=>{setShow(false)}}
      className='fixed inset-0 bg-black bg-opacity-25 backdrop-blur-xl w-[100%] h-full flex justify-center items-center z-40 overflow-hidden'>

      <div className='w-full md:w-auto  z-50 grid place-content-center place-items-center  rounded-md inset-0 '>
        <ReactPlayer
          className={'w-full rounded-neat md:w-full'}
          url={'https://www.youtube.com/watch?v=64H_A80jHcg'}
          width='100%'
          height='100%'
          controls='true'
          // light='/images/john.jpg'
        playing='true'
        >
        </ReactPlayer>

        {/* <iframe width="560" height="315" src="https://www.youtube.com/watch?v=BV97eE4r_IE" frameborder="0" allowfullscreen></iframe> */}
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UC_43aGdcd0mLYjeK84Yn3mg" frameborder="0" allowfullscreen></iframe> */}
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/live_stream?channel=UCszsGdub8qkbJOz_rdx-5IA" frameborder="0" allowfullscreen></iframe> */}
      </div>
      <div onClick={()=>{setShow(false)}} className='cursor-pointer absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50'><FontAwesomeIcon icon={faTimesCircle} className="text-white text-3xl "></FontAwesomeIcon></div>
    </div>)}
  </>;
}

export default CSMessage