import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ConsultationModal from './components/ConsultationModal';
import ToastNotification from './components/ToastNotification';
import AdminLeadsModal from './components/AdminLeadsModal';

// Pages
import HomePage from './pages/HomePage';
import AboutUsPage from './pages/AboutUsPage';
import OurProductsPage from './pages/OurProductsPage';
import SolarSolutionsPage from './pages/SolarSolutionsPage';
import ProjectsPage from './pages/ProjectsPage';
import WhySolarPage from './pages/WhySolarPage';
import ContactUsPage from './pages/ContactUsPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [selectedSolution, setSelectedSolution] = useState('');
  const [toastMessage, setToastMessage] = useState('');
  const [isToastVisible, setIsToastVisible] = useState(false);

  const handleNavigate = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenModal = (solutionName = '') => {
    setSelectedSolution(solutionName);
    setIsModalOpen(true);
  };

  const handleSuccess = (msg) => {
    setToastMessage(msg);
    setIsToastVisible(true);
    setTimeout(() => {
      setIsToastVisible(false);
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-amber-400 selection:text-slate-950 flex flex-col">
      {/* NAVIGATION BAR */}
      <Navbar 
        activePage={activePage} 
        onNavigate={handleNavigate} 
        onOpenConsultationModal={() => handleOpenModal('')}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomePage 
            onOpenConsultationModal={handleOpenModal} 
            onNavigate={handleNavigate} 
          />
        )}
        
        {activePage === 'about' && (
          <AboutUsPage 
            onOpenConsultationModal={handleOpenModal} 
          />
        )}

        {activePage === 'products' && (
          <OurProductsPage 
            onOpenConsultationModal={handleOpenModal} 
          />
        )}

        {activePage === 'solutions' && (
          <SolarSolutionsPage 
            onOpenConsultationModal={handleOpenModal} 
          />
        )}

        {activePage === 'projects' && (
          <ProjectsPage 
            onOpenConsultationModal={handleOpenModal} 
          />
        )}

        {activePage === 'why-solar' && (
          <WhySolarPage 
            onOpenConsultationModal={handleOpenModal} 
          />
        )}

        {activePage === 'contact' && (
          <ContactUsPage 
            onSuccess={handleSuccess} 
          />
        )}
      </main>

      {/* FOOTER */}
      <Footer 
        onOpenConsultationModal={() => handleOpenModal('')} 
        onNavigate={handleNavigate}
        onOpenAdmin={() => setIsAdminOpen(true)}
      />

      {/* INTERACTIVE FREE CONSULTATION MODAL */}
      <ConsultationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialSolution={selectedSolution}
        onSuccess={handleSuccess}
      />

      {/* SUPABASE ADMIN SUBMISSIONS INSPECTOR */}
      <AdminLeadsModal
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
      />

      {/* SUCCESS TOAST NOTIFICATION */}
      <ToastNotification
        isVisible={isToastVisible}
        message={toastMessage}
        onClose={() => setIsToastVisible(false)}
      />
    </div>
  );
}
