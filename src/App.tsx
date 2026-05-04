import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './components/home/LandingPage';
import { LoginPage } from './components/auth/LoginPage';
import { Dashboard } from './components/dashboard/Dashboard';
import { ProfilePage } from './components/users/ProfilePage';
import { ProtectedRoute } from './components/auth/ProtectedRoute'; // Importa il guardiano

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* --- ROTTE PUBBLICHE --- */}
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<LandingPage />} />
        <Route path="/home/accedi" element={<LoginPage />} />

        {/* --- AREA RISERVATA (Protetta) --- */}
        <Route path="/area-riservata">
          {/* Se l'utente scrive solo /area-riservata, lo mandiamo alla dashboard */}
          <Route 
            index 
            element={<Navigate to="/area-riservata/dashboard" replace />} 
          />
          
          {/* 
              Avvolgiamo le rotte figlie con ProtectedRoute. 
              Se il token manca, ProtectedRoute farà il redirect al login.
          */}
          <Route 
            path="dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          
          <Route 
            path="profilo" 
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            } 
          />
        </Route>

        {/* Catch-all: rimanda alla home se l'URL non esiste */}
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;