import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#000000] text-white font-sans selection:bg-[#FACC15] selection:text-black">
      
      {/* 
        Slide 1: Hero
      */}
      <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 border-b border-[#222]">
        <header className="mb-auto">
          <div className="font-semibold tracking-[0.2em] text-xs">RA POLISEG</div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="text-[#a1a1aa] text-sm md:text-base leading-relaxed mb-16 max-w-sm">
              <p>Fundada em 1988.</p>
              <p>Hoje somos referência em soluções securitárias.</p>
            </div>
            
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight">
              <span className="text-[#FACC15] block mb-2">Soluções Securitárias</span> 
              <span className="text-white">estruturadas com precisão e rigor técnico.</span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-end space-y-6 text-[#d4d4d8] text-[15px] md:text-[17px] font-light leading-relaxed max-w-2xl">
            <p>
              Garantimos clareza para as informações relevantes, análise minuciosa com experiência e o suporte humano necessários para discussão e escolha decisiva para a proteção mais adequada à sua realidade.
            </p>
            <p>
              Acreditamos e praticamos um atendimento próximo, super personalizado, com visão técnica e soluções estratégicas consagradas.
            </p>
            <p className="text-white font-normal">
              Conhecemos nossos clientes de verdade — suas histórias, seus negócios e seus riscos.
            </p>
            <p>
              Oferecemos Seguros de todos os ramos, com as melhores Seguradoras do mercado mundial.
            </p>
            <p className="text-white pt-4 text-lg">
              Proteção personalizada para cada fase, cada obra, cada empresa, cada familia, em suas decisões mais importantes.
            </p>
          </div>
        </div>
      </section>

      {/* 
        Slide 2: History
      */}
      <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#0a0a0a] border-b border-[#222]">
        <header className="mb-auto">
          <div className="font-semibold tracking-[0.2em] text-xs">RA POLISEG</div>
        </header>

        <div className="mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#FACC15]"></div>
            <h2 className="text-[#FACC15] text-xs uppercase tracking-[0.2em] font-semibold">Nossa história</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-[#d4d4d8] text-[15px] md:text-[17px] font-light leading-relaxed mb-12">
          {/* Left Column */}
          <div className="space-y-6 max-w-2xl">
            <p>
              A RA Poliseg foi fundada em 1988, por Rogério Abinader.
            </p>
            <p>
              Rogerio Abinader, é engenheiro civil formado pela Escola Politécnica da USP, com pós-graduação e especializações em Seguros e Gerenciamento de Riscos.
            </p>
            <p>
              Antes de iniciar as atividades da corretora, atuou por 20 anos como Superintendente de Sinistros na Bradesco Seguros, acompanhando de perto grandes obras, tais como a construção da hidroelétrica de Itaipu, riscos complexos e os impactos reais de um seguro bem estruturado quando ele realmente precisa funcionar.
            </p>
            <p className="text-white font-normal pt-2">
              Essa trajetória é sustentada por valores que atravessam gerações.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 max-w-2xl">
            <p>
              A RA Poliseg conta também com Carina Abinader, filha do fundador, advogada especializada em Direito Empresarial, Contratual, Tributário e Administração de Empresas pela FVG - São Paulo/University of California- San Diego, garantindo que cada apólice esteja alinhada não só ao risco, mas também à estrutura e necessidade legal/ financeira do cliente.
            </p>
            <p>
              A combinação do conhecimento técnico em — engenharia, seguros de todos os ramos e direito —, somados aos mais de 35 anos de prática, é o que sustenta nossa atuação e permeia nosso trabalho até hoje.
            </p>
            <p className="text-[#FACC15] font-medium text-2xl lg:text-3xl leading-snug pt-4 pb-2">
              Nascemos da engenharia, crescemos com seguros e nos fortalecemos com o direito.
            </p>
            <p>
              Em nossa origem, há uma herança que valoriza a palavra, o cuidado nas relações e a construção paciente do que é duradouro.
            </p>
          </div>
        </div>
      </section>

      {/* 
        Slide 3: Specialty
      */}
      <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#000000] border-b border-[#222]">
        <header className="mb-auto">
          <div className="font-semibold tracking-[0.2em] text-xs">RA POLISEG</div>
        </header>

        <div className="mb-12">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#FACC15]"></div>
            <h2 className="text-[#FACC15] text-xs uppercase tracking-[0.2em] font-semibold">Expertise e modo de atuação</h2>
          </div>
        </div>

        <div className="mb-24">
          <h3 className="text-3xl md:text-5xl lg:text-[4rem] leading-[1.1] font-medium tracking-tight max-w-5xl">
            Atuamos em todos os ramos de seguros no Brasil, com expertise em riscos complexos e grandes obras civis.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-[#d4d4d8] text-[15px] md:text-[17px] font-light leading-relaxed mb-12">
          {/* Left Column */}
          <div className="space-y-6 max-w-2xl">
            <p>
              Entendemos o canteiro de obras, o cronograma, os contratos e riscos jurídicos.
            </p>
            <p>
              Estruturamos coberturas sob medida para cada projeto e empreendimento, para todos os tipos riscos.
            </p>
            <p className="text-[#FACC15] font-normal text-lg lg:text-xl">
              Seguros tailor made, com análise técnica e visão de longo prazo.
            </p>
            <div className="pt-2">
              <p className="mb-4 text-white">Desenvolvemos seguros personalizados, considerando:</p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#FACC15] mt-1.5 text-[8px]">■</span>
                  <span>riscos específicos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FACC15] mt-1.5 text-[8px]">■</span>
                  <span>estrutura da empresa ou do projeto</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FACC15] mt-1.5 text-[8px]">■</span>
                  <span>contratos envolvidos</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FACC15] mt-1.5 text-[8px]">■</span>
                  <span>exigências legais e regulatórias</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#FACC15] mt-1.5 text-[8px]">■</span>
                  <span>visão patrimonial e financeira</span>
                </li>
              </ul>
            </div>
            <p className="text-white font-normal pt-4">
              Tudo com acompanhamento contínuo e relacionamento direto.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 max-w-2xl">
            <p className="text-white font-medium text-2xl lg:text-3xl leading-snug pb-4 border-b border-[#333]">
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
      </section>

      {/* 
        Slide 4: Lines of Business & Portfolio
      */}
      <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#0a0a0a]">
        <header className="mb-12">
          <div className="font-semibold tracking-[0.2em] text-xs">RA POLISEG</div>
        </header>

        <div className="mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#FACC15]"></div>
            <h2 className="text-[#FACC15] text-xs uppercase tracking-[0.2em] font-semibold">Linhas de negócio</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24 text-sm font-light text-[#d4d4d8]">
          {/* Category 1 */}
          <div>
            <h4 className="text-white font-medium text-[15px] mb-2">Companies and Operations</h4>
            <p className="text-[11px] text-[#a1a1aa] mb-6 min-h-[40px] leading-relaxed uppercase tracking-wider">Technical structuring of insurance for asset, operational and contractual protection.</p>
            <ul className="space-y-3 border-t border-[#222] pt-4">
              <li>Seguro Empresarial (Multirriscos)</li>
              <li>Responsabilidade Civil Geral e Profissional</li>
              <li>Seguro Garantia</li>
              <li>Seguro de Crédito</li>
              <li>Seguro Cibernético</li>
              <li>Seguro de Riscos de Engenharia</li>
              <li>Seguro para Grandes Obras Civis</li>
              <li>Acidentes de Trabalho</li>
            </ul>
          </div>

          {/* Category 2 */}
          <div>
            <h4 className="text-white font-medium text-[15px] mb-2">Assets and Family Structure</h4>
            <p className="text-[11px] text-[#a1a1aa] mb-6 min-h-[40px] leading-relaxed uppercase tracking-wider">Personalized protection for asset preservation and family planning.</p>
            <ul className="space-y-3 border-t border-[#222] pt-4">
              <li>Seguro Residencial e Condomínio</li>
              <li>Seguro Automóvel</li>
              <li>Seguro de Vida</li>
              <li>Seguro de Acidentes Pessoais</li>
              <li>Seguro Viagem</li>
              <li>Seguro Saúde</li>
              <li>Seguro para Obras e Reformas</li>
            </ul>
          </div>

          {/* Category 3 */}
          <div>
            <h4 className="text-white font-medium text-[15px] mb-2">Specific Risks and High-Complexity Assets</h4>
            <p className="text-[11px] text-[#a1a1aa] mb-6 min-h-[40px] leading-relaxed uppercase tracking-wider">Structured solutions for situations requiring in-depth technical analysis.</p>
            <ul className="space-y-3 border-t border-[#222] pt-4">
              <li>Responsabilidade Civil Familiar</li>
              <li>Seguro para Equipamentos e Bens de Alto Valor</li>
              <li>Seguro para Administradores (D&O)</li>
              <li>Seguro para Embarcações e Aeronaves</li>
              <li>Programas personalizados para patrimônio relevante</li>
            </ul>
          </div>

          {/* Category 4 */}
          <div>
            <h4 className="text-white font-medium text-[15px] mb-2">Engineering and Large-Scale Projects</h4>
            <p className="text-[11px] text-[#a1a1aa] mb-6 min-h-[40px] leading-relaxed uppercase tracking-wider">RA Poliseg's historical specialty, with technical expertise in the analysis and structuring of complex risks.</p>
            <ul className="space-y-3 border-t border-[#FACC15]/30 pt-4 text-white">
              <li className="flex gap-3"><span className="text-[#FACC15] mt-1.5 text-[6px]">■</span> Seguro de Riscos de Engenharia</li>
              <li className="flex gap-3"><span className="text-[#FACC15] mt-1.5 text-[6px]">■</span> Seguro Garantia para Obras</li>
              <li className="flex gap-3"><span className="text-[#FACC15] mt-1.5 text-[6px]">■</span> Responsabilidade Civil Obras</li>
              <li className="flex gap-3"><span className="text-[#FACC15] mt-1.5 text-[6px]">■</span> Análise contratual de riscos</li>
              <li className="flex gap-3"><span className="text-[#FACC15] mt-1.5 text-[6px]">■</span> Apoio técnico na regulação de sinistros</li>
            </ul>
          </div>
        </div>

        {/* Portfolio Section */}
        <div className="pt-16 mt-auto">
          <div className="mb-12">
            <div className="flex items-center gap-4">
              <div className="w-8 h-[2px] bg-[#FACC15]"></div>
              <h2 className="text-[#FACC15] text-xs uppercase tracking-[0.2em] font-semibold">Portfolio</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            <div className="lg:col-span-4">
              <p className="text-white text-lg lg:text-xl leading-snug mb-4">
                Atendemos pessoas físicas e jurídicas, com soluções que acompanham a evolução de cada cliente ao longo do tempo.
              </p>
              <p className="text-[#a1a1aa] text-sm font-light">
                Our main clients are well-established construction companies in São Paulo, such as:
              </p>
            </div>
            
            <div className="lg:col-span-8 space-y-12 border-l border-[#222] pl-0 lg:pl-12">
              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#a1a1aa] bg-[#222] px-3 py-1 rounded-sm inline-block">Construtoras</span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-white font-medium text-[15px] tracking-wide">
                  <span>EZTEC</span>
                  <span>KALLAS</span>
                  <span>TRISUL</span>
                  <span>FRAIHA</span>
                  <span>AMY</span>
                  <span>CONSTRAK</span>
                  <span>CEMEK</span>
                </div>
              </div>

              <div className="space-y-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#a1a1aa] bg-[#222] px-3 py-1 rounded-sm inline-block">Seguradoras</span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[#a1a1aa] font-light text-[13px] tracking-wide">
                  <span>BRADESCO</span>
                  <span>PORTO SEGURO</span>
                  <span>ALLIANZ</span>
                  <span>ITAU</span>
                  <span>AZUL</span>
                  <span>SULAMERICA</span>
                  <span>TOKIO MARINE</span>
                  <span>CHUBB</span>
                  <span>LIBERTY</span>
                  <span>ZURICH</span>
                  <span>FAIRFAX</span>
                  <span>MAPFRE</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </div>
  );
}