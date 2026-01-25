import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useEffect } from 'react';

// Components
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

// Pages
import { HomePage } from './pages/Home';
import { CommercialPage } from './pages/Commercial';
import { ResidentialPage } from './pages/Residential';
import { RenovationsPage } from './pages/Renovations';
import { RepairPage } from './pages/Repair';
import { BidPage } from './pages/Bid';
import { TrainingPage } from './pages/Training';
import { ContactsPage } from './pages/Contacts';
import { JobsPage } from './pages/Jobs';

// Location Pages
import { AlexandriaPage } from './pages/locations/Alexandria';
import { ArlingtonPage } from './pages/locations/Arlington';
import { WoodbridgePage } from './pages/locations/Woodbridge';
import { MountVernonPage } from './pages/locations/MountVernon';
import { MarylandPage } from './pages/locations/Maryland';
import { WashingtonDCPage } from './pages/locations/WashingtonDC';
import { SpringfieldPage } from './pages/locations/Springfield';
import { McLeanPage } from './pages/locations/McLean';
import { GreatFallsPage } from './pages/locations/GreatFalls';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Layout wrapper
const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Layout><HomePage /></Layout>} />
          <Route path="/commercial" element={<Layout><CommercialPage /></Layout>} />
          <Route path="/residential" element={<Layout><ResidentialPage /></Layout>} />
          <Route path="/renovations" element={<Layout><RenovationsPage /></Layout>} />
          <Route path="/repair" element={<Layout><RepairPage /></Layout>} />
          <Route path="/bid" element={<Layout><BidPage /></Layout>} />
          <Route path="/training" element={<Layout><TrainingPage /></Layout>} />
          <Route path="/contacts" element={<Layout><ContactsPage /></Layout>} />
          <Route path="/jobs" element={<Layout><JobsPage /></Layout>} />

          {/* Location Pages */}
          <Route path="/locations/springfield-pool-service" element={<Layout><SpringfieldPage /></Layout>} />
          <Route path="/locations/alexandria-pool-service" element={<Layout><AlexandriaPage /></Layout>} />
          <Route path="/locations/arlington-pool-service" element={<Layout><ArlingtonPage /></Layout>} />
          <Route path="/locations/woodbridge-pool-service" element={<Layout><WoodbridgePage /></Layout>} />
          <Route path="/locations/mount-vernon-pool-service" element={<Layout><MountVernonPage /></Layout>} />
          <Route path="/locations/maryland-pool-service" element={<Layout><MarylandPage /></Layout>} />
          <Route path="/locations/washington-dc-pool-service" element={<Layout><WashingtonDCPage /></Layout>} />
          <Route path="/locations/mclean-pool-service" element={<Layout><McLeanPage /></Layout>} />
          <Route path="/locations/great-falls-pool-service" element={<Layout><GreatFallsPage /></Layout>} />
        </Routes>
      </div>
    </HelmetProvider>
  );
}

export default App;
