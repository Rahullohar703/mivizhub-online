import React from 'react';
import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-background pt-12 pb-6 md:py-12 border-t border-surfaceBorder pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-brandAccent to-brandPurple text-white flex items-center justify-center font-bold text-lg shadow-[0_0_10px_rgba(79,70,229,0.5)]">
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
