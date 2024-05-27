import React from 'react'

const Faqs = ({ handleClose }) => {
  return (
    <div className='flex flex-col bg-[#fff] w-[600px] h-[400px] p-8 overflow-y-scroll '>

        <div className='text-[#000] cursor-pointer flex text-base font-semibold justify-end' onClick={handleClose}>X</div>

        <h2 className='text-[#000] font-semibold text-xl'>FAQS</h2>

        <div className='flex flex-col mt-3 gap-3'>
            <div className=''>
                <p className='font-bold text-base mx-5'>1. What is Educatial?</p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        Educatial is an online learning platform that offers a wide range of educational resources 
                        and activities for learners of all ages and levels.
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    2. <span >How do I sign up for an account on Educatial?</span>
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        To sign up for an account on Educatial, simply visit our website at 
                        <span className='underline text-[#3f76bf]'> https://educatial.com</span> and click on the "Sign Up" button. 
                        Fill in the required information, including your name, email address, and password, 
                        and you'll be all set!
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    3. <span className='ml-1'>Are the resources on Educatial free?</span> 
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        Educatial offers both free and paid services While some resources are available at no cost, 
                        others may require a fee to access premium content and additional features. 
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    4. <span className='ml-1'>How can I browse and find apps on Educatial?</span>
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        You can browse apps on Educatial by clicking on the "Apps" tab on the main navigation menu. 
                        From there, you can use the search bar to explore different categories and topics to discover 
                        new learning opportunities.
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    5. <span className='ml-1'>Can I earn certificates for completing courses on Educatial?</span>
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        Yes, Educatial provides certificates of completion for certain courses. 
                        These certificates serve as recognition of your achievement and can be shared on your 
                        professional profiles or included in your resume. Not all courses offer certificates, 
                        so make sure to check the course details to see if a certificate is available.
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    6. <span className='ml-1'> Can I access Educatial on my mobile device?</span>
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        Yes, Educatial is designed to be mobile-friendly. 
                        You can access the platform on your smartphone or tablet by visiting our website on 
                        a mobile browser. Additionally, we are working on developing a dedicated mobile app 
                        for an even better learning experience.
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    7. <span className='ml-1'>How can I contact customer support if I have a question or issue?</span>
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        If you have any questions, issues, or need assistance, 
                        you can reach out to our customer support team by clicking on the "Contact" 
                        link in the website footer. Fill out the contact form with your query, and our support team will 
                        get back to you as soon as possible.
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    8. <span className='ml-1'>Can I become an instructor on Educatial and create my own courses?</span>
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        Yes, Educatial welcomes passionate instructors to share their knowledge and create courses. 
                        If you're interested in becoming an instructor, 
                        you can find more information and apply on our website under the "Instructor" section.
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    9. <span className='ml-1'>Is my personal information secure on Educatial?</span> 
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        Educatial takes user privacy and data security seriously. 
                        We employ industry-standard security measures to protect your personal information 
                        and ensure a safe learning environment. 
                        For more details, you can review our privacy policy on the website.
                    </li>
                </ul>
            </div>
            <div className='mt-3'>
                <p className='font-bold text-base mx-5 flex'>
                    10. <span className='ml-1'> How can I cancel my subscription on Educatial?</span>
                </p>
                <ul className='mx-14'>
                    <li className='list-disc'>
                        To cancel your subscription on Educatial, you can go to your account settings and find the 
                        subscription management section. From there, you'll have the option to cancel your subscription. 
                        Make sure to follow the cancellation instructions provided to ensure a successful cancellation 
                        process.
                    </li>
                </ul>
            </div>
        </div>

    </div>
  )
}

export default Faqs