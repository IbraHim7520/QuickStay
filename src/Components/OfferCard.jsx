import React from 'react';

const OfferCard = ({ofer}) => {
    const {percent, title, description, image , expireDate} = ofer;
    return (
       <div className="card bg-base-100 image-full  shadow-sm">
  <figure>
    <img
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className='bg-white w-fit px-5  rounded-full'>
        <p className='text-xs font-bold text-black w-fit'>{percent}% Off</p>
    </div>
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
 
 <div className='flex justify-between items-center'>
       <div className="card-actions justify-end">
      <button className="btn btn-outline btn-xs text-white btn-primary">See Offers</button>
    </div>

    <div>
        <p className='text-xs'>Expired On: {expireDate}</p>
    </div>
 </div>
  </div>
</div>
    );
};

export default OfferCard;