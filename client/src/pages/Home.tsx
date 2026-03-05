import { motion } from "framer-motion";

const constructorLogos = [
  { src: "/eztec_logo.png", alt: "Eztec" },
  { src: "/kallas_logo.png", alt: "Kallas" },
  { src: "/trisul_logo.png", alt: "Trisul" },
  { src: "/fraiha_logo.png", alt: "Fraiha" },
  { src: "/amy_logo.png", alt: "Amy", className: "mix-blend-multiply" },
  { src: "/constrak_logo.png", alt: "Constrak", className: "mix-blend-multiply" },
  { src: "/cemek_logo.png", alt: "Cemek", className: "mix-blend-multiply h-8", defaultH: false },
];

export default function Home() {

  return (
    <div className="min-h-screen bg-[#edf1e6] text-black font-sans selection:bg-[#FACC15] selection:text-black">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#edf1e6]/80 backdrop-blur-md border-b border-[#d4d4d8]/30">
        <div className="flex items-center justify-between px-8 md:px-12 lg:px-16 py-4">
          <a href="#inicio" data-testid="link-logo-home">
            <img src="/ra_poliseg_header_logo.png" alt="RA Poliseg" className="h-8" />
          </a>
          <ul className="hidden md:flex items-center gap-8 text-xs uppercase tracking-[0.15em] font-medium text-zinc-600">
            <li><a href="#inicio" className="hover:text-black transition-colors" data-testid="nav-home">Início</a></li>
            <li><a href="#historia" className="hover:text-black transition-colors" data-testid="nav-history">Nossa História</a></li>
            <li><a href="#especialidade" className="hover:text-black transition-colors" data-testid="nav-specialty">Especialidade</a></li>
            <li><a href="#linhas" className="hover:text-black transition-colors" data-testid="nav-lines">Linhas de Negócio</a></li>
          </ul>
        </div>
      </nav>
      {/* 
        Slide 1: Hero
      */}
      <section id="inicio" className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 border-b border-[#d4d4d8] pt-[0px] pb-[0px]">
        <header className="mb-auto">
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-end bg-[#09667966] rounded-2xl p-8 md:p-12">
            <div className="text-white/70 text-sm md:text-base leading-relaxed mb-16 max-w-sm">
              <p className="text-[#000000b3]">Fundada em 1988.</p>
              <p className="text-[18px] text-[#000000b3]">Hoje somos referência em soluções securitárias.</p>
            </div>
            
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight">
              <span className="text-[#d97706] block mb-2">Soluções Securitárias</span> 
              <span className="text-white">estruturadas com precisão e rigor técnico.</span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-end space-y-6 text-zinc-800 md:text-[17px] font-light max-w-2xl text-[22px]" style={{ fontSynthesis: "weight style" }}>
            <p className="text-[22px]">
              Garantimos clareza para as informações relevantes, análise minuciosa com experiência e o suporte humano necessários para discussão e escolha decisiva para a proteção mais adequada à sua realidade.
            </p>
            <p className="text-[22px]">
              Acreditamos e praticamos um atendimento próximo, super personalizado, com visão técnica e soluções estratégicas consagradas.
            </p>
            <p className="text-black font-normal">
              Conhecemos nossos clientes de verdade — suas histórias, seus negócios e seus riscos.
            </p>
            <p className="text-[22px]">
              Oferecemos Seguros de todos os ramos, com as melhores Seguradoras do mercado mundial.
            </p>
            <p className="text-black pt-4 text-lg">
              Proteção personalizada para cada fase, cada obra, cada empresa, cada familia, em suas decisões mais importantes.
            </p>
          </div>
        </div>
      </section>
      {/* 
        Slide 2: History
      */}
      <section id="historia" className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#e4e9dc] border-b border-[#d4d4d8]">
        <header className="mb-auto">
        </header>

        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-[2px] bg-[#d97706]"></div>
            <h2 className="text-[#d97706] text-xs uppercase tracking-[0.2em] font-semibold">Nossa história</h2>
          </div>
          <h3 className="text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] font-medium tracking-tight max-w-5xl">NOSSA HISTÓRIA</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-zinc-800 text-[15px] md:text-[17px] font-light leading-relaxed mb-12">
          {/* Left Column */}
          <div className="space-y-6 max-w-2xl text-[18px]">
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
          <div className="space-y-6 max-w-2xl text-[18px]">
            <p>
              A RA Poliseg conta também com Carina Abinader, filha do fundador, advogada especializada em Direito Empresarial, Contratual, Tributário e Administração de Empresas pela FVG - São Paulo/University of California- San Diego, garantindo que cada apólice esteja alinhada não só ao risco, mas também à estrutura e necessidade legal/ financeira do cliente.
            </p>
            <p>
              A combination do conhecimento técnico em — engenharia, seguros de todos os ramos e direito —, somados aos mais de 35 anos de prática, é o que sustenta nossa atuação e permeia nosso trabalho até hoje.
            </p>
            <p className="text-[#d97706] font-medium text-2xl lg:text-3xl leading-snug pt-4 pb-2">
              Nascemos da engenharia, crescemos com seguros e nos fortalecemos com o direito.
            </p>
            <p>
              Em nossa origem, há uma herança que valoriza a palavra, o cuidado nas relações e a construção paciente do que é duradouro.
            </p>
          </div>
        </div>
      </section>
      {/* 
        Slide 3: Portfolio & Specialty
      */}
      <section id="especialidade" className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#edf1e6] border-b border-[#d4d4d8]">
        <header className="mb-auto">
        </header>

        <div className="mb-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#d97706]"></div>
            <h2 className="text-[#d97706] text-xs uppercase tracking-[0.2em] font-semibold">Especialidade e modo de trabalhar</h2>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] font-medium tracking-tight max-w-5xl">
            Atuamos em <span className="underline decoration-[#d97706] underline-offset-[8px] decoration-4">todos os ramos de seguros no Brasil</span>, com expertise em riscos complexos e grandes obras civis.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-zinc-800 text-[15px] md:text-[17px] font-light leading-relaxed mb-24">
          {/* Left Column */}
          <div className="space-y-6 max-w-2xl text-[18px]">
            <p>
              Entendemos o canteiro de obras, o cronograma, os contratos e riscos jurídicos.
            </p>
            <p>
              Estruturamos coberturas sob medida para cada projeto e empreendimento, para todos os tipos riscos.
            </p>
            <p className="text-[#d97706] text-lg lg:text-xl font-bold">
              Seguros tailor made, com análise técnica e visão de longo prazo.
            </p>
            <div className="pt-2">
              <p className="mb-4 text-black">Desenvolvemos seguros personalizados, considerando:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] mt-1.5 text-[8px]">■</span>
                  <span>riscos específicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] mt-1.5 text-[8px]">■</span>
                  <span>estrutura da empresa ou do projeto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] mt-1.5 text-[8px]">■</span>
                  <span>contratos envolvidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] mt-1.5 text-[8px]">■</span>
                  <span>exigências legais e regulatórias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d97706] mt-1.5 text-[8px]">■</span>
                  <span>visão patrimonial e financeira</span>
                </li>
              </ul>
            </div>
            <p className="text-black font-normal pt-4">
              Tudo com acompanhamento contínuo e relacionamento direto.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 max-w-2xl text-[18px] bg-[#09667999] rounded-2xl p-8 md:p-12 text-white/80">
            <p className="text-white font-medium text-2xl lg:text-3xl leading-snug pb-4 border-b border-white/20">
              Atuação vai além da contratação.
            </p>
            <p>
              Acompanhamos a regulação de possíveis sinistros com suporte técnico e estratégico, garantindo interlocução eficiente com a seguradora e defesa dos interesses do cliente.
            </p>
            <p>
              No pós-venda, realizamos acompanhamento contínuo das apólices, mantendo a proteção sempre alinhada à realidade de cada operação.
            </p>
          </div>
        </div>

        {/* Portfolio Section Moved Here */}
        <div className="pt-16 border-t border-[#d4d4d8]">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16">
            <div className="lg:col-span-6">
              <p className="text-black lg:text-2xl mb-6 text-[21px] font-medium leading-relaxed">
                Atendemos pessoas físicas e jurídicas, com soluções que acompanham a evolução de cada cliente ao longo do tempo.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1">
            <div className="space-y-8 max-w-4xl mx-auto w-full text-center">
              <div>
                <p className="mb-8 text-[21px] font-semibold text-[#000000]">Nossos principais clientes são consolidadas construtoras em São Paulo.</p>
                <div className="logo-ticker">
                  <div className="logo-ticker__track">
                    {[...constructorLogos, ...constructorLogos, ...constructorLogos].map((logo, i) => (
                      <div className="logo-ticker__item" key={i}>
                        <img 
                          src={logo.src} 
                          alt={logo.alt} 
                          className={`${logo.defaultH === false ? logo.className : `h-6 ${logo.className || ''}`} object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100`} 
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* 
        Slide 4: Lines of Business & Portfolio
      */}
      <section id="linhas" className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#e4e9dc]">
        <header className="mb-12">
        </header>

        <div className="mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#d97706]"></div>
            <h2 className="text-[#d97706] text-xs uppercase tracking-[0.2em] font-semibold">Linhas de negócio</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24 text-sm font-light text-zinc-800">
          {/* Category 1 */}
          <div>
            <img src="/icon_folder.png" alt="Empresas e Operações" className="w-[250px] h-[251px] mb-6 object-contain -ml-10 animate-float" />
            <h4 className="text-black font-medium mb-2 text-[21px]">Empresas e Operações
</h4>
            <p className="text-zinc-500 mb-6 min-h-[40px] uppercase tracking-wider text-[12px] font-medium">Estruturação técnica de seguros para proteção patrimonial, operacional e contratual.</p>
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 text-[18px] font-medium">
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
            <img src="/icon_patrimonio.png" alt="Patrimônio e Estrutura Familiar" className="w-[250px] h-[251px] mb-6 object-contain -ml-10 animate-float" style={{ animationDelay: "1s" }} />
            <h4 className="text-black font-medium mb-2 text-[21px]"> Patrimônio e Estrutura Familiar
</h4>
            <p className="text-zinc-500 mb-6 min-h-[40px] uppercase tracking-wider text-[12px] font-medium">Proteção personalizada para preservação patrimonial e planejamento familiar.
</p>
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 text-[18px] font-medium">
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
            <img src="/icon_contrato.png" alt="Riscos Específicos e Patrimônio de Alta Complexidade" className="w-[250px] h-[251px] mb-6 object-contain -ml-10 animate-float" style={{ animationDelay: "2s" }} />
            <h4 className="text-black font-medium mb-2 text-[21px]"> Riscos Específicos e Patrimônio de Alta Complexidade
</h4>
            <p className="text-zinc-500 mb-6 min-h-[40px] uppercase tracking-wider text-[12px] font-medium">Soluções estruturadas para situações que exigem análise técnica aprofundada.</p>
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 text-[18px] font-medium">
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Responsabilidade Civil Familiar</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro para Equipamentos e Bens de Alto Valor</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro para Administradores (D&O)</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro para Embarcações e Aeronaves</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Programas personalizados para patrimônio relevante</li>
            </ul>
          </div>

          {/* Category 4 */}
          <div>
            <img src="/icon_obras.png" alt="Engenharia e Grandes Obras" className="w-[250px] h-[251px] mb-6 object-contain -ml-10 animate-float" style={{ animationDelay: "3s" }} />
            <h4 className="text-black font-medium mb-2 text-[21px]">Engenharia e Grandes Obras
</h4>
            <p className="text-zinc-600 mb-6 min-h-[40px] uppercase tracking-wider text-[12px] font-medium">Especialização histórica da RA Poliseg, com atuação técnica na análise e estruturação de riscos complexos.</p>
            <ul className="space-y-3 border-t border-[#d97706]/40 pt-4 text-black text-[18px] font-medium">
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro de Riscos de Engenharia</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Seguro Garantia para Obras</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Responsabilidade Civil Obras</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Análise contratual de riscos</li>
              <li className="flex gap-3"><span className="text-[#d97706] mt-1.5 text-[8px]">*</span> Apoio técnico na regulação de sinistros</li>
            </ul>
          </div>
        </div>

        {/* 
          Slide 3: Portfolio
        */}
        <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#e4e9dc] pt-[0px] pb-[0px]">
          <div className="pt-16 mt-auto border-t border-[#d4d4d8]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 pt-16">
              <div className="lg:col-span-6">
                <p className="text-black lg:text-2xl mb-6 text-[21px] font-medium leading-relaxed">
                  Atendemos pessoas físicas e jurídicas, com soluções que acompanham a evolução de cada cliente ao longo do tempo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 pt-16">
              <div className="space-y-8 max-w-4xl mx-auto w-full text-center">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d97706] mb-2 block">Seguradoras Parceiras</span>
                  <p className="text-zinc-500 text-[21px] font-light mb-16">Trabalhamos com as melhores e mais confiáveis seguradoras do mercado.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-12 gap-y-16 items-center">
                    <img src="/image_1772669913406.png" alt="Bradesco Seguros" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/porto_seguro_logo.png" alt="Porto Seguro" className="h-8 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/allianz_logo.png" alt="Allianz" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/itau_logo.png" alt="Itaú" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/azul_logo.png" alt="Azul Seguros" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/sulamerica_logo.png" alt="SulAmérica" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/tokiomarine_logo.png" alt="Tokio Marine" className="h-10 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/chubb_logo.png" alt="Chubb" className="h-4 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/liberty_logo.png" alt="Liberty" className="h-8 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/zurich_logo.png" alt="Zurich" className="h-8 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/fairfax_logo.png" alt="Fairfax" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                    <img src="/mapfre_logo.png" alt="Mapfre" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 mx-auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
      <footer className="bg-[#096679] text-white py-16 px-8 md:px-12 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
            <div className="lg:col-span-2">
              <img src="/ra_poliseg_header_logo.png" alt="RA Poliseg" className="h-10 mb-6 brightness-0 invert" />
              <p className="text-white/70 text-sm leading-relaxed max-w-md">
                Fundada em 1988, a RA Poliseg é referência em soluções securitárias estruturadas com precisão e rigor técnico para empresas e famílias.
              </p>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d97706] mb-6">Contato</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li>
                  <a href="tel:+551130443355" className="hover:text-white transition-colors" data-testid="link-phone">(11) 3887-8930</a>
                </li>
                <li>
                  <a href="mailto:contato@rapoliseg.com.br" className="hover:text-white transition-colors" data-testid="link-email">rapoliseg@rapoliseg.com.br</a>
                </li>
                <li className="pt-2 leading-relaxed">
                  <a href="https://maps.app.goo.gl/cRJpnrm19PBuxo9h8" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" data-testid="link-address">Rua Teixeira da Silva, 660<br />Cj. 84 — São Paulo - SP</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-[0.2em] font-semibold text-[#d97706] mb-6">Navegação</h5>
              <ul className="space-y-3 text-sm text-white/70">
                <li><a href="#inicio" className="hover:text-white transition-colors" data-testid="link-nav-home">Início</a></li>
                <li><a href="#historia" className="hover:text-white transition-colors" data-testid="link-nav-history">Nossa História</a></li>
                <li><a href="#especialidade" className="hover:text-white transition-colors" data-testid="link-nav-specialty">Especialidade</a></li>
                <li><a href="#linhas" className="hover:text-white transition-colors" data-testid="link-nav-lines">Linhas de Negócio</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
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
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe57] text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl transition-all hover:scale-105"
        data-testid="button-whatsapp"
        aria-label="Fale conosco pelo WhatsApp"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>
    </div>
  );
}