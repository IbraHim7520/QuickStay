import React from 'react';

const ReviewCard = ({review}) => {
    const {text , username , rating}= review
    return (
         <div className="card p-5 w-full bg-base-300 text-start bg-base-100 card-sm shadow-sm">
            <div className='flex gap-3 items-center'>
                <div>
                    <p className='font-bold text-lg text-gray-500'>{username}</p>
                <div className='flex justify-center items-center gao-2'>
                        <div className="rating mt-0 rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 stat"  />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" checked={rating==4 ? true: false} />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" checked={rating==5 ?true : false} />
                    </div>
                     <p>({rating})</p>
                </div>
                    
                </div>
            </div>

            <p>{text}</p>
        </div>
    );
};

export default ReviewCard;