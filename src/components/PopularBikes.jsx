import React from 'react';
import {client} from '../app/lib/sanity';
import Link from 'next/link';
import PopularBikesCarosel from './PopularBikesCarosel';


//geting data from sanity

const getData = async ()=>{
    const query = `*[_type == "product" && references(*[_type == 'category' && name == 'popular']._id , category)] {
      _id,
      name,
      description,
      images,
      price,
      price_id,
      'slug': slug.current,
      'categories': categories[]->{
        name
      }
  }`

  const data = await client.fetch(query);
  return data;
}

const PopularBikes = async () => {
  const bikes = await getData();
  
  return (
    <section className='py-24'>
      <div className="container mx-auto">
        <h2 className='text-center'>Most Popular bikes</h2>
        <p className='text-center mb-[30px]'>The World's Premium Brands In One Destination</p>
        <PopularBikesCarosel bikes={bikes}/>
        <Link href={'/our-bikes'}><button className='btn btn-accent mx-auto'>See All Bikes</button></Link>
      </div>
    </section>
  )
}

export default PopularBikes;