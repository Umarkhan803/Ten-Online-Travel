import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:space-x-12 space-y-8 md:space-y-0">
          <div className="flex-1 space-y-4">
            <div className="flex items-center space-x-2">
              <svg
                className="h-8 w-8 text-yellow-500"
                preserveAspectRatio="xMidYMid meet"
                data-bbox="0.36 0.279 243.208 201.268"
                viewBox="0 0 243.913 201.792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <svg preserveAspectRatio="xMidYMid meet" data-bbox="0.36 0.279 243.208 201.268" viewBox="0 0 243.913 201.792" height="201.792" width="243.913" xmlns="http://www.w3.org/2000/svg" data-type="ugc" role="presentation" aria-hidden="true">
    <g>
        <g opacity=".86">
            <path strokeWidth=".5" strokeMiterlimit="10" stroke="#e9b00d" fill="#e9b00d" d="M139.358 159.816s5.42-26.187 27.014-38.576a13.973 13.973 0 0 0 4.065-3.52l23.864-30.639a11.721 11.721 0 0 1 12.02-4.417c4 1 7.321 4.083 4.681 12.319-5.28 16.6-22.368 36.711-22.368 36.711s.51 6.036 4.769 1.513 18.549-27.665 18.549-27.665l7.515-14.255a11.879 11.879 0 0 0 1.32-4.417l2.534-26.574 2.816-17.282a9.292 9.292 0 0 1 2.851-5.4c3.52-3.238 10.066-7.039 13.445 5.086 3.8 13.6-2.921 53.87-5.808 69.691a29.2 29.2 0 0 1-5.086 11.862c-8.06 11.087-27.208 36.8-42.659 52.444v21.858a2.992 2.992 0 0 1-2.992 2.992h-42.8a1.531 1.531 0 0 1-1.549-1.426z"></path>
            <path strokeWidth=".5" strokeMiterlimit="10" stroke="#e9b00d" fill="#e9b00d" d="M214.522 76.345s2.517-29.671 4.277-34.951-10.804 5.28-9.556 32.188z"></path>
            <path strokeWidth=".5" strokeMiterlimit="10" stroke="#e9b00d" fill="#e9b00d" d="M202.713 73.071s3.114-18.936 4.523-21.611-7.8-2.27-10.049 21.611z"></path>
            <path strokeWidth=".5" strokeMiterlimit="10" stroke="#e9b00d" fill="#e9b00d" d="M104.568 159.816s-5.438-26.187-27.032-38.576a13.9 13.9 0 0 1-4.048-3.52L49.625 86.991a11.738 11.738 0 0 0-12.038-4.417c-3.977 1-7.321 4.083-4.681 12.319 5.28 16.6 22.386 36.711 22.386 36.711s-.51 6.089-4.787 1.549-18.532-27.647-18.532-27.647l-7.519-14.255a11.879 11.879 0 0 1-1.32-4.417L20.587 60.26l-2.8-17.282a9.38 9.38 0 0 0-2.851-5.4c-3.52-3.238-10.066-7.039-13.445 5.086-3.784 13.6 2.9 53.87 5.808 69.691a28.967 28.967 0 0 0 5.086 11.862c8.06 11.087 27.208 36.8 42.642 52.444v21.858a3.009 3.009 0 0 0 3.009 2.992h42.783a1.531 1.531 0 0 0 1.566-1.426z"></path>
            <path strokeWidth=".5" strokeMiterlimit="10" stroke="#e9b00d" fill="#e9b00d" d="M29.387 76.345s-2.52-29.671-4.277-34.951 10.823 5.28 9.556 32.188z"></path>
            <path strokeWidth=".5" strokeMiterlimit="10" stroke="#e9b00d" fill="#e9b00d" d="M41.213 73.071S38.186 54.135 36.69 51.46s7.78-2.27 10.049 21.611z"></path>
            <path strokeWidth=".5" strokeMiterlimit="10" stroke="#e9b00d" fill="#e9b00d" d="M131.695 13.481l10.313 10.93c8.623-9.169 22-9.609 29.407-2.745a18.567 18.567 0 0 1 3.52 22.368c-4.8 8.166-16.367 11.4-26.011 6.16a196.508 196.508 0 0 1-28.915-27.278 110.45 110.45 0 0 0-18.478-17.477c-2.165-1.619-3.96-2.165-8.923-3.766-8.5-2.728-19.587-.9-28.281 5.28a34.757 34.757 0 0 0-13.586 36.711 34.687 34.687 0 0 0 26.521 24.638c11.07 2.217 23.723-1.021 30.939-9.063a28.172 28.172 0 0 0 1.883-2.393L99.257 45.529c-.422.581-6.776 8.9-16.842 8.166a18.954 18.954 0 0 1-17.331-17.722 18.831 18.831 0 0 1 13.2-18.6 19.851 19.851 0 0 1 20.1 5.913c5.192 5.385 8.553 7.884 23.142 23 5.86 6.089 5.614 5.79 6.916 7.039 5.438 5.28 10.348 9.943 16.719 12.565 12.618 5.28 25.272-.141 26.644-.757a34.969 34.969 0 0 0 17.352-16.6c.6-1.267 7.48-16.3-.757-31.044A34.7 34.7 0 0 0 151.811.916a35.391 35.391 0 0 0-20.116 12.565z"></path>
        </g>
    </g>
</svg>

              </svg>
              <h1 className="text-xl font-semibold">Ten Travel</h1>
            </div>
            <p className="text-white">New Delhi, India</p>
<p className="text-white">
 
  <a
    href="mailto:info@entrepreneurshipnetwork.net"
    className="text-yellow-400 hover:underline"
  >
    info@entrepreneurshipnetwork.net
  </a>
</p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-yellow-400">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/india"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  India
                </Link>
              </li>
              <li>
                <Link
                  to="/international"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  International
                </Link>
              </li>
              <li>
                <Link
                  to="/activities"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Activities
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/reviews"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Reviews
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-semibold">General</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link
                  to="/PrivacyPolicy"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/Termpage"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/DocumentVisa"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Documents Collection & Visa
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-400 hover:text-yellow-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-white-500">
          <p className="text-white" >@2024 Ten Travel | Developed by Ten Travel Teams</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
