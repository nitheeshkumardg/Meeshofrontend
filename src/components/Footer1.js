import React from "react";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import XIcon from '@mui/icons-material/X';
import { IconButton } from "@mui/material";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-8">
      <div className="container mx-auto px-4">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:space-x-6 space-y-6 md:space-y-0">
          
          <div className="md:w-1/5">
            <h3 className="text-lg font-bold mb-2">Company</h3>
            <ul>
              <li className="mb-2">
                <a href="/careers" className="text-sm text-gray-600 hover:text-black">
                  Careers
                </a>
              </li>
              <li className="mb-2">
                <a href="/supplier" className="text-sm text-gray-600 hover:text-black">
                  Become a Supplier
                </a>
              </li>
              <li className="mb-2">
                <a href="/hall-of-fame" className="text-sm text-gray-600 hover:text-black">
                  Hall of Fame
                </a>
              </li>
              <li className="mb-2">
                <a href="/sitemap" className="text-sm text-gray-600 hover:text-black">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>

          
          <div className="md:w-1/5">
            <h3 className="text-lg font-bold mb-2">Support</h3>
            <ul>
              <li className="mb-2">
                <a href="/legal" className="text-sm text-gray-600 hover:text-black">
                  Legal and Policies
                </a>
              </li>
              <li className="mb-2">
                <a href="/returns" className="text-sm text-gray-600 hover:text-black">
                  Notices and Returns
                </a>
              </li>
              <li className="mb-2">
                <a href="/contact-us" className="text-sm text-gray-600 hover:text-black">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

        
          <div className="md:w-1/5">
            <h3 className="text-lg font-bold mb-2">Discover</h3>
            <ul>
              <li className="mb-2">
                <a href="/meshotechblog" className="text-sm text-gray-600 hover:text-black">
                  Meesho Tech Blog
                </a>
              </li>
            </ul>
          </div>

          
          <div className="md:w-1/5">
            <h2 className="text-lg font-bold mb-2">Download Our App</h2>
            <p className="text-sm text-gray-600 mb-2">
              Shop on the go and earn rewards!
            </p>
            <div className="flex space-x-4">
              <a href="https://play.google.com/store/apps" target="_blank" rel="noreferrer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb5LOPUgzjbz_m4aVulC-GU5zu-30HBdYnAg&s"
                  alt="Google Play Store"
                  className="w-32"
                />
              </a>
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRADkLw38AGNO3KB-MrTfa1YjaXddi7J-eN7Q&s"
                  alt="Apple App Store"
                  className="w-32"
                />
              </a>
            </div>
          </div>

          
          <div className="md:w-1/5">
            <h2 className="text-lg font-bold mb-2">Follow Us</h2>
            <div className="flex space-x-4">
              <IconButton
                component="a"
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <Facebook style={{ fontSize: 30, color: '#3b5998' }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <Instagram style={{ fontSize: 30, color: '#E1306C' }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <XIcon style={{ fontSize: 30, color: '#1DA1F2' }} />
              </IconButton>

              <IconButton
                component="a"
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedIn style={{ fontSize: 30, color: '#0077b5' }} />
              </IconButton>
            </div>
          </div>
        </div>

        
        <div className="text-center text-gray-600 text-sm mt-6">
          <p>© 2024 Meesho Company. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




