// components/Footer.js
import Link from 'next/link';
import { Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const legalLinks = [
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'AML Policy', href: '/aml' },
    { name: 'Support / FAQ', href: '/support' },
  ];

  return (
    <footer className="w-full bg-black/90 border-t border-gold-800/50 p-6 md:p-10 mt-12 z-20">
      <div className="max-w-7xl mx-auto text-gold-300 text-sm space-y-6">
        
        {/* Top Section: Links & Contact */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Legal Links */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gold-400 uppercase tracking-wider text-xs mb-3">Legal & Governance</h3>
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="block text-gold-700 hover:text-gold-400 transition text-sm">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Contact Info */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gold-400 uppercase tracking-wider text-xs mb-3">Get in Touch</h3>
            <div className="flex items-center space-x-2">
              <Mail size={16} className="text-gold-600" />
              <a href="mailto:info@alphaaccess.exchange" className="hover:text-gold-400 transition">
                info@alphaaccess.exchange
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin size={16} className="text-gold-600" />
              <p className="text-gold-700">Abuja, Nigeria (Reg. Office)</p>
            </div>
          </div>
          
          {/* Trust Signals Placeholder */}
          <div className="space-y-3 col-span-2 md:col-span-1">
             <h3 className="font-semibold text-gold-400 uppercase tracking-wider text-xs mb-3">Trust & Security</h3>
             <p className="text-xl font-bold text-gold-400">15,000+</p>
             <p className="text-xs text-gold-700 -mt-1">Active African Users</p>
             <p className="text-xl font-bold text-gold-400">$50M+</p>
             <p className="text-xs text-gold-700 -mt-1">Secured Assets</p>
          </div>
        </div>

        {/* Bottom Section: Copyright & Registration */}
        <div className="border-t border-gold-900/50 pt-4 text-center">
          <p className="text-gold-700 text-xs">
            &copy; {new Date().getFullYear()} Alpha Access Exchange. All rights reserved. <br/>
            Sovereign Finance Infrastructure. Unchain the Continent.
          </p>
        </div>
      </div>
    </footer>
  );
}
