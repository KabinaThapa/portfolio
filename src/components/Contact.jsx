import React from 'react'

const Contact = () => {
  return (
    <div id="Contact" className=' m-auto pl-4 pr-4 bg-slate-400 max-w-full md:pl-16 md:pr-16'>
      <h1 className='text-center'>Contact</h1>
      <form action='' method='POST' encType='multiple/form-data'>
        <div className='w-full grid md:grid-cols-2 gap-4 lg:gap-12'>
          <div className='flex flex-col'>
        <label>Name</label>
        <input className='rounded-md bg-slate-200 p-2 w-full lg:w-[2/3]' type="text" name='name'/>
        </div>
        <div  className='flex flex-col'>
        <label>Phone Number</label>
        <input className='rounded-md  bg-slate-200 p-2 mb-4 w-full' type="text" name='phone'/>
        </div>
        </div>
        <div  className='flex flex-col'>
        <label>Email</label>
        <input className='rounded-md mt-1 bg-slate-200 p-2 mb-4' type="text" name='email'/>
        </div>
        <div  className='flex flex-col'>
        <label>Subject</label>
        <input className='rounded-md mt-1 bg-slate-200 p-2 w-full mb-4' type="text" name='subject'/>
        </div>
        <div  className='flex flex-col'>
        <label>Message</label>
        <input className='rounded-md mt-1 bg-slate-200 p-2 h-44' type="text" name='message'/>
        </div>
        
        <button className='flex justify-center border-2 rounded-md mt-4 p-1 w-full'> Send Message</button>
      </form>

    </div>
  )
}

export default Contact