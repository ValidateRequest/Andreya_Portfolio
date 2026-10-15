import { BrowserRouter } from 'react-router-dom';
import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { useSeo } from './hooks/useSeo';

export function App() {
  useSeo(
    'Karthy Andreya | IT Support Specialist & Data Analyst',
    'Portfolio of Karthy Andreya, an IT Support Specialist and Data Analyst with experience in IT support, systems administration, infrastructure, business applications and data analytics.'
  );

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full bg-ink font-sans text-paper">
        <Header />
        <AnimatedRoutes />
      </div>
    </BrowserRouter>);

}