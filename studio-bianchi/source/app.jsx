// Studio Dentistico Bianchi: one React application, every page of the site lives in this file.
const F = 'node_modules/';
const nav = [['index.html', 'Home'], ['trattamenti.html', 'Trattamenti'], ['lo-studio.html', 'Lo studio'], ['contatti.html', 'Contatti']];

const Icon = ({ kind }) => {
  const c = { viewBox: '0 0 64 64', width: 64, height: 64, fill: 'none', stroke: 'currentColor', strokeWidth: 2.5, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
  if (kind === 'tooth') return (<svg {...c}><path d="M20 12c-7 0-10 6-9 13 1 9 3 13 5 22 1 4 5 4 6 0l2-10c1-4 7-4 8 0l2 10c1 4 5 4 6 0 2-9 4-13 5-22 1-7-2-13-9-13-5 0-7 3-12 3s-4-3-4-3z" /></svg>);
  if (kind === 'clock') return (<svg {...c}><circle cx="32" cy="32" r="22" /><path d="M32 18v14l9 6" /></svg>);
  return (<svg {...c}><path d="M14 30c0 12 8 20 18 20s18-8 18-20" /><path d="M22 22v2M42 22v2" /></svg>);
};

const Header = ({ current }) => (
  <header className="site-header">
    <a className="skip" href="#contenuto">Vai al contenuto</a>
    <div className="wrap nav">
      <a className="nav__brand" href="index.html" aria-label="Studio Dentistico Bianchi, home">
        <span className="brand-arch" aria-hidden="true" /><span className="brand-name">Studio Dentistico Bianchi</span>
      </a>
      <button className="nav__toggle" data-nav-toggle aria-expanded="false" aria-controls="menu" aria-label="Apri il menu">
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M5 8h18M5 14h18M5 20h18" /></svg>
      </button>
      <nav className="nav__links" id="menu" data-nav-links aria-label="Menu principale">
        {nav.slice(1).map(([href, label]) => <a key={href} href={href} aria-current={current === href ? 'page' : undefined}>{label}</a>)}
        <a className="btn btn--teal" href="contatti.html#prenota">Prenota una visita</a>
      </nav>
    </div>
  </header>
);

const orari = [['Lunedì', '9:00–13:00, 14:30–19:00'], ['Martedì', '9:00–13:00, 14:30–19:00'], ['Mercoledì', '14:30–20:00'], ['Giovedì', '9:00–13:00, 14:30–19:00'], ['Venerdì', '9:00–13:00, 14:30–18:00'], ['Sabato', '9:00–12:30, solo su appuntamento'], ['Domenica', 'Chiuso']];

const Orari = () => (
  <dl className="orari">{orari.map(([g, o]) => <div key={g}><dt>{g}</dt><dd>{o}</dd></div>)}</dl>
);

const Footer = () => (
  <footer className="footer">
    <div className="wrap footer__grid">
      <div>
        <p className="footer__name">Studio Dentistico Bianchi</p>
        <p>Via Cavour 21, 23900 Lecco (LC)</p>
        <p><a href="tel:+390341000000">0341 000 000</a><br /><a href="mailto:segreteria@studiobianchi.example">segreteria@studiobianchi.example</a></p>
      </div>
      <nav aria-label="Pagine del sito">
        <ul className="footer__links">{nav.map(([h, l]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
      </nav>
    </div>
    <div className="wrap footer__legal"><p>Sito dimostrativo: studio, professionisti, indirizzi, prezzi e numeri sono di esempio.</p></div>
  </footer>
);

const Prenota = () => (
  <section className="section">
    <div className="wrap">
      <div className="callout">
        <h2>Da quanto tempo non fate un controllo?</h2>
        <p>La prima visita dura 40 minuti e si conclude con un piano di cura scritto. Nessun impegno a proseguire.</p>
        <div className="callout__actions">
          <a className="btn btn--white" href="contatti.html#prenota">Prenota una visita</a>
          <a className="btn btn--outline-light" href="tel:+390341000000">Chiama 0341 000 000</a>
        </div>
      </div>
    </div>
  </section>
);

const trattamenti = [
  { id: 'igiene', t: 'Igiene e prevenzione', d: 'Seduta di igiene professionale, controllo di gengive e carie, istruzioni per la pulizia a casa. Consigliata ogni sei mesi.', det: ['Durata 45 minuti', 'Da 80 €'] },
  { id: 'conservativa', t: 'Otturazioni e ricostruzioni', d: 'Cura delle carie con materiali del colore del dente, in anestesia locale. Quasi sempre in una sola seduta.', det: ['Durata 30–60 minuti', 'Da 90 €'] },
  { id: 'endodonzia', t: 'Devitalizzazioni', d: 'Trattamento canalare con ingrandimento ottico per salvare un dente compromesso ed evitare l’estrazione.', det: ['Una o due sedute', 'Preventivo dopo la visita'] },
  { id: 'ortodonzia', t: 'Ortodonzia e allineatori trasparenti', d: 'Apparecchi fissi e mascherine trasparenti per adulti e ragazzi, dopo uno studio del caso con impronte digitali.', det: ['Durata media 12–18 mesi', 'Pagamento a rate mensili'] },
  { id: 'implantologia', t: 'Impianti e protesi', d: 'Sostituzione dei denti mancanti con impianti in titanio e corone in ceramica, pianificata su una radiografia tridimensionale.', det: ['Percorso di 3–6 mesi', 'Preventivo dopo la visita'] },
  { id: 'bambini', t: 'Dentista dei bambini', d: 'Prime visite dai tre anni, sigillature e controlli della crescita, con tempi lenti e senza fretta.', det: ['Prima visita 30 minuti', 'Gratuita fino a 6 anni'] },
];

const Home = () => (
  <>
    <Header current="index.html" />
    <main id="contenuto">
      <section className="hero">
        <div className="wrap hero__in">
          <h1>Dal dentista senza pensieri, nel centro di Lecco.</h1>
          <p className="lead">Prevenzione, cure e ortodonzia per adulti e bambini. Si comincia con una visita di 40 minuti, un piano di cura scritto e un preventivo chiaro.</p>
          <div className="hero__actions">
            <a className="btn btn--teal" href="contatti.html#prenota">Prenota una visita</a>
            <a className="btn btn--outline" href="tel:+390341000000">Chiama 0341 000 000</a>
          </div>
        </div>
        <div className="wrap">
          <ul className="arches">
            <li className="arch arch--mint"><Icon kind="tooth" /><h2>Prima visita</h2><p>40 minuti, 50 € scalati dalla prima cura</p></li>
            <li className="arch arch--teal"><Icon kind="clock" /><h2>Urgenze</h2><p>Chi chiama entro le 11 viene visto in giornata</p></li>
            <li className="arch arch--coral"><Icon kind="smile" /><h2>Paura del dentista?</h2><p>Tempi lunghi, spiegazioni e sedazione cosciente su richiesta</p></li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="center">
            <h2>Di cosa ci occupiamo</h2>
            <p>Sei aree di cura, tutte nello stesso studio e con gli stessi professionisti.</p>
          </div>
          <ul className="tlist">
            {trattamenti.map(t => (
              <li key={t.id}><a href={`trattamenti.html#${t.id}`}><span className="tlist__t">{t.t}</span><span className="tlist__d">{t.det[0]}</span></a></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--mint">
        <div className="wrap">
          <div className="center"><h2>Come si svolge la prima visita</h2></div>
          <ol className="visita">
            <li><span className="visita__n">1</span><h3>Ci raccontate</h3><p>Dieci minuti seduti alla scrivania, non sulla poltrona: salute generale, farmaci, cosa vi preoccupa.</p></li>
            <li><span className="visita__n">2</span><h3>Visitiamo</h3><p>Controllo di denti e gengive. Una radiografia solo se serve davvero, e ve ne spieghiamo il motivo.</p></li>
            <li><span className="visita__n">3</span><h3>Decidete voi</h3><p>Ricevete un piano di cura scritto con priorità, tempi e costi. Potete pensarci con calma.</p></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap two">
          <div className="two__text">
            <h2>Orari di apertura</h2>
            <p>Il mercoledì restiamo aperti fino alle 20 per chi lavora fino a tardi. Il sabato mattina riceviamo solo su appuntamento.</p>
            <a className="textlink" href="contatti.html">Come raggiungerci</a>
          </div>
          <Orari />
        </div>
      </section>
      <Prenota />
    </main>
    <Footer />
  </>
);

const Trattamenti = () => (
  <>
    <Header current="trattamenti.html" />
    <main id="contenuto">
      <section className="pagehead"><div className="wrap center">
        <h1>Trattamenti</h1>
        <p className="lead">Per ogni cura trovate qui in cosa consiste, quanto dura e da che cifra parte. Il preventivo preciso arriva sempre dopo la visita, per iscritto.</p>
      </div></section>
      <section className="section section--tight">
        <div className="wrap cards">
          {trattamenti.map(t => (
            <article key={t.id} id={t.id} className="card">
              <h2>{t.t}</h2>
              <p>{t.d}</p>
              <ul className="card__det">{t.det.map(x => <li key={x}>{x}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--mint">
        <div className="wrap narrow">
          <div className="center"><h2>Domande frequenti</h2></div>
          <div className="faq">
            <details><summary>Quanto costa la prima visita?</summary><p>50 €, che vengono scalati dal costo della prima cura se decidete di proseguire. Per i bambini fino a sei anni è gratuita.</p></details>
            <details><summary>Si può pagare a rate?</summary><p>Sì. Per le cure sopra i 500 € proponiamo rate mensili senza interessi fino a dodici mesi.</p></details>
            <details><summary>Cosa faccio se ho male adesso?</summary><p>Chiamate lo studio. Chi telefona entro le 11 viene visto in giornata, gli altri entro la mattina successiva.</p></details>
            <details><summary>Fate la radiografia a tutti?</summary><p>No. La facciamo solo quando serve per la diagnosi e vi spieghiamo prima perché.</p></details>
          </div>
        </div>
      </section>
      <Prenota />
    </main>
    <Footer />
  </>
);

const Studio = () => (
  <>
    <Header current="lo-studio.html" />
    <main id="contenuto">
      <section className="pagehead"><div className="wrap center">
        <h1>Lo studio</h1>
        <p className="lead">Uno studio piccolo per scelta: tre professionisti, due poltrone e il tempo necessario per ogni paziente.</p>
      </div></section>
      <section className="section section--tight">
        <div className="wrap">
          <ul className="team">
            <li><div className="team__arch team__arch--mint" aria-hidden="true">GB</div><h2>Dott.ssa Giulia Bianchi</h2><p className="team__role">Odontoiatra, titolare dello studio</p><p>Si occupa di cure conservative, devitalizzazioni e protesi. Lavora a Lecco dal 2011.</p></li>
            <li><div className="team__arch team__arch--coral" aria-hidden="true">LF</div><h2>Dott. Luca Ferri</h2><p className="team__role">Ortodontista</p><p>Segue apparecchi e allineatori trasparenti per ragazzi e adulti. In studio il mercoledì e il venerdì.</p></li>
            <li><div className="team__arch team__arch--teal" aria-hidden="true">SC</div><h2>Sara Colombo</h2><p className="team__role">Igienista dentale</p><p>Cura le sedute di igiene e insegna, a grandi e piccoli, come tenere puliti i denti a casa.</p></li>
          </ul>
        </div>
      </section>
      <section className="section section--mint">
        <div className="wrap two">
          <div className="two__text">
            <h2>Cosa trovate da noi</h2>
            <p>Lo studio è al primo piano con ascensore, a due passi da Piazza Garibaldi. Gli strumenti vengono sterilizzati e imbustati dopo ogni paziente, con tracciabilità di ogni ciclo.</p>
          </div>
          <ul className="checks">
            <li>Radiografia digitale a basso dosaggio</li>
            <li>Impronte con scanner, senza pasta</li>
            <li>Ingresso e bagno accessibili in carrozzina</li>
            <li>Sala d’attesa con angolo per i bambini</li>
            <li>Promemoria degli appuntamenti via messaggio</li>
          </ul>
        </div>
      </section>
      <Prenota />
    </main>
    <Footer />
  </>
);

const Contatti = () => (
  <>
    <Header current="contatti.html" />
    <main id="contenuto">
      <section className="pagehead"><div className="wrap center">
        <h1>Contatti</h1>
        <p className="lead">Per prenotare potete telefonare, scriverci o compilare il modulo. Vi richiamiamo entro la giornata lavorativa per fissare l’orario.</p>
      </div></section>
      <section className="section section--tight">
        <div className="wrap contact">
          <form className="book" id="prenota" data-demo-form>
            <h2>Prenota una visita</h2>
            <div className="form-grid">
              <div className="field"><label htmlFor="nome">Nome e cognome</label><input id="nome" name="nome" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="tel">Telefono</label><input id="tel" name="tel" type="tel" autoComplete="tel" required /></div>
              <div className="field full"><label htmlFor="motivo">Motivo della visita</label>
                <select id="motivo" name="motivo"><option>Prima visita o controllo</option><option>Igiene</option><option>Ho dolore</option><option>Visita per un bambino</option><option>Ortodonzia</option></select></div>
              <div className="field full"><label htmlFor="quando">Giorni e orari preferiti</label><textarea id="quando" name="quando" placeholder="Esempio: mercoledì dopo le 18 oppure sabato mattina" /></div>
            </div>
            <button className="btn btn--teal" type="submit">Invia la richiesta</button>
            <p className="form-status" data-form-status tabIndex="-1" role="status">Richiesta inviata. In questo sito dimostrativo il modulo non spedisce davvero: sul sito pubblicato il messaggio arriva alla segreteria.</p>
          </form>
          <div className="contact__info">
            <div><h2>Dove siamo</h2><p>Via Cavour 21, primo piano<br />23900 Lecco (LC)</p><p className="small">A cinque minuti a piedi dalla stazione. Parcheggio in Piazza Affari.</p></div>
            <div><h2>Telefono ed email</h2><p><a href="tel:+390341000000">0341 000 000</a><br /><a href="mailto:segreteria@studiobianchi.example">segreteria@studiobianchi.example</a></p><a className="btn btn--outline" href="#prenota">Scrivici su WhatsApp</a></div>
            <div><h2>Orari</h2><Orari /></div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export const site = {
  name: 'Studio Dentistico Bianchi', domain: 'studiobianchi.vocaia.com', themeColor: '#0E4A47',
  fonts: [
    { family: 'Young Serif', weight: '400', src: F + '@fontsource/young-serif/files/young-serif-latin-400-normal.woff2' },
    { family: 'Figtree', weight: '300 900', src: F + '@fontsource-variable/figtree/files/figtree-latin-wght-normal.woff2' },
  ],
  jsonld: {
    '@context': 'https://schema.org', '@type': 'Dentist', name: 'Studio Dentistico Bianchi',
    description: 'Studio dentistico nel centro di Lecco: prevenzione, cure, ortodonzia e implantologia per adulti e bambini.',
    url: 'https://studiobianchi.vocaia.com/', telephone: '+39 0341 000 000', email: 'segreteria@studiobianchi.example', priceRange: '€€',
    address: { '@type': 'PostalAddress', streetAddress: 'Via Cavour 21', postalCode: '23900', addressLocality: 'Lecco', addressRegion: 'LC', addressCountry: 'IT' },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Thursday'], opens: '09:00', closes: '19:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Wednesday'], opens: '14:30', closes: '20:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Friday'], opens: '09:00', closes: '18:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '09:00', closes: '12:30' }],
    medicalSpecialty: 'Dentistry',
  },
  pages: [
    { file: 'index.html', slug: '', Component: Home, title: 'Studio Dentistico Bianchi | Dentista nel centro di Lecco', description: 'Dentista a Lecco per adulti e bambini: igiene, cure, ortodonzia e impianti. Prima visita di 40 minuti con piano di cura scritto. Urgenze in giornata.' },
    { file: 'trattamenti.html', slug: 'trattamenti', Component: Trattamenti, title: 'Trattamenti e prezzi | Studio Dentistico Bianchi Lecco', description: 'Igiene da 80 €, otturazioni, devitalizzazioni, allineatori trasparenti, impianti e dentista dei bambini. Preventivo scritto dopo la visita.' },
    { file: 'lo-studio.html', slug: 'lo-studio', Component: Studio, title: 'Lo studio e i professionisti | Studio Dentistico Bianchi Lecco', description: 'Tre professionisti e due poltrone in Via Cavour a Lecco: odontoiatra, ortodontista e igienista. Studio accessibile, radiografia digitale.' },
    { file: 'contatti.html', slug: 'contatti', Component: Contatti, title: 'Contatti e orari | Studio Dentistico Bianchi Lecco', description: 'Prenota una visita: Via Cavour 21, Lecco. Aperti dal lunedì al sabato, mercoledì fino alle 20. Vi richiamiamo entro la giornata lavorativa.' },
  ],
};
