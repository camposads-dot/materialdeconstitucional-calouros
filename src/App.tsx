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
} from "lucide-react";

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
  sm:text-[4.6rem]
  lg:text-[5.3rem]
  xl:text-[5.8rem]
  font-black
  leading-[0.9]
  tracking-[-0.05em]
  text-white
  max-w-[1100px]
  mx-auto
">

  Aprenda os{" "}

  <span className="text-red-500">
    Primeiros 6 Meses 
  </span>

  <br className="hidden lg:block" />

  da Faculdade de Direito

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
  onClick={() =>
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth'
    })
  }
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
                "/amostra1.png",
                "/amostra2.png",
                "/amostra3.png",
                "/amostra4.png",
                "/amostra5.png",
                "/amostra6.png",
                "/amostra7.png",

                "/amostra1.png",
                "/amostra2.png",
                "/amostra3.png",
                "/amostra4.png",
                "/amostra5.png",
                "/amostra6.png",
                "/amostra7.png",
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
    scale-110
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
  <section className="py-16 md:py-24 px-4 sm:px-6 bg-black overflow-hidden">

    <div className="max-w-6xl mx-auto">

      {/* TOPO */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
      >

        <div className="flex justify-center mb-5">
          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            text-red-400
            text-[11px]
            font-bold
            uppercase
            tracking-[0.2em]
          ">
            conteúdo do material
          </div>
        </div>

        <h2 className="
          text-3xl
          md:text-5xl
          font-black
          text-white
          leading-[0.95]
          tracking-tight
          mb-6
        ">
          Aprenda em{" "}
          <span className="text-red-500">
            7 dias
          </span>{" "}
          o que muitos levam{" "}
          <span className="text-red-500">
            meses
          </span>{" "}
          para entender
        </h2>

        <p className="
          text-zinc-400
          text-base
          md:text-lg
          leading-relaxed
        ">
          Um método visual, direto e sem juridiquês
          para quem quer começar o Direito com clareza,
          confiança e vantagem.
        </p>

      </motion.div>

      {/* BLOCO VIDEO */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-14 md:mb-20"
      >

        <div className="
          grid
          lg:grid-cols-2
          gap-8
          items-center
          rounded-[32px]
          border
          border-zinc-800
          bg-zinc-900/50
          overflow-hidden
        ">

          {/* TEXTO */}
          <div className="p-6 md:p-10 text-center lg:text-left">

            <p className="
              text-red-500
              text-xs
              font-bold
              uppercase
              tracking-[0.25em]
              mb-4
            ">
              apresentação rápida
            </p>

            <h3 className="
              text-3xl
              md:text-5xl
              font-black
              text-white
              leading-[0.95]
              tracking-tight
              mb-5
            ">
              Veja como o{" "}
              <span className="text-red-500">
                material funciona
              </span>
            </h3>

            <p className="
              text-zinc-400
              leading-relaxed
              text-base
              md:text-lg
              mb-5
            ">
              A proposta é simples: aprender os
              fundamentos dos primeiros meses
              da faculdade de Direito de forma
              organizada, visual e fácil de entender.
            </p>

            <p className="
              text-zinc-500
              text-sm
              md:text-base
              leading-relaxed
            ">
              Sem linguagem complicada.
              Sem perder meses tentando entender sozinho.
            </p>

          </div>

          {/* VIDEO */}
<div className="relative w-full flex justify-center p-4 md:p-6 lg:p-0">

  <div className="
    relative
    w-full
    max-w-[320px]
    sm:max-w-[360px]
    lg:max-w-[380px]
  ">

    {/* GLOW */}
    <div className="
      absolute
      inset-0
      bg-red-500/20
      blur-[80px]
      rounded-full
    " />

    {/* FRAME */}
    <div className="
      relative
      overflow-hidden
      rounded-[32px]
      border
      border-zinc-800
      bg-black
      shadow-2xl
    ">

      {/* SHORTS */}
      <div className="relative aspect-[9/16] w-full">

        <iframe
          className="absolute inset-0 w-full h-full"
          src="https://www.youtube.com/embed/F72dhM-COD8?si=EdMcQgCV2tPZpMul"
          title="Apresentação do material"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />

      </div>

    </div>

  </div>

  </div>

  </div>

      </motion.div>

    

      {/* MATÉRIAS */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>

  <div className="
    rounded-[32px]
    border
    border-zinc-800
    bg-zinc-900/40
    p-6
    md:p-10
  ">

    <div className="text-center mb-10">

      <p className="
        text-red-500
        text-xs
        font-bold
        uppercase
        tracking-[0.2em]
        mb-3
      ">
        disciplinas incluídas
      </p>

      <h3 className="
        text-2xl
        md:text-4xl
        font-black
        text-white
        leading-tight
      ">
        Os principais conteúdos
        do início da faculdade
      </h3>

    </div>

    <div className="
      grid
      sm:grid-cols-2
      lg:grid-cols-3
      gap-4
    ">

      {[
        "Introdução ao Estudo do Direito",
        "Antropologia, Sociologia e Direito",
        "Filosofia e História do Direito",
        "Ciência Política, Estado e Constituição",
        "Criminologia",
        "Noções de Direito Civil",
        "Noções de Direito Penal",
        "Carreiras Jurídicas",
      ].map((item, i) => {
        return (

          <div
            key={i}
            className="
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-zinc-800
              bg-black/40
              px-4
              py-4
            "
          >

            <div className="
              w-2.5
              h-2.5
              rounded-full
              bg-red-500
              shrink-0
            " />

            <p className="
              text-sm
              md:text-base
              text-zinc-200
              leading-snug
              font-medium
            ">
              {item}
            </p>

          </div>

        );
      })}

    </div>

  </div>

</motion.div>

    </div>

  </section>
);

const Bonuses = () => {
  const bonuses = [
    {
      title: "Teoria Pura do Direito",
      desc: "Aprenda os fundamentos do pensamento jurídico moderno de forma simplificada.",
      tag: "Bônus Exclusivo",
      images: [
        "/bonuskelsen1.jpg",
        "/bonuskelsen2.jpg",
        "/bonuskelsen3.jpg",
        "/bonuskelsen4.jpg",
      ]
    },

    {
      title: "Fatores de Mudança no Direito",
      desc: "Entenda como a sociedade influencia as transformações das leis e do sistema jurídico.",
      tag: "Bônus Exclusivo",
      images: [
        "/bonusmudancas1.jpg",
        "/bonusmudancas2.jpg",
        "/bonusmudancas3.jpg",
        "/bonusmudancas4.jpg",
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-black overflow-hidden">

      <div className="max-w-6xl mx-auto">

        {/* TOPO */}
        <div className="text-center mb-12 md:mb-16">

          <div className="flex justify-center mb-5">
            <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              text-red-400
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
            ">
              bônus exclusivos
            </div>
          </div>

          <h2 className="
            text-3xl
            md:text-5xl
            font-black
            text-white
            leading-[0.95]
            tracking-tight
            mb-5
          ">
            Receba materiais extras
            para acelerar sua{" "}
            <span className="text-red-500">
              evolução no Direito
            </span>
          </h2>

          <p className="
            text-zinc-400
            text-base
            md:text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
          ">
            Conteúdos complementares para aprofundar
            sua visão jurídica desde os primeiros períodos.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">

          {bonuses.map((b, i) => (

            <div
              key={i}
              className="
                relative
                overflow-hidden
                rounded-[32px]
                border
                border-zinc-800
                bg-zinc-900/50
                backdrop-blur-sm
                p-5
                md:p-6
                group
                transition-all
                duration-300
                hover:border-red-500/30
              "
            >

              {/* GLOW */}
              <div className="
                absolute
                inset-0
                bg-gradient-to-b
                from-red-500/5
                to-transparent
                opacity-0
                group-hover:opacity-100
                transition-opacity
              " />

              {/* TAG */}
              <div className="
                inline-flex
                items-center
                px-3
                py-1.5
                rounded-full
                border
                border-red-500/20
                bg-red-500/10
                text-red-400
                text-[10px]
                font-bold
                uppercase
                tracking-[0.18em]
                mb-5
              ">
                {b.tag}
              </div>

              {/* TITULO */}
              <h3 className="
                text-2xl
                md:text-3xl
                font-black
                text-white
                leading-tight
                mb-4
                group-hover:text-red-500
                transition-colors
              ">
                {b.title}
              </h3>

              {/* DESC */}
              <p className="
                text-zinc-400
                leading-relaxed
                text-sm
                md:text-base
                mb-6
              ">
                {b.desc}
              </p>

              {/* CARROSSEL */}
              <div className="overflow-hidden rounded-3xl">

                <motion.div
                  className="flex gap-3 w-max"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{
                    duration: 24,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >

                  {[...b.images, ...b.images].map((img, index) => (

                    <div
                      key={index}
                      className="
                        shrink-0
                        w-[110px]
                        sm:w-[130px]
                        md:w-[150px]
                      "
                    >

                      <div className="
                        rounded-[22px]
                        overflow-hidden
                        border
                        border-zinc-800
                        bg-black
                        aspect-[3/4]
                      ">

                        <img
                          src={img}
                          alt=""
                          className="
                            w-full
                            h-full
                            object-cover
                            object-top
                          "
                        />

                      </div>

                    </div>

                  ))}

                </motion.div>

              </div>

            </div>

          ))}

        </div>

        {/* CTA */}
        <div className="text-center">

          <GoldButton
  className="
    w-full
    sm:w-auto
    min-h-[68px]
    text-base
    md:text-lg
    font-black
  "
  onClick={() =>
    document.getElementById('pricing')?.scrollIntoView({
      behavior: 'smooth'
    })
  }
>
  QUERO O MATERIAL COM TODOS OS BÔNUS
</GoldButton>

        </div>

      </div>

    </section>
  );
};

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

  <div className="flex justify-center mb-5">
    <div className="
      inline-flex
      items-center
      gap-2
      px-4
      py-2
      rounded-full
      border
      border-red-500/20
      bg-red-500/10
      text-red-400
      text-[11px]
      font-bold
      uppercase
      tracking-[0.2em]
    ">
      feedbacks reais
    </div>
  </div>

  <h2 className="
    text-3xl
    md:text-5xl
    font-black
    text-white
    leading-[0.95]
    tracking-tight
    mb-5
  ">
    O que os{" "}
    <span className="text-red-500">
      calouros
    </span>{" "}
    estão achando?
  </h2>

  <p className="
    text-zinc-400
    text-base
    md:text-lg
    leading-relaxed
    max-w-2xl
    mx-auto
  ">
    Veja feedbacks reais de estudantes
    que começaram a entender o Direito
    com mais clareza e confiança.
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
  <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 bg-black">
    
    <div className="max-w-6xl mx-auto text-center">

      <div className="mb-12 md:mb-16">

        <div className="flex justify-center mb-5">
          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            text-red-400
            text-[11px]
            font-bold
            uppercase
            tracking-[0.2em]
          ">
            para quem é esse material
          </div>
        </div>

        <h2 className="
          text-3xl
          md:text-5xl
          font-black
          text-white
          leading-[0.95]
          tracking-tight
        ">
          Feito para quem quer começar
          o Direito com{" "}
          <span className="text-red-500">
            clareza
          </span>
        </h2>

      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">

        {[
          {
            title: "Calouros de Direito",
            desc: "Para quem ainda está perdido nas primeiras aulas e quer entender a base rapidamente."
          },

          {
            title: "Estudantes do 2º período",
            desc: "Para quem deseja reforçar os fundamentos e acompanhar melhor as próximas matérias."
          },

          {
            title: "Alunos em revisão",
            desc: "Para quem quer revisar os conteúdos essenciais de forma prática e organizada."
          }

        ].map((item, i) => (

          <div
            key={i}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-zinc-800
              bg-zinc-900/50
              backdrop-blur-sm
              p-6
              md:p-8
              text-center
              group
              transition-all
              duration-300
              hover:border-red-500/30
              hover:bg-zinc-900/70
            "
          >

            {/* GLOW */}
            <div className="
              absolute
              inset-0
              bg-gradient-to-b
              from-red-500/5
              to-transparent
              opacity-0
              group-hover:opacity-100
              transition-opacity
            " />

            {/* ICON */}
            <div className="
              relative
              w-16
              h-16
              rounded-full
              bg-red-500/10
              border
              border-red-500/20
              flex
              items-center
              justify-center
              mx-auto
              mb-6
              group-hover:scale-110
              transition-transform
            ">

              <Users className="text-red-500" size={28} />

            </div>

            <h3 className="
              text-xl
              md:text-2xl
              font-black
              text-white
              mb-4
              leading-tight
            ">
              {item.title}
            </h3>

            <p className="
              text-zinc-400
              leading-relaxed
              text-sm
              md:text-base
            ">
              {item.desc}
            </p>

          </div>

        ))}

      </div>

    </div>

  </section>
);

const VideoFeedbacks = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden">

      {/* GLOW */}
      <div className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        bg-red-500/10
        blur-[120px]
        rounded-full
        pointer-events-none
      " />

      <div className="max-w-4xl mx-auto relative z-10 text-center">

        {/* BADGE */}
        <div className="flex justify-center mb-5">

          <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-red-500/20
            bg-red-500/10
            text-red-400
            text-[11px]
            font-bold
            uppercase
            tracking-[0.2em]
          ">

            <ShieldCheck size={14} />

            feedback real

          </div>

        </div>

        {/* TITULO */}
        <h2 className="
          text-3xl
          md:text-5xl
          font-black
          text-white
          leading-[0.95]
          tracking-tight
          mb-5
        ">
          Feedback real e{" "}
          <span className="text-red-500">
            alerta contra golpes
          </span>
        </h2>

        {/* TEXTO */}
        <p className="
          text-zinc-400
          text-base
          md:text-lg
          leading-relaxed
          max-w-2xl
          mx-auto
          mb-10
        ">
          Assista esse feedback e veja por que
          tantos estudantes estão confiando
          nesse material.
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
  <section id="pricing" className="py-16 md:py-24 lg:py-32 px-6 relative bg-black overflow-hidden">

    {/* glow sutil */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-red-500/10 rounded-full blur-[200px] pointer-events-none" />

    <div className="max-w-6xl mx-auto relative z-10">

      {/* HEADER */}
      <div className="text-center mb-12 lg:mb-20">
        <span className="text-red-400 text-xs uppercase tracking-[0.3em] font-bold">
          ESCOLHA SEU ACESSO
        </span>

        <h2 className="text-3xl md:text-5xl font-black text-white mt-4 mb-4">
          Comece simples ou vá direto ao <span className="text-red-500">nível completo</span>
        </h2>

        <p className="text-zinc-400">
          Um único investimento para finalmente entender Direito.
        </p>
      </div>

      {/* GRID */}
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">

        {/* E-BOOK INDIVIDUAL */}
<div className="h-full flex flex-col justify-between p-6 lg:p-10 rounded-3xl bg-zinc-950 border border-zinc-800">

  <div>

    <h3 className="text-xl lg:text-2xl font-bold text-white uppercase tracking-tight">
      E-Book 1 — Semestre Inicial
    </h3>

    <p className="text-zinc-500 text-sm mt-2 mb-6">
      A base essencial para começar o Direito sem confusão
    </p>

    {/* PREÇO */}
    <div className="mb-8 p-5 rounded-2xl bg-zinc-900 border border-zinc-800">
      <p className="text-zinc-500 line-through text-sm">
        de R$ 97,90
      </p>

      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-red-400 text-sm font-bold">por R$</span>
        <span className="text-5xl font-black text-white">37,90</span>
      </div>

      <p className="text-zinc-500 text-xs mt-2">
        Acesso imediato • Pagamento único
      </p>
    </div>

    {/* DISCIPLINAS */}
    <ul className="space-y-3 mb-10">
      {[
        "Introdução ao Direito",
        "Ciências Políticas, Estado e Constituição",
        "Antropologia, Sociologia e Direito",
        "História do Direito",
        "Filosofia",
        "Criminologia"
      ].map((item, i) => (
        <li key={i} className="flex items-center gap-3 text-zinc-400 text-sm">
          <CheckCircle2 size={16} className="text-red-500" />
          {item}
        </li>
      ))}
    </ul>

  </div>

  <GoldButton
    secondary
    className="w-full"
    onClick={() =>
      window.open("https://pay.cakto.com.br/mecgdur", "_blank")
    }
  >
    QUERO O E-BOOK
  </GoldButton>

</div>

        {/* ===================== COMBO ===================== */}
<div className="h-full flex flex-col justify-between p-6 lg:p-10 rounded-3xl bg-zinc-950 border-2 border-red-500/40 relative overflow-hidden shadow-[0_0_60px_rgba(239,68,68,0.12)]">

  {/* BADGE */}
  <div className="absolute top-0 right-0 bg-red-500 text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest rounded-bl-xl">
    MAIS COMPLETO
  </div>

  <div>

    {/* TÍTULO */}
    <h3 className="text-2xl lg:text-3xl font-black text-white uppercase">
      Combo Completo 2026
    </h3>

    <p className="text-zinc-500 text-sm mt-2 mb-6">
      Tudo que você precisa para o primeiro ano de Direito
    </p>

    {/* MOCKUP (EXCLUSIVO DO COMBO) */}
    <div className="mb-8 rounded-2xl bg-zinc-900 border border-zinc-800 p-4">
      <img
        src="/mockupof.png"
        alt="Combo Direito"
        className="w-full rounded-xl"
      />
    </div>

    {/* PREÇO */}
    <div className="mb-8 p-5 rounded-2xl bg-red-500/10 border border-red-500/20">

      <p className="text-zinc-400 line-through text-sm">
        de R$ 157,90
      </p>

      <div className="flex items-baseline gap-2 mt-1">
        <span className="text-red-400 text-sm font-bold">por R$</span>
        <span className="text-5xl font-black text-white">57,90</span>
      </div>

      <p className="text-red-400/70 text-xs mt-2 font-medium">
        Melhor escolha para quem quer evoluir rápido no Direito
      </p>

    </div>

    {/* DISCIPLINAS */}
    <div className="grid grid-cols-2 gap-2 mb-10">

      {[
        "Introdução ao Direito",
        "Ciências Políticas, Estado e Constituição",
        "Antropologia, Sociologia e Direito",
        "História do Direito",
        "Filosofia",
        "Criminologia",
        "Direito Constitucional I",
        "Direito Civil I",
        "Direito Penal I",
        "Teoria Geral do Processo",
        "Hermenêutica Jurídica",
        "Plano de Estudo"
      ].map((item, i) => (
        <div key={i} className="flex items-center gap-2 text-zinc-300 text-xs">
          <div className="w-1.5 h-1.5 bg-red-500 rounded-full" />
          {item}
        </div>
      ))}

    </div>

    {/* RECURSOS DO COMBO */}
    <div className="space-y-3 lg:space-y-4 pt-6 border-t border-zinc-800 mt-6">

      {[
        "Esquemas simplificados",
        "Exemplos práticos",
        "Associação com o Código",
        "Espaço para anotações",
        "Plano de estudo incluso",
        "Simulado por disciplina"
      ].map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 text-zinc-200 text-xs lg:text-sm font-semibold"
        >
          <Award size={16} className="text-red-500" />
          {item}
        </div>
      ))}

    </div>

    {/* UPSSELL NATURAL */}
    <div className="mt-8 p-4 rounded-2xl bg-zinc-900 border border-zinc-800">

      <p className="text-red-400 text-xs uppercase tracking-widest font-bold mb-2">
        Recomendado
      </p>

      <p className="text-zinc-300 text-sm leading-relaxed">
        Se você quer evitar meses perdido tentando entender o básico sozinho,
        o combo já te entrega tudo estruturado do zero ao avançado.
      </p>

    </div>

  </div>

  {/* CTA */}
  <GoldButton
    className="w-full mt-8"
    onClick={() =>
      window.open("https://pay.cakto.com.br/33wuu35", "_blank")
    }
  >
    GARANTIR COMBO COMPLETO
  </GoldButton>

</div>

      </div>
    </div>
  </section>
);

const Objection = () => (
  <section className="py-16 md:py-24 lg:py-32 px-6 text-center bg-black overflow-hidden relative">

    {/* GLOW */}
    <div className="
      absolute
      top-0
      left-1/2
      -translate-x-1/2
      w-[500px]
      h-[500px]
      bg-red-500/10
      blur-[120px]
      rounded-full
      pointer-events-none
    " />

    <div className="max-w-5xl mx-auto relative z-10">

      {/* BADGE */}
      <div className="flex justify-center mb-5">

        <div className="
          inline-flex
          items-center
          gap-2
          px-4
          py-2
          rounded-full
          border
          border-red-500/20
          bg-red-500/10
          text-red-400
          text-[11px]
          font-bold
          uppercase
          tracking-[0.2em]
        ">
          dúvida comum
        </div>

      </div>

      {/* TITULO */}
      <h2 className="
        text-3xl
        md:text-5xl
        font-black
        text-white
        leading-[0.95]
        tracking-tight
        mb-14
        max-w-4xl
        mx-auto
      ">
        “Ok… mas se esse material é tão bom,
        por que ele está{" "}
        <span className="text-red-500">
          tão barato?
        </span>
        ”
      </h2>

      {/* CARDS */}
      <div className="
        grid
        md:grid-cols-2
        gap-6
        lg:gap-8
        text-left
        mb-12
      ">

        {/* CARD 1 */}
        <div className="
          rounded-[28px]
          border
          border-zinc-800
          bg-zinc-900/50
          backdrop-blur-sm
          p-6
          md:p-8
        ">

          <div className="
            flex
            items-center
            gap-3
            mb-5
          ">

            <div className="
              w-8
              h-8
              rounded-full
              bg-red-500
              text-white
              flex
              items-center
              justify-center
              text-xs
              font-black
            ">
              01
            </div>

            <p className="
              text-red-400
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
            ">
              razão #1
            </p>

          </div>

          <p className="
            text-lg
            md:text-2xl
            text-white
            font-semibold
            leading-relaxed
          ">
            O objetivo é tornar o acesso possível
            para{" "}
            <span className="text-red-500">
              qualquer estudante
            </span>{" "}
            de Direito.
          </p>

        </div>

        {/* CARD 2 */}
        <div className="
          rounded-[28px]
          border
          border-zinc-800
          bg-zinc-900/50
          backdrop-blur-sm
          p-6
          md:p-8
        ">

          <div className="
            flex
            items-center
            gap-3
            mb-5
          ">

            <div className="
              w-8
              h-8
              rounded-full
              bg-red-500
              text-white
              flex
              items-center
              justify-center
              text-xs
              font-black
            ">
              02
            </div>

            <p className="
              text-red-400
              text-xs
              font-bold
              uppercase
              tracking-[0.2em]
            ">
              razão #2
            </p>

          </div>

          <p className="
            text-lg
            md:text-2xl
            text-white
            font-semibold
            leading-relaxed
          ">
            O valor simbólico ajuda a separar
            curiosos de quem realmente quer{" "}
            <span className="text-red-500">
              aprender Direito
            </span>.
          </p>

        </div>

      </div>

      {/* TEXTO */}
      <p className="
        text-zinc-500
        text-sm
        md:text-base
        mb-10
      ">
        Sem mensalidade. Sem pegadinhas.
        Sem letras miúdas.
      </p>

      {/* BOTAO */}
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
  <section className="py-16 md:py-24 lg:py-32 px-6 bg-black relative overflow-hidden">

    {/* GLOW */}
    <div className="
      absolute
      bottom-0
      left-1/2
      -translate-x-1/2
      w-[500px]
      h-[500px]
      bg-red-500/10
      blur-[120px]
      rounded-full
      pointer-events-none
    " />

    <div className="max-w-7xl mx-auto relative z-10">

      <div className="
        grid
        lg:grid-cols-2
        gap-8
        lg:gap-12
        items-stretch
      ">

        {/* ENTREGA */}
        <div className="
          rounded-[32px]
          border
          border-zinc-800
          bg-zinc-900/50
          backdrop-blur-sm
          p-7
          md:p-10
        ">

          <div className="
            w-16
            h-16
            rounded-full
            bg-red-500/10
            border
            border-red-500/20
            flex
            items-center
            justify-center
            mb-7
          ">
            <MessageCircle
              className="text-red-500"
              size={28}
            />
          </div>

          <h2 className="
            text-3xl
            md:text-4xl
            font-black
            text-white
            leading-tight
            tracking-tight
            mb-5
          ">
            Em quanto tempo
            recebo meu acesso?
          </h2>

          <p className="
            text-zinc-400
            text-base
            md:text-lg
            leading-relaxed
            mb-8
          ">
            Assim que o pagamento for aprovado,
            você recebe acesso imediato no e-mail
            utilizado na compra.
          </p>

          <div className="space-y-4">

            <div className="
              flex
              items-center
              gap-3
              text-white
              font-semibold
            ">
              <Zap
                className="text-red-500"
                size={18}
              />

              Acesso imediato
            </div>

            <div className="
              flex
              items-center
              gap-3
              text-white
              font-semibold
            ">
              <Download
                className="text-red-500"
                size={18}
              />

              Download rápido
            </div>

            <div className="
              flex
              items-center
              gap-3
              text-white
              font-semibold
            ">
              <Lock
                className="text-red-500"
                size={18}
              />

              Acesso vitalício
            </div>

          </div>

        </div>

        {/* GARANTIA */}
        <div className="
          rounded-[32px]
          border
          border-zinc-800
          bg-zinc-900/50
          backdrop-blur-sm
          p-7
          md:p-10
          text-center
          lg:text-left
        ">

          <div className="
            w-16
            h-16
            rounded-full
            bg-red-500/10
            border
            border-red-500/20
            flex
            items-center
            justify-center
            mb-7
            mx-auto
            lg:mx-0
          ">
            <ShieldCheck
              size={30}
              className="text-red-500"
            />
          </div>

          <h2 className="
            text-3xl
            md:text-4xl
            font-black
            text-white
            leading-tight
            tracking-tight
            mb-5
          ">
            Garantia
            incondicional
            de 7 dias
          </h2>

          <p className="
            text-zinc-400
            text-base
            md:text-lg
            leading-relaxed
            mb-8
          ">
            Teste o material por 7 dias completos.
            Se não sentir mais clareza, evolução
            e segurança nos estudos,
            devolvemos 100% do seu dinheiro.
          </p>

          <p className="
            text-xl
            md:text-2xl
            text-red-500
            font-black
            italic
            leading-relaxed
          ">
            “Ou você aprende com método —
            ou devolvemos seu dinheiro.”
          </p>

        </div>

      </div>

    </div>

  </section>
);

const FAQ = () => {
  const questions = [
    {
      q: "Serve para qualquer faculdade?",
      a: "Sim! Os conteúdos seguem a base curricular utilizada nos primeiros períodos de Direito em praticamente todas as faculdades."
    },
    {
      q: "Como recebo o material?",
      a: "O acesso é enviado imediatamente para o e-mail utilizado na compra após a aprovação do pagamento."
    },
    {
      q: "Posso imprimir?",
      a: "Sim. O material foi desenvolvido tanto para leitura digital quanto para impressão."
    },
    {
      q: "Funciona no celular?",
      a: "Sim! O conteúdo é totalmente adaptado para celulares, tablets e computadores."
    },
    {
      q: "O acesso é vitalício?",
      a: "Sim. Após a compra, o material será seu permanentemente."
    }
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 px-6 bg-black">
      <div className="max-w-3xl mx-auto text-center">

        {/* TOPO */}
        <div className="mb-12 lg:mb-16">

          <div className="flex justify-center mb-5">
            <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-red-500/20
              bg-red-500/10
              text-red-400
              text-[11px]
              font-bold
              uppercase
              tracking-[0.2em]
            ">
              dúvidas frequentes
            </div>
          </div>

          <h2 className="
            text-3xl
            lg:text-5xl
            font-black
            text-white
            leading-[0.95]
            tracking-tight
            mb-5
          ">
            Perguntas que os{" "}
            <span className="text-red-500">
              calouros mais fazem
            </span>
          </h2>

          <p className="
            text-zinc-400
            text-base
            md:text-lg
            leading-relaxed
            max-w-2xl
            mx-auto
          ">
            Tudo o que você precisa saber antes de garantir seu acesso.
          </p>

        </div>

        {/* FAQ */}
        <div className="space-y-4">

          {questions.map((item, i) => (

            <motion.details
              key={i}
              className="group text-left"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >

              <summary className="
                cursor-pointer
                list-none
                flex
                items-center
                justify-between
                gap-4
                p-5
                md:p-6
                rounded-[24px]
                border
                border-zinc-800
                bg-zinc-900/50
                hover:border-red-500/30
                transition-all
                duration-300
              ">

                <span className="
                  text-base
                  md:text-lg
                  font-bold
                  text-white
                  leading-snug
                ">
                  {item.q}
                </span>

                <div className="
                  w-9
                  h-9
                  rounded-full
                  border
                  border-red-500/20
                  bg-red-500/10
                  flex
                  items-center
                  justify-center
                  shrink-0
                ">
                  <ChevronDown className="
                    text-red-400
                    w-4
                    h-4
                    group-open:rotate-180
                    transition-transform
                    duration-300
                  " />
                </div>

              </summary>

              <div className="
                px-5
                md:px-6
                pb-6
                pt-3
                text-sm
                md:text-base
                text-zinc-400
                leading-relaxed
                bg-zinc-900/30
                border-x
                border-b
                border-zinc-800
                rounded-b-[24px]
              ">
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
  <section className="py-16 md:py-24 lg:py-32 px-6 bg-black">
    <div className="max-w-5xl mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-16 text-center lg:text-left">

      {/* FOTO */}
      <div className="relative shrink-0">
        <div className="absolute inset-0 bg-red-500/10 blur-3xl rounded-full" />
        
        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-red-500/20 relative shadow-2xl mx-auto">
          <img
            src="/perfil.png"
            alt="Natan Campos"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* TEXTO */}
      <div className="flex-1">

        <span className="text-red-400 font-bold tracking-widest uppercase text-xs lg:text-sm mb-2 block">
          QUEM TE AJUDARÁ
        </span>

        <h2 className="text-3xl lg:text-4xl font-black text-white mb-6 uppercase flex items-center justify-center lg:justify-start gap-2">
          OPA! MUITO PRAZER 👋
        </h2>

        <p className="text-lg lg:text-xl text-zinc-300 leading-relaxed mb-6">
          Me chamo <span className="font-bold text-white">Natan Campos</span>. Atualmente no 7º período de Direito, já ajudei mais de 400 calouros a dominarem a base do curso sem linguagem complicada.
        </p>

        <p className="text-sm lg:text-base text-zinc-400 mb-8 italic">
          “Minha missão é economizar seu tempo e simplificar o aprendizado jurídico para que você não precise passar meses perdido tentando entender matérias complexas.”
        </p>

        {/* BADGES */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
          <Badge className="bg-zinc-900 border border-zinc-800 text-zinc-300">
            Método Validado
          </Badge>

          <Badge className="bg-zinc-900 border border-zinc-800 text-zinc-300">
            +400 Alunos
          </Badge>

          <Badge className="bg-zinc-900 border border-zinc-800 text-zinc-300">
            Didática Simplificada
          </Badge>
        </div>

        {/* INSTAGRAM */}
        <a
          href="#"
          className="flex items-center justify-center lg:justify-start gap-2 text-zinc-300 hover:text-red-400 transition-colors"
        >
          <Instagram size={20} />
          <span className="font-bold">@nataneodireito</span>
        </a>

      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 md:py-32 lg:py-40 px-6 text-center relative overflow-hidden bg-black">
    
    {/* FUNDO SUTIL (substitui amber por vermelho premium) */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-red-500/[0.03] to-red-500/[0.06]" />

    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      className="relative z-10 max-w-4xl mx-auto"
    >
      <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-8 tracking-tighter leading-tight">
        Comece o Direito entendendo a base que{" "}
        <span className="text-red-500">
          realmente importa.
        </span>
      </h2>

      <p className="text-lg sm:text-xl md:text-2xl text-zinc-400 mb-10 lg:mb-12">
        Pare de se sentir perdido nas aulas.
      </p>

      <GoldButton
        onClick={() =>
          document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })
        }
        className="
          mx-auto w-full sm:w-auto
          !text-base sm:!text-xl
          !px-8 sm:!px-12
          !py-4 sm:!py-6
          shadow-[0_0_50px_rgba(239,68,68,0.25)]
        "
      >
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
        <Bonuses />
        <SocialProof />
        <VideoFeedbacks />
        <TargetAudience />
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

