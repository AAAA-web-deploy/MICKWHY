import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Scout } from './components/Scout';
import { Episodes } from './components/Episodes';
import { Picker } from './components/Picker';
import { Reactions } from './components/Reactions';
import { Finale } from './components/Finale';

export default function App() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      nodes.forEach((node) => node.classList.add('is-in'));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a className="skip" href="#show">
        Skip to the show
      </a>
      <Header />
      <main>
        <Hero />
        <Scout />
        <Episodes />
        <Picker />
        <Reactions />
        <Finale />
      </main>
    </>
  );
}
