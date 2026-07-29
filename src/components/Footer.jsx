import React from 'react';
import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-background pt-12 pb-8 md:py-12 border-t border-surfaceBorder">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="MivizHub Logo" className="w-8 h-8 object-contain" />
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
