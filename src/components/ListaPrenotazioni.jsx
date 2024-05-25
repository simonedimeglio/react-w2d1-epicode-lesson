import { useState, useEffect } from "react";

// NB: Questa è una finta "Lista Preparazioni" che ci preparerà alla prossima lezione in cui
// affronteremo il tema dell'hook useEffect, fondamentale in questo caso.

// Quindi: Si tratta di una semplice fetch a JSONPlaceholder (AL MOMENTO!)

const ListaPrenotazioni = () => {
  // Inizializziamo lo stato prenotazioni come un array vuoto
  const [prenotazioni, setPrenotazioni] = useState([]);

  // useEffect è usato per eseguire il fetch dei dati quando il componente viene montato
  useEffect(() => {
    // Funzione asincrona per recuperare le prenotazioni
    const fetchPrenotazioni = async () => {
      try {
        // Effettuiamo una richiesta fetch all'URL specificato
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );

        // Convertiamo la risposta in formato JSON
        const data = await response.json();

        // Aggiorniamo lo stato prenotazioni con i dati ricevuti
        setPrenotazioni(data);
      } catch (error) {
        // Gestiamo gli errori della richiesta fetch
        console.error("Errore dal fetch delle prenotazioni:", error);
      }
    };

    // Chiamiamo la funzione fetchPrenotazioni
    fetchPrenotazioni();
  }, []); // L'array vuoto come secondo argomento assicura che l'effetto venga eseguito solo una volta, dopo il primo render

  return (
    <div>
      <h2>Lista Prenotazioni</h2>
      <ul>
        {/* Mappiamo l'array prenotazioni per renderizzare una lista di elementi */}
        {prenotazioni.map((prenotazione) => (
          // Ogni elemento della lista deve avere una chiave unica, usiamo prenotazione.id
          <li key={prenotazione.id}>{prenotazione.title}</li>
        ))}
      </ul>
    </div>
  );
};

// Esportiamo il componente per poterlo usare in altre parti dell'applicazione
export default ListaPrenotazioni;
