import React, { FC, useRef, useState } from 'react'

const Services: FC = () => {
    
    const services = [{ "title": 'Smart Contract Development', "description": 'Rtility develops secure and optimized contracts based on your needs.', "image": '/images/smartcontractDev.png' },
    { "title": 'Smart Contract Audit', "description": 'Rtility offer code reviews and security analysis for teams preparing to launch their blockchain applications.', "image": '/images/smartcontractAudit.png' },
    { "title": 'UI/UX design', "description": 'Have your ideas designed by UX and UI experts to deliver an excellent experience to your customers.', "image": '/images/UI-UX.png' },
    { "title": 'Front-End Development', "description": 'Rtility offers quality web development solutions to help you grow your business with a great impression.', 'image': '/images/frontend.png' },
    { "title": 'Back-End Development', "description": 'Our back-end development engineers deliver performant and secure solutions customized to the needs of each client.', 'image': '/images/backend.png' }];


    const [expandAccordion, setExpandAccordion] = useState<number | undefined>(0);
    const contentSpace = useRef<HTMLParagraphElement>(null);
    const [AccordionHeight, setAccordionHeight] = useState<string>('0px');
    const [clickedServiceImage, setClickedServiceImage] = useState<string>(services[0]?.image);

    const toggleAccordion = (index: number) => {
        setExpandAccordion(index === expandAccordion ? undefined : index);
        setAccordionHeight(index === expandAccordion ? '0px' : `${contentSpace!.current!.scrollHeight}px`)
    }

    return (
        <div className='flex flex-col items-center mt-[11.875rem]'>
            <section className='bg-[#00D2EF] w-[460px] h-[460px] rounded-full opacity-20 blur-[150px] absolute right-[3.5rem] -mt-10' />
            <p className='text-white text-[45px] font-medium'>Our Services</p>
            <section className='flex justify-around items-center w-full mt-[3.75rem]'>
                <div className='flex flex-col space-y-4'>
                    {services.map((item, index) =>
                        <section onClick={() => { toggleAccordion(index); setClickedServiceImage(item.image) }} key={index} className={`${expandAccordion == index ? `min-h-[${AccordionHeight}+100px]` : 'min-h-[64px]'} 
                        bg-[#121424] w-[34.5rem] border border-[#262626] rounded-[10px]`}>
                            <section className='flex justify-between px-4 items-center pt-[0.8rem]'>
                                <p className='text-[22px] font-normal text-white'>{item.title}</p>
                                <img src={expandAccordion == index ? '/images/arrowUpBlue.svg' : '/images/arrowDownWhite.svg'} alt='arrow' />
                            </section>
                            <p ref={contentSpace} className={`px-4 ${expandAccordion == index ? `my-5 max-h-[${AccordionHeight}]` : 'max-h-0'} overflow-hidden w-full transition-max-height duration-300 text-[#7981A3]`}
                            >{item.description}</p>
                        </section>)}
                </div>
                <section className='w-[34.375rem]'>
                    <img className='transition-all duration-300' src={clickedServiceImage} alt='service' />
                </section>
            </section>
            <section className='bg-[#8F90FE] w-[460px] h-[460px] rounded-full opacity-20 blur-[150px] absolute left-[3.5rem] mt-60' />
        </div>
    )
}
export default Services;