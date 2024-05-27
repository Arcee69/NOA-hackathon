import React from 'react'

const TermsAndConditions = ({ handleClose }) => {
  return (
    <div className='flex flex-col bg-[#fff] w-[600px] h-[400px] p-8 overflow-y-scroll '>

        <div className='text-[#000] cursor-pointer flex text-base font-semibold justify-end' onClick={handleClose}>X</div>

        <h2 className='text-[#000] font-semibold text-xl'>TERMS & CONDITIONS</h2>
        <div className='flex flex-col mt-2 gap-3'>
            <p>
                Please read these Terms and Conditions carefully before using the Educatial platform. 
                This Agreement sets forth the legally binding terms and conditions for your use of the Service. 
            </p>
            <p>
                By accessing or using the Service in any manner, including, but not limited to, 
                visiting or browsing the Service or contributing content or other materials to the Service, 
                you agree to be bound by these Terms and Conditions. Capitalized terms are defined in this Agreement.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Account Registration and Access</h3>
            <p>
                1.1. In order to use the Platform, you must register for an account. 
                You agree to provide accurate, complete, 
                and up-to-date information during the registration process.
            </p>
            <p>
                1.2. You are responsible for maintaining the confidentiality of your account credentials and are fully 
                responsible for all activities that occur under your account.
            </p>
            <p>
                1.3. You must promptly notify Educatial of any unauthorized use of your account or any other 
                breach of security.
            </p>
            <p>
                1.4. Educatial reserves the right to suspend or terminate your account if we suspect any unauthorized access 
                or use.
            </p>
        </div>
        
        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Use of the Platform</h3>
            <p>
                2.1. You may only use the Platform for lawful purposes and in accordance with these Terms.
            </p>
            <p>
                2.2. You are solely responsible for any content, materials, or information you upload, transmit, 
                or make available through the Platform ("User Content").
            </p>
            <p>
                2.3. By using the Platform, you warrant that you own or have obtained all necessary rights, licenses, 
                consents, and permissions for any User Content you submit.
            </p>
            <p>
                2.4. You agree not to:
            </p>
            <ul className='mx-5 flex flex-col gap-3'>
                <li>a. Use the Platform in any way that violates applicable laws, regulations, or these Terms;</li>
                <li>b. Interfere with or disrupt the Platform or its servers or networks;</li>
                <li>c. Attempt to gain unauthorized access to the Platform or any user accounts;</li>
                <li>d. Engage in any conduct that could damage, disable, overburden, or impair the Platform or interfere with any other party's use of the Platform;</li>
                <li>e. Use the Platform to transmit or distribute any viruses, malware, or other harmful computer code;</li>
                <li>f. Use the Platform for any unauthorized commercial purposes;</li>
                <li>g. Remove, alter, or obscure any proprietary notices or labels on the Platform;</li>
                <li>h. Use any automated means, such as bots or scrapers, to access or collect information from the Platform.</li>
            </ul>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Intellectual Property</h3>
            <p>
                3.1. The Platform, including all software, content, designs, graphics, and other materials, 
                are owned or licensed by Educatial and protected by intellectual property laws.
            </p>
            <p>
                3.2. Subject to these Terms, Educatial grants you a limited, non-exclusive, non-transferable, 
                and revocable license to use the Platform for your personal or internal business purposes.
            </p>
            <p>
                3.3. You may not copy, modify, distribute, sell, lease, or create derivative works based on the 
                Platform or any part thereof, unless expressly authorized in writing by Educatial.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Data Privacy and Security</h3>
            <p>
                4.1. Educatial takes data privacy and security seriously. 
                We will handle your personal information in accordance with our Privacy Policy, 
                which is incorporated by reference into these Terms.
            </p>
            <p>
                4.2. You understand and acknowledge that the transmission of data over the internet is not completely 
                secure. Educatial cannot guarantee the security of any information transmitted through the Platform, 
                and you provide such information at your own risk.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Third-Party Content and Links</h3>
            <p>
                5.1. The Platform may contain links to third-party websites, services, 
                or resources that are not owned or controlled by Educatial.
            </p>
            <p>
                5.2. Educatial does not endorse or assume any responsibility for any third-party content, products, 
                or services accessed through the links provided on the Platform. 
                You acknowledge and agree that Educatial shall not be liable, directly or indirectly, 
                for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on 
                any such content, products, or services available on or through any such third-party websites or resources.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Termination</h3>
            <p>
                6.1. These Terms will remain in full force and effect while you use the Platform.
            </p>
            <p>
                6.2. Educatial reserves the right to suspend or terminate your access to the Platform at any time, 
                for any reason, without prior notice or liability.
            </p>
            <p>
                6.3. Upon termination, all licenses and rights granted to you in these Terms will immediately cease, 
                and you must promptly discontinue all use of the Platform.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Disclaimer of Warranties</h3>
            <p>
                7.1. The Platform is provided on an "as-is" and "as available" basis. 
                Educatial makes no warranties or representations, express or implied, regarding the Platform, 
                including but not limited to its accuracy, completeness, reliability, or availability.
            </p>
            <p>
                7.2. Educatial disclaims all warranties, whether express or implied, i
                ncluding but not limited to implied warranties of merchantability, 
                fitness for a particular purpose, and non-infringement.
            </p>
            <p>
                7.3. Educatial does not guarantee that the Platform will be uninterrupted, error-free, or secure, 
                or that any defects or errors will be corrected.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Limitation of Liability</h3>
            <p>
                8.1. To the maximum extent permitted by applicable law, Educatial shall not be liable for any direct, 
                indirect, incidental, consequential, or special damages arising out of or in any way related to your 
                use of the Platform, even if advised of the possibility of such damages.
            </p>
            <p>
                8.2. In jurisdictions that do not allow the exclusion or limitation of liability for consequential or 
                incidental damages, Educatial's liability shall be limited to the maximum extent permitted by law.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Governing Law and Jurisdiction</h3>
            <p>
                9.1. These Terms shall be governed by and construed in accordance with the laws of [Jurisdiction], 
                without regard to its conflict of law principles
            </p>
            <p>
                9.2. Any dispute arising out of or in connection with these Terms shall be subject to the exclusive 
                jurisdiction of the courts of [Jurisdiction].
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Entire Agreement</h3>
            <p>
                10.1. These Terms constitute the entire agreement between you and Educatial regarding your use of the 
                Platform and supersede any prior or contemporaneous agreements, communications, or proposals, 
                whether oral or written, between you and Educatial.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Severability</h3>
            <p>
                11.1. If any provision of these Terms is found to be invalid, illegal, or unenforceable, 
                the remaining provisions shall continue in full force and effect.
            </p>
        </div>

        <div className='flex flex-col mt-3 gap-3'>
            <h3 className='text-[#000] font-semibold text-base'>Contact Us</h3>
            <p>
                12.1. If you have any questions or concerns about these Terms, 
                please contact us at ask@educatial.com or call at- 09069489382 or 09088888211
            </p>
            <p>
                By using the Educatial platform, you acknowledge that you have read, understood, 
                and agree to be bound by these Terms and Conditions.
            </p>
        </div>


    </div>
  )
}

export default TermsAndConditions