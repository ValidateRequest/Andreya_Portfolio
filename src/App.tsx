import { BrowserRouter, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { AnimatedRoutes } from './components/AnimatedRoutes';
import { useSeo } from './hooks/useSeo';

function AppLayout() {
  const location = useLocation();
  const isVaRoute = location.pathname.startsWith('/karthy-virtual-solutions');

  return (
    <div className="min-h-screen w-full bg-white font-sans text-espresso selection:bg-beige selection:text-espresso">
      {!isVaRoute && <Header />}
      <AnimatedRoutes />
    </div>
  );
}

export function App() {
  useSeo(
    'Karthy Andreya | IT Support Specialist, Data Analyst & Virtual Assistant',
    'Portfolio of Karthy Andreya, an IT Support Specialist, Data Analyst, and Virtual Assistant with hands-on experience in technical support, virtual assistance, systems administration, business applications, and data analytics.'
  );

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}