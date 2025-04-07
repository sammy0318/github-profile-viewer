import React from "react";
import { Github, Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 mt-auto text-center">
      <div className="flex justify-center gap-6 mb-4">
        <a
          href="mailto:somesh180309@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <Mail className="w-5 h-5" />
        </a>

        <a
          href="https://wa.me/9026406277?text=Hello%20there!%20I%20have%20a%20query."
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <MessageCircle className="w-5 h-5" />
        </a>

        <a
          href="https://github.com/sammy0318"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <Github className="w-5 h-5" />
        </a>

        <a
          href="https://www.instagram.com/sammy._._.03/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-400"
        >
          <Instagram className="w-5 h-5" />
        </a>
      </div>

      <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} All rights reserved.</p>
      <p className="text-sm mt-1 text-gray-400">Made with ❤️ by Sammy</p>
    </footer>
  );
};

export default Footer;
