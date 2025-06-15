import React from 'react';
import { flushSync } from 'react-dom';

const Testimonial = ({ testimonial }) => {
    const { User, Rating, Review } = testimonial
    return (
        <div className="card p-5  text-start bg-base-100 card-sm shadow-sm">
            <div className='flex gap-3 items-center'>
                <div className="avatar">
                    <div className="ring-primary ring-offset-base-100 w-5 rounded-full ring-2 ring-offset-2">
                        <img className='' src={"image"} />
                    </div>
                </div>
                <div>
                    <p>{User}</p>
                <div className='flex justify-center items-center gao-2'>
                        <div className="rating mt-0 rating-xs">
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 stat"  />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" checked={Rating==4 ? true: false} />
                        <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" checked={Rating==5 ?true : false} />
                    </div>
                     <p>({Rating})</p>
                </div>
                    
                </div>
            </div>

            <p className='text-sm'>{Review}</p>
        </div>
    );
};

export default Testimonial