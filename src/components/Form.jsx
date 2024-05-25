// src/components/Form.js

// Importiamo useState dalla libreria React
import { useState } from "react";

// Definiamo il componente funzionale Form
function Form() {
  // Inizializziamo lo stato del form
  const [formData, setFormData] = useState({
    name: "", // Campo per il nome
    email: "", // Campo per l'email
    date: "", // Campo per la data
  });

  // Funzione per gestire il cambiamento negli input
  function handleChange(e) {
    // Estraiamo il nome e il valore dall'elemento target dell'evento (input)
    const { name, value } = e.target;
    // Aggiorniamo lo stato del form con il nuovo valore dell'input
    setFormData((prevFormData) => ({
      ...prevFormData, // Manteniamo i valori precedenti del form
      [name]: value, // Aggiorniamo il campo specifico con il nuovo valore
    }));
  }

  // Funzione per gestire il submit del form
  function handleSubmit(e) {
    // Previene il comportamento predefinito del form (ricaricare la pagina)
    e.preventDefault();
    // Stampa i dati del form nella console
    console.log("Dati inviati dal form:", formData);
  }

  // Renderizza il form
  return (
    <form onSubmit={handleSubmit}>
      <div>
        {/* Input per il nome */}
        <label>
          Name:
          <input
            type="text"
            name="name" // Nome dell'input, usato come chiave nello stato
            value={formData.name} // Valore dell'input legato allo stato
            onChange={handleChange} // Gestore dell'evento onChange che chiama handleChange
            required // Campo richiesto, obbligatorio
          />
        </label>
      </div>
      <div>
        {/* Input per l'email */}
        <label>
          Email:
          <input
            type="email"
            name="email" // Nome dell'input, usato come chiave nello stato
            value={formData.email} // Valore dell'input legato allo stato
            onChange={handleChange} // Gestore dell'evento onChange che chiama handleChange
            required // Campo richiesto, obbligatorio
          />
        </label>
      </div>
      <div>
        {/* Input per la data */}
        <label>
          Date:
          <input
            type="date"
            name="date" // Nome dell'input, usato come chiave nello stato
            value={formData.date} // Valore dell'input legato allo stato
            onChange={handleChange} // Gestore dell'evento onChange che chiama handleChange
            required // Campo richiesto, obbligatorio
          />
        </label>
      </div>
      {/* Bottone per inviare il form */}
      <button type="submit">Submit</button>
    </form>
  );
}

// Esportiamo il componente per poterlo usare in altre parti dell'applicazione
export default Form;
