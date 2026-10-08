import React from 'react';
import { Terminal, Github, Mail } from 'lucide-react';
import { profileData } from '../data/profileData';

export const Footer = ({ githubUrl }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-[#090a0c] text-gray-400">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & One-line identity */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-mono text-xs font-bold">
            SK
          </div>
          <div>
            <div className="font-semibold text-white text-sm">Sumit Kumar</div>
            <div className="text-xs text-gray-400 font-mono">
              1st Year BCA Student • Backend & Software Developer Aspirant
            </div>
          </div>
        </div>

        {/* Links & Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-4 text-xs font-mono">
          <a
            href={`mailto:${profileData.contact.email}`}
            className="hover:text-white transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>{profileData.contact.email}</span>
          </a>

          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          )}

          <span className="text-gray-600 hidden sm:inline">•</span>

          <div className="text-gray-400">
            © {currentYear} Sumit Kumar. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
