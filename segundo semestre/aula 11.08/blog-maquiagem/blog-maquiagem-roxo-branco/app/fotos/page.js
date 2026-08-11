export default function Fotos() {
  const fotos = ["💜","🤍","✨","💄","👁️","🌸"];
  return (
    <main className="section">
      <div className="container">
        <h1>Galeria de Inspirações</h1>
        <p className="muted">Ideias de maquiagem em tons roxo e branco.</p>
        <div className="gallery">
          {fotos.map((foto,index)=>(
            <div className="photo" key={index}>{foto}</div>
          ))}
        </div>
      </div>
    </main>
  );
}
