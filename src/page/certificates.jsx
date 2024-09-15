import React from 'react';
import img from '../constants/img';


const elements = [
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
]
export const Component = ({title, description, image}) => {
  return (
    <div className='tablet:w-40 tablet:h-56 border-1 border-whiter rounded-xl flex flex-col tel:w-36 tel:h-52'>
      <span className='text-shadow-outline'>{title}</span>
      <span className='text-gray-400 text-xs'>{description}</span>
      <img src={image} alt={title} className='w-full mt-4'/>
    </div>
  );
}

export default function Certificates() {
  return (

    <div className='w-full flex justify-center gap-4 items-center flex-wrap'>
        {
            elements.map((element, index) => (
                <div className='w-48 h-56 text-white border-2 border-shadow-outline border-white'>
                    sfr
                </div>
            ))
        }
    </div>
  );
}
