'use client'
import { useState, useEffect } from 'react'
import { RadioGroup, RadioGroupItem } from './ui/radio-group'
import { Label } from './ui/label'
import { Slider } from './ui/slider'
import React from 'react'
import Bike from './Bike'

const BikeCategories = ({bikes}) => {
    const [category, setCategory] = useState('all');
    const [filterBikes, setFilterBikes] = useState([]);
    const [price,setPrice] =useState(900);

    useEffect(()=>{
        const filtered = bikes.filter((bike)=>{
            const  categoryMatch = category === 'all' ? bikes : bike.categories.some((categ)=> categ.name === category);
            const priceMatch = bike.price <= price;
            return categoryMatch && priceMatch;
        });
        setFilterBikes(filtered);
    },[category, price, bikes]);
    return (
        <section className='min-h-[1200px] py-10'>
            <div className="container mx-auto">
                <div className="flex flex-col">
                    {/* sidebar */}
                    <aside className='w-full p-4 mb-8 xl:w-[300px] xl:h-[84vh] xl:fixed'>
                        <RadioGroup defaultValue='all' className='flex flex-col gap-6 mb-12'>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='all' id='all' onClick={()=> setCategory('all')}/>
                                <Label htmlfor='all'>All</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='road' id='road' onClick={()=> setCategory('road')}/>
                                <Label htmlfor='road'>Road</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='professional' id='professional' onClick={()=> setCategory('professional')}/>
                                <Label htmlfor='professional'>Professional</Label>
                            </div>
                            <div className='flex items-center space-x-2'>
                                <RadioGroupItem value='extreme' id='extreme' onClick={()=> setCategory('extreme')}/>
                                <Label htmlfor='extreme'>Extreme</Label>
                            </div>
                        </RadioGroup>
                        {/* price slider */}
                        <div className='text-lg mb-4 font-medium max-w-56'>
                            <div>Max Price: <span className='text-accent font-semibold ml-2'>{price}</span>
                            <span className='ml-2'>({filterBikes.length > 1 ?   `${filterBikes.length} items`: filterBikes === 0 ? `${filterBikes.length} items` : `${filterBikes.length} item`})</span>
                            </div>
                            <Slider defaultValue={[900]} max={1000} step={1} onValueChange={(val)=>{setPrice(val[0])}}/>
                        </div>
                    </aside>
                    {/* Bike List */}
                    <div className=' w-full xl:w-[1050px] ml-auto'>
                        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
                        {filterBikes.map((bike)=>{
                            return <Bike bike={bike} key={bike.price_id}/>
                        })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BikeCategories;