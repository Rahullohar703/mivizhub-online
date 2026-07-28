import React from 'react';
import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-white py-12 border-t border-gray-100">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brandBlack text-white flex items-center justify-center font-bold text-lg">
              M
            </div>
            <span className="font-heading font-bold text-xl tracking-tight text-textMain">
              MivizHub
            </span>
          </div>
          
          <div className="text-sm text-textMuted font-medium">
            © {new Date().getFullYear()} MivizHub. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
