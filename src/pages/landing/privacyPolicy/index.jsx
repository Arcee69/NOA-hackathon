import React from 'react'

const PrivacyPolicy = ({ handleClose }) => {
  return (
    <div className='flex flex-col bg-[#fff] w-[600px] h-[400px] p-8 overflow-y-scroll '>
        <div className='text-[#000] cursor-pointer flex text-base font-semibold justify-end' onClick={handleClose}>X</div>

        <h2 className='text-[#000] font-semibold text-xl'>PRIVACY POLICY</h2>
        <div className='flex flex-col gap-3 mt-3'>
            <p className='text-base'>
                At Educatial, we collect information through our platform to enhance the services we provide to our users.
                This information enables us to offer a better experience tailored to your needs and preferences. 
                Our data collection methods include:
            </p>
            <ul className='flex flex-col gap-3 mt-3 mx-5'>
                <li className='flex flex-col gap-2'>
                    <p className='text-base'>1. User-provided information </p>
                    <p className='text-base mx-3'>
                        When you create an account for our services, we may ask for personal details such as your name, 
                        email address, telephone number, or credit card information. 
                        Additionally, if you wish to utilize our sharing features, 
                        we may request you to create a publicly visible profile containing your name and photo.
                    </p>
                </li>
                <li className='flex flex-col gap-2'>
                    <p className='text-base'>2. Information from service usage </p>
                    <p className='text-base mx-3'>
                        We collect data about how you interact with our services, such as watching videos, reading PDFs, 
                        visiting websites that use our advertising services, or engaging with our ads and content. 
                        This includes device-specific information like hardware model, operating system version, 
                        unique identifiers, and mobile network information. 
                        Some of this information may be associated with your Educatial  account.
                    </p>
                </li>
                <li className='flex flex-col gap-2'>
                    <p className='text-base'>3. Log information  </p>
                    <p className='text-base mx-3'>
                        When you use our services or access content on the Educatial platform, 
                        certain details are automatically logged and stored on our servers. 
                        This includes information about your usage patterns, search queries, messaging logs, 
                        IP address, device events, crashes, system activity, browser type, language, request timestamp, 
                        referral URL, and cookies that may identify your browser or account.
                    </p>
                </li>
                <li className='flex flex-col gap-2'>
                    <p className='text-base'>4. Location information </p>
                    <p className='text-base mx-3'>
                        To enhance your experience, we may collect and process information about your actual location 
                        using technologies like IP address, GPS, and other sensors. 
                        This can provide data on nearby devices, Wi-Fi access points, and cell towers.
                    </p>
                </li>
                <li className='flex flex-col gap-2'>
                    <p className='text-base'>5. Unique application numbers </p>
                    <p className='text-base mx-3'>
                        Some services may employ unique application numbers, which help us identify your installation, 
                        such as operating system type and application version number. 
                        These numbers and related information may be sent to Educatial during installation, 
                        uninstallation, or periodic server contacts for updates.
                    </p>
                </li>
                <li className='flex flex-col gap-2'>
                    <p className='text-base'>6. Local storage </p>
                    <p className='text-base mx-3'>
                        We may store information, including personal data, locally on your device using mechanisms 
                        like browser web storage (e.g., HTML 5) and application data caches.
                    </p>
                </li>
                <li className='flex flex-col gap-2'>
                    <p className='text-base'>7. Cookies and similar technologies </p>
                    <p className='text-base mx-3'>
                        To collect and store information during your visits to Educatial  services, 
                        we and our partners use technologies like cookies. 
                        These technologies assist us in identifying your browser or device, 
                        as well as collecting and storing data when we interact with you or others. 
                    </p>
                </li>
            </ul>
            <p className='text-base'>
                Information collected while you are signed in to Educatial may be associated with your account and 
                treated as personal information. You can access, manage, or delete such information by visiting the 
                Transparency and choice section of our policy.
            </p>
            <p className='text-base'>
                Please note that the use of cookies and related technologies on end-user devices complies with privacy 
                laws and regulations. These technologies support application functionality, improve performance, and 
                track usage. For more details, consult legal counsel familiar with the relevant regulations
            </p>

            <div className='flex flex-col gap-3 mt-3'>
                <p className='text-base font-semibold'>How we use the information we collect:</p>
                <p className='text-base'>
                    We utilize the information collected across our services to provide, maintain, protect, 
                    and improve them. It enables us to develop new services, safeguard Educatial and our users, 
                    and deliver personalized content such as search results, relevant information, and tailored 
                    advertising.
                </p>
                <p className='text-base'>
                    Your Profile name and photo may be used across our services requiring an account. 
                    We may also replace past names associated with your account to maintain consistency. 
                    If other users have your identifying information, we may display your publicly visible 
                    Profile details, respecting any sharing or visibility settings you have chosen.
                </p>
                <p className='text-base'>
                    When you contact us, we retain a record of your communication to assist with issue resolution. 
                    We may also use your email address to provide updates on our services, 
                    such as upcoming changes or improvements.
                </p>
                <p className='text-base'>
                    Cookies and other technologies are employed to enhance your user experience and the overall quality 
                    of our services. Information Security
                </p>
                <p className='text-base'>
                    At Educatial, we prioritize the protection of both our platform and our users' information, 
                    ensuring it is safeguarded against unauthorized access, alteration, disclosure, or destruction. 
                    Here are the measures we have in place:
                </p>
                <ul className='flex flex-col gap-3 mt-3 mx-5'>
                    <li className='flex flex-col gap-2'>
                        <p className='text-base'>1. Encryption</p>
                        <p className='text-base mx-3'>
                            We employ SSL encryption for many of our services under our contract, 
                            ensuring that the data transmitted between your computer and the Educatial server remains 
                            secure. SSL websites have addresses that begin with HTTPS:// instead of http://, 
                            signifying the added security.
                        </p>
                    </li>
                    <li className='flex flex-col gap-2'>
                        <p className='text-base'>2. Two-Step Verification</p>
                        <p className='text-base mx-3'>
                            When accessing your account, we offer you the option of enabling two-step verification. 
                            This additional layer of security helps protect your account by requiring a second form 
                            of authentication.
                        </p>
                    </li>
                    <li className='flex flex-col gap-2'>
                        <p className='text-base'>3. Regular Review</p>
                        <p className='text-base mx-3'>
                            We continuously review our information collection, storage, and processing practices, 
                            including implementing physical security measures. 
                            These measures are designed to prevent unauthorized access to our systems and maintain the 
                            integrity of your information.
                        </p>
                    </li>
                    <li className='flex flex-col gap-2'>
                        <p className='text-base'>4. Restricted Access</p>
                        <p className='text-base mx-3'>
                            We limit access to personal information only to our employees, contractors, and agents 
                            who require access to process the information on our behalf. 
                            These individuals are bound by strict contractual confidentiality obligations, 
                            and failure to meet these obligations may result in disciplinary action or termination.
                        </p>
                    </li>
                </ul>
            </div>

            <div className='flex flex-col gap-3 mt-3'>
                <p className='text-base font-semibold'>Privacy Policy Scope</p>
                <p className='text-base'>
                    Our Privacy Policy applies to all the services offered by Educatial and its affiliates, 
                    including services provided on other websites, such as our advertising services. 
                    However, please note that it does not extend to services offered by external companies or individuals. This includes products or websites that may be displayed in search results. Additionally, our Privacy Policy does not cover the information practices of other companies or organizations that advertise our services and may use technologies like cookies and pixel tags to serve relevant ads.
                </p>
            </div>

            <div className='flex flex-col gap-3 mt-3'>
                <p className='text-base font-semibold'>Changes to the Privacy Policy</p>
                <p className='text-base'>
                    Our Privacy Policy may be updated periodically. 
                    We value your rights and will not diminish them without obtaining your explicit consent. 
                    Any changes to the policy will be posted on this page, with significant changes accompanied 
                    by more prominent notices. In certain cases, we may also provide email notifications regarding 
                    policy changes. Previous versions of the Privacy Policy will be archived for your reference.
                </p>
            </div>

            <div className='flex flex-col gap-3 mt-3'>
                <p className='text-base font-semibold'>Support for SSL Encryption</p>
                <p className='text-base'>
                    We encourage institutions to run their Educatial Learn solution under SSL. 
                    SSL is a browser technology that encrypts data transmitted between your 
                    computer and the Educatial server. SSL websites have addresses beginning with HTTPS:// 
                    instead of http://. By utilizing SSL, organizations can ensure the privacy and security 
                    of transmitted data, including login and password information.
                </p>
            </div>

            <div className='flex flex-col gap-3 mt-3'>
                <p className='text-base font-semibold'>Need Help?</p>
                <p className='text-base'>
                    If you have any specific questions or concerns regarding our policies, 
                    please don't hesitate to contact us at <span className='underline'>ask@educatial.com </span> 
                    or call us at- 09069489382, 09088888211. 
                </p>
            </div>

        </div>
        
    </div>
  )
}

export default PrivacyPolicy