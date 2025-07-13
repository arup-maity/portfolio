'use client'
import Image from 'next/image'
import React from 'react'
import { useForm, SubmitHandler } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from "zod";

const schemaValidation = z.object({
   fullName: z.string().min(4, { message: "This field has to be filled." }),
   email: z.string().min(1, { message: "This field has to be filled." }).email("This is not a valid email."),
   phone: z.string().min(10, { message: "This field has to be filled." }),
   message: z.string().min(10, { message: "This field has to be filled." }),
});

type Inputs = z.infer<typeof schemaValidation>;

const GetInTouchForm = () => {
   const defaultValues = {
      fullName: "",
      email: "",
      phone: "",
      message: "",
   }
   const { register, handleSubmit, formState: { errors }, } = useForm<Inputs>({
      defaultValues,
      mode: 'onSubmit',
      resolver: zodResolver(schemaValidation),
   })
   const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

   return (
      <div id='contact' className=" py-20 bg-[#F2F4FF] bg-center bg-no-repeat bg-cover" style={{ backgroundImage: "url(/map-transparent.png)" }}>
         <div className="">
            <div className="container-webx">
               {/* contact form */}
               <div className="flex flex-wrap -mx-4">
                  <div className="w-full lg:w-6/12 flex lg:items-center p-4">
                     <div className="">
                        <div className="flex items-center flex-nowrap gap-4 mb-5">
                           <Image src='/bnr-szape03.png' width={40} height={20} alt='' className='!w-auto h-5' />
                           <div className="text-xl text-[#577BFF] font-semibold uppercase tracking-[2px]">Stay Connected</div>
                        </div>
                        <div className="text-3xl md:text-5xl text-black font-semibold mb-10">Let’s Work Together!</div>
                        <div className="space-y-10">
                           <div className="shaking flex flex-nowrap items-center gap-4">
                              <div className="bg-[#577BFF] text-white inline-flex w-14 h-14 justify-center items-center rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" className='icon'><path d="M3.65387 1.32849C3.40343 1.00649 2.92745 0.976861 2.639 1.26531L1.60508 2.29923C1.1216 2.78271 0.94387 3.46766 1.1551 4.06847C2.00338 6.48124 3.39215 8.74671 5.32272 10.6773C7.25329 12.6078 9.51876 13.9966 11.9315 14.8449C12.5323 15.0561 13.2173 14.8784 13.7008 14.3949L14.7347 13.361C15.0231 13.0726 14.9935 12.5966 14.6715 12.3461L12.3653 10.5524C12.2008 10.4245 11.9866 10.3793 11.7845 10.4298L9.59541 10.9771C9.00082 11.1257 8.37183 10.9515 7.93845 10.5181L5.48187 8.06155C5.04849 7.62817 4.87427 6.99919 5.02292 6.40459L5.57019 4.21553C5.62073 4.01336 5.57552 3.79918 5.44758 3.63468L3.65387 1.32849ZM1.88477 0.511076C2.62689 -0.231039 3.8515 -0.154797 4.49583 0.673634L6.28954 2.97983C6.6187 3.40304 6.73502 3.95409 6.60498 4.47423L6.05772 6.66329C5.99994 6.8944 6.06766 7.13888 6.2361 7.30732L8.69268 9.7639C8.86113 9.93235 9.1056 10.0001 9.33671 9.94229L11.5258 9.39502C12.0459 9.26499 12.597 9.3813 13.0202 9.71047L15.3264 11.5042C16.1548 12.1485 16.231 13.3731 15.4889 14.1152L14.455 15.1492C13.7153 15.8889 12.6089 16.2137 11.5778 15.8512C9.01754 14.9511 6.61438 13.4774 4.56849 11.4315C2.5226 9.38562 1.04895 6.98246 0.148838 4.42225C-0.213682 3.39112 0.11113 2.28472 0.85085 1.545L1.88477 0.511076Z" fill="#fff"></path><path d="M11 0.5C11 0.223858 11.2239 0 11.5 0H15.5C15.7761 0 16 0.223858 16 0.5V4.5C16 4.77614 15.7761 5 15.5 5C15.2239 5 15 4.77614 15 4.5V1.70711L10.8536 5.85355C10.6583 6.04882 10.3417 6.04882 10.1464 5.85355C9.95118 5.65829 9.95118 5.34171 10.1464 5.14645L14.2929 1H11.5C11.2239 1 11 0.776142 11 0.5Z" fill="#fff"></path></svg>
                              </div>
                              <div className="">
                                 <p className='text-base text-theme-black font-medium opacity-70'>Phone</p>
                                 <p className='text-xl font-medium text-theme-black'>+91 7908-0789-76</p>
                              </div>
                           </div>
                           <div className="shaking flex flex-nowrap items-center gap-4">
                              <div className="bg-[#577BFF] text-white inline-flex w-14 h-14 justify-center items-center rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 16 16" fill="none" className='icon'><path d="M2 2C0.895431 2 0 2.89543 0 4V12L2.58386e-05 12.0103C0.00555998 13.1101 0.898859 14 2 14H7.5C7.77614 14 8 13.7761 8 13.5C8 13.2239 7.77614 13 7.5 13H2C1.53715 13 1.14774 12.6855 1.03376 12.2586L6.67417 8.7876L8 9.5831L15 5.3831V8.5C15 8.77614 15.2239 9 15.5 9C15.7761 9 16 8.77614 16 8.5V4C16 2.89543 15.1046 2 14 2H2ZM5.70808 8.20794L1 11.1052V5.3831L5.70808 8.20794ZM1 4.2169V4C1 3.44772 1.44772 3 2 3H14C14.5523 3 15 3.44772 15 4V4.2169L8 8.4169L1 4.2169Z" fill="#fff"></path><path d="M14.2467 14.2686C15.2567 14.2686 15.8339 13.4116 15.8339 12.2442V12.0344C15.8339 10.4297 14.6402 9 12.5197 9H12.4847C10.421 9 9 10.3598 9 12.4322V12.6465C9 14.8195 10.4385 16 12.3579 16H12.4016C12.9963 16 13.4204 15.9257 13.639 15.8251V15.0949C13.3941 15.2042 12.9656 15.2742 12.4585 15.2742H12.4147C11.0812 15.2742 9.84385 14.4872 9.84385 12.6202V12.4628C9.84385 10.8057 10.9019 9.73891 12.4847 9.73891H12.524C14.0587 9.73891 15.0075 10.7883 15.0075 12.065V12.183C15.0075 13.158 14.6839 13.5734 14.3691 13.5734C14.1374 13.5734 13.9582 13.4247 13.9582 13.1537V10.9631H13.0531V11.5315H13.0225C12.9394 11.2342 12.6552 10.9019 12.0693 10.9019C11.2911 10.9019 10.8101 11.4572 10.8101 12.3011V12.8301C10.8101 13.722 11.2998 14.2642 12.0693 14.2642C12.5415 14.2642 12.9656 14.0369 13.0837 13.6215H13.1274C13.2455 14.0412 13.7439 14.2686 14.2467 14.2686ZM11.7939 12.6814V12.4541C11.7939 11.9076 12.0212 11.6627 12.3666 11.6627C12.664 11.6627 12.9394 11.8551 12.9394 12.371V12.7383C12.9394 13.3111 12.6858 13.4816 12.3754 13.4816C12.0212 13.4816 11.7939 13.2673 11.7939 12.6814Z" fill="#fff"></path></svg>
                              </div>
                              <div className="">
                                 <p className='text-base text-theme-black font-medium opacity-70'>Email</p>
                                 <p className='text-xl font-medium text-theme-black'>me@arupmaity.in</p>
                              </div>
                           </div>
                           <div className="shaking flex flex-nowrap items-center gap-4">
                              <div className="bg-[#577BFF] text-white inline-flex w-14 h-14 justify-center items-center rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 14 18" fill="none" className='icon'><path d="M11.8768 9.68475C11.3059 10.835 10.5331 11.9818 9.74128 13.0109C8.95198 14.0368 8.15999 14.9249 7.5643 15.5572C7.48514 15.6412 7.40956 15.7206 7.33802 15.7951C7.26648 15.7206 7.1909 15.6412 7.11174 15.5572C6.51605 14.9249 5.72406 14.0368 4.93476 13.0109C4.14299 11.9818 3.37019 10.835 2.79925 9.68475C2.22242 8.52266 1.89032 7.43373 1.89032 6.5C1.89032 3.50846 4.32934 1.08333 7.33802 1.08333C10.3467 1.08333 12.7857 3.50846 12.7857 6.5C12.7857 7.43373 12.4536 8.52266 11.8768 9.68475ZM7.33802 17.3333C7.33802 17.3333 13.8753 11.1732 13.8753 6.5C13.8753 2.91015 10.9484 0 7.33802 0C3.7276 0 0.800781 2.91015 0.800781 6.5C0.800781 11.1732 7.33802 17.3333 7.33802 17.3333Z" fill="#fff"></path><path d="M7.33802 8.66667C6.13455 8.66667 5.15894 7.69662 5.15894 6.5C5.15894 5.30338 6.13455 4.33333 7.33802 4.33333C8.54149 4.33333 9.5171 5.30338 9.5171 6.5C9.5171 7.69662 8.54149 8.66667 7.33802 8.66667ZM7.33802 9.75C9.14323 9.75 10.6066 8.29492 10.6066 6.5C10.6066 4.70507 9.14323 3.25 7.33802 3.25C5.53281 3.25 4.0694 4.70507 4.0694 6.5C4.0694 8.29492 5.53281 9.75 7.33802 9.75Z" fill="#fff"></path></svg>
                              </div>
                              <div className="">
                                 <p className='text-base text-theme-black font-medium opacity-70'>Address</p>
                                 <p className='text-xl font-medium text-theme-black'>1179, Sector 67, Mohali, 166062</p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="w-full lg:w-6/12 p-4">
                     <div className="bg-white px-4 py-10 md:p-10">
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
                           <div className="">
                              <div className="relative">
                                 <input type="text" id="contact_name" {...register("fullName")} className="block px-2.5 pb-2 pt-3 w-full text-base text-gray-600 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                 <label htmlFor="contact_name" className="absolute text-[15px] text-gray-500 duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 start-1">Full Name</label>
                              </div>
                              {
                                 errors.fullName && (
                                    <p className="text-red-500 text-xs mt-1">{errors.fullName.message}</p>
                                 )
                              }
                           </div>
                           <div className="">
                              <div className="relative">
                                 <input type="text" id="contact_email" {...register("email")} className="block px-2.5 pb-2 pt-3 w-full text-base text-gray-600 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                 <label htmlFor="contact_email" className="absolute text-[15px] text-gray-500  duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 start-1">Email</label>
                              </div>
                              {
                                 errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                                 )
                              }
                           </div>
                           <div className="">
                              <div className="relative">
                                 <input type="text" id="contact_number" {...register("phone")} className="block px-2.5 pb-2 pt-3 w-full text-base text-gray-600 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder="" />
                                 <label htmlFor="contact_number" className="absolute text-[15px] text-gray-500  duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white  px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 start-1">Phone Number</label>
                              </div>
                              {
                                 errors.phone && (
                                    <p className="text-red-500 text-xs mt-1">{errors.phone.message}</p>
                                 )
                              }
                           </div>
                           <div className="">
                              <div className="relative">
                                 <textarea
                                    {...register("message")}
                                    id="message"
                                    rows={5}
                                    placeholder=""
                                    className="block px-2.5 pb-2 pt-3 w-full text-base text-gray-600 bg-transparent rounded border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                                 />
                                 <label htmlFor="message" className="absolute text-[15px] text-gray-500  duration-300 transform -translate-y-4 scale-90 top-1 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-4 peer-placeholder-shown:top-6 peer-focus:top-1 peer-focus:scale-90 peer-focus:-translate-y-4 start-1">Message</label>
                              </div>
                              {
                                 errors.message && (
                                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                                 )
                              }
                           </div>
                           <button type="submit" className="bg-[#577BFF] text-base text-white hover:text-white py-3 px-10">
                              Send Message
                           </button>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default GetInTouchForm