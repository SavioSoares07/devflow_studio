import { CheckCircle2, XCircle, ArrowRight, ChevronDown, MessageSquare, ShieldCheck, Users, TrendingUp, Layout, Zap, Clock, BarChart3, Smartphone, MousePointer2, Check, X, Send, Globe, Server, Layers, Monitor, ArrowRightLeft, MousePointerClick, ShoppingCart, Repeat, Code2, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useState, ReactNode, useRef } from "react";

const CTAButton = ({ children, className = "" }: { children: ReactNode; className?: string }) => (
  <motion.button 
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`btn-primary ${className}`}
  >
    {children}
    <ArrowRight className="w-5 h-5" />
  </motion.button>
);

const Section = ({ children, className = "", id = "" }: { children: ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-16 px-4 md:py-24 ${className}`}>
    <div className="max-w-6xl mx-auto">
      {children}
    </div>
  </section>
);

const WhatsAppBubble = ({ text, isUser = false, delay = 0 }: { text: string; isUser?: boolean; delay?: number }) => (
  <motion.div
    initial={{ opacity: 0, x: isUser ? 20 : -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.4 }}
    className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}
  >
    <div className={`max-w-[80%] p-3 rounded-2xl text-sm font-medium shadow-lg ${
      isUser 
        ? 'bg-[#005c4b] text-white rounded-tr-none' 
        : 'bg-[#202c33] text-white rounded-tl-none'
    }`}>
      {text}
      <div className="text-[10px] text-gray-400 mt-1 text-right">
        {new Date().getHours()}:{new Date().getMinutes()}
      </div>
    </div>
  </motion.div>
);

export default function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    { q: "A automação funciona no meu WhatsApp pessoal?", a: "Sim, funciona tanto no WhatsApp pessoal quanto no Business. Não precisa de API oficial cara para começar." },
    { q: "Vou ser banido?", a: "Não. Utilizamos tecnologia que simula o comportamento humano, com pausas e digitação real, garantindo a segurança da sua conta." },
    { q: "A IA fala igual a um robô?", a: "Pelo contrário. Configuramos a IA com o seu tom de voz. Ela é empática, tira dúvidas e foca em levar o cliente para o fechamento." },
    { q: "Preciso deixar o computador ligado?", a: "Não. Tudo roda 100% na nuvem. Sua automação trabalha 24 horas por dia, mesmo se você estiver dormindo ou sem internet." },
    { q: "Serve para o meu tipo de negócio?", a: "Se você vende pelo WhatsApp, serve para você. Atendemos desde profissionais liberais até grandes empresas de serviços." }
  ];

  return (
    <div className="overflow-x-hidden bg-brand-dark text-white selection:bg-brand-green selection:text-black">
      {/* Top Bar */}
      <div className="bg-brand-green text-black py-2 text-center text-xs md:text-sm font-black uppercase tracking-tighter">
        ⚠️ PARE DE PERDER VENDAS POR DEMORA NO ATENDIMENTO.
      </div>

      {/* Hero Section */}
      <Section className="relative pt-10 md:pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-green/10 border border-brand-green/20 px-3 py-1 rounded-full mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              <span className="text-xs font-bold text-brand-green uppercase tracking-wider">Disponível para novos projetos</span>
            </div>
            
            <h1 className="text-4xl md:text-7xl font-display font-black leading-[1.1] mb-6">
              Seu WhatsApp é um <span className="text-brand-green">cemitério de leads?</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 font-medium leading-relaxed">
              Enquanto você demora 10 minutos para responder, seu cliente já chamou o concorrente. Nós criamos robôs que respondem em <span className="text-white font-bold">segundos</span>, qualificam o lead e vendem para você 24h por dia.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "Atendimento instantâneo (menos de 30 segundos)",
                "Filtro automático de curiosos",
                "Agendamento de reuniões sem você intervir",
                "Recuperação de vendas perdidas no automático"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-brand-green/20 p-1 rounded-full">
                    <Check className="w-4 h-4 text-brand-green" />
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <CTAButton className="w-full md:w-auto">AUTOMATIZAR MEU WHATSAPP</CTAButton>
            <p className="text-xs text-gray-500 mt-4 text-center md:text-left">Sem mensalidades abusivas. Sem robôs engessados.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-[#0b141a] rounded-[2rem] p-4 border-[10px] border-[#202c33] shadow-[0_0_50px_rgba(37,211,102,0.1)] overflow-hidden">
              <div className="bg-[#202c33] p-3 -mx-4 -mt-4 mb-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-black font-black">AI</div>
                <div>
                  <p className="text-sm font-bold">Assistente de Vendas</p>
                  <p className="text-[10px] text-brand-green">online</p>
                </div>
              </div>
              
              <div className="space-y-2 py-4">
                <WhatsAppBubble text="Olá! Vi seu anúncio e tenho interesse no serviço. Como funciona?" isUser={true} delay={0.5} />
                <WhatsAppBubble text="Olá! Que bom que você entrou em contato. 😊" delay={1.5} />
                <WhatsAppBubble text="Nós automatizamos seu atendimento para você não perder mais nenhuma venda por demora. Posso te fazer 2 perguntas rápidas para ver como podemos te ajudar?" delay={2.5} />
                <WhatsAppBubble text="Claro, pode sim!" isUser={true} delay={3.5} />
                <WhatsAppBubble text="Ótimo! Qual o volume médio de mensagens que você recebe por dia hoje?" delay={4.5} />
              </div>

              <div className="bg-[#202c33] p-3 -mx-4 -mb-4 mt-4 flex items-center gap-3">
                <div className="flex-1 bg-[#2a3942] rounded-full h-10 px-4 flex items-center text-gray-500 text-sm">
                  Digite uma mensagem...
                </div>
                <div className="bg-brand-green w-10 h-10 rounded-full flex items-center justify-center text-black">
                  <Send className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            {/* Floating Stats */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-white text-black p-4 rounded-2xl shadow-2xl z-20"
            >
              <p className="text-[10px] font-black text-gray-400 uppercase">Vendas Recuperadas</p>
              <p className="text-2xl font-black text-brand-green">+R$ 12.450,00</p>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Antes vs Depois */}
      <Section className="bg-brand-card/50">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-4">
            O custo de ser <span className="text-red-500 underline">lento</span>
          </h2>
          <p className="text-gray-400">A diferença entre quem escala e quem sobrevive.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-500/5 border border-red-500/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 text-red-500">
              <XCircle className="w-8 h-8" />
              <h3 className="text-2xl font-black uppercase">Sem Automação</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Leads esfriam esperando resposta",
                "Você vira escravo do celular 24h",
                "Esquece de fazer follow-up",
                "Perde vendas para o concorrente mais rápido",
                "Atendimento amador e desorganizado"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-400">
                  <X className="w-5 h-5 text-red-500 shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-brand-green/5 border border-brand-green/20 rounded-3xl p-8">
            <div className="flex items-center gap-3 mb-6 text-brand-green">
              <CheckCircle2 className="w-8 h-8" />
              <h3 className="text-2xl font-black uppercase">Com Nossa Automação</h3>
            </div>
            <ul className="space-y-4">
              {[
                "Resposta em menos de 10 segundos",
                "Seu celular trabalha para você",
                "Follow-up automático e persistente",
                "Vende enquanto você dorme ou viaja",
                "Atendimento profissional e padronizado"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-200">
                  <Check className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* O que você recebe */}
      <Section id="servicos">
        <div className="text-center mb-16">
          <p className="text-brand-green font-black uppercase tracking-widest mb-2">O que entregamos</p>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase">
            Sua estrutura de <span className="text-brand-green">vendas completa</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              t: "Automação WhatsApp", 
              d: "Configuramos fluxos inteligentes que respondem, tiram dúvidas e filtram curiosos sem você tocar no celular.",
              icon: <Smartphone className="w-8 h-8" />,
              cta: "Automatizar meu WhatsApp"
            },
            { 
              t: "Chatbots que Vendem", 
              d: "IAs treinadas com o seu script de vendas para quebrar objeções e fechar negócios 24 horas por dia.",
              icon: <Zap className="w-8 h-8" />,
              cta: "Quero vender 24h"
            },
            { 
              t: "Sites de Alta Conversão", 
              d: "Criamos landing pages rápidas e persuasivas feitas exclusivamente para transformar visitantes em clientes.",
              icon: <Layout className="w-8 h-8" />,
              cta: "Ter um site profissional"
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(37, 211, 102, 0.1)" }}
              className="card-dark flex flex-col h-full border-brand-green/10 hover:border-brand-green/40 transition-all group"
            >
              <div className="bg-brand-green/10 w-16 h-16 rounded-2xl flex items-center justify-center text-brand-green mb-6 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase">{service.t}</h3>
              <p className="text-gray-400 mb-8 flex-grow leading-relaxed">{service.d}</p>
              <button className="text-brand-green font-bold flex items-center gap-2 group/btn">
                {service.cta}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* NEW SECTION: Sites que Vendem */}
      <Section className="bg-brand-dark relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight mb-6 uppercase">
              SITES QUE NÃO SÃO APENAS BONITOS. SÃO <span className="text-brand-green">MÁQUINAS DE GERAR CLIENTES.</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Esqueça sites institucionais lentos que ninguém visita. Criamos landing pages de elite focadas em uma única coisa: <span className="text-white font-bold">converter visitantes em dinheiro no seu bolso.</span>
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "Velocidade extrema (< 2s)",
                "Copywriting persuasivo",
                "Foco total em Mobile",
                "SEO otimizado para Google",
                "Design Premium e Exclusivo",
                "Pixel de rastreio instalado"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-brand-green/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-brand-green" />
                  </div>
                  <span className="text-sm font-bold text-gray-300">{item}</span>
                </div>
              ))}
            </div>
            <CTAButton>QUERO UM SITE DE ELITE</CTAButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="card-dark p-2 border-brand-green/20 shadow-[0_0_50px_rgba(37,211,102,0.05)]">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800" 
                alt="High Conversion Website" 
                className="rounded-xl w-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -top-6 -left-6 bg-brand-green text-black px-6 py-3 rounded-xl font-black shadow-xl">
                98/100 SPEED SCORE
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* NEW SECTION: Sistemas e Aplicativos Sob Medida */}
      <Section className="bg-brand-card/20">
        <div className="text-center mb-16">
          <p className="text-brand-green font-black uppercase tracking-widest mb-2">Escalabilidade Sem Limites</p>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase">
            SISTEMAS E APPS <span className="text-brand-green">SOB MEDIDA</span>
          </h2>
          <p className="max-w-3xl mx-auto text-gray-400 text-lg mt-4">
            Se o seu negócio cresceu e as planilhas não dão mais conta, você precisa de uma solução robusta. Desenvolvemos softwares exclusivos que <span className="text-white font-bold">automatizam sua gestão e escalam sua operação.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { t: "CRM Personalizado", d: "Gestão de clientes focada no seu processo de vendas.", icon: <Users /> },
            { t: "Sistemas de Agendamento", d: "Automação total de horários e pagamentos.", icon: <Clock /> },
            { t: "Dashboards de Gestão", d: "Visualize seus números em tempo real para decidir melhor.", icon: <BarChart3 /> },
            { t: "Aplicativos Custom", d: "Sua ideia transformada em um app de alta performance.", icon: <Smartphone /> }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="card-dark border-white/5 hover:border-brand-green/30 transition-all group"
            >
              <div className="text-brand-green mb-4 group-hover:animate-pulse">
                {item.icon}
              </div>
              <h3 className="text-lg font-black mb-2 uppercase">{item.t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{item.d}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <CTAButton>SOLICITAR PROJETO CUSTOMIZADO</CTAButton>
        </div>
      </Section>

      {/* NEW SECTION: Ecossistema de Vendas Completo */}
      <Section className="relative overflow-hidden">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase">
            O ECOSSISTEMA QUE TRANSFORMA <br/> <span className="text-brand-green">ESTRANHOS EM CLIENTES FIÉIS</span>
          </h2>
        </div>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto">
          {/* Animated Background Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-brand-green/10 -translate-y-1/2 hidden md:block">
            <motion.div 
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-1/3 h-full bg-gradient-to-r from-transparent via-brand-green to-transparent"
            />
          </div>

          {[
            { t: "Tráfego Pago", icon: <TrendingUp />, d: "Atração de Leads" },
            { t: "Site de Elite", icon: <Globe />, d: "Conversão Inicial" },
            { t: "WhatsApp IA", icon: <MessageSquare />, d: "Atendimento 24h" },
            { t: "Fechamento", icon: <ShoppingCart />, d: "Dinheiro no Bolso" },
            { t: "Follow-up", icon: <Repeat />, d: "LTV e Recompra" }
          ].map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative z-10 flex flex-col items-center group"
            >
              <div className="w-20 h-20 rounded-full bg-brand-dark border-2 border-brand-green/30 flex items-center justify-center text-brand-green group-hover:border-brand-green group-hover:shadow-[0_0_20px_rgba(37,211,102,0.3)] transition-all duration-500 mb-4">
                {step.icon}
              </div>
              <h4 className="font-black uppercase text-sm mb-1">{step.t}</h4>
              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{step.d}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 card-dark max-w-3xl mx-auto text-center border-brand-green/20 bg-brand-green/5">
          <p className="text-lg font-medium leading-relaxed italic">
            "Não entregamos apenas um robô. Entregamos uma <span className="text-brand-green font-black">estratégia de guerra</span> que domina o seu mercado e não deixa nenhum lead escapar."
          </p>
        </div>
      </Section>

      {/* NEW SECTION: Depoimentos (Testimonials) */}
      <Section className="bg-brand-card/10">
        <div className="text-center mb-16">
          <p className="text-brand-green font-black uppercase tracking-widest mb-2">Resultados Reais</p>
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase">
            QUEM JÁ <span className="text-brand-green">ESCALOU COM A GENTE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              n: "Ricardo Santos", 
              r: "CEO da TechFlow", 
              t: "Minha equipe de vendas perdia 40% dos leads por demora. Com a automação, nossa taxa de conversão subiu para 85% no primeiro mês. Surreal!",
              img: "https://i.pravatar.cc/150?u=ricardo"
            },
            { 
              n: "Mariana Costa", 
              r: "Fundadora da GlowUp", 
              t: "O site que eles criaram é uma máquina. Recebo leads qualificados todos os dias sem precisar explicar tudo do zero. A IA faz o filtro perfeito.",
              img: "https://i.pravatar.cc/150?u=mariana"
            },
            { 
              n: "André Oliveira", 
              r: "Diretor da ImobiPlus", 
              t: "O sistema de agendamento sob medida economizou 20 horas semanais da minha secretária. Agora ela foca no que realmente importa.",
              img: "https://i.pravatar.cc/150?u=andre"
            }
          ].map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="card-dark border-white/5 relative"
            >
              <div className="flex items-center gap-4 mb-6">
                <img src={testimonial.img} alt={testimonial.n} className="w-12 h-12 rounded-full border-2 border-brand-green" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-black uppercase text-sm">{testimonial.n}</h4>
                  <p className="text-[10px] text-gray-500 font-bold uppercase">{testimonial.r}</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed italic">"{testimonial.t}"</p>
              <div className="absolute top-6 right-6 text-brand-green/20">
                <MessageSquare className="w-8 h-8" />
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* NEW SECTION: Formulário de Contato (Lead Capture) */}
      <Section id="contato" className="relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-green/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-display font-black leading-tight mb-6 uppercase">
              PRONTO PARA <span className="text-brand-green">DOMINAR SEU MERCADO?</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed">
              Preencha o formulário e receba um <span className="text-white font-bold">Diagnóstico Gratuito</span> da sua operação. Vamos mostrar exatamente onde você está perdendo dinheiro.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-brand-green" />
                <span className="font-bold">Análise completa do seu funil</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-brand-green" />
                <span className="font-bold">Plano de ação personalizado</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle2 className="w-6 h-6 text-brand-green" />
                <span className="font-bold">Demonstração da IA em tempo real</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="card-dark border-brand-green/20 bg-brand-card/80 backdrop-blur-xl p-8"
          >
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2">Seu Nome</label>
                <input type="text" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-green outline-none transition-all" placeholder="Ex: João Silva" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2">WhatsApp com DDD</label>
                <input type="tel" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-green outline-none transition-all" placeholder="Ex: (11) 99999-9999" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2">Seu Site (Opcional)</label>
                <input type="url" className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-green outline-none transition-all" placeholder="Ex: www.suaempresa.com.br" />
              </div>
              <div>
                <label className="block text-xs font-black uppercase text-gray-500 mb-2">Qual seu maior desafio hoje?</label>
                <select className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3 text-sm focus:border-brand-green outline-none transition-all appearance-none">
                  <option>Demora no atendimento</option>
                  <option>Muitos leads desqualificados</option>
                  <option>Falta de um site profissional</option>
                  <option>Processos manuais lentos</option>
                </select>
              </div>
              <button className="btn-primary w-full mt-4 py-4 text-lg">
                SOLICITAR DIAGNÓSTICO AGORA
              </button>
              <p className="text-[10px] text-center text-gray-500 mt-4">
                🔒 Seus dados estão seguros conosco. Não enviamos spam.
              </p>
            </form>
          </motion.div>
        </div>
      </Section>

      {/* Como Funciona */}
      <Section className="bg-brand-card/30">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black uppercase">
            Como funciona a <span className="text-brand-green">implementação</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-green/10 -translate-y-1/2 z-0"></div>
          
          {[
            { n: "01", t: "Diagnóstico", d: "Analisamos seu atendimento atual e onde você está perdendo dinheiro." },
            { n: "02", t: "Estratégia", d: "Desenhamos o fluxo de conversa ideal para o seu tipo de cliente." },
            { n: "03", t: "Setup", d: "Configuramos toda a automação e treinamos a IA com seu tom de voz." },
            { n: "04", t: "Escala", d: "Ativamos o sistema e você começa a receber leads qualificados." }
          ].map((step, i) => (
            <div key={i} className="relative z-10 text-center">
              <div className="bg-brand-dark border-2 border-brand-green w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-6 font-black text-brand-green">
                {step.n}
              </div>
              <h3 className="text-xl font-black mb-2 uppercase">{step.t}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Para quem é */}
      <Section>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-display font-black mb-8 uppercase">
              Para quem é <span className="text-brand-green">esta solução?</span>
            </h2>
            <div className="space-y-6">
              {[
                { t: "Prestadores de Serviço", d: "Advogados, médicos, estéticas e consultores que precisam agendar horários." },
                { t: "Infoprodutores", d: "Quem vende cursos e mentorias e precisa recuperar carrinhos abandonados." },
                { t: "Comércios Locais", d: "Restaurantes, lojas e delivery que recebem muitas dúvidas repetitivas." },
                { t: "Empresas B2B", d: "Negócios que precisam qualificar leads antes de passar para o comercial." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="bg-brand-green/10 p-2 rounded-lg h-fit">
                    <Check className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <h4 className="font-black uppercase text-lg">{item.t}</h4>
                    <p className="text-gray-500 text-sm">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-brand-card border border-white/5 rounded-[2rem] p-8">
            <h3 className="text-2xl font-black mb-6 uppercase text-center">Se você se identifica com isso:</h3>
            <div className="space-y-4">
              <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-red-200 text-sm italic">
                "Não aguento mais ficar respondendo a mesma coisa o dia todo no WhatsApp."
              </div>
              <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-red-200 text-sm italic">
                "Perco leads porque demoro para responder e eles chamam outro."
              </div>
              <div className="bg-red-500/10 p-4 rounded-xl border border-red-500/20 text-red-200 text-sm italic">
                "Meu comercial gasta tempo com gente que não tem dinheiro para comprar."
              </div>
            </div>
            <div className="mt-8">
              <CTAButton className="w-full">PARAR DE PERDER CLIENTES</CTAButton>
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ Section */}
      <Section id="faq" className="bg-brand-card/20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-black mb-6 uppercase">Dúvidas Comuns</h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, i) => (
            <div key={i} className="card-dark p-0 overflow-hidden border-white/5">
              <button 
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{item.q}</span>
                <ChevronDown className={`w-6 h-6 text-brand-green transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
              </button>
              <motion.div 
                initial={false}
                animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                className="overflow-hidden"
              >
                <div className="p-6 pt-0 text-gray-500 border-t border-white/5 mt-2 text-sm leading-relaxed">
                  {item.a}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <CTAButton>QUERO MAIS VENDAS</CTAButton>
        </div>
      </Section>

      {/* Final CTA */}
      <Section className="bg-brand-green text-black text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display font-black mb-6 uppercase leading-none">
            O próximo lead que você perder pode ser sua <span className="underline italic">maior venda</span> do ano.
          </h2>
          <p className="text-xl font-bold mb-10 opacity-80">
            Não deixe o dinheiro escorrer pelo ralo. Automatize agora e foque no que realmente importa: crescer seu negócio.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-black text-brand-green font-black py-6 px-12 rounded-full text-xl uppercase shadow-2xl flex items-center justify-center gap-3 mx-auto"
          >
            Automatizar meu WhatsApp agora
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/5 text-center text-gray-600 text-xs uppercase tracking-widest">
        <p>© {new Date().getFullYear()} ScaleUp Automation. Todos os direitos reservados.</p>
        <p className="mt-2 opacity-50">Focado em resultados reais. Sem promessas vazias.</p>
      </footer>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/5511999999999"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-brand-green text-black p-4 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.4)] flex items-center justify-center"
      >
        <MessageSquare className="w-8 h-8" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] font-black px-2 py-0.5 rounded-full animate-bounce">1</span>
      </motion.a>
    </div>
  );
}
