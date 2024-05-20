// components/whuScetion.js

const HeroSection3 = () => {
    return (
      <section className="text-gray-400 bg-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="Friendly LiveBot" src="/Friendly LiveBot.gif" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">Why Choose KrishnaVani?
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed text-black">* Engaging Conversations 💬<br/>
* Alleviate Loneliness 🤝<br/>
* Privacy-Conscious Design 🔒<br/>
* Adaptive and Natural 🔄<br/>
* Mental Health Support 💬<br/>
* 24/7 Availability 🕒<br/>
* Non-judgmental Listening 🎧<br/>
* Personalized Interaction 🤖<br/>
* Continuous Learning 📚<br/>
* Emotional Intelligence ❤️</p>
            
             <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets chat</button>
                     </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection3;
  