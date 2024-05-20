'use client';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="heroSection">
      <div className="text-container">
        <div className="row justify-content-end">
          <div className="col-md-6 d-flex align-items-center" style={{ color: '#000000' }}>
            <div>
            <h1 className="text-blue-500 font-bold mb-6 text-7xl">
  Welcome to Chat with KrishnaVani
</h1>
<p className="text-muted bold text-blue-500" style={{ paddingBottom: '10px', fontSize: '1.4rem' }}>
                your pocket buddy!
              </p>
              <p style={{ fontSize: '1.25rem' }}>
                Chat with KrishnaVani is your reliable chat companion, available anytime and anywhere. Here are some key features:
              </p>
              <br /> 
              <ul className="list-disc" style={{ fontSize: '1.25rem' }}>
  <li>24/7 Chat Support 🕒</li>
  <li>Personalized Conversations 💬</li>
  <li>Advanced AI Technology 🤖</li>
</ul>


            </div>
          </div>
        </div>
      </div>

      <style jsx>{`

.welcomeMessage {
    font-weight: bold;
    margin-bottom: 1.5rem; /* Equivalent to mb-6 in Tailwind CSS */
    font-size: 4.5rem; /* Equivalent to text-5xl in Tailwind CSS */
    margin-top: 4px; /* Adds a top margin of 4px */
  }
        .heroSection {
          background-image: url('/MicrosoftTeams-image__55_.webp');
          background-size: cover;
          background-position: center;
          height: calc(100vh - 45px);
          width: 100%;
          color: #ffffff;
          animation: pulse 2s infinite alternate, expand 5s forwards;
        }


        .containerRight {
          padding: 0 30px;
          width: 100%;
        }
        .text-container {
            position: absolute;
            left: 70%;
            transform: translateX(-50%);
            color: #000000;
          }
        .sectionImageContainer {
          padding: 10px;
       
          margin-left: 10px;
        }

        .sectionImage {
          max-width: 90%;
          height: auto;
          transition: transform 0.3s ease-in-out;
        }

        .sectionImage:hover {
          transform: scale(1.05);
        }

        @media (max-width: 767px) {
          .heroSection {
            background-image: none;
          }

          .sectionImageContainer {
            display: block;
            text-align: center;
          }

          .sectionImage {
            max-width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
