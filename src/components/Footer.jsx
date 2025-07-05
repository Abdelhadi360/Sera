import React from 'react';
import { FaGithub, FaFacebookF, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-stone-100 text-gray-800 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        
        {/* Sera & Company Links */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Sera & Company</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:underline transition">Home</a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline transition">Privacy Policy</a>
            </li>
            <li>
              <a
                href="https://abdelhadi.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                Website
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaGithub className="text-lg" />
              <a
                href="https://github.com/Abdelhadi360"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                GitHub
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaFacebookF className="text-lg" />
              <a
                href="https://www.facebook.com/profile.php?id=100088047371504"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-lg" />
              <a
                href="https://www.instagram.com/abd_el_hadi_360/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                Instagram
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaYoutube className="text-lg" />
              <a
                href="https://www.youtube.com/@abdelhadi-360"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                YouTube
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaTiktok className="text-lg" />
              <a
                href="https://www.tiktok.com/@abdelhadi__360"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition"
              >
                TikTok
              </a>
            </li>
            <li className="pt-2">
              <a
                href="mailto:abdelhadi11209@gmail.com"
                className="hover:underline transition"
              >
                abdelhadi11209@gmail.com
              </a>
            </li>
          </ul>
        </div>

      </div>

      <div className="text-center text-sm mt-10">
        © {new Date().getFullYear()} Sera by Abdelhadi Applications. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
