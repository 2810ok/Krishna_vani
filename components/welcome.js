  // components/HeroSection2.js

  const HeroSection2 = () => {
    return (
      <section className="text-gray-400 bg-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <img className="object-cover object-center rounded" alt="Friendly LiveBot" src="/Friendly LiveBot.gif" />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">👋 Welcome to KrishnaVani: Your Real Digital Buddy 👫
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">At KrishnaVani, we've crafted a virtual companion like no other. Say hello to KrishnaVani – your AI-powered chatbot ready to engage in meaningful conversations, offer support, and provide entertainment, just like a real buddy would. 🤖💬</p>
            
            <p className="mb-8 leading-relaxed">Think of KrishnaVani as your personal cheerleader, always rooting for your happiness and well-being. With KrishnaVani by your side, you'll never have to face life's challenges alone. So, why wait? Start chatting with KrishnaVani today and experience the joy of having a real digital buddy! 💻🎉</p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Lets chat</button>
                    </div>
          </div>
        </div>
      </section>
    );
  };

  export default HeroSection2;
