export default function Home() {
  return (
    <div>
      <section className="hero">
        <h1>Willkommen bei <span className="highlight">XReal.AI</span></h1>
        <p>Erstelle realistische AI-Bilder in Sekunden</p>
        <button className="button">Starte jetzt</button>
      </section>

      <section className="gallery-section">
        <h2>Beispielbilder</h2>
        <div className="gallery">
          <img src="/images/beispiele/beispiel1.jpg" alt="Beispielbild 1" />
          <img src="/images/beispiele/beispiel2.jpg" alt="Beispielbild 2" />
        </div>
      </section>
    </div>
  );
}
