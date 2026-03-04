import { motion } from "framer-motion";
import { Link } from "wouter";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30">
      
      {/* HEADER / NAV (Minimalist) */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 py-6 px-8 md:px-16 flex justify-between items-center transition-all duration-300">
        <div className="font-serif text-2xl tracking-widest text-primary font-bold">RA POLISEG</div>
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col justify-center px-8 md:px-16 pt-32 pb-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img 
            src="/images/hero-bg.png" 
            alt="Corporate background" 
            className="w-full h-full object-cover opacity-30 object-center scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background"></div>
        </div>

        <div className="relative z-10 max-w-5xl">
          <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
            <motion.h2 variants={fadeIn} className="text-primary font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-6">
              Fundada em 1988. <br/>Hoje somos referência em soluções securitárias.
            </motion.h2>
            
            <motion.h1 variants={fadeIn} className="text-4xl md:text-6xl lg:text-7xl leading-[1.1] font-serif mb-10 text-balance">
              <span className="text-gradient-gold">Soluções Securitárias</span> estruturadas com precisão e rigor técnico.
            </motion.h1>

            <motion.div variants={fadeIn} className="max-w-3xl space-y-6 text-muted-foreground text-lg md:text-xl font-light leading-relaxed">
              <p>
                Garantimos clareza para as informações relevantes, análise minuciosa com experiência e o suporte humano necessários para discussão e escolha decisiva para a proteção mais adequada à sua realidade.
              </p>
              <p>
                Acreditamos e praticamos um atendimento próximo, super personalizado, com visão técnica e soluções estratégicas consagradas.
              </p>
              <p className="text-foreground font-medium">
                Conhecemos nossos clientes de verdade — suas histórias, seus negócios e seus riscos.
              </p>
              <p>
                Oferecemos Seguros de todos os ramos, com as melhores Seguradoras do mercado mundial.
              </p>
              <p className="text-primary/90 italic font-serif text-2xl mt-8">
                Proteção personalizada para cada fase, cada obra, cada empresa, cada familia, em suas decisões mais importantes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* OUR HISTORY SECTION */}
      <section className="relative py-32 px-8 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <div className="relative h-[600px] w-full rounded-sm overflow-hidden group">
              <img 
                src="/images/history-bg.png" 
                alt="Engineering Heritage" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 border border-primary/20 m-4 rounded-sm z-10 pointer-events-none"></div>
            </div>
          </motion.div>

          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="order-1 lg:order-2 space-y-8"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <h3 className="text-primary font-medium tracking-widest uppercase text-sm">Nossa História</h3>
            </motion.div>

            <div className="space-y-6 text-muted-foreground text-base md:text-lg font-light leading-relaxed">
              <motion.p variants={fadeIn}>
                A RA Poliseg foi fundada em 1988, por Rogério Abinader.
              </motion.p>
              <motion.p variants={fadeIn}>
                Rogerio Abinader, é engenheiro civil formado pela Escola Politécnica da USP, com pós-graduação e especializações em Seguros e Gerenciamento de Riscos.
              </motion.p>
              <motion.p variants={fadeIn}>
                Antes de iniciar as atividades da corretora, atuou por 20 anos como Superintendente de Sinistros na Bradesco Seguros, acompanhando de perto grandes obras, tais como a construção da hidroelétrica de Itaipu, riscos complexos e os impactos reais de um seguro bem estruturado quando ele realmente precisa funcionar.
              </motion.p>
              <motion.p variants={fadeIn} className="text-foreground font-serif italic text-xl border-l-2 border-primary pl-6 py-2 my-8">
                Essa trajetória é sustentada por valores que atravessam gerações.
              </motion.p>
              <motion.p variants={fadeIn}>
                A RA Poliseg conta também com Carina Abinader, filha do fundador, advogada especializada em Direito Empresarial, Contratual, Tributário e Administração de Empresas pela FVG - São Paulo/University of California- San Diego, garantindo que cada apólice esteja alinhada não só ao risco, mas também à estrutura e necessidade legal/ financeira do cliente.
              </motion.p>
              <motion.p variants={fadeIn}>
                A combinação do conhecimento técnico em — engenharia, seguros de todos os ramos e direito —, somados aos mais de 35 anos de prática, é o que sustenta nossa atuação e permeia nosso trabalho até hoje.
              </motion.p>
              <motion.p variants={fadeIn} className="text-2xl font-serif text-gradient-gold pt-6">
                Nascemos da engenharia, crescemos com seguros e nos fortalecemos com o direito.
              </motion.p>
              <motion.p variants={fadeIn}>
                Em nossa origem, há uma herança que valoriza a palavra, o cuidado nas relações e a construção paciente do que é duradouro.
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SPECIALTY SECTION */}
      <section className="py-32 px-8 md:px-16 bg-secondary/30 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl"
          >
            <motion.div variants={fadeIn} className="flex items-center gap-4 mb-8">
              <div className="h-px w-12 bg-primary"></div>
              <h3 className="text-primary font-medium tracking-widest uppercase text-sm">Expertise</h3>
            </motion.div>

            <motion.h2 variants={fadeIn} className="text-3xl md:text-5xl font-serif mb-12 leading-tight">
              Atuamos em todos os ramos de seguros no Brasil, com expertise em riscos complexos e grandes obras civis.
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-muted-foreground font-light text-lg">
              <div className="space-y-6">
                <motion.p variants={fadeIn}>
                  Entendemos o canteiro de obras, o cronograma, os contratos e riscos jurídicos.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Estruturamos coberturas sob medida para cada projeto e empreendimento, para todos os tipos riscos.
                </motion.p>
                <motion.p variants={fadeIn} className="text-primary font-medium">
                  Seguros tailor made, com análise técnica e visão de longo prazo.
                </motion.p>
                <motion.div variants={fadeIn} className="bg-background/50 p-8 border border-white/5 rounded-sm mt-8">
                  <h4 className="text-foreground font-serif text-xl mb-4">Desenvolvemos seguros personalizados, considerando:</h4>
                  <ul className="space-y-3 list-none">
                    {["riscos específicos", "estrutura da empresa ou do projeto", "contratos envolvidos", "exigências legais e regulatórias", "visão patrimonial e financeira"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary mt-1.5 opacity-70">◆</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
                <motion.p variants={fadeIn} className="text-foreground font-medium pt-4">
                  Tudo com acompanhamento contínuo e relacionamento direto.
                </motion.p>
              </div>
              <div className="space-y-6">
                <motion.p variants={fadeIn} className="text-2xl font-serif text-foreground pb-4 border-b border-white/10">
                  Atuação vai além da contratação.
                </motion.p>
                <motion.p variants={fadeIn}>
                  Acompanhamos a regulação de possíveis sinistros com suporte técnico e estratégico, garantindo interlocução eficiente com a seguradora e defesa dos interesses do cliente.
                </motion.p>
                <motion.p variants={fadeIn}>
                  No pós-venda, realizamos acompanhamento contínuo das apólices, mantendo a proteção sempre alinhada à realidade de cada operação.
                </motion.p>
                
                <div className="pt-8 opacity-80 mix-blend-luminosity">
                  <img src="/images/engineering.png" alt="Engineering" className="w-full h-64 object-cover rounded-sm grayscale contrast-125" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* LINES OF BUSINESS */}
      <section className="py-32 px-8 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-24"
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6">Linhas de Negócio</h2>
            <div className="h-px w-24 bg-primary mx-auto"></div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            
            {/* Category 1 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group"
            >
              <h3 className="text-2xl font-serif text-primary mb-2">Companies and Operations</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">Technical structuring of insurance for asset, operational and contractual protection.</p>
              <ul className="space-y-4 font-light text-lg">
                {["Seguro Empresarial (Multirriscos)", "Responsabilidade Civil Geral e Profissional", "Seguro Garantia", "Seguro de Crédito", "Seguro Cibernético", "Seguro de Riscos de Engenharia", "Seguro para Grandes Obras Civis", "Acidentes de Trabalho"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-primary/30 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Category 2 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group"
            >
              <h3 className="text-2xl font-serif text-primary mb-2">Assets and Family Structure</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">Personalized protection for asset preservation and family planning.</p>
              <ul className="space-y-4 font-light text-lg">
                {["Seguro Residencial e Condomínio", "Seguro Automóvel", "Seguro de Vida", "Seguro de Acidentes Pessoais", "Seguro Viagem", "Seguro Saúde", "Seguro para Obras e Reformas"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-primary/30 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Category 3 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group"
            >
              <h3 className="text-2xl font-serif text-primary mb-2">Specific Risks and High-Complexity Assets</h3>
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-8">Structured solutions for situations requiring in-depth technical analysis.</p>
              <ul className="space-y-4 font-light text-lg">
                {["Responsabilidade Civil Familiar", "Seguro para Equipamentos e Bens de Alto Valor", "Seguro para Administradores (D&O)", "Seguro para Embarcações e Aeronaves", "Programas personalizados para patrimônio relevante"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-white/5 pb-4 group-hover:border-primary/30 transition-colors">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/50"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Category 4 */}
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
              className="group p-8 border border-primary/20 bg-primary/5 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="text-2xl font-serif text-primary mb-2 relative z-10">Engineering and Large-Scale Projects</h3>
              <p className="text-sm text-foreground/80 uppercase tracking-wider mb-8 relative z-10">RA Poliseg's historical specialty, with technical expertise in the analysis and structuring of complex risks.</p>
              <ul className="space-y-4 font-medium text-lg relative z-10">
                {["Seguro de Riscos de Engenharia", "Seguro Garantia para Obras", "Responsabilidade Civil Obras", "Análise contratual de riscos", "Apoio técnico na regulação de sinistros"].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-primary/10 pb-4">
                    <span className="text-primary">◆</span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section className="py-32 px-8 md:px-16 bg-secondary/50 border-t border-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-3xl mx-auto space-y-8"
          >
            <motion.p variants={fadeIn} className="text-2xl md:text-3xl font-serif text-foreground leading-relaxed">
              Atendemos pessoas físicas e jurídicas, com soluções que acompanham a evolução de cada cliente ao longo do tempo.
            </motion.p>
            
            <motion.p variants={fadeIn} className="text-muted-foreground font-light">
              Our main clients are well-established construction companies in São Paulo, such as:
            </motion.p>
          </motion.div>

          {/* Client Logos Bar - As requested, in the same color */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 py-8 border-y border-white/10"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Construtoras</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
              {["EZTEC", "KALLAS", "TRISUL", "FRAIHA", "AMY", "CONSTRAK", "CEMEK"].map((client, i) => (
                <span key={i} className="font-serif text-xl md:text-2xl font-medium tracking-wider text-foreground">{client}</span>
              ))}
            </div>
          </motion.div>

          {/* Insurers Bar */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 1 }}
            className="mt-16"
          >
            <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Seguradoras Parceiras</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 opacity-40 text-sm md:text-base font-medium tracking-widest">
              {["BRADESCO", "PORTO SEGURO", "ALLIANZ", "ITAU", "AZUL", "SULAMERICA", "TOKIO MARINE", "CHUBB", "LIBERTY", "ZURICH", "FAIRFAX", "MAPFRE"].map((insurer, i) => (
                <span key={i} className="hover:text-primary transition-colors cursor-default">{insurer}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-8 md:px-16 border-t border-white/10 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} RA Poliseg Seguros. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}