import { HeaderIstituzionale } from "../layout/HeaderIstituzionale";
import React from "react";
export const Dashboard = () => {
  // Dati aggiornati per Fatturazione Elettronica
  const fatture = [
    { id: "F-2026-001", cliente: "Rossi Srl", data: "15/04/2026", importo: 1250.00, stato: "Inviata" },
    { id: "F-2026-002", cliente: "Comune di Roma", data: "20/04/2026", importo: 4500.00, stato: "Approvata" },
    { id: "F-2026-003", cliente: "Studio Bianchi", data: "28/04/2026", importo: 320.50, stato: "Scartata" },
  ];

  return (
    <div className="min-vh-100 bg-light">
      <HeaderIstituzionale />

      <div className="container py-5">
        <div className="d-flex justify-content-between align-items-end mb-4">
            <div>
                <h2 className="fw-bold mb-0">Le tue fatture</h2>
                <p className="text-muted">Gestisci i documenti inviati al Sistema di Interscambio</p>
            </div>
            <button className="btn btn-primary fw-bold px-4 rounded-1"> + Nuova Fattura</button>
        </div>
        
        <div className="card shadow-sm border-0 rounded-1">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="ps-4">Numero Doc.</th>
                  <th>Cliente</th>
                  <th>Data Invio</th>
                  <th>Importo</th>
                  <th className="pe-4 text-end">Stato Pratica</th>
                </tr>
              </thead>
              <tbody>
                {fatture.map(f => (
                  <tr key={f.id} style={{cursor: 'pointer'}}>
                    <td className="ps-4 fw-bold text-primary">{f.id}</td>
                    <td>{f.cliente}</td>
                    <td>{f.data}</td>
                    <td>€ {f.importo.toLocaleString('it-IT', {minimumFractionDigits: 2})}</td>
                    <td className="pe-4 text-end">
                      <span className={`badge rounded-pill px-3 py-2 ${
                        f.stato === 'Approvata' ? 'bg-success' : 
                        f.stato === 'Scartata' ? 'bg-danger' : 'bg-warning text-dark'
                      }`}>
                        {f.stato}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};