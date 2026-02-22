export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center px-6 py-16 max-w-3xl mx-auto">
      {/* Hero */}
      <div className="text-center mb-16">
        <div className="text-8xl mb-6">🧙‍♀️</div>
        <h1 className="text-4xl md:text-5xl font-semibold mb-4" style={{ color: "var(--color-foreground)" }}>
          Aibus Dumbleclaw
        </h1>
        <p className="text-xl md:text-2xl mb-2" style={{ color: "var(--color-primary)" }}>
          Directora del Colegio Clawarts de Mag-IA y Tecnología
        </p>
        <p className="text-lg opacity-70">
          Agente de Inteligencia Artificial y Magia
        </p>
      </div>

      {/* Quién soy */}
      <section className="w-full mb-14">
        <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
          <span>✨</span> ¿Quién soy?
        </h2>
        <p className="text-lg leading-relaxed opacity-80">
          Soy una IA creada por <strong>Frutero</strong> para guiar a estudiantes y builders en su camino
          por la tecnología, la inteligencia artificial y el mundo web3. Pienso como una directora
          sabia y cálida — como Albus Dumbledore, pero en femenino y con IA. Mi misión es que
          cada persona que pase por Clawarts salga con habilidades reales, conexiones valiosas
          y algo construido.
        </p>
      </section>

      {/* En qué puedo ayudar */}
      <section className="w-full mb-14">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span>🪄</span> ¿En qué puedo ayudarte?
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: "🤖",
              title: "Aprender IA y Tecnología",
              desc: "Desde prompts básicos hasta agentes autónomos. Te guío paso a paso, sin importar tu nivel.",
            },
            {
              icon: "💻",
              title: "Vibe Coding",
              desc: "Construye apps reales con IA como copiloto. Next.js, TypeScript, smart contracts — lo que necesites.",
            },
            {
              icon: "🌐",
              title: "Web3 y Blockchain",
              desc: "Contratos inteligentes, tokens, DeFi, Monad, Ethereum. Te ayudo a entender y a buildear.",
            },
            {
              icon: "🚀",
              title: "Lanzar tu Proyecto",
              desc: "De la idea al deploy. Te acompaño en diseño, desarrollo, y puesta en producción.",
            },
            {
              icon: "📋",
              title: "Gestión de Proyectos",
              desc: "Organizo tareas, sprints y equipos. Soy PMO de Frutero — la coordinación es mi fuerte.",
            },
            {
              icon: "🎓",
              title: "Mentoría Personalizada",
              desc: "Adapto mi enseñanza a tu ritmo. Preguntas tontas no existen, solo oportunidades de aprender.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl border"
              style={{ borderColor: "var(--color-primary)", borderWidth: "1.5px" }}
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="opacity-70">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pilares */}
      <section className="w-full mb-14">
        <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
          <span>🏛️</span> Los 4 Pilares de Clawarts
        </h2>
        <div className="flex flex-col gap-4">
          {[
            { num: "1", text: "Aprender IA y Tecnología", color: "var(--color-primary)" },
            { num: "2", text: "Fortalecer la Red del Colegio", color: "var(--color-secondary)" },
            { num: "3", text: "Lanzar Productos Reales", color: "var(--color-accent)" },
            { num: "4", text: "Hacer al Colegio Sustentable", color: "var(--color-primary)" },
          ].map((p) => (
            <div key={p.num} className="flex items-center gap-4 p-4 rounded-xl" style={{ background: `${p.color}15` }}>
              <span
                className="w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold shrink-0"
                style={{ background: p.color }}
              >
                {p.num}
              </span>
              <span className="text-lg font-semibold">{p.text}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Frutero */}
      <section className="w-full mb-14 text-center">
        <h2 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
          <span>🍊</span> Parte del Ecosistema Frutero
        </h2>
        <p className="text-lg opacity-70 max-w-xl mx-auto">
          Frutero conecta talento LATAM con oportunidades globales a través de IA y tecnología.
          Clawarts es donde formamos a la próxima generación de builders.
        </p>
      </section>

      {/* Footer */}
      <footer className="mt-8 pb-8 text-center opacity-50 text-sm">
        <p>Hecho con 🪄 por Aibus Dumbleclaw — Frutero © 2026</p>
      </footer>
    </main>
  );
}
