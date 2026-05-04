import { useEffect, useState } from 'react';
import { HeaderIstituzionale } from '../layout/HeaderIstituzionale';
import type { UserResponseDTO } from '../../models/UserResponseDTO';
// Immaginiamo di avere un metodo per recuperare il profilo dell'utente loggato
import { userService } from '../../services/userService';

export const ProfilePage = () => {
    const [user, setUser] = useState<UserResponseDTO | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Per ora simuliamo il recupero del profilo
        // In futuro: const data = await userService.getMe();
        loadProfile();
    }, []);

    const loadProfile = async () => {
        try {
            setLoading(true);
            const data = await userService.getAll(); // Mock: prendiamo il primo per ora
            if (data.length > 0) setUser(data[0]);
        } catch (error) {
            console.error("Errore nel caricamento profilo:", error);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return (
        <div className="min-vh-100 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" role="status"></div>
        </div>
    );

    return (
        <div className="min-vh-100 bg-light">
            <HeaderIstituzionale />
            
            <main className="container py-5">
                <div className="row">
                    <div className="col-12 mb-4">
                        <h1 className="fw-bold">Il mio Profilo</h1>
                        <p className="text-muted">Gestisci le tue informazioni personali e le impostazioni di fatturazione.</p>
                    </div>

                    <div className="col-lg-4">
                        {/* CARD AVATAR/STATO */}
                        <div className="card shadow-sm border-0 rounded-1 mb-4">
                            <div className="card-body text-center py-5">
                                <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '80px', height: '80px', fontSize: '2rem' }}>
                                    {user?.nome.charAt(0)}
                                </div>
                                <h3 className="fw-bold mb-0">{user?.nome}</h3>
                                <span className="badge bg-info text-dark mt-2">{user?.ruolo}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-8">
                        {/* CARD DATI PERSONALI */}
                        <div className="card shadow-sm border-0 rounded-1">
                            <div className="card-header bg-white py-3">
                                <h5 className="mb-0 fw-bold">Dati Identificativi</h5>
                            </div>
                            <div className="card-body p-4">
                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label className="small text-muted d-block">Nome e Cognome</label>
                                        <span className="fw-bold">{user?.nome}</span>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small text-muted d-block">Codice Fiscale / Username</label>
                                        <span className="fw-bold text-uppercase">{user?.username}</span>
                                    </div>
                                    <div className="col-md-12">
                                        <hr />
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small text-muted d-block">Tipo di Utenza</label>
                                        <span className="fw-bold">Persona Fisica / Ditta Individuale</span>
                                    </div>
                                    <div className="col-md-6">
                                        <label className="small text-muted d-block">Stato Account</label>
                                        <span className="text-success fw-bold d-flex align-items-center">
                                            <span className="me-2">●</span> Attivo (Verificato con CIE)
                                        </span>
                                    </div>
                                </div>
                                
                                <div className="mt-5 d-flex gap-2">
                                    <button className="btn-pa btn-pa-primary px-4" style={{height: '45px', fontSize: '0.9rem'}}>
                                        Modifica Dati
                                    </button>
                                    <button className="btn-pa btn-pa-outline px-4" style={{height: '45px', fontSize: '0.9rem'}}>
                                        Cambia Password
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};