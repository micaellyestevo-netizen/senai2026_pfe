export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <h1>Maquiagem <span></span></h1>
          <p>
            Inspirações, tendências e dicas para criar looks elegantes,
            delicados e modernos.
          </p>
          <a className="btn" href="/sobre">Ver Dicas</a>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Conteúdos em Destaque</h2>
          <div className="cards">
            <article className="card">
              <h3>Olhos Marcantes</h3>
              <p className="muted">Sombras roxas combinadas com pontos de luz brancos.</p>
            </article>
            <article className="card">
              <h3>Pele Iluminada</h3>
              <p className="muted">Acabamento suave e elegante para qualquer ocasião.</p>
            </article>
            <article className="card">
              <h3>Tendências 2026</h3>
              <p className="muted">As combinações mais populares do momento.</p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
