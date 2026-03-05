import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useEffect } from "react";

export default function Home() {
  const [emblaRef] = useEmblaCarousel({ loop: true, align: "center" }, [Autoplay()]);

  return (
    <div className="min-h-screen bg-[#edf1e6] text-black font-sans selection:bg-[#FACC15] selection:text-black">
      {/* 
        Slide 1: Hero
      */}
      <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 border-b border-[#d4d4d8] pt-[15px] pb-[15px]">
        <header className="mb-auto">
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-6 flex flex-col justify-end">
            <div className="text-zinc-600 text-sm md:text-base leading-relaxed mb-16 max-w-sm">
              <p>Fundada em 1988.</p>
              <p className="text-[18px]">Hoje somos referência em soluções securitárias.</p>
            </div>
            
            <h1 className="text-[2.5rem] md:text-5xl lg:text-[4.5rem] leading-[1.05] font-medium tracking-tight">
              <span className="text-[#d97706] block mb-2">Soluções Securitárias</span> 
              <span className="text-black">estruturadas com precisão e rigor técnico.</span>
            </h1>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-6 flex flex-col justify-end space-y-6 text-zinc-800 text-[15px] md:text-[17px] font-light leading-relaxed max-w-2xl">
            <p>
              Garantimos clareza para as informações relevantes, análise minuciosa com experiência e o suporte humano necessários para discussão e escolha decisiva para a proteção mais adequada à sua realidade.
            </p>
            <p>
              Acreditamos e praticamos um atendimento próximo, super personalizado, com visão técnica e soluções estratégicas consagradas.
            </p>
            <p className="text-black font-normal">
              Conhecemos nossos clientes de verdade — suas histórias, seus negócios e seus riscos.
            </p>
            <p>
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
      <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#e4e9dc] border-b border-[#d4d4d8]">
        <header className="mb-auto">
        </header>

        <div className="mb-16">
          <div className="flex items-center gap-4">
            <div className="w-8 h-[2px] bg-[#d97706]"></div>
            <h2 className="text-[#d97706] text-xs uppercase tracking-[0.2em] font-semibold">Nossa história</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-zinc-800 text-[15px] md:text-[17px] font-light leading-relaxed mb-12">
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
            <p className="text-black font-normal pt-2">
              Essa trajetória é sustentada por valores que atravessam gerações.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6 max-w-2xl">
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
      <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#edf1e6] border-b border-[#d4d4d8]">
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
          <div className="space-y-6 max-w-2xl">
            <p>
              Entendemos o canteiro de obras, o cronograma, os contratos e riscos jurídicos.
            </p>
            <p>
              Estruturamos coberturas sob medida para cada projeto e empreendimento, para todos os tipos riscos.
            </p>
            <p className="text-[#d97706] font-normal text-lg lg:text-xl">
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
          <div className="space-y-6 max-w-2xl">
            <p className="text-black font-medium text-2xl lg:text-3xl leading-snug pb-4 border-b border-[#d4d4d8]">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d97706] mb-2 block">Construtoras</span>
                <p className="text-zinc-500 text-sm font-light mb-8">Nossos principais clientes são consolidadas construtoras em São Paulo.</p>
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex -ml-4 touch-pan-y">
                    {[
                      { src: "/eztec_logo.png", alt: "Eztec" },
                      { src: "/kallas_logo.png", alt: "Kallas" },
                      { src: "/trisul_logo.png", alt: "Trisul" },
                      { src: "/fraiha_logo.png", alt: "Fraiha" },
                      { src: "/amy_logo.png", alt: "Amy", className: "mix-blend-multiply" },
                      { src: "/constrak_logo.png", alt: "Constrak", className: "mix-blend-multiply" },
                      { src: "/cemek_logo.png", alt: "Cemek", className: "mix-blend-multiply h-8", defaultH: false },
                    ].map((logo, i) => (
                      <div className="flex-[0_0_50%] sm:flex-[0_0_33.33%] min-w-0 pl-4 flex justify-center items-center" key={i}>
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
      <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#e4e9dc]">
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
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 font-extrabold text-[18px]">
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
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 font-extrabold text-[18px]">
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
            <ul className="space-y-3 border-t border-[#d4d4d8] pt-4 font-extrabold text-[18px]">
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
            <ul className="space-y-3 border-t border-[#d97706]/40 pt-4 text-black font-extrabold text-[18px]">
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
        <section className="min-h-screen flex flex-col p-8 md:p-12 lg:p-16 bg-[#e4e9dc] pt-[15px] pb-[15px]">
          <div className="pt-16 mt-auto border-t border-[#d4d4d8]">
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 mb-16 pt-16">
              <div className="lg:col-span-6">
                <p className="text-black lg:text-2xl mb-6 text-[21px] font-medium leading-relaxed">
                  Atendemos pessoas físicas e jurídicas, com soluções que acompanham a evolução de cada cliente ao longo do tempo.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 pt-16">
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d97706] mb-2 block">Construtoras</span>
                  <p className="text-zinc-500 text-sm font-light mb-8">Nossos principais clientes são consolidadas construtoras em São Paulo.</p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-8 gap-y-12 items-center">
                    <img src="/eztec_logo.png" alt="Eztec" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                    <img src="/kallas_logo.png" alt="Kallas" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                    <img src="/trisul_logo.png" alt="Trisul" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                    <img src="/fraiha_logo.png" alt="Fraiha" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100" />
                    <img src="/amy_logo.png" alt="Amy" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 mix-blend-multiply" />
                    <img src="/constrak_logo.png" alt="Constrak" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 mix-blend-multiply" />
                    <img src="/cemek_logo.png" alt="Cemek" className="h-8 object-contain grayscale hover:grayscale-0 transition-all opacity-70 hover:opacity-100 mix-blend-multiply" />
                  </div>
                </div>
              </div>

              <div className="space-y-8 lg:border-l lg:border-[#d4d4d8] lg:pl-16">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#d97706] mb-2 block">Seguradoras Parceiras</span>
                  <p className="text-zinc-500 text-sm font-light mb-8">Trabalhamos com as melhores e mais confiáveis seguradoras do mercado.</p>
                  <div className="grid grid-cols-3 gap-x-8 gap-y-12 items-center">
                    <img src="/image_1772669913406.png" alt="Bradesco Seguros" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/porto_seguro_logo.png" alt="Porto Seguro" className="h-8 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/allianz_logo.png" alt="Allianz" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/itau_logo.png" alt="Itaú" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/azul_logo.png" alt="Azul Seguros" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/sulamerica_logo.png" alt="SulAmérica" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/tokiomarine_logo.png" alt="Tokio Marine" className="h-10 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/chubb_logo.png" alt="Chubb" className="h-4 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/liberty_logo.png" alt="Liberty" className="h-8 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/zurich_logo.png" alt="Zurich" className="h-8 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/fairfax_logo.png" alt="Fairfax" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                    <img src="/mapfre_logo.png" alt="Mapfre" className="h-6 object-contain grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

      </section>
    </div>
  );
}