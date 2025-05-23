import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import grainImage from "@/assets/images/grain.jpg";
import BackToTop from './BackToTop';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-24 pb-8 relative overflow-hidden mt-auto bg-[#fd5001] text-white">
      {/* Blob 1 */}
      <svg
        className="absolute -top-24 -left-24 w-72 h-72 opacity-80 text-yellow-300 drop-shadow-[0_0_10px_rgba(255,255,150,0.7)] animate-float1"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          d="M43.1,-68.8C56.9,-60.6,64.8,-46.8,70.3,-33.8C75.8,-20.8,78.9,-8.4,78.5,3.3C78,15,74.1,26.7,67.3,36.3C60.5,45.9,50.9,53.4,40.1,59.5C29.3,65.6,17.3,70.3,5.4,66.9C-6.5,63.5,-13,52,-23.7,45.1C-34.4,38.1,-49.3,35.8,-57.4,27.6C-65.5,19.4,-66.8,5.3,-64.3,-7.3C-61.8,-19.9,-55.5,-30.9,-48.4,-39.6C-41.3,-48.3,-33.3,-54.6,-24.2,-62.1C-15.1,-69.6,-7.5,-78.3,3.3,-82.1C14.1,-85.9,28.2,-84.9,43.1,-68.8Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Blob 2 */}
      <svg
        className="absolute -bottom-24 -right-24 w-96 h-96 opacity-70 text-cyan-400 drop-shadow-[0_0_15px_rgba(0,255,255,0.6)] animate-float2"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
      >
        <path
          d="M42.6,-74.8C56.6,-66.7,66.9,-56.1,72.9,-44.2C78.9,-32.3,80.5,-19.1,79.3,-6.6C78.1,5.9,74.2,17.9,67.3,27.8C60.3,37.7,50.3,45.5,39,52.5C27.7,59.5,14.8,65.6,2.4,62.7C-10,59.8,-20.1,47.9,-30.3,40.8C-40.5,33.7,-50.7,31.5,-54.7,24.4C-58.7,17.3,-56.5,5.3,-56.2,-6.7C-55.9,-18.7,-57.5,-30.7,-52.3,-39.5C-47.1,-48.3,-35.2,-53.9,-23.6,-60.3C-12,-66.7,-6,-73.9,3.4,-79.2C12.8,-84.5,25.6,-87,42.6,-74.8Z"
          transform="translate(100 100)"
        />
      </svg>

      {/* Grain Background with Mask */}
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
        <div
          className="absolute inset-0 -z-30 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-8 relative z-10 max-w-[1200px]">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16 text-white">
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let's Talk</h2>
            <div className="space-y-2">
              <p className="text-lg sm:text-xl hover:text-black text-white/80 transition-colors duration-200">
                <a href="mailto:hey@protoja.studio">hey@protoja.studio</a>
              </p>
              <p className="text-lg sm:text-xl hover:text-black text-white/80 transition-colors duration-200">
                <a href="tel:+14157966262">+1 415 796 6262</a>
              </p>
            </div>
          </div>

          {/* Nav and Offices */}
          <div>
            <div className="grid grid-cols-2 gap-8 mb-12 sm:mb-16">
              <div className="space-y-4">
                <Link href="/work" className="block text-base sm:text-lg hover:text-black transition-colors">Work</Link>
                <Link href="/services" className="block text-base sm:text-lg hover:text-black transition-colors">Services</Link>
                <Link href="/blog" className="block text-base sm:text-lg hover:text-black transition-colors">Blog</Link>
              </div>
              <div className="space-y-4">
                <Link href="/clients" className="block text-base sm:text-lg hover:text-black transition-colors">Clients</Link>
                <Link href="/about" className="block text-base sm:text-lg hover:text-black transition-colors">About</Link>
                <Link href="/contact" className="block text-base sm:text-lg hover:text-black transition-colors">Contact</Link>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-lg mb-2">San Francisco</h3>
                <p className="text-white/60">300 Broadway</p>
                <p className="text-white/60">San Francisco, CA 94133</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">New York</h3>
                <p className="text-white/60">148 Lafayette St</p>
                <p className="text-white/60">New York, NY 10013</p>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Austin</h3>
                <p className="text-white/60">600 Congress Ave</p>
                <p className="text-white/60">Austin, TX 78701</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-6 border-t border-white/20 pt-8">
          {/* Social Icons */}
          <nav className="flex gap-5 order-2 sm:order-1">
            <Link href="#" aria-label="Facebook">
              <Facebook className="text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <Twitter className="text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="#" aria-label="Instagram">
              <Instagram className="text-white hover:text-gray-300 transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="text-white hover:text-gray-300 transition-colors" />
            </Link>
          </nav>

          {/* Legal Links */}
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-sm text-white/90 order-1 sm:order-2 text-center sm:text-left">
            <p>© 2016 – {currentYear} Clay Global, LLC</p>
            <Link href="/privacy" className="hover:text-black transition-colors duration-200">Privacy</Link>
            <Link href="/terms" className="hover:text-black transition-colors duration-200">Terms</Link>
            <Link href="/sitemap" className="hover:text-black transition-colors duration-200">Sitemap</Link>
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
}
