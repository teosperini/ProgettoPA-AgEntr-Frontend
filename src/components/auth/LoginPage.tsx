import { useNavigate, useSearchParams } from 'react-router-dom';
import { HeaderIstituzionale } from "../layout/HeaderIstituzionale";
import logoCieIconOnly from '../../assets/bianco-cie-logo.svg';

export const LoginPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const destination = searchParams.get('returnTo') || '/dashboard';

const handleLogin = (tipo: string) => {
  console.log(`Login con ${tipo}`);
  
  // SIMULAZIONE: Salvataggio di un token finto
  localStorage.setItem('userToken', 'fake-jwt-token-123');
  localStorage.setItem('userType', tipo); // Opzionale: per ricordare se è CIE o altro
  
  navigate(destination);
};

  return (
    <div className="min-vh-100 d-flex flex-column bg-white">
      <HeaderIstituzionale />

      <main className="container py-5">
        <nav aria-label="breadcrumb" className="mb-4">
          <ol className="breadcrumb small">
            <li className="breadcrumb-item"><a href="/home" className="text-decoration-none">Home</a></li>
            <li className="breadcrumb-item active">Accedi</li>
          </ol>
        </nav>

        <div className="row">
          <div className="col-lg-8">
            <h1 className="fw-bold mb-3">Accedi</h1>
            <p className="lead mb-5">Per accedere al sito e ai suoi servizi, utilizza una delle seguenti modalità.</p>
            
            <hr className="my-5" />

            {/* SEZIONE CIE */}
            <div className="mb-5">
              <h2 className="fw-bold h1 mb-3">CIE</h2>
              <p className="text-muted mb-4">Accedi con la tua Carta d’Identità Elettronica.</p>
              
              {/* Pulsante CIE*/}
              <button 
                onClick={() => handleLogin('CIE')}
                className="btn-pa btn-pa-primary p-0 overflow-hidden shadow-sm"
              >
                <div className="pa-btn-icon-container">
                  <img src={logoCieIconOnly} alt="" style={{ height: '28px' }} />
                </div>
                <div className="pa-btn-separator"></div>
                <span className="px-4">Entra con CIE</span>
              </button>

              <div className="mt-3">
                <a href="#" className="text-primary fw-bold small text-decoration-none border-bottom border-primary">
                  Come richiedere CIE
                </a>
              </div>
            </div>

            {/* SEZIONE ALTRE UTENZE */}
            <div className="mt-5">
                <h2 className="fw-bold h1 mb-3">Altre utenze</h2>
                <p className="text-muted mb-4">In alternativa puoi utilizzare le seguenti modalità.</p>
                
                {/* Pulsanti Altre Utenze */}
                <div className="d-flex gap-3 flex-wrap">
                  <button 
                    className="btn-pa btn-pa-outline px-5"
                    onClick={() => handleLogin('CREDENTIALS')}
                  >
                    Accedi con credenziali
                  </button>
                  
                  <button 
                    className="btn-pa btn-pa-outline px-5"
                    onClick={() => handleLogin('BUSINESS_ID')}
                  >
                    Accedi con ID azienda
                  </button>
                </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};