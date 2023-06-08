import React from 'react';

const FundCard = ({title, description, image, handleClick }) => {
 
  
  return (
    <div className="sm:w-[288px] w-full rounded-[15px] bg-[#111] cursor-pointer" onClick={handleClick}>
      <img src={image} alt="fund" className="w-full h-[158px] object-cover rounded-[15px]"/>

      <div className="flex flex-col p-4">

      
      <div className="flex items-center">
      <img src="./logo.png" alt="logo.png" className="w-10 h-10 mr-2" />
  <div className="block">
    <h3 className="font-epilogue font-semibold text-[16px] text-white text-left leading-[26px] truncate">Video Description</h3>
    <p className="mt-[5px] font-epilogue font-normal text-[#808191] text-left leading-[10px] truncate">Theo jomson</p>
  </div>
</div>


      </div>
    </div>
  )
}

export default FundCard