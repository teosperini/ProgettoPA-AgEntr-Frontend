import { useNavigate, useLocation, useSearchParams } from 'react-router-dom';

export const HeaderIstituzionale = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  
  const isLoggedIn = !!localStorage.getItem('userToken');

  // Funzione unificata per gestire l'accesso o la navigazione al profilo
  const handleAuthAction = () => {
    if (isLoggedIn) {
      navigate('/area-riservata/profilo');
    } else {
      // Se siamo già nella pagina di login, non facciamo nulla per evitare loop
      if (location.pathname === '/home/accedi') return;

      // Se non siamo in login, ci andiamo impostando il Profilo come destinazione
      navigate('/home/accedi?returnTo=/area-riservata/profilo');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('userToken');
    navigate('/home');
  };

  return (
    <header className="it-header-wrapper shadow-sm">
      <div className="bg-primary text-white py-2">
        <div className="container d-flex justify-content-between align-items-center">
          <span className="small d-none d-sm-inline">Agenzia delle Entrate - Portale Fatturazione</span>
          <div className="d-flex gap-3 small">
            <span style={{cursor: 'pointer'}}>ITA</span>
            <span style={{cursor: 'pointer'}}>Contatti</span>
          </div>
        </div>
      </div>
      
      <div className="bg-primary text-white py-3 border-top border-white-20">
        <div className="container d-flex justify-content-between align-items-center">
          
          <div 
            className="d-flex align-items-center" 
            style={{cursor: 'pointer'}} 
            onClick={() => navigate('/home')}
          >
            <div className="bg-white text-primary rounded-circle me-3 fw-bold d-flex align-items-center justify-content-center" 
                 style={{width: '2.8rem', height: '2.8rem', flexShrink: 0}}>
              it
            </div>
            <div className="lh-1">
              <h1 className="h5 mb-0 fw-bold text-white">Fattura Facile</h1>
              <small className="text-white-50 d-none d-md-block">Semplificazione Digitale</small>
            </div>
          </div>
          
          <div className="d-flex gap-2 align-items-center">
            {isLoggedIn ? (
              <>
                {/* Mostra "Servizi" solo se sei nel profilo per tornare indietro */}
                {location.pathname === '/area-riservata/profilo' && (
                  <button 
                    className="btn-pa btn-pa-light btn-header shadow-sm"
                    onClick={() => navigate('/area-riservata/dashboard')}
                  >
                    Servizi
                  </button>
                )}
                
                <button 
                  className="btn-pa btn-pa-light btn-header shadow-sm" 
                  onClick={() => navigate('/area-riservata/profilo')}
                >
                  Profilo
                </button>

                <button 
                  className="btn-pa btn-header btn-danger-pa shadow-sm"
                  onClick={handleLogout}
                >
                  Esci
                </button>
              </>
            ) : (
              /* Se non è loggato, mostriamo il tasto Accedi solo se non siamo già in LoginPage */
              location.pathname !== '/home/accedi' && (
                <button 
                  className="btn-pa btn-pa-light btn-header shadow-sm" 
                  onClick={handleAuthAction}
                >
                  Accedi
                </button>
              )
            )}
          </div>
        </div>
      </div>
    </header>
  );
};