import React from 'react';
import Container from './ui/Container';

export default function Footer() {
  return (
    <footer className="bg-background pt-12 pb-8 md:py-12 border-t border-surfaceBorder">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl tracking-tight">
              <span className="text-textMain">Miviz</span><span className="text-[#31c0de]">Hub</span>
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
