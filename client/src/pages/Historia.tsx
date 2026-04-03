import { useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Historia() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        gsap.fromTo(el,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 88%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FACC15] selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#d4d4d8]/30">
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-4">
          <a href="/">
            <img src="/logo_cor_certa_1774637540783.png" alt="RA Poliseg" className="h-16 sm:h-20" />
          </a>
          <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-[10px] lg:text-xs uppercase tracking-[0.15em] font-medium text-zinc-600">
            <li><a href="/" className="hover:text-black transition-colors">Início</a></li>
            <li><a href="/historia" className="text-black transition-colors">Nossa História</a></li>
            <li><a href="/especialidade" className="hover:text-black transition-colors">Especialidade</a></li>
            <li><a href="/#linhas" className="hover:text-black transition-colors">Linhas de Negócio</a></li>
          </ul>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-5 h-[2px] bg-zinc-700 transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-zinc-700 transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-zinc-700 transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-[5px]' : ''}`}></span>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#d4d4d8]/30 px-4 pb-4">
            <ul className="flex flex-col gap-3 text-xs uppercase tracking-[0.15em] font-medium text-zinc-600 pt-3">
              <li><a href="/" className="block py-2 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>Início</a></li>
              <li><a href="/historia" className="block py-2 text-black" onClick={() => setMobileMenuOpen(false)}>Nossa História</a></li>
              <li><a href="/especialidade" className="block py-2 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>Especialidade</a></li>
              <li><a href="/#linhas" className="block py-2 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)}>Linhas de Negócio</a></li>
            </ul>
          </div>
        )}
      </nav>

      <div className="h-[88px] sm:h-[104px] md:h-[112px]" aria-hidden="true" />

      <section className="px-4 sm:px-8 md:px-12 lg:px-16 py-20 md:py-28 bg-white">
        <h2 className="fade-in text-4xl md:text-5xl font-medium mb-8">Nossa História</h2>

        <div className="flex flex-col gap-8 md:gap-12 max-w-3xl">
          <p className="fade-in text-base md:text-lg font-light mb-4 text-zinc-700 leading-relaxed">
            A RA Poliseg foi fundada em 1988, por Rogério Abinader.
          </p>
          <p className="fade-in text-base md:text-lg font-light mb-4 text-zinc-700 leading-relaxed">
            Rogerio Abinader, é engenheiro civil formado pela Escola Politécnica da USP, com pós-graduação e especializações em Seguros e Gerenciamento de Riscos.
          </p>
          <p className="fade-in text-base md:text-lg font-light mb-4 text-zinc-700 leading-relaxed">
            Antes de iniciar as atividades da corretora, atuou por 20 anos como Superintendente de Sinistros na Bradesco Seguros, acompanhando de perto grandes obras, tais como a construção da hidroelétrica de Itaipu, riscos complexos e os impactos reais de um seguro bem estruturado quando ele realmente precisa funcionar.
          </p>
          <p className="fade-in text-base md:text-lg font-light mb-4 text-black font-normal leading-relaxed">
            Essa trajetória é sustentada por valores que atravessam gerações.
          </p>
          <p className="fade-in text-base md:text-lg font-light mb-4 text-zinc-700 leading-relaxed">
            A RA Poliseg conta também com Carina Abinader, filha do fundador, advogada especializada em Direito Empresarial, Contratual, Tributário e Administração de Empresas pela FVG - São Paulo/University of California- San Diego, garantindo que cada apólice esteja alinhada não só ao risco, mas também à estrutura e necessidade legal/ financeira do cliente.
          </p>
          <p className="fade-in text-base md:text-lg font-light mb-4 text-zinc-700 leading-relaxed">
            A combination do conhecimento técnico em — engenharia, seguros de todos os ramos e direito —, somados aos mais de 35 anos de prática, é o que sustenta nossa atuação e permeia nosso trabalho até hoje.
          </p>
          <p className="fade-in text-2xl md:text-3xl font-medium mb-6 text-black leading-snug">
            Nascemos da engenharia, crescemos com seguros e nos fortalecemos com o direito.
          </p>
          <p className="fade-in text-base md:text-lg font-light mb-4 text-zinc-700 leading-relaxed">
            Em nossa origem, há uma herança que valoriza a palavra, o cuidado nas relações e a construção paciente do que é duradouro.
          </p>
        </div>
      </section>

      <footer className="bg-black text-white py-10 md:py-16 px-4 sm:px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-16 mb-10 md:mb-16">
            <div className="sm:col-span-2">
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                Fundada em 1988, a RA Poliseg é referência em soluções securitárias estruturadas com precisão e rigor técnico para empresas e famílias.
              </p>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4 md:mb-6">Contato</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="tel:+551130443355" className="hover:text-white transition-colors">(11) 3887-8930</a></li>
                <li><a href="mailto:contato@rapoliseg.com.br" className="hover:text-white transition-colors">contato@rapoliseg.com.br</a></li>
                <li className="pt-2 leading-relaxed">
                  <a href="https://maps.app.goo.gl/cRJpnrm19PBuxo9h8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Rua Teixeira da Silva, 660<br />Cj. 84 — São Paulo - SP</a>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] font-semibold text-white mb-4 md:mb-6">Navegação</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="/" className="hover:text-white transition-colors">Início</a></li>
                <li><a href="/historia" className="hover:text-white transition-colors">Nossa História</a></li>
                <li><a href="/especialidade" className="hover:text-white transition-colors">Especialidade</a></li>
                <li><a href="/#linhas" className="hover:text-white transition-colors">Linhas de Negócio</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-xs">
              © {new Date().getFullYear()} RA Poliseg Seguros. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/551130443355"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="sm:w-7 sm:h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
