import React from 'react'
import { client } from '../lib/sanity';
import BikeCategories from '@/components/BikeCategories';

const getData = async ()=>{
    const querry = `*[_type == 'product'] {
        _id,
        images,
        price,
        price_id,
        name,
        description,
        'slug': slug.current,
        'categories': categories[]->{name}
    }`
    const data = await client.fetch(querry);
    return data;
}

const OurBikes = async () => {
    const bikes = await getData();

  return (
    <div>
    <BikeCategories bikes= {bikes}/>
    </div>
  )
}

export default OurBikes;