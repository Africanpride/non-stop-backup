import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import ctl from "@netlify/classnames-template-literals";
import {motion} from "framer-motion"

export default function LiveFrame() {
    
    const liveFrame = [
        { imgageSrc: 'ministration/calvin.jpg', dataValue:3  },
        { imgageSrc: 'mama_pat.jpg', dataValue:2  },
        { imgageSrc: '144.jpg', dataValue:1 },
     
    ]
    const vertBoxes = ctl(`relative  box-border w-24 md:w-36 my-2 h-24 md:h-56 p-3 flex flex-col justify-center items-center`)
    return (
        <>
        <div className='my-5 h-auto  flex justify-end items-center'>

            <div className="flex gap-2 my-5 mx-2 ">
                {liveFrame.map((e, i) => (
                    <motion.div key={i} className={vertBoxes}  
                    data-value={e.dataValue}
                    initial={{ translateX:+50, opacity:0 }}
                    animate={{ translateX:0,  opacity:1 }}
                    // transition={{ staggerChildren: 0.5,
                    //     delay: i * 0.5 }}
                        transition={{
                            ease: [0, 0.3,0.5,1],
                            duration: 2,
                            delay: i * 0.2
                          }}

                          
                    >
                        <Image
                            layout='fill'
                            src={`/images/${e.imgageSrc}`}
                            alt={`The Non-Stop Series`}
                            className={`object-cover w-full h-56 sm:h-72 rounded-bl-3xl rounded-tr-3xl `}
                        />
                    </motion.div>
                ))}

            </div>
        </div>
        </>

    );

}