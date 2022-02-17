export default function About() {
    return (
        <section id="about">
           <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:max-w-lg lg:w-full px-10 rounded-full bg-red-400">
               <img
               className="object-cover rounded-full"
               alt='picture'
               src={require("../images/me.jpg")} 
               />

           </div>
           <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center pl-20">
           <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
               Hey, I'm Gus.

            <br className="hidden lg:inline-block" /> It's nice to meet you.
            </h1>
            <p classname="mb-8 leading-relaxed">
                I'm a expectant graudate from the University of Alberta, hoping to start my career. Scroll down to see what skills I've learned and what projects I've done
                during my time in university.             </p>
           </div>
           </div>
        </section>
    )
  }