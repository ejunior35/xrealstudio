import Hero from '../components/Hero';
import Gallery from '../components/Gallery'; // ← Lass das ruhig drin

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery /> {/* ← Das hier neu einfügen */}
    </main>
  );
}
