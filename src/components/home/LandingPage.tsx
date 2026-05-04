// src/components/home/LandingPage.tsx
import { HeaderIstituzionale } from '../layout/HeaderIstituzionale';
import { useNavigate } from 'react-router-dom';

export const LandingPage = () => {
    const navigate = useNavigate();

    // Funzione intelligente per il pulsante
    const handleServiceClick = () => {
        const token = localStorage.getItem('userToken');

        if (token) {
            // Utente già loggato -> vai dritto al lavoro
            navigate('/area-riservata/dashboard');
        } else {
            // Utente non loggato -> vai al login e digli dove tornare
            navigate('/home/accedi?returnTo=/area-riservata/dashboard');
        }
    };
  return (
    <div className="min-vh-100 d-flex flex-column">
      {/* Usiamo lo stesso Header Blu dell'altra volta per coerenza */}
      <HeaderIstituzionale /> 

      <main>
        {/* HERO SECTION: Titolo e chiamata all'azione */}
        <section className="bg-light py-5 border-bottom">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-7">
                <h1 className="display-4 fw-bold text-primary mb-4">
                  Fatturazione Elettronica
                </h1>
                <p className="lead mb-5">
                  Il portale dedicato ai professionisti e alle piccole imprese per la gestione 
                  delle fatture verso la Pubblica Amministrazione e tra privati.
                </p>
               <button 
                onClick={handleServiceClick}
                className="btn-pa btn-pa-primary px-5 shadow"
              >
                Accedi al servizio
              </button>
              </div>
              <div className="col-md-5 d-none d-md-block text-center">
                 {/* Qui andrebbe un'illustrazione astratta o il logo dell'ente */}
                 <div className="p-5 bg-white shadow rounded-circle d-inline-block border border-light">
                <span className="display-1" style={{ filter: 'grayscale(100%)', opacity: 0.7 }}>📄</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION CARATTERISTICHE */}
        <section className="container py-5">
          <div className="row g-4 text-center">
            <div className="col-md-4">
              <div className="p-4">
                <h3 className="h4 fw-bold">Sicuro</h3>
                <p>Accesso garantito tramite SPID e CIE, in linea con i più alti standard di sicurezza.</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 border-start border-end">
                <h3 className="h4 fw-bold">Conforme</h3>
                <p>Generazione automatica di file XML pronti per l'invio al Sistema di Interscambio (SdI).</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4">
                <h3 className="h4 fw-bold">Gratuito</h3>
                <p>Un servizio messo a disposizione per agevolare la transizione digitale del Paese.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};