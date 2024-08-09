import React from 'react'
import Link from 'next/link';
const SuccessPage = () => {
  return (
    <section className='py-72'>
      <div className="container mx-auto flex flex-col items-center">
        <h3 className='text-center mb-4'>Your Payment was successfull, Thank You!</h3>
        <Link href='/' className=''>
          <button className='btn btn-accent'>Go to home</button>
        </Link>
      </div>
    </section>
  )
}

export default SuccessPage;