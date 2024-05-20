// components/HeroSection.js

const HeroSection = () => {
    return (
      <section className="text-gray-400 bg-white body-font" style={{backgroundImage: "url('/5630974.jpg')"}} >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">👋 Who is KrishnaVani?
              <br className="hidden lg:inline-block"/>
            </h1>
            <p className="mb-8 leading-relaxed text-black">🤖 KrishnaVani is your digital friend, meticulously designed to bridge the gap between technology and human connection. With advanced natural language processing, KrishnaVani understands your words, adapts to your preferences, and makes every interaction feel like chatting with your real buddy..</p>
            <p className="mb-8 leading-relaxed text-black">⏰ This digital friend is not bound by time or space, ensuring that you always have someone to turn to, no matter the hour or your location. With its ability to understand nuances in language and emotions, KrishnaVani offers a level of empathy and understanding that rivals that of human companions. It's like having a trusted friend by your side, ready to listen without judgment and offer insightful responses that resonate with you.</p>
          
            <div className="flex justify-center">
              <button className="inline-flex text-black bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets chat</button>

            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/Live Chatbot.gif"/>
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;
  