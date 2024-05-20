import React from 'react';

const Footer = () => {
  return (
    <>
      <hr />
      {/* Footer section */}
      <style>
        {`
          footer {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            background-color: black;
            padding: 20px;
          }

          .footer-left,
          .footer-right {
            flex: 1;
            text-align: center;
            color: white; /* Adjust text color */
          }

          .footer-center {
            flex: 0 0 auto;
            margin-bottom: 10px;
          }

          nav ul {
            list-style: none;
            padding: 0;
            text-align: center;
          }

          nav ul li {
            display: inline;
            margin-right: 20px;
          }

          nav ul li:last-child {
            margin-right: 0;
          }

          @media (max-width: 768px) {
            .footer-left,
            .footer-right {
              flex: 0 0 100%; /* Update this line */
            }

            .footer-center {
              flex: 100%;
              margin-left: 180px; /* Update this line */
            }
          }

          /* Style for the logo */
          .footer-center img {
            width: 70px; /* Adjust the size as needed */
            height: 70px; /* Adjust the size as needed */
            border-radius: 50%; /* Makes the image circular */
            border: 2px solid white; /* Add border */
          }
        `}
      </style>

      <footer>
        <div className="footer-left">
          © 2020 Copyright
        </div>
        <div className="footer-center">
          <img src="/logo.jpg" alt="Logo" />
        </div>
        <div className="footer-right">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="KrishnaVani_page.html">Buddy-KrishnaVani</a></li>
              <li><a href="Features.html">Features</a></li>
              <li><a href="contact-us.html">Contact us</a></li>
              <li><a href="About-us.html">About Us</a></li>
            </ul>
          </nav>
        </div>
      </footer>

      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </>
  );
};

export default Footer;
