import React from 'react';
import { Github, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Footer = ({ githubUrl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-[#E8E2D5] bg-[#F4F0E8] text-[#5A5750]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-full bg-[#EAE3D2] border border-[#D5CBAE] flex items-center justify-center font-heading font-bold text-xs text-[#4A5D2E]">
            SK
          </div>
          <div>
            <div className="font-heading font-bold text-[#1A1918] text-sm">Sumit Kumar</div>
            <div className="text-xs font-mono text-[#8A857B]">
              1st Year BCA Student • Backend & Software Developer Aspirant
            </div>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
          <a
            href={`mailto:${profileData.contact.email}`}
            className="hover:text-[#1A1918] transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{profileData.contact.email}</span>
          </a>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#1A1918] transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          <span className="text-[#D5CBAE] hidden sm:inline">•</span>

          <div>
            © {currentYear} Sumit Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
