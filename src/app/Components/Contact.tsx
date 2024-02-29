import React from 'react'

const Contact = () => {
  return (
    <>
    <form className="font-bold">
        <div className='mb-2'>
            <input
                type="text"
                placeholder='Your name'
                name='name'
                className='p-2 w-200 placeholder-blue-400 rounded-lg' />
          </div>
        <div className='mb-2'>
            <input type= "text" 
                placeholder='Your email'
                name='email'
                className='p-2 w-200 placeholder-blue-300 rounded-lg'
            />
        </div>
        <div className='mb-2'>
            <input type= "text" 
                placeholder='Your message'
                name='message'
                className='p-2 w-200 placeholder-blue-300 rounded-lg'            
            />
        </div>
        <button className='px-2 py-4 bg-blue-200 rounded-lg font-bold'>
            Send message
        </button>   
    </form>
    {/* <div>
        Contact me soon. . .
    </div> */}
    </>
  )
}

export default Contact
