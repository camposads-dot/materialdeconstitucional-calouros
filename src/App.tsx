/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, 
  ArrowRight, 
  Star, 
  Users, 
  BookOpen, 
  Scale, 
  Zap, 
  ShieldCheck, 
  Award, 
  ChevronDown, 
  Instagram, 
  MessageCircle,
  Download,
  Lock,
} from 'lucide-react';

// --- Components ---

const GlassCard = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-amber-400/30 transition-all duration-500 shadow-2xl ${className}`}>
    {children}
  </div>
);

const GoldButton = ({ children, onClick, className = "", secondary = false }: { children: React.ReactNode, onClick?: () => void, className?: string, secondary?: boolean }) => (
  <motion.button
    whileHover={{ scale: 1.05, boxShadow: secondary ? "0 0 20px rgba(255,255,255,0.1)" : "0 0 30px rgba(251, 191, 36, 0.4)" }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
    className={`px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 transition-all cursor-pointer ${
      secondary 
        ? "bg-transparent border border-white/20 text-white hover:bg-white/5" 
        : "bg-gradient-to-r from-amber-400 to-amber-600 text-black shadow-lg shadow-amber-500/20"
    } ${className}`}
  >
    {children}
  </motion.button>
);

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="px-3 py-1 bg-amber-400/10 border border-amber-400/20 rounded-full text-amber-400 text-xs font-semibold uppercase tracking-wider flex items-center gap-1">
    {children}
  </span>
);

const CarouselInfinite = ({ images, speed = 30 }: { images: string[], speed?: number }) => {
  return (
    <div className="overflow-hidden relative w-full h-[300px] md:h-[400px] shrink-0">
      <motion.div 
        className="flex gap-4 absolute"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
        style={{ width: "fit-content" }}
      >
        {[...images, ...images].map((img, i) => (
          <div key={i} className="w-[200px] md:w-[300px] h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-2xl border border-white/10 shrink-0">
            <img src={img} alt="Preview" className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

  return isMobile;
};

const Section = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={className}>
    {children}
  </section>
);

// --- Sections ---

const Hero = () => {
  const isMobile = useIsMobile();

  return (
    <Section className="relative overflow-hidden pt-12 md:pt-24 pb-16">

      {/* BG */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/10 blur-[140px] rounded-full -z-10" />

      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* BADGE */}
        <div className="flex justify-center mb-6">

          <div className="
            inline-flex
            items-center
            justify-center
            px-4
            py-2
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            text-red-400
            text-[10px]
            sm:text-xs
            font-bold
            uppercase
            tracking-[0.18em]
            text-center
          ">
            +400 calouros começaram Direito com mais clareza
          </div>

        </div>

        {/* CONTEÚDO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >

          {/* HEADLINE */}
          <h1 className="
            text-[2.7rem]
            sm:text-[4.8rem]
            lg:text-[6rem]
            font-black
            leading-[0.92]
            tracking-[-0.05em]
            text-white
            max-w-[950px]
            mx-auto
          ">

            Aprenda os{" "}

            <span className="text-red-500">
              Primeiros 6
              <br />
              Meses
            </span>

            {" "}da Faculdade de Direito
            <br />

            em apenas{" "}

            <span className="text-red-500">
              7 Dias
            </span>

          </h1>

          {/* SUB */}
          <p className="
            text-zinc-400
            text-sm
            sm:text-xl
            leading-relaxed
            mt-6
            max-w-[760px]
            mx-auto
          ">
            Um método direto e sem juridiquês para quem quer começar
            o Direito com clareza, segurança e vantagem.
          </p>

          {/* MOCKUP */}
          <div className="mt-10 md:mt-14 relative">

            <div className="
              absolute
              inset-0
              bg-red-500/10
              blur-[120px]
              rounded-full
            " />

            <img
              src="/mockupebook1.png"
              alt="Mockup Ebook Direito"
              className="
                relative
                w-full
                max-w-[850px]
                mx-auto
                object-contain
                drop-shadow-[0_40px_80px_rgba(0,0,0,0.8)]
              "
            />

          </div>

          {/* CTA */}
          <div className="mt-10">

            <div className="
              max-w-[700px]
              mx-auto
              rounded-[28px]
              border
              border-zinc-800
              bg-zinc-900/80
              backdrop-blur-sm
              p-5
              md:p-7
            ">

              <div className="
                flex
                flex-col
                md:flex-row
                items-center
                justify-between
                gap-6
              ">

                {/* PREÇO */}
                <div className="text-center md:text-left">

                  <div className="
                    flex
                    items-center
                    gap-2
                    justify-center
                    md:justify-start
                  ">

                    <span className="text-zinc-500 line-through text-sm">
                      DE R$97,00
                    </span>

                    <span className="text-zinc-600 text-[10px] uppercase tracking-[0.2em]">
                      por apenas
                    </span>

                  </div>

                  <div className="
                    text-[2.4rem]
                    sm:text-6xl
                    font-black
                    text-red-500
                    leading-none
                    mt-2
                  ">
                    R$37,90
                  </div>

                  <p className="text-zinc-500 text-xs mt-2">
                    Pagamento único • Acesso imediato
                  </p>

                </div>

                {/* BOTÃO */}
                <GoldButton
                  className="
                    w-full
                    md:w-auto
                    md:min-w-[290px]
                    min-h-[68px]
                    text-base
                    sm:text-lg
                    font-black
                  "
                >
                  QUERO COMEÇAR DIREITO
                </GoldButton>

              </div>

            </div>

          </div>

          {/* PREVIEW */}
          <div className="mt-14 overflow-hidden">

            <p className="
              text-red-500
              text-[10px]
              sm:text-xs
              font-bold
              uppercase
              tracking-[0.22em]
              mb-5
            ">
              Veja algumas páginas do material
            </p>

            <motion.div
              className="flex gap-4 w-max"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: isMobile ? 18 : 35,
                repeat: Infinity,
                ease: 'linear',
              }}
            >

              {[
                "/associacaocodigo.jpg",
                "/espacodenotas.jpg",
                "/planodeestudo.jpg",
                "/simulado.jpg",
                "/sumariointerativo.jpg",

                "/associacaocodigo.jpg",
                "/espacodenotas.jpg",
                "/planodeestudo.jpg",
                "/simulado.jpg",
                "/sumariointerativo.jpg",
              ].map((img, i) => (

                <div
                  key={i}
                  className="
                    shrink-0
                    rounded-[20px]
                    overflow-hidden
                    border
                    border-zinc-800
                    bg-zinc-900
                  "
                >

                  <img
                    src={img}
                    alt=""
                    className="
                      w-[140px]
                      h-[200px]

                      sm:w-[210px]
                      sm:h-[300px]

                      object-cover
                      object-top
                    "
                  />

                </div>

              ))}

            </motion.div>

          </div>

        </motion.div>

      </div>

    </Section>
  );
};

const WhatYouWillLearn = () => (
  <section className="py-16 md:py-24 lg:py-32 px-6 bg-zinc-950/80">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">O que você vai aprender no material?</h2>
        <p className="text-lg text-zinc-400 mb-12 lg:mb-20 max-w-2xl mx-auto">Os principais conceitos que confundem calouros explicados de forma clara, lógica e simplificada.</p>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
        {[
          {
            title: "CIÊNCIAS POLÍTICAS E ESTADO",
            icon: <Users className="text-amber-400" />,
            desc: "Entenda como o Estado funciona, como o poder é dividido e como os sistemas políticos se organizam.",
            topics: ["Conceito de Estado", "Formas e Sistemas de Governo", "Divisão e Tripartição dos Poderes", "Funções típicas e atípicas", "Sistemas Eleitorais e Partidários"]
          },
          {
            title: "TEORIA DO ESTADO",
            icon: <Scale className="text-amber-400" />,
            desc: "Aprenda os fundamentos que explicam a estrutura política e jurídica das sociedades modernas.",
            topics: ["Formação do Estado", "Soberania", "Organização Política", "Elementos do Estado", "Estrutura do Poder", "Estado e Sociedade"]
          },
          {
            title: "DIREITO CONSTITUCIONAL I",
            icon: <ShieldCheck className="text-amber-400" />,
            desc: "Aprenda os princípios constitucionais mais importantes da faculdade sem linguagem complicada.",
            topics: ["Supremacia da Constituição", "Constitucionalismo e suas Fases", "Direitos e Garantias Fundamentais", "Poder Constituinte", "Controle de Constitucionalidade"]
          }
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <GlassCard className="h-full text-left group overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                {React.cloneElement(item.icon as React.ReactElement, { size: 64 })}
              </div>
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-amber-400/10 rounded-xl">{item.icon}</div>
                <h3 className="text-lg font-bold text-white tracking-widest uppercase">{item.title}</h3>
              </div>
              <p className="text-zinc-400 mb-8">{item.desc}</p>
              <ul className="space-y-3">
                {item.topics.map((topic, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-zinc-300">
                    <CheckCircle2 size={14} className="text-amber-400/50" /> {topic}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-2xl text-white font-medium italic mb-12"
      >
        “Enquanto muitos alunos passam meses tentando entender esses conceitos… você aprende tudo de forma organizada em poucos dias.”
      </motion.p>
      
      <div className="flex flex-wrap justify-center gap-4">
        <Badge>Explicação Simplificada</Badge>
        <Badge>Ideal para Calouros</Badge>
        <Badge>Linguagem Acessível</Badge>
        <Badge>Resumos Estratégicos</Badge>
        <Badge>Aprendizado Rápido</Badge>
      </div>
    </div>
  </section>
);

const Bonus = () => (
  <section className="py-16 md:py-24 lg:py-32 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">BÔNUS EXCLUSIVOS</h2>
        <p className="text-lg text-zinc-400 mb-12 lg:mb-20 max-w-2xl mx-auto">Materiais estratégicos para acelerar sua jornada acadêmica e facilitar seus estudos no Direito.</p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard className="text-left flex flex-col sm:flex-row gap-6 h-full items-center p-6 lg:p-8">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-amber-400/10 rounded-2xl flex items-center justify-center shrink-0">
              <Download size={40} className="text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">MAPAS MENTAIS PARA REVISÃO</h3>
              <p className="text-zinc-400 mb-4 text-sm lg:text-base">Mapas mentais prontos para revisar conteúdos rapidamente antes das provas e memorizar os principais conceitos.</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Revisão rápida</Badge>
                <Badge>Visual simplificado</Badge>
              </div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard className="text-left flex flex-col sm:flex-row gap-6 h-full items-center p-6 lg:p-8">
            <div className="w-24 h-24 lg:w-32 lg:h-32 bg-amber-400/10 rounded-2xl flex items-center justify-center shrink-0">
              <BookOpen size={40} className="text-amber-400" />
            </div>
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">HANS KELSEN SIMPLIFICADO</h3>
              <p className="text-zinc-400 mb-4 text-sm lg:text-base">A Teoria Pura do Direito explicada de forma acessível para compreender os fundamentos do Direito moderno.</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Base filosófica</Badge>
                <Badge>Conceitos chave</Badge>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>

      <p className="text-lg lg:text-xl text-zinc-400 italic mb-10">“Esses materiais foram adicionados para encurtar seu aprendizado e acelerar sua compreensão do Direito desde os primeiros períodos.”</p>
      
      <div className="flex justify-center flex-wrap gap-4 mb-16 lg:mb-20">
        <Badge>Incluso Hoje</Badge>
        <Badge>Acesso Imediato</Badge>
        <Badge>Material Complementar</Badge>
        <Badge>Revisão Inteligente</Badge>
      </div>

      <GoldButton onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="mx-auto w-full sm:w-auto">
        QUERO O MATERIAL COM TODOS OS BÔNUS
      </GoldButton>
    </div>
  </section>
);

const SocialProof = () => {
  const feedbacks = [
    "/feedback1.png",
    "/feedback2.png",
    "/feedback3.png",
    "/feedback4.png",
    "/feedback5.png",
    "/feedback6.png",
    "/feedback7.png"
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-zinc-950/50 overflow-hidden shrink-0">
      
      <div className="max-w-7xl mx-auto text-center mb-12 lg:mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
          O QUE OS CALOUROS ACHAM?
        </h2>

        <p className="text-zinc-400">
          Veja feedbacks reais de estudantes que começaram a entender o Direito de verdade.
        </p>
      </div>

      <div className="overflow-hidden relative">
        <motion.div
          className="flex gap-6 py-4"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ width: "fit-content" }}
        >
          {[...feedbacks, ...feedbacks].map((img, i) => (
            <div
              key={i}
              className="min-w-[260px] sm:min-w-[320px] md:min-w-[360px] 
              rounded-2xl overflow-hidden border border-white/10 
              bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(251,191,36,0.08)]"
            >
              <img
                src={img}
                alt={`Feedback ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
};

const TargetAudience = () => (
  <section className="py-16 md:py-24 lg:py-32 px-6">
    <div className="max-w-7xl mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 lg:mb-16">Para quem é esse material?</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {[
          { title: "Calouros de Direito", desc: "Para quem ainda está perdido nas primeiras aulas e quer entender a base rápido." },
          { title: "Estudantes do 2º período", desc: "Para quem quer reforçar a base e acompanhar melhor as matérias mais complexas." },
          { title: "Alunos em revisão", desc: "Para quem precisa revisar conteúdos fundamentais de forma rápida e eficiente." }
        ].map((item, i) => (
          <GlassCard key={i} className="text-center group">
            <div className="w-16 h-16 rounded-full bg-amber-400/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
              <Users className="text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
            <p className="text-zinc-400">{item.desc}</p>
          </GlassCard>
        ))}
      </div>
    </div>
  </section>
);

const VideoFeedbacks = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-zinc-950/70 relative overflow-hidden">
      
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">

        <div className="flex justify-center mb-6">
          <Badge>
            <ShieldCheck size={14} />
            Feedback Real
          </Badge>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          Feedback Real e{" "}
          <span className="text-amber-400">Alerta contra Golpes</span>
        </h2>

        <p className="text-lg text-zinc-400 mb-10">
          Assiste esse feedback e tire suas conclusões
        </p>

        {/* VIDEO */}
        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-md shadow-[0_0_40px_rgba(251,191,36,0.10)] aspect-[9/16] max-w-[320px] mx-auto">
          <iframe
            src="https://www.youtube.com/embed/HkFy9iBS5Gc?si=cIHtbZ7GlO96O9yc"
            title="Feedback real"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <p className="text-zinc-500 text-sm italic mt-8 max-w-md mx-auto">
          Esse é um relato real de aluno. Assista com atenção antes de decidir.
        </p>

      </div>
    </section>
  );
};

const Pricing = () => (
  <section id="pricing" className="py-16 md:py-24 lg:py-32 px-6 relative">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[200px] pointer-events-none" />
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12 lg:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Escolha seu acesso</h2>
        <p className="text-zinc-400">Invista agora e comece o Direito com clareza.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
        {/* Individual */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard className="h-full flex flex-col justify-between p-6 lg:p-10 relative overflow-hidden">
            <div>
              <h3 className="text-xl lg:text-2xl font-bold text-white mb-2 uppercase tracking-tighter">Material Individual</h3>
              <p className="text-zinc-400 mb-8 text-sm lg:text-base">Ciências Políticas + Estado + Constitucional I</p>
              
              <div className="mb-8 lg:mb-10">
                <span className="line-through text-zinc-500 block mb-1">De R$ 25,90</span>
                <span className="text-4xl lg:text-5xl font-bold text-white">R$ 12,90</span>
                <span className="text-zinc-400 text-sm ml-2">Pagamento único</span>
              </div>

              <ul className="space-y-3 lg:space-y-4 mb-10 lg:mb-12">
                {["Explicações simplificadas", "Linguagem acessível", "Exemplos práticos", "Leitura rápida", "Acesso imediato"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-zinc-300 text-sm lg:text-base">
                    <CheckCircle2 size={18} className="text-amber-400" /> {item}
                  </li>
                ))}
              </ul>
            </div>
            <GoldButton
  secondary
  className="w-full"
  onClick={() =>
    window.open("https://pay.cakto.com.br/bysbyw7_890868", "_blank")
  }
>
  COMPRAR MATERIAL INDIVIDUAL
</GoldButton>
          </GlassCard>
        </motion.div>

        {/* Combo */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div id="combo-offer" className="h-full bg-gradient-to-br from-zinc-900 via-amber-950/20 to-zinc-900 border-2 border-amber-400/50 rounded-3xl p-6 lg:p-10 flex flex-col justify-between shadow-[0_0_80px_rgba(251,191,36,0.15)] relative">
            <div>
              <div className="mb-6 inline-block">
                <Badge>MAIS ESCOLHIDO</Badge>
              </div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 uppercase tracking-tighter">COMBO COMPLETO 2026</h3>
              <p className="text-amber-400/80 mb-8 font-medium text-sm lg:text-base">12 disciplinas + 04 bônus exclusivos</p>
              
              <div className="mb-8 lg:mb-10">
                <span className="line-through text-zinc-500 block mb-1">De R$ 157,90</span>
                <span className="text-5xl lg:text-6xl font-bold text-white tracking-tighter">R$ 57,90</span>
                <span className="text-amber-400/60 text-xs sm:text-sm block mt-1 italic leading-tight">Comprar separado custaria mais de R$ 157,90.</span>
              </div>

              <div className="grid grid-cols-2 gap-y-2 lg:gap-y-3 gap-x-4 mb-10 lg:mb-12">
                {[
                  "Introdução ao Direito", "Ciências Políticas", "Constitucional I", "Filosofia", "Sociologia", "Antropologia", 
                  "Criminologia", "História do Direito", "Civil I", "Penal I", "Hermenêutica", "Teoria do Processo"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2 text-zinc-200 text-[10px] sm:text-xs lg:text-sm font-medium">
                    <div className="w-1 h-1 lg:w-1.5 lg:h-1.5 rounded-full bg-amber-400" /> {item}
                  </div>
                ))}
              </div>

              <div className="space-y-3 lg:space-y-4 pt-6 border-t border-white/10 mt-6 md:mt-0 lg:mt-6">
                {["Esquemas simplificados", "Plano de estudo", "Simulados", "Vitalício"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-white text-xs lg:text-sm font-bold">
                    <Award size={16} className="text-amber-400" /> {item}
                  </div>
                ))}
              </div>
            </div>
            <GoldButton
  className="w-full mt-10"
  onClick={() =>
    window.open("https://pay.cakto.com.br/33wuu35", "_blank")
  }
>
  GARANTIR COMBO COMPLETO
</GoldButton>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Objection = () => (
  <section className="py-16 md:py-24 lg:py-32 px-6 text-center bg-zinc-950/80">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-4xl font-bold text-white mb-12 lg:mb-16 underline decoration-amber-400/20">Ok… mas se é tão bom, por que está tão barato?</h2>
      <div className="grid md:grid-cols-2 gap-8 lg:gap-12 text-left mb-12 lg:mb-16">
        <div>
          <h3 className="text-amber-400 font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[10px]">01</span> Razão #1
          </h3>
          <p className="text-lg lg:text-xl text-white font-medium">“O objetivo é tornar o acesso possível para <span className="text-amber-400">qualquer</span> estudante de Direito.”</p>
        </div>
        <div>
          <h3 className="text-amber-400 font-bold mb-4 uppercase text-xs tracking-widest flex items-center gap-2">
            <span className="w-5 h-5 rounded-full bg-amber-400 text-black flex items-center justify-center text-[10px]">02</span> Razão #2
          </h3>
          <p className="text-lg lg:text-xl text-white font-medium">“O valor simbólico filtra curiosos e atrai quem realmente quer <span className="text-amber-400">aprender</span>.”</p>
        </div>
      </div>
      <p className="text-sm lg:text-base text-zinc-500 mb-8 lg:mb-10">Sem mensalidade. Sem pegadinhas. Sem letras miúdas.</p>
      <GoldButton
  secondary
  className="mx-auto w-full sm:w-auto"
  onClick={() =>
    document.getElementById("pricing")?.scrollIntoView({
      behavior: "smooth",
    })
  }
>
  OK! ME CONVENCEU
</GoldButton>
    </div>
  </section>
);

const DeliveryAndGuarantee = () => (
  <section className="py-16 md:py-24 lg:py-32 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <GlassCard>
          <div className="mb-6 bg-amber-400/10 w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center">
            <MessageCircle className="text-amber-400" />
          </div>
          <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Em quanto tempo recebo meu acesso?</h2>
          <p className="text-lg lg:text-xl text-zinc-400 mb-8">Logo após a aprovação do pagamento, você receberá imediatamente o acesso no e-mail utilizado na compra.</p>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-white font-medium">
              <Zap className="text-amber-400" size={18} /> Acesso imediato
            </div>
            <div className="flex items-center gap-3 text-white font-medium">
              <Download className="text-amber-400" size={18} /> Download rápido
            </div>
            <div className="flex items-center gap-3 text-white font-medium">
              <Lock className="text-amber-400" size={18} /> Acesso vitalício
            </div>
          </div>
        </GlassCard>

        <div className="text-center lg:text-left">
          <div className="mb-6 lg:mb-8 inline-block">
            <ShieldCheck size={64} className="text-amber-400 mx-auto lg:mx-0" />
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Garantia Incondicional de 7 Dias</h2>
          <p className="text-lg lg:text-xl text-zinc-400 mb-8">Teste o material por 7 dias completos. Se não sentir clareza, evolução e mais segurança nos estudos, devolvemos 100% do seu dinheiro.</p>
          <p className="text-xl lg:text-2xl text-amber-400 font-bold italic tracking-tight underline decoration-amber-400/30 font-serif">“Ou você aprende com método — ou devolvemos seu dinheiro.”</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ = () => {
  const questions = [
    { q: "Serve para qualquer faculdade?", a: "Sim! Os conteúdos de Ciências Políticas, Teoria do Estado e Constitucional I são universais e seguem a base curricular nacional exigida pelo MEC e OAB." },
    { q: "Como recebo o material?", a: "Imediatamente em seu e-mail após a confirmação do pagamento. O material é digital (PDF interativo) e você pode baixar em qualquer dispositivo." },
    { q: "Posso imprimir?", a: "Sim, o material é formatado para leitura digital e também para impressão em alta qualidade." },
    { q: "Funciona no celular?", a: "Sim, é totalmente responsivo e otimizado para leitura em tablets, smartphones e computadores." },
    { q: "O acesso é vitalício?", a: "Sim! Uma vez comprado, o material é seu para sempre, incluindo as atualizações de 2026." }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 lg:mb-16">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {questions.map((item, i) => (
            <motion.details key={i} className="group text-left">
              <summary className="cursor-pointer list-none flex items-center justify-between p-4 lg:p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-amber-400 transition-colors">
                <span className="text-base lg:text-lg font-bold text-white">{item.q}</span>
                <ChevronDown className="text-zinc-500 group-open:rotate-180 transition-transform" />
              </summary>
              <div className="p-4 lg:p-6 text-sm lg:text-base text-zinc-400 leading-relaxed bg-white/2 rounded-b-2xl animate-in fade-in slide-in-from-top-1">
                {item.a}
              </div>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  );
};

const Bio = () => (
  <section className="py-16 md:py-24 lg:py-32 px-6 bg-zinc-950/80">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 text-center lg:text-left">
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-amber-400/20 blur-3xl rounded-full" />
        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-amber-400/20 relative shadow-2xl mx-auto">
          <img src="/perfil.png" alt="Natan Campos" className="w-full h-full object-cover" />
        </div>
      </div>
      <div className="flex-1">
        <span className="text-amber-400 font-bold tracking-widest uppercase text-xs lg:text-sm mb-2 block">QUEM TE AJUDARÁ</span>
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 uppercase flex items-center justify-center lg:justify-start gap-2">OPA! MUITO PRAZER 👋</h2>
        <p className="text-lg lg:text-xl text-zinc-300 leading-relaxed mb-6">
          Me chamo <span className="font-bold text-white">Natan Campos</span>. Atualmente no 7º período de Direito, já ajudei mais de 400 calouros a dominarem a base do curso sem linguagem complicada.
        </p>
        <p className="text-sm lg:text-base text-zinc-400 mb-8 italic">
          “Minha missão é economizar seu tempo e simplificar o aprendizado jurídico para que você não precise passar meses perdido tentando entender matérias complexas.”
        </p>
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
          <Badge>Método Validado</Badge>
          <Badge>+400 Alunos</Badge>
          <Badge>Didática Simplificada</Badge>
        </div>
        <a href="#" className="flex items-center justify-center lg:justify-start gap-2 text-white hover:text-amber-400 transition-colors">
          <Instagram size={20} /> <span className="font-bold">@nataneodireito</span>
        </a>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 md:py-32 lg:py-40 px-6 text-center relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-400/[0.03] to-amber-400/[0.07]" />
    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative z-10 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 tracking-tighter leading-tight">Comece o Direito entendendo a base que <span className="text-amber-400">realmente importa.</span></h2>
      <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-10 lg:mb-12">Pare de se sentir perdido nas aulas.</p>
      <GoldButton onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })} className="mx-auto w-full sm:w-auto !text-base sm:!text-xl !px-8 sm:!px-12 !py-4 sm:!py-6 shadow-[0_0_50px_rgba(251,191,36,0.3)]">
        QUERO COMEÇAR AGORA
      </GoldButton>
    </motion.div>
  </section>
);

// --- Main App ---

export default function App() {
  return (
    <div className="bg-black text-zinc-300 font-sans selection:bg-amber-400 selection:text-black scroll-smooth overflow-x-hidden relative w-full">
      <main className="overflow-x-hidden">
        <Hero />
        <WhatYouWillLearn />
        <Bonus />
        <SocialProof />
        <VideoFeedbacks />
        <TargetAudience />
        
        {/* Horizontal Scroll Material Preview */}
        <section className="py-16 md:py-24 lg:py-32 px-6 overflow-hidden">
          <div className="text-center max-w-7xl mx-auto mb-12 lg:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">Veja por dentro</h2>
          </div>
          <CarouselInfinite images={[
  "/material1.jpg",
  "/material2.jpg",
  "/material3.jpg",
  "/material4.jpg",
  "/material5.jpg",
  "/material6.jpg"
]} />
        </section>
        <VideoFeedbacks />
        <Pricing />
        <Objection />
        <DeliveryAndGuarantee />
        <FAQ />
        <Bio />
        <FinalCTA />
      </main>

      <footer className="py-20 px-6 border-t border-white/5 text-center">
        <p className="text-sm font-medium text-zinc-500 uppercase tracking-widest">© 2026 NATAN E O DIREITO</p>
      </footer>
    </div>
  );
}

