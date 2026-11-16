// Marco Riva Personal Trainer: one React application, every page of the site lives in this file.
const F = 'node_modules/';
const nav = [['index.html', 'Home'], ['programmi.html', 'Programmi'], ['chi-sono.html', 'Chi sono'], ['contatti.html', 'Contatti']];

/* Running-track lanes: the one graphic of the site */
const Track = ({ className }) => (
  <svg className={className} viewBox="0 0 520 520" fill="none" aria-hidden="true">
    {[0, 1, 2, 3, 4].map(i => (
      <rect key={i} x={20 + i * 38} y={20 + i * 38} width={900 - i * 76} height={480 - i * 76} rx={240 - i * 38}
        stroke={i % 2 ? '#FFD338' : '#FF4A1C'} strokeWidth="26" />
    ))}
    {[0, 1, 2, 3].map(i => (
      <rect key={'l' + i} x={39 + i * 38} y={39 + i * 38} width={862 - i * 76} height={442 - i * 76} rx={221 - i * 38} stroke="#0E1B5C" strokeWidth="2" />
    ))}
  </svg>
);

const Header = ({ current }) => (
  <header className="site-header">
    <a className="skip" href="#contenuto">Vai al contenuto</a>
    <div className="wrap nav">
      <a className="nav__brand" href="index.html" aria-label="Marco Riva Personal Trainer, home">
        <span className="brand-dot" aria-hidden="true" /><span className="brand-name">Marco Riva</span>
      </a>
      <button className="nav__toggle" data-nav-toggle aria-expanded="false" aria-controls="menu" aria-label="Apri il menu">
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M4 9h20M4 19h20" /></svg>
      </button>
      <nav className="nav__links" id="menu" data-nav-links aria-label="Menu principale">
        {nav.slice(1).map(([href, label]) => <a key={href} href={href} aria-current={current === href ? 'page' : undefined}>{label}</a>)}
        <a className="btn btn--orange" href="contatti.html#prenota">Prenota la valutazione</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="wrap footer__grid">
      <div>
        <p className="footer__name">Marco Riva</p>
        <p>Personal trainer a Como.<br />In studio e all'aperto, tutto l'anno.</p>
      </div>
      <div>
        <p className="footer__h">Studio</p>
        <p>Via Milano 48<br />22100 Como (CO)</p>
      </div>
      <div>
        <p className="footer__h">Contatti</p>
        <p><a href="tel:+390310000001">031 000 0001</a><br /><a href="mailto:ciao@marcoriva.example">ciao@marcoriva.example</a></p>
      </div>
      <nav aria-label="Pagine del sito">
        <p className="footer__h">Sito</p>
        <ul className="footer__links">{nav.map(([h, l]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
      </nav>
    </div>
    <div className="wrap footer__legal"><p>Sito dimostrativo: persona, indirizzi, prezzi e numeri sono di esempio.</p></div>
  </footer>
);

const Cta = () => (
  <section className="cta">
    <div className="wrap cta__in">
      <h2>La prima seduta è una valutazione gratuita.</h2>
      <p>45 minuti per capire da dove parti: postura, mobilità, forza e obiettivi. Esci con un piano scritto, anche se poi decidi di non continuare.</p>
      <a className="btn btn--blue" href="contatti.html#prenota">Prenota la valutazione</a>
    </div>
  </section>
);

const programmi = [
  { id: 'forza', color: 'orange', t: 'Forza e tono', per: 'Per chi vuole un corpo più forte e definito', d: 'Lavoro con sovraccarichi progressivi, tecnica curata su squat, stacchi e spinte. Due o tre sedute a settimana.', pts: ['Test di forza ogni quattro settimane', 'Scheda per le giornate in autonomia', 'Indicazioni alimentari di base'] },
  { id: 'dimagrimento', color: 'yellow', t: 'Dimagrimento', per: 'Per chi vuole perdere peso senza diete impossibili', d: 'Allenamenti misti di forza e resistenza, con un obiettivo settimanale realistico e misurabile.', pts: ['Misure e peso ogni due settimane', 'Camminate e corsa leggera sul lungolago', 'Abitudini quotidiane, una alla volta'] },
  { id: 'rientro', color: 'sky', t: 'Ritorno al movimento', per: 'Per chi riparte dopo uno stop o un infortunio', d: "Ripresa graduale concordata con il tuo medico o fisioterapista. Prima il controllo del movimento, poi il carico.", pts: ['Esercizi adattati al tuo percorso', 'Mobilità e stabilità articolare', 'Progressione senza fretta'] },
];

const settimana = [
  ['Lun', 'Forza', 'orange', '7:00'], ['Mar', 'Camminata', 'sky', 'libera'], ['Mer', 'Forza', 'orange', '18:30'],
  ['Gio', 'Riposo', 'off', ''], ['Ven', 'Circuito', 'yellow', '7:00'], ['Sab', 'Lungolago', 'sky', '9:00'], ['Dom', 'Riposo', 'off', ''],
];

const Home = () => (
  <>
    <Header current="index.html" />
    <main id="contenuto">
      <section className="hero">
        <Track className="hero__track" />
        <div className="wrap hero__in">
          <h1>Un piano fatto per te, non per tutti.</h1>
          <p className="lead">Personal training a Como, in studio e all'aperto sul lungolago. Si parte da una valutazione gratuita di 45 minuti.</p>
          <div className="hero__actions">
            <a className="btn btn--orange" href="contatti.html#prenota">Prenota la valutazione</a>
            <a className="btn btn--ghost" href="programmi.html">Guarda i programmi</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap week">
          <div className="week__text">
            <h2>Com'è fatta una settimana di lavoro</h2>
            <p>Tre sedute insieme, due giorni di movimento leggero per conto tuo e due di riposo vero. Gli orari li scegliamo sulla tua agenda, non sulla mia.</p>
            <a className="textlink" href="programmi.html">Scopri i tre programmi</a>
          </div>
          <ol className="week__grid" aria-label="Esempio di settimana di allenamento">
            {settimana.map(([g, a, c, o]) => (
              <li key={g} className={`day day--${c}`}><span className="day__g">{g}</span><span className="day__a">{a}</span><span className="day__o">{o}</span></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--tint">
        <div className="wrap">
          <h2 className="h-wide">Dodici settimane, quattro tappe</h2>
          <ol className="tappe">
            <li><span className="tappe__w">Settimana 1</span><h3>Valutazione</h3><p>Test di postura, mobilità e forza. Fissiamo un obiettivo che si può misurare.</p></li>
            <li><span className="tappe__w">Settimane 2–4</span><h3>Le basi</h3><p>Impari i movimenti fondamentali con carichi leggeri e tecnica pulita.</p></li>
            <li><span className="tappe__w">Settimane 5–8</span><h3>Progressione</h3><p>I carichi salgono un po' alla volta. A metà percorso rifacciamo i test.</p></li>
            <li><span className="tappe__w">Settimane 9–12</span><h3>Consolidamento</h3><p>Il lavoro diventa abitudine. Confrontiamo i numeri con quelli del primo giorno.</p></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="rowhead"><h2>Tre programmi</h2><a className="textlink" href="programmi.html">Dettagli e prezzi</a></div>
          <ul className="progs">
            {programmi.map(p => (
              <li key={p.id} className={`prog prog--${p.color}`}>
                <h3><a href={`programmi.html#${p.id}`}>{p.t}</a></h3>
                <p>{p.per}.</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta />
    </main>
    <Footer />
  </>
);

const Programmi = () => (
  <>
    <Header current="programmi.html" />
    <main id="contenuto">
      <section className="pagehead"><div className="wrap pagehead__in">
        <h1>Programmi e prezzi</h1>
        <p className="lead">Tre percorsi diversi con la stessa struttura: valutazione, piano scritto, verifiche regolari. Scegli quello più vicino al tuo obiettivo, il resto lo adattiamo.</p>
      </div></section>
      <section className="section">
        <div className="wrap proglist">
          {programmi.map(p => (
            <article key={p.id} id={p.id} className={`progcard progcard--${p.color}`}>
              <div className="progcard__head"><h2>{p.t}</h2><p>{p.per}</p></div>
              <div className="progcard__body">
                <p>{p.d}</p>
                <ul className="ticks">{p.pts.map(x => <li key={x}>{x}</li>)}</ul>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--tint" id="prezzi">
        <div className="wrap">
          <h2 className="h-wide">Prezzi</h2>
          <div className="table-scroll">
            <table className="prices">
              <thead><tr><th scope="col">Formula</th><th scope="col">Cosa comprende</th><th scope="col">Prezzo</th></tr></thead>
              <tbody>
                <tr><th scope="row">Valutazione iniziale</th><td>45 minuti, test e piano scritto</td><td>Gratuita</td></tr>
                <tr><th scope="row">Seduta singola</th><td>60 minuti in studio o all'aperto</td><td>55 €</td></tr>
                <tr><th scope="row">Pacchetto 10 sedute</th><td>Da usare entro tre mesi, con scheda per casa</td><td>480 €</td></tr>
                <tr><th scope="row">Allenamento in coppia</th><td>60 minuti in due, stesso obiettivo o obiettivi diversi</td><td>35 € a persona</td></tr>
              </tbody>
            </table>
          </div>
          <p className="fine">Le sedute si possono spostare gratuitamente fino a 12 ore prima.</p>
        </div>
      </section>
      <Cta />
    </main>
    <Footer />
  </>
);

const ChiSono = () => (
  <>
    <Header current="chi-sono.html" />
    <main id="contenuto">
      <section className="pagehead"><div className="wrap pagehead__in">
        <h1>Chi sono</h1>
        <p className="lead">Mi chiamo Marco, sono laureato in Scienze motorie e alleno persone a Como da nove anni. Non ex atleti: impiegati, insegnanti, neogenitori, pensionati.</p>
      </div></section>
      <section className="section">
        <div className="wrap bio">
          <div className="bio__text">
            <h2>Come lavoro</h2>
            <p>Ho cominciato in una grande palestra, dove vedevo le stesse persone iscriversi a gennaio e sparire a marzo. Il problema non era la motivazione: era un programma uguale per tutti, senza nessuno che lo spiegasse.</p>
            <p>Da allora lavoro solo uno a uno o in coppia. Ogni piano parte da una valutazione e viene riscritto ogni quattro settimane in base a quello che dicono i numeri, non a come mi sembra che stia andando.</p>
            <p>Se hai un problema di salute o esci da un infortunio, lavoro insieme al tuo medico o al tuo fisioterapista. Il mio compito è allenarti, la diagnosi resta a loro.</p>
          </div>
          <dl className="creds">
            <div><dt>Formazione</dt><dd>Laurea in Scienze motorie e sportive</dd></div>
            <div><dt>Esperienza</dt><dd>Nove anni di personal training a Como</dd></div>
            <div><dt>Specializzazioni</dt><dd>Allenamento della forza, rieducazione al movimento, primo soccorso e uso del defibrillatore</dd></div>
            <div><dt>Dove</dt><dd>Studio privato in Via Milano e sedute all'aperto sul lungolago</dd></div>
          </dl>
        </div>
      </section>
      <section className="section section--tint">
        <div className="wrap">
          <h2 className="h-wide">Tre regole che non cambio</h2>
          <ul className="rules">
            <li><h3>Prima la tecnica</h3><p>Nessun carico sale finché il movimento non è pulito.</p></li>
            <li><h3>Si misura tutto</h3><p>Forza, mobilità e misure: se non migliora un numero, cambiamo il piano.</p></li>
            <li><h3>Niente promesse</h3><p>Non ti dico quanti chili perderai. Ti dico cosa faremo ogni settimana.</p></li>
          </ul>
        </div>
      </section>
      <Cta />
    </main>
    <Footer />
  </>
);

const Contatti = () => (
  <>
    <Header current="contatti.html" />
    <main id="contenuto">
      <section className="pagehead"><div className="wrap pagehead__in">
        <h1>Contatti</h1>
        <p className="lead">Scrivimi due righe sul tuo obiettivo e sugli orari in cui sei libero. Ti rispondo entro la giornata con due proposte per la valutazione.</p>
      </div></section>
      <section className="section">
        <div className="wrap contact">
          <form className="book" id="prenota" data-demo-form>
            <h2>Prenota la valutazione gratuita</h2>
            <div className="form-grid">
              <div className="field"><label htmlFor="nome">Nome</label><input id="nome" name="nome" autoComplete="given-name" required /></div>
              <div className="field"><label htmlFor="tel">Telefono</label><input id="tel" name="tel" type="tel" autoComplete="tel" required /></div>
              <div className="field full"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" /></div>
              <div className="field full"><label htmlFor="obiettivo">Il tuo obiettivo</label>
                <select id="obiettivo" name="obiettivo"><option>Forza e tono</option><option>Dimagrimento</option><option>Ritorno al movimento</option><option>Non lo so ancora</option></select></div>
              <div className="field full"><label htmlFor="msg">Quando sei libero?</label><textarea id="msg" name="msg" placeholder="Esempio: mattina presto oppure dopo le 18, tranne il giovedì" /></div>
            </div>
            <button className="btn btn--orange" type="submit">Invia la richiesta</button>
            <p className="form-status" data-form-status tabIndex="-1" role="status">Richiesta inviata. In questo sito dimostrativo il modulo non spedisce davvero: sul sito pubblicato il messaggio arriva al trainer.</p>
          </form>
          <div className="contact__info">
            <div><h2>Studio</h2><p>Via Milano 48, 22100 Como<br />A dieci minuti a piedi dalla stazione Como San Giovanni.</p></div>
            <div><h2>All'aperto</h2><p>Ritrovo ai Giardini a Lago, davanti al Tempio Voltiano.</p></div>
            <div><h2>Orari</h2><p>Lunedì–venerdì 6:30–21:00<br />Sabato 8:00–13:00</p></div>
            <div><h2>Telefono</h2><p><a href="tel:+390310000001">031 000 0001</a></p><a className="btn btn--line" href="#prenota">Scrivimi su WhatsApp</a></div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export const site = {
  name: 'Marco Riva Personal Trainer', domain: 'marcoriva.vocaia.com', themeColor: '#0E1B5C',
  fonts: [
    { family: 'Unbounded', weight: '200 900', src: F + '@fontsource-variable/unbounded/files/unbounded-latin-wght-normal.woff2' },
    { family: 'Instrument Sans', weight: '400 700', src: F + '@fontsource-variable/instrument-sans/files/instrument-sans-latin-wght-normal.woff2' },
  ],
  jsonld: {
    '@context': 'https://schema.org', '@type': 'HealthClub', name: 'Marco Riva Personal Trainer',
    description: "Personal training a Como, in studio e all'aperto sul lungolago. Valutazione iniziale gratuita.",
    url: 'https://marcoriva.vocaia.com/', telephone: '+39 031 000 0001', priceRange: '€€',
    address: { '@type': 'PostalAddress', streetAddress: 'Via Milano 48', postalCode: '22100', addressLocality: 'Como', addressRegion: 'CO', addressCountry: 'IT' },
    openingHoursSpecification: [
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '06:30', closes: '21:00' },
      { '@type': 'OpeningHoursSpecification', dayOfWeek: ['Saturday'], opens: '08:00', closes: '13:00' }],
  },
  pages: [
    { file: 'index.html', slug: '', Component: Home, title: 'Marco Riva | Personal trainer a Como, in studio e sul lungolago', description: "Personal training a Como con un piano scritto su misura. Sedute in studio e all'aperto, valutazione iniziale gratuita di 45 minuti." },
    { file: 'programmi.html', slug: 'programmi', Component: Programmi, title: 'Programmi e prezzi | Marco Riva Personal Trainer Como', description: 'Forza e tono, dimagrimento, ritorno al movimento dopo uno stop. Seduta singola 55 €, pacchetto 10 sedute 480 €, valutazione gratuita.' },
    { file: 'chi-sono.html', slug: 'chi-sono', Component: ChiSono, title: 'Chi sono | Marco Riva Personal Trainer Como', description: 'Laureato in Scienze motorie, alleno persone a Como da nove anni, uno a uno o in coppia. Prima la tecnica, si misura tutto, niente promesse.' },
    { file: 'contatti.html', slug: 'contatti', Component: Contatti, title: 'Contatti | Prenota la valutazione gratuita con Marco Riva', description: "Prenota la valutazione gratuita: studio in Via Milano 48 a Como e sedute all'aperto ai Giardini a Lago. Risposta entro la giornata." },
  ],
};
