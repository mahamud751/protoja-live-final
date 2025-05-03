// components/Footer.js
import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import grainImage from "@/assets/images/grain.jpg";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pt-16 pb-8 relative overflow-hidden mt-auto bg-gray-800">
      <div className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
              <div
                className="absolute inset-0 -z-30 opacity-5"
                style={{ backgroundImage: `url(${grainImage.src})` }}
              ></div>
            </div>
      <div className="container mx-auto px-6 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-5xl font-bold mb-6">Let's Talk</h2>
            <div className="space-y-2">
              <p className="text-xl hover:text-white/50 text-white/60 transition-colors">
                <a href="mailto:hey@clay.global">hey@protoja.studio</a>
              </p>
              <p className="text-xl hover:text-white/50 text-white/60 transition-colors">
                <a href="tel:+14157966262">+1 415 796 6262</a>
              </p>
            </div>
          </div>

          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-4">
                <Link href="/work" className="block text-lg hover:text-white/50 transition-colors">Work</Link>
                <Link href="/services" className="block text-lg hover:text-white/50 transition-colors">Services</Link>
                <Link href="/blog" className="block text-lg hover:text-white/50 transition-colors">Blog</Link>
              </div>
              <div className="space-y-4">
                <Link href="/clients" className="block text-lg hover:text-white/50 transition-colors">Clients</Link>
                <Link href="/about" className="block text-lg hover:text-white/50 transition-colors">About</Link>
                <Link href="/contact" className="block text-lg hover:text-white/50 transition-colors">Contact</Link>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold text-lg mb-2">San Francisco</h3>
                <p className="text-white/30">300 Broadway,</p>
                <p className="text-white/30">San Francisco, CA 94133</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">New York</h3>
                <p className="text-white/30">148 Lafayette St,</p>
                <p className="text-white/30">New York, NY 10013</p>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Austin</h3>
                <p className="text-white/30">600 Congress Ave,</p>
                <p className="text-white/30">Austin, TX 78701</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between items-center gap-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-8">
            <nav className="flex gap-4 mb-6 md:mb-0">
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
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center space-y-3 md:space-y-0 md:space-x-6 text-sm">
            <p className="text-white/30">© 2016 – {currentYear} Clay Global, LLC</p>
            <Link href="/privacy" className="text-white/30 hover:text-white/50 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-white/30 hover:text-white/50 transition-colors">Terms</Link>
            <Link href="/sitemap" className="text-white/30 hover:text-white/50 transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
