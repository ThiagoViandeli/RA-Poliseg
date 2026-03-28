import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

import Ra_logo_2026 from "@assets/Ra_logo_2026_1773887463194.jpg";

import logo_itau from "@assets/logo-itau.png";

const constructorLogos = [
  { src: "/eztec_logo.png", alt: "Eztec" },
  { src: "/kallas_logo.png", alt: "Kallas" },
  { src: "/trisul_logo.png", alt: "Trisul" },
  { src: "/fraiha_logo.png", alt: "Fraiha" },
  { src: "/amy_logo.png", alt: "Amy", className: "mix-blend-multiply" },
  { src: "/constrak_logo.png", alt: "Constrak", className: "mix-blend-multiply" },
  { src: "/cemek_logo.png", alt: "Cemek", className: "mix-blend-multiply h-8", defaultH: false },
];

const spPhotos = ["/sp1.jpg", "/sp2.jpg", "/sp3.jpg", "/sp4.jpg", "/sp5.jpg", "/sp6.jpg"];

function BrandStatement() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const items = el.querySelectorAll(".gsap-reveal");
    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        { opacity: 0, y: 52 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.13,
          scrollTrigger: {
            trigger: el,
            start: "top 82%",
            toggleActions: "play none none none",
          },
        }
      );
      const bar = el.querySelector(".gsap-bar");
      if (bar) {
        gsap.fromTo(
          bar,
          { scaleX: 0, transformOrigin: "left center" },
          {
            scaleX: 1,
            duration: 0.9,
            ease: "power2.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    }, el);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} data-stack className="bg-white border-b border-[#d4d4d8] overflow-hidden sticky top-0">
      {/* Top band: year + headline */}
      <div className="px-4 sm:px-8 md:px-12 lg:px-16 pt-16 md:pt-24 pb-12 md:pb-20 border-b border-[#d4d4d8]">
        <h2 className="gsap-reveal text-black text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] font-medium tracking-tight mb-10 md:mb-14">Quem somos</h2>
        <div className="relative mb-8 md:mb-12">
          <p className="select-none pointer-events-none text-[7rem] sm:text-[9rem] md:text-[12rem] lg:text-[14rem] leading-none font-medium tracking-tight text-black/[0.05]">
            1988
          </p>
          <p className="gsap-reveal absolute bottom-0 left-0 right-0 text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] font-medium tracking-tight text-black pb-2">
            Fundada em 1988.<br />Hoje somos referência<br />em soluções securitárias.
          </p>
        </div>
        <div className="space-y-6 md:space-y-8 pb-2">
          <div className="gsap-bar h-[2px] bg-[#d97706] w-10" />
          <p className="gsap-reveal text-base md:text-lg lg:text-xl font-light text-zinc-600 leading-relaxed">
            Acreditamos e praticamos um atendimento próximo, super personalizado, com visão técnica e soluções estratégicas consagradas.
          </p>
          <p className="gsap-reveal text-base md:text-lg lg:text-xl font-light text-zinc-600 leading-relaxed">
            Conhecemos nossos clientes de verdade — suas histórias, seus negócios e seus riscos.
          </p>
          <p className="gsap-reveal text-base md:text-lg lg:text-xl font-light text-zinc-600 leading-relaxed">
            Oferecemos Seguros de todos os ramos, com as melhores Seguradoras do mercado mundial.
          </p>
          <p className="gsap-reveal text-base md:text-lg lg:text-xl font-light text-zinc-600 leading-relaxed">
            Proteção personalizada para cada fase, cada obra, cada empresa, cada família — em suas decisões mais importantes.
          </p>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setBgIndex(i => (i + 1) % spPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sectionConfigs = [
        {
          selector: "#historia",
          targets: ["h3", "p", ".grid > div"],
          stagger: 0.12,
          y: 50,
        },
        {
          selector: "#especialidade",
          targets: ["h3", "p", ".rounded-2xl"],
          stagger: 0.1,
          y: 45,
        },
        {
          selector: "#especialidade-atuacao",
          targets: ["p"],
          stagger: 0.1,
          y: 45,
        },
        {
          selector: "#linhas",
          targets: ["h2", ".grid > div", ".border-t"],
          stagger: 0.1,
          y: 40,
        },
      ];

      sectionConfigs.forEach(({ selector, targets, stagger, y }) => {
        const section = document.querySelector(selector);
        if (!section) return;

        targets.forEach(target => {
          const els = section.querySelectorAll(target);
          if (!els.length) return;
          gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }).fromTo(
            els,
            { opacity: 0, y },
            {
              opacity: 1,
              y: 0,
              duration: 0.85,
              ease: "power3.out",
              stagger,
            }
          );
        });
      });

      // Footer animation
      const footer = document.querySelector("footer");
      if (footer) {
        gsap.timeline({
          scrollTrigger: {
            trigger: footer,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }).fromTo(
          footer.querySelectorAll("h5, li, p, img"),
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", stagger: 0.06 }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>("[data-stack]");

      sections.forEach((section, i) => {
        gsap.set(section, {
          zIndex: i + 1,
          transformOrigin: "top center",
        });

        if (i < sections.length - 1) {
          gsap.timeline({
            scrollTrigger: {
              trigger: sections[i + 1],
              start: "top bottom",
              end: "top top",
              scrub: 0.6,
            },
          }).to(section, {
            scale: 0.88,
            borderRadius: "18px",
            ease: "none",
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#FACC15] selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-[#d4d4d8]/30">
        <div className="flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-16 py-3 md:py-4">
          <a href="#inicio" data-testid="link-logo-home">
            <img src="/logo_cor_certa_1774637540783.png" alt="RA Poliseg" className="h-16 sm:h-20" />
          </a>
          <ul className="hidden md:flex items-center gap-4 lg:gap-8 text-[10px] lg:text-xs uppercase tracking-[0.15em] font-medium text-zinc-600">
            <li><a href="#inicio" className="hover:text-black transition-colors" data-testid="nav-home">Início</a></li>
            <li><a href="#historia" className="hover:text-black transition-colors" data-testid="nav-history">Nossa História</a></li>
            <li><a href="#especialidade" className="hover:text-black transition-colors" data-testid="nav-specialty">Especialidade</a></li>
            <li><a href="#linhas" className="hover:text-black transition-colors" data-testid="nav-lines">Linhas de Negócio</a></li>
          </ul>
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
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
              <li><a href="#inicio" className="block py-2 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)} data-testid="nav-mobile-home">Início</a></li>
              <li><a href="#historia" className="block py-2 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)} data-testid="nav-mobile-history">Nossa História</a></li>
              <li><a href="#especialidade" className="block py-2 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)} data-testid="nav-mobile-specialty">Especialidade</a></li>
              <li><a href="#linhas" className="block py-2 hover:text-black transition-colors" onClick={() => setMobileMenuOpen(false)} data-testid="nav-mobile-lines">Linhas de Negócio</a></li>
            </ul>
          </div>
        )}
      </nav>
      {/*
        Key Phrases Section — First / Hero
      */}
      <section id="inicio" data-stack className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-16 md:pt-20 pb-16 md:pb-24 border-b border-[#d4d4d8] overflow-hidden sticky top-0">
        {spPhotos.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: src === "/sp4.jpg" ? "bottom center" : "center",
              opacity: i === bgIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 space-y-8 md:space-y-12 text-center max-w-5xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[4rem] leading-[1.1] font-medium tracking-tight text-white">
            Soluções Securitárias estruturadas com precisão e rigor técnico.
          </h2>

        </div>
      </section>
      {/* Constructor Logos Ticker */}
      <div data-stack className="bg-white border-b border-[#d4d4d8] px-4 sm:px-8 md:px-12 lg:px-16 py-20 md:py-32 sticky top-0">
        <div className="space-y-8 max-w-4xl mx-auto w-full text-center">
          <div>
            <p className="mb-6 md:mb-8 md:text-[21px] font-semibold text-[#000000] text-[38px]">Nossos principais clientes são consolidadas construtoras em São Paulo.</p>
            <div className="logo-ticker">
              <div className="logo-ticker__track">
                {[...constructorLogos, ...constructorLogos, ...constructorLogos].map((logo, i) => (
                  <div className="logo-ticker__item" key={i}>
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`${logo.defaultH === false ? logo.className : `h-10 ${logo.className || ''}`} object-contain brightness-0 transition-all opacity-70 hover:opacity-100`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slideshow duplicate — below customers ticker */}
      <section data-stack className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 lg:px-16 pt-16 md:pt-20 pb-16 md:pb-24 border-b border-[#d4d4d8] overflow-hidden sticky top-0">
        {spPhotos.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 bg-cover transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${src})`,
              backgroundPosition: src === "/sp4.jpg" ? "bottom center" : "center",
              opacity: i === bgIndex ? 1 : 0,
            }}
          />
        ))}
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 space-y-8 md:space-y-12 text-center max-w-5xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[3.5rem] leading-[1.1] font-medium tracking-tight text-white">
            Atuamos em todos os ramos<br />
            de seguros no Brasil, com expertise<br />
            em riscos complexos e grandes obras civis.
          </h2>
        </div>
      </section>
      {/* Brand Statement Section */}
      <BrandStatement />
      {/* 
        Slide 2: History
      */}
      <section id="historia" data-stack className="min-h-[80vh] md:min-h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 bg-white border-b border-[#d4d4d8] overflow-hidden sticky top-0">
        <header className="mb-auto">
        </header>

        <div className="mb-8 md:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] font-medium tracking-tight max-w-5xl">NOSSA HISTÓRIA</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-24 text-zinc-800 text-[15px] md:text-[17px] font-light leading-relaxed mb-8 md:mb-12">
          {/* Left Column */}
          <div className="space-y-4 md:space-y-6 max-w-2xl text-base md:text-[18px]">
            <p>
              A RA Poliseg foi fundada em 1988, por Rogério Abinader.
            </p>
            <p>
              Rogerio Abinader, é engenheiro civil formado pela Escola Politécnica da USP, com pós-graduação e especializações em Seguros e Gerenciamento de Riscos.
            </p>
            <p>
              Antes de iniciar as atividades da corretora, atuou por 20 anos como Superintendente de Sinistros na Bradesco Seguros, acompanhando de perto grandes obras, tais como a construção da hidroelétrica de Itaipu, riscos complexos e os impactos reais de um seguro bem estruturado quando ele realmente precisa funcionar.
            </p>
            <p className="text-black font-normal pt-2">
              Essa trajetória é sustentada por valores que atravessam gerações.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 md:space-y-6 max-w-2xl text-base md:text-[18px]">
            <p>
              A RA Poliseg conta também com Carina Abinader, filha do fundador, advogada especializada em Direito Empresarial, Contratual, Tributário e Administração de Empresas pela FVG - São Paulo/University of California- San Diego, garantindo que cada apólice esteja alinhada não só ao risco, mas também à estrutura e necessidade legal/ financeira do cliente.
            </p>
            <p>
              A combination do conhecimento técnico em — engenharia, seguros de todos os ramos e direito —, somados aos mais de 35 anos de prática, é o que sustenta nossa atuação e permeia nosso trabalho até hoje.
            </p>
            <p className="text-xl md:text-2xl lg:text-3xl leading-snug pt-4 pb-2 text-[#000000] font-bold">
              Nascemos da engenharia, crescemos com seguros e nos fortalecemos com o direito.
            </p>
            <p>
              Em nossa origem, há uma herança que valoriza a palavra, o cuidado nas relações e a construção paciente do que é duradouro.
            </p>
          </div>
        </div>
      </section>
      {/* 
        Slide 3a: Specialty — heading + body
      */}
      <section id="especialidade" data-stack className="min-h-[80vh] md:min-h-screen flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 bg-white border-b border-[#d4d4d8] overflow-hidden sticky top-0">
        <header className="mb-auto" />

        <div className="max-w-3xl space-y-8 md:space-y-12">
          <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] font-medium tracking-tight">
            Atuamos em <span className="underline decoration-[#d97706] underline-offset-4 md:underline-offset-[8px] decoration-2 md:decoration-4">todos os ramos de seguros no Brasil</span>, com expertise em riscos complexos e grandes obras civis.
          </h3>

          <div className="space-y-4 md:space-y-6 text-base md:text-[18px] text-zinc-700 font-light leading-relaxed">
            <p>
              Entendemos o canteiro de obras, o cronograma, os contratos e riscos jurídicos.
            </p>
            <p>
              Estruturamos coberturas sob medida para cada projeto e empreendimento, para todos os tipos de riscos.
            </p>
            <p className="text-lg lg:text-xl font-semibold text-black">
              Seguros tailor made, com análise técnica e visão de longo prazo.
            </p>
          </div>

          <div className="rounded-2xl p-6 sm:p-8 bg-black text-white">
            <p className="mb-5 font-semibold text-base md:text-lg">Desenvolvemos seguros personalizados, considerando:</p>
            <ul className="space-y-3 text-base md:text-[17px] font-light">
              <li className="flex items-start gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">■</span><span>Riscos específicos</span></li>
              <li className="flex items-start gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">■</span><span>Estrutura da empresa ou do projeto</span></li>
              <li className="flex items-start gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">■</span><span>Contratos envolvidos</span></li>
              <li className="flex items-start gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">■</span><span>Exigências legais e regulatórias</span></li>
              <li className="flex items-start gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">■</span><span>Visão patrimonial e financeira</span></li>
            </ul>
          </div>

          <p className="text-base md:text-[18px] text-zinc-700 font-light leading-relaxed">
            Tudo com acompanhamento contínuo e relacionamento direto.
          </p>
        </div>
      </section>
      {/* 
        Slide 3b: Specialty — beyond the contract
      */}
      <section id="especialidade-atuacao" data-stack className="min-h-[60vh] md:min-h-screen flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 border-b border-white/10 overflow-hidden sticky top-0 text-[#000000] bg-[#ffffff]">
        <div className="max-w-3xl space-y-8 md:space-y-10">
          <p className="font-medium text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.15] tracking-tight pb-6 border-b border-white/20 text-[#000000]">
            Atuação vai além da contratação.
          </p>
          <p className="text-base md:text-[18px] font-light leading-relaxed text-[#000000b3]">
            Acompanhamos a regulação de possíveis sinistros com suporte técnico e estratégico, garantindo interlocução eficiente com a seguradora e defesa dos interesses do cliente.
          </p>
          <p className="text-white/70 text-base md:text-[18px] font-light leading-relaxed">
            No pós-venda, realizamos acompanhamento contínuo das apólices, mantendo a proteção sempre alinhada à realidade de cada operação.
          </p>
        </div>
      </section>
      {/* 
        Slide 4: Lines of Business & Portfolio
      */}
      <section id="linhas" data-stack className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-16 bg-white overflow-hidden sticky top-0">
        <header className="mb-8 md:mb-12">
        </header>

        <div className="mb-8 md:mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#d97706]"></div>
            <h2 className="text-black text-2xl sm:text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] font-medium tracking-tight">Linhas de negócio</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12 md:mb-24 text-sm font-light text-zinc-800">
          {/* Category 1 */}
          <div>
            <img src="/icon_folder.png" alt="Empresas e Operações" className="w-[150px] h-[151px] sm:w-[200px] sm:h-[201px] lg:w-[250px] lg:h-[251px] mb-6 object-contain mx-auto block animate-float" />
            <h4 className="text-black font-medium mb-2 text-lg md:text-[21px]">Empresas e Operações</h4>
            <p className="text-zinc-500 mb-6 min-h-[40px] uppercase tracking-wider text-[11px] md:text-[12px] font-medium">Estruturação técnica de seguros para proteção patrimonial, operacional e contratual.</p>
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 text-base md:text-[18px] font-medium">
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Empresarial (Multirriscos)</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Responsabilidade Civil Geral e Profissional</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Garantia</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro de Crédito</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Cibernético</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro de Riscos de Engenharia</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro para Grandes Obras Civis</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Acidentes de Trabalho</li>
            </ul>
          </div>

          {/* Category 2 */}
          <div>
            <img src="/icon_patrimonio.png" alt="Patrimônio e Estrutura Familiar" className="w-[150px] h-[151px] sm:w-[200px] sm:h-[201px] lg:w-[250px] lg:h-[251px] mb-6 object-contain mx-auto block animate-float" style={{ animationDelay: "1s" }} />
            <h4 className="text-black font-medium mb-2 text-lg md:text-[21px]">Patrimônio e Estrutura Familiar</h4>
            <p className="text-zinc-500 mb-6 min-h-[40px] uppercase tracking-wider text-[11px] md:text-[12px] font-medium">Proteção personalizada para preservação patrimonial e planejamento familiar.</p>
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 text-base md:text-[18px] font-medium">
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Residencial e Condomínio</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Automóvel</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro de Vida</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro de Acidentes Pessoais</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Viagem</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Saúde</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro para Obras e Reformas</li>
            </ul>
          </div>

          {/* Category 3 */}
          <div>
            <img src="/icon_contrato.png" alt="Riscos Específicos e Patrimônio de Alta Complexidade" className="w-[150px] h-[151px] sm:w-[200px] sm:h-[201px] lg:w-[250px] lg:h-[251px] mb-6 object-contain mx-auto block animate-float" style={{ animationDelay: "2s" }} />
            <h4 className="text-black font-medium mb-2 text-lg md:text-[21px]">Riscos Específicos e Patrimônio de Alta Complexidade</h4>
            <p className="text-zinc-500 mb-6 min-h-[40px] uppercase tracking-wider text-[11px] md:text-[12px] font-medium">Soluções estruturadas para situações que exigem análise técnica aprofundada.</p>
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 text-base md:text-[18px] font-medium">
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Responsabilidade Civil Familiar</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro para Equipamentos e Bens de Alto Valor</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro para Administradores (D&O)</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro para Embarcações e Aeronaves</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Programas personalizados para patrimônio relevante</li>
            </ul>
          </div>

          {/* Category 4 */}
          <div>
            <img src="/icon_obras.png" alt="Engenharia e Grandes Obras" className="w-[150px] h-[151px] sm:w-[200px] sm:h-[201px] lg:w-[250px] lg:h-[251px] mb-6 object-contain mx-auto block animate-float" style={{ animationDelay: "3s" }} />
            <h4 className="text-black font-medium mb-2 text-lg md:text-[21px]">Engenharia e Grandes Obras</h4>
            <p className="text-zinc-600 mb-6 min-h-[40px] uppercase tracking-wider text-[11px] md:text-[12px] font-medium">Especialização histórica da RA Poliseg, com atuação técnica na análise e estruturação de riscos complexos.</p>
            <ul className="space-y-3 border-t border-[#d97706]/40 pt-4 text-black text-base md:text-[18px] font-medium">
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro de Riscos de Engenharia</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Garantia para Obras</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Responsabilidade Civil Obras</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Análise contratual de riscos</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Apoio técnico na regulação de sinistros</li>
            </ul>
          </div>
        </div>

        {/* Seguradoras Parceiras */}
        <div className="mt-auto -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 bg-black px-4 sm:px-8 md:px-12 lg:px-16 py-12 md:py-20">
          <div className="space-y-8 max-w-4xl mx-auto w-full text-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white mb-2 block">Seguradoras Parceiras</span>
              <p className="text-white text-base md:text-[21px] font-light mb-8 md:mb-16">Trabalhamos com as melhores e mais confiáveis seguradoras do mercado.</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 sm:gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-16 items-center">
                <img src="/image_1772669913406.png" alt="Bradesco Seguros" className="h-5 md:h-6 object-contain brightness-0 invert mx-auto" />
                <img src="/porto_seguro_logo.png" alt="Porto Seguro" className="h-6 md:h-8 object-contain brightness-0 invert mx-auto" />
                <img src="/allianz_logo.png" alt="Allianz" className="h-5 md:h-6 object-contain brightness-0 invert mx-auto" />
                <img src={logo_itau} alt="Itaú" className="h-5 md:h-6 object-contain brightness-0 invert mx-auto" />
                <img src="/azul_logo.png" alt="Azul Seguros" className="h-5 md:h-6 object-contain brightness-0 invert mx-auto" />
                <img src="/sulamerica_logo.png" alt="SulAmérica" className="h-5 md:h-6 object-contain brightness-0 invert mx-auto" />
                <img src="/tokiomarine_logo.png" alt="Tokio Marine" className="h-8 md:h-10 object-contain brightness-0 invert mx-auto" />
                <img src="/chubb_logo.png" alt="Chubb" className="h-3 md:h-4 object-contain brightness-0 invert mx-auto" />
                <img src="/liberty_logo.png" alt="Liberty" className="h-6 md:h-8 object-contain brightness-0 invert mx-auto" />
                <img src="/zurich_logo.png" alt="Zurich" className="h-6 md:h-8 object-contain brightness-0 invert mx-auto" />
                <img src="/fairfax_logo.png" alt="Fairfax" className="h-5 md:h-6 object-contain brightness-0 invert mx-auto" />
                <img src="/mapfre_logo.png" alt="Mapfre" className="h-5 md:h-6 object-contain brightness-0 invert mx-auto" />
              </div>
            </div>
          </div>
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
              <h5 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d97706] mb-4 md:mb-6">Contato</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a href="tel:+551130443355" className="hover:text-white transition-colors" data-testid="link-phone">(11) 3887-8930</a>
                </li>
                <li>
                  <a href="mailto:contato@rapoliseg.com.br" className="hover:text-white transition-colors" data-testid="link-email">contato@rapoliseg.com.br</a>
                </li>
                <li className="pt-2 leading-relaxed">
                  <a href="https://maps.app.goo.gl/cRJpnrm19PBuxo9h8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-testid="link-address">Rua Teixeira da Silva, 660<br />Cj. 84 — São Paulo - SP</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d97706] mb-4 md:mb-6">Navegação</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#inicio" className="hover:text-white transition-colors" data-testid="link-nav-home">Início</a></li>
                <li><a href="#historia" className="hover:text-white transition-colors" data-testid="link-nav-history">Nossa História</a></li>
                <li><a href="#especialidade" className="hover:text-white transition-colors" data-testid="link-nav-specialty">Especialidade</a></li>
                <li><a href="#linhas" className="hover:text-white transition-colors" data-testid="link-nav-lines">Linhas de Negócio</a></li>
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
        data-testid="button-whatsapp"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="sm:w-7 sm:h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}
