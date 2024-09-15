import React from 'react'
import { FocusCards } from "../components/focus-cars";
import img from '../constants/img';

  const cards = [
    {
      image:img.ciscoBadge,
      title:"Cisco",
      description:"Introduction to Cybersecurity",
      link:"https://www.credly.com/badges/ab812de4-d1f2-402c-b138-541df6c57739/public_url"
    },
    {
        image:img.ccna1,
        title:"Cisco",
        description:"CCNA: Introduction to Networks",
        link:"https://www.credly.com/badges/ac9b3d6e-4cec-4685-830c-b777e7a52426/public_url"
    },
    {
        image:img.awscloudfoundation,
        title:"AWS",
        description:"AWS Academy Cloud Foundations",
        link:"https://www.credly.com/badges/b312cf63-916e-4feb-a0e8-9e0de6c9529e/public_url"
    },
    {
        image:img.isc2candidate,
        title:"ISC2",
        description:"ISC2 Candidate",
        link:"https://www.credly.com/badges/ad7bac6b-459e-4485-af5a-9960e7020ef7/public_url"
    },
  ];


export default function Certificates() {
  return (
    <div className='w-full bg-third flex justify-center items-center py-20' id='certificate'>
      <div className='w-full max-w-[1200px] flex justify-start items-center relative flex-col gap-4'>
        <div className='w-44 h-10 bg-secondary font-urbanist text-white text-xl text-center flex items-center justify-center rounded-full border-1'>
            My Certificates
        </div>
        <div className='text-3xl font-urbanist font-bold text-white max-w-[500px] text-center'>
          View all the certificates and badges that I obtained during my journey.
        </div>
        <div className='w-full px-1'>
          <FocusCards cards={cards} />;
        </div>
      </div>
    </div>
  )
}
