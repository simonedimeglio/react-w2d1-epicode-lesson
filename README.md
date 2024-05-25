# EPC - React - W2D1

Passaggi che abbiamo seguito nel live-coding della lezione:

## Parte 1 - Creazione progetto e realizzazione componente Form.jsx

### **Creazione di un nuovo progetto React (se non lo avete già fatto):**

Iniziamo con la creazione di un progetto via create-react-app con i seguenti comandi:

    npx create-react-app w2d1

Entriamo nel progetto tramite il comando:

    cd w2d1

Lanciamo il live server tramite il comando:

    npm start

> Se preferite potete creare il progetto con **Vite** come abbiamo fatto noi a lezione (_giusto per variare un pochino le procedure_). In quel caso, la serie di passaggi è ben descritta nella [docs ufficiale](https://vitejs.dev/guide/) di Vite. Basterà lanciare il comando `npm create vite@latest` e seguire le indicazioni del terminale per creare un progetto React. Ricordate poi che, dopo aver installato tutte le dipendenze, per avere il live-server in Vite il comando è differente da quello proposto in create-react-app: in questo caso dobbiamo lanciare `npm run dev`.

### Creazione della cartella "components"

Passiamo ora alla creazione di una cartella chiamata "components" dove andremo ad inserire il nuovo componente relativo al Form.

### Creazione del componente Form.jsx

A questo punto, all'interno della cartella **components** possiamo creare un file chiamato **Form.jsx** con la seguente struttura:

![ray-so-export-2](https://github.com/simonedimeglio/react-w2d1-epicode-lesson/assets/78272736/f390f479-78c1-45ff-afc6-4803ae5e16a4)

### Aggiungiamo lo stato per gestire i dati del form

Ora, aggiungiamo lo stato per gestire i dati inseriti nel form utilizzando `useState`.

Prima però, un piccolo recap:

`useState` è un hook (per farla semplice, una funzione) in React che ti permette di aggiungere e gestire lo stato all'interno di un componente funzionale.

> In altre parole, ti consente di creare variabili di stato che React
> ricorderà tra i render del componente.

**Cosa fa `useState`?**

1.  **Inizializza lo stato**: Quando chiami `useState`, devi fornire un valore iniziale per lo stato. Questo valore può essere qualsiasi cosa: un numero, una stringa, un array, un oggetto, ecc.
2.  **Restituisce due valori**: `useState` restituisce un array con due elementi:

    - Il primo elemento è il valore attuale dello stato.
    - Il secondo elemento è una funzione che ti permette di aggiornare questo stato.

Quando lo stato di un componente React viene aggiornato usando la funzione restituita da `useState`, il componente si re-renderizza automaticamente con il nuovo stato. Questo è uno dei concetti chiave di React: il rendering reattivo basato sullo stato.

Anyway, torniamo a noi: modifichiamo il componente Form come segue:

![ray-so-export-3](https://github.com/simonedimeglio/react-w2d1-epicode-lesson/assets/78272736/8e241efb-fa6b-4326-ae7d-df1861b9de37)

### Aggiungiamo la funzione `handleChange` per gestire i cambiamenti negli input

Aggiungiamo una funzione per aggiornare lo stato quando l'utente inserisce dati negli input del form.

![ray-so-export-4](https://github.com/simonedimeglio/react-w2d1-epicode-lesson/assets/78272736/b6f3fd08-e0ca-463c-81c9-2fe140900d50)

Spieghiamo questa funzione passo per passo:

1.  **Parametro `e`:**

    - La funzione prende un parametro `e`, che è l'evento generato quando l'input viene modificato. In questo caso, `e` è un evento di tipo `change`.

2.  **Destructuring di `e.target`:**

    - `const { name, value } = e.target;`
    - Qui, stiamo utilizzando la sintassi di destructuring per estrarre le proprietà `name` e `value` dall'elemento target dell'evento (che è l'input che ha generato l'evento).
    - `name` è il nome dell'input (_AKA attributo `name` dell'input HTML_).
    - `value` è il valore corrente dell'input.

3.  **Aggiornamento dello Stato:**

    - `setFormData(function(prevFormData) { ... });`
    - `setFormData` è la funzione che aggiorna lo stato del modulo (`formData`).
    - Passiamo una funzione come argomento a `setFormData`. Questa funzione prende lo stato precedente (`prevFormData`) e restituisce un nuovo oggetto di stato.

4.  **Spread Operator:**

    - `return { ...prevFormData, [name]: value };`
    - Utilizziamo lo spread operator (`...prevFormData`) per copiare tutte le proprietà dell'oggetto `prevFormData`.
    - Poi, aggiorniamo la proprietà specificata da `name` con il nuovo `value`.
    - L'uso delle parentesi quadre `[name]` è una caratteristica di JavaScript che abbiamo visto spesso, chiamata "_Computed Property Names_", che permette di usare il valore della variabile `name` come chiave dell'oggetto.

### Aggiungiamo la funzione `handleSubmit` per gestire l'invio del form

Ora aggiungiamo una funzione per gestire l'invio del form.

![ray-so-export-5](https://github.com/simonedimeglio/react-w2d1-epicode-lesson/assets/78272736/381afcd7-a258-4cac-b429-61e193a011b7)

### Aggiungiamo gli input nel form, finalmente.

![ray-so-export-6](https://github.com/simonedimeglio/react-w2d1-epicode-lesson/assets/78272736/4f54d002-ecfc-4fb2-84f1-73416b7edde3)

### Riassunto dei passaggi

- Creazione del componente come funzione vuota: Iniziamo con una funzione componente vuota.
- Aggiunta dello stato: Utilizziamo useState per gestire i dati del form.
- Gestione dei cambiamenti negli input: Utilizziamo una funzione handleChange per aggiornare lo stato quando l'utente inserisce dati.
- Gestione dell'invio del form: Utilizziamo una funzione handleSubmit per gestire l'invio del form.
- Aggiunta degli input nel form: Colleghiamo gli input allo stato e alle funzioni di gestione degli eventi.

Seguendo questi passaggi logici, abbiamo creato un componente React che gestisce un semplice form di prenotazione con funzioni di gestione.

### NB: Adesso importiamo il nostro componente in App.jsx per poterlo vedere nel browser!

Probabilmente l'avrete già fatto, ma "Repetita iuvant"!
