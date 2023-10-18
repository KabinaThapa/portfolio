import React from 'react'



const Resume = () => {
  return (
    
    <div className='p-[2%] font-inter font-extralight flex flex-col justify-center items-center w-full bg-black bg-opacity-50 text-slate-200 ' id="Resume">
      <h1 className='md:text-4xl font-semibold text-3xl mt-10'>Resume</h1>
      <div className=' md:w-[85%] w-[95%]  space-y-4'>
        <div className=''>
          <h1 className='md:text-3xl text-lg font-medium '>Kabina Thapa</h1>
          <h2 className='md:text-xl text-lg font-medium'>Entry Level Front End Developer</h2>
          <h2 className='text-sm md:text-lg'>Thapakabina28@gmail.com | 929-257-4577 | Jamaica, New York 11416</h2>
         <p className='text-sm md:text-lg'>LinkedIn: <a className='underline text-blue-400' href='https://www.linkedin.com/in/kabina-thapa'>www.linkedin.com/in/kabina-thapa</a> | Git:<a className='underline text-blue-400' href=' https://github.com/KabinaThapa'> https://github.com/KabinaThapa</a>
         </p>
             
          
        </div>
      <div className='md:text-lg text-sm'>
        <p>As a passionate and self-motivated aspiring front-end developer, 
        I am dedicated to continuously expanding my knowledge and skills in web development. 
        Eager to embark on a career in front-end development, I have been actively learning 
        and working on personal projects to build a strong foundation in HTML, CSS, JavaScript,
         and front-end frameworks like React. My drive to excel and adapt to emerging technologies 
         makes me a determined and promising candidate eager to contribute to a dynamic team.</p>
         </div>
      <div className=''>
        <h1 className='md:text-2xl text-lg font-medium'>Technical Skills</h1>
        <div className='grid grid-cols-2 gap-2 md:text-lg text-sm'>
          <h1 className=''>Programming Languages:</h1>
          <h1>JavaScript (Intermediate), HTML (Intermediate), CSS (Intermediate), TypeScript (Basic)</h1>
          <h1 className=''>Front End Frameworks/Libraries:</h1>
          <h1>React (Intermediate)</h1>
          <h1 className=''>CSS Frameworks: </h1>
          <h1>Bootstrap (Basic), Tailwind CSS (Intermediate)</h1>
          <h1 className=''>Version Control:</h1>
          <h1>Git (Intermediate), GitHub (Intermediate)</h1>
          <h1 className=''>Package Managers:</h1>
         <h1>npm (Intermediate), Yarn (Basic)</h1> 
<h1 className=''>Design Software:</h1> 
<h1> Figma (Intermediate), Sketch (Basic)</h1> 
<h1 className=''>Backend Integration:</h1> <h1> Basic knowledge of Node.js</h1> 
<h1 className=''>API Testing and Development: </h1> <h1>Postman (Basic)</h1> 
<h1 className=''>IDE Tools:</h1> <h1> Visual Studio Code (Intermediate), Eclipse (Intermediate)</h1> 
<h1 className=''>Design and Graphics Tools: </h1> <h1> Blender (Intermediate), Krita (Basic)</h1> 
<h1 className=''>Certifications:</h1> <h1>Figma for UX Design-LinkedIn Learning, UX Foundation: Interaction Design-LinkedIn Learning.
</h1>
        </div>
      </div>
      <div className='space-y-4 '>
        
        <div className='space-y-2'>
        <h1 className='md:text-2xl text-lg font-medium'>Projects</h1>
        <h1 className='md:text-2xl text-base'>GlamEdge E-commerce Fashion website</h1>
       
        <div className='space-y-2'>
          <div>
        <h1 className='md:text-xl text-base underline'>Description:</h1>
        <p className='md:text-lg text-sm'>Developed a visually appealing and user-friendly e-commerce website called "Glamedge" with a primary focus on front-end development. Integrated a
           basic payment page using Stripe for secure transactions and implemented user authentication with Next Auth for seamless login and registration.</p>
           </div>
          <div className='text-sm md:text-lg'>
           <h1 className='md:text-xl text-base underline'>Technical Details:</h1>
           <h2>Front-End Technologies: Next.js, React-Redux Toolkit, Tailwind CSS</h2>
            <h2>Payment Integration: Stripe</h2>
            <h2>User Authentication: Next Auth</h2>
            </div>
            <div className='text-sm md:text-lg'>
            <h1 className='md:text-xl text-base underline'>Features:</h1>
            <h2>Implemented category-based product listings and a shopping cart functionality.</h2>
            <h2>Designed and created a custom database using a db.json file to manage product data.</h2>
            <h2>Enabled secure payment processing through Stripe for seamless transactions.</h2>
            <h2>Implemented user authentication and registration using Next Auth.</h2>
            </div>
            <div className='md:text-lg text-base  gap-2'><h1 className=''>Project Link: </h1> <a href=' https://glam-edge.vercel.app/' className='md:text-base text-sm underline text-blue-400'>https://glam-edge.vercel.app/</a></div>
            </div>
            </div>
            <div className=' space-y-2 text-sm md:text-lg'>
              <h1 className='md:text-2xl text-base '>Weather App</h1>
              <div>
              <h1 className='md:text-xl text-base underline'>Description:</h1>
              <p className='md:text-lg text-sm'>Developed a dynamic weather application using React, JavaScript, and Tailwind CSS. Utilized the OpenWeather API to provide real-time weather forecasts, including current conditions and 3-hour forecasts for 5 days.
                 Implemented SVG images and animations to visualize weather conditions and utilized Dayjs to convert timestamps into readable time.</p>
                 </div>
                 <div >
                 <h1 className='md:text-xl text-base underline'>Technical Details:</h1>
                 <h2>Front-End Technologies: React,Javascript, Tailwind CSS</h2>
            <h2>API Integration: OpenWeather API</h2>
            <h2>Visualization: SVG images and animations</h2>
                 <h2>Time Conversion: Dayjs</h2>
                 </div>
                 <div>
                 <h1 className='md:text-xl text-base underline'>Features</h1>
                 <h2>Real-time weather forecasts for current conditions and 3-hour intervals over 5 days.</h2>
                 <h2>Visual representation of weather conditions using SVG images and animations.</h2>
                 <h2>Conversion of timestamps into human-readable time formats for enhanced user experience.</h2>
                 </div>
                 <div className='md:text-xl text-base text-white  gap-2 items-center'>
                 <h1 className=''>Project Link: </h1>  <a href='https://weather-app-kabinathapa.vercel.app/' className='underline text-blue-400 md:text-base text-sm'> https://weather-app-kabinathapa.vercel.app/</a>
                 </div>
            </div>
           

        </div>
      <div className=''>
        <h1 className='md:text-2xl text-lg font-medium'>Education</h1>
        <div className='text-sm md:text-lg grid grid-cols-2 gap-3'>
          <div>
          <h1>Queens College/CUNY</h1>
         
          <h2 className='underline'>Bachelors of Arts in Computer Science</h2>
          </div>
          <div>
          <h1>Flushing, NY</h1>
          <h2>June 2023</h2>
          </div>
          <div>
          <h1>Fiorello H.LaGuardia Community College/CUNY</h1>
         

          <h2 className='underline'>Associate degree in Computer Science</h2>
          </div>
          <div>
          <h1>Long Island City,NY</h1>
          <h2>June 2021</h2>
          </div>
        </div>
        </div>
      </div>
      
    </div>
    
  )
}

export default Resume