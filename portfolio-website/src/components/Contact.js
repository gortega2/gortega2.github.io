import React from "react";
import {ChatIcon} from '@heroicons/react/solid'


export function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        onClick={() => setShowModal(true)}
      >
          <ChatIcon className='w-10 inline-block mb-4' />
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-gray-900 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    My Contact Info
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
            <div className="container px-5 py-10 mx-auto flex flex-wrap justify-center">
                        <div className=''>
                            <h2 className='title-font font-semibold text-white tracking-widest text-xs'>
                                EMAIL
                            </h2>
                            <a className='text-indigo-400 leading-relaxed'>
                                fpsgus97@gmail.com
                            </a>
                            <h2 className='title-font font-semibold text-white tracking-widest text-xs mt-4'>
                                PHONE
                            </h2>
                            <p className='leading-relaxed'>
                                780-999-2735
                            </p>
                            <div className='container mx-auto flex flex-row justify-center pt-6 gap-2'>
                              <a className='bg-transparent hover:bg-gray-700 duration-300' href='https://github.com/gortega2'>
                              <img className='w-10' 
                            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"  />
                              </a>                           
                            <a className='bg-transparent hover:bg-gray-700 duration-300'href='https://www.linkedin.com/in/gustavo-ortega-a76769188/'>
                            <img className='w-10' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"/>
                            </a>
                            
                            </div>
                            
            </div>
            <div>
            </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default function Contact() {
    return(
        <section id="contact" className='relative'>
            <div className='container px-5 py-10 mx-auto'>
                <div className='text-center b-20'>
                <button type="button" class="rounded px-4 py-2 text-xs bg-transparent hover:bg-gray-700 duration-300">
            
            <Modal className='text-white'/>
                </button>
                    <h1 className='sm:text-4xl text-3xl font-medium title-font text-white mb-4'>
                        Contact Me!
                    </h1>
                    <p className=''>
                        Press the chat icon to get more information about me.
                    </p>
                </div>
                </div>
        </section>

        
    );
}