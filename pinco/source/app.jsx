// Pinco Imballaggi Industriali: one React application, every page of the site lives in this file.
const F = 'node_modules/';
const info = {
  name: 'Pinco Imballaggi Industriali',
  street: "Via dell'Artigianato 12", city: 'Cantù', zip: '22063', prov: 'CO',
  phone: '031 000 0000', email: 'info@pinco.example', hours: 'Dal lunedì al venerdì, 8:00–12:00 e 13:30–17:30',
};

const nav = [
  ['index.html', 'Home'], ['prodotti-e-servizi.html', 'Prodotti e servizi'],
  ['azienda.html', 'Azienda'], ['contatti.html', 'Contatti'],
];

/* Handling marks, drawn the way they are stencilled on a crate */
const Mark = ({ kind }) => {
  const common = { viewBox: '0 0 64 64', width: 56, height: 56, fill: 'none', stroke: 'currentColor', strokeWidth: 4, strokeLinecap: 'square', 'aria-hidden': true };
  if (kind === 'up') return (<svg {...common}><path d="M20 30 L20 14 M12 22 L20 12 L28 22 M44 30 L44 14 M36 22 L44 12 L52 22 M8 52 H56" /></svg>);
  if (kind === 'fragile') return (<svg {...common}><path d="M20 8 H44 V22 C44 30 38 34 32 34 C26 34 20 30 20 22 Z M32 34 V52 M20 54 H44 M30 12 L34 18 L29 22" /></svg>);
  return (<svg {...common}><path d="M8 30 C8 16 20 8 32 8 C44 8 56 16 56 30 Z M32 30 V50 C32 55 24 55 24 50 M14 40 v6 M48 40 v6 M40 44 v6" /></svg>);
};

const Header = ({ current }) => (
  <header className="site-header">
    <a className="skip" href="#contenuto">Vai al contenuto</a>
    <div className="wrap nav">
      <a className="nav__brand" href="index.html" aria-label="Pinco Imballaggi Industriali, home">
        <span className="brand-box">PINCO</span><span className="brand-sub">Imballaggi industriali</span>
      </a>
      <button className="nav__toggle" data-nav-toggle aria-expanded="false" aria-controls="menu" aria-label="Apri il menu">
        <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="3"><path d="M3 7h22M3 14h22M3 21h22" /></svg>
      </button>
      <nav className="nav__links" id="menu" data-nav-links aria-label="Menu principale">
        {nav.slice(1).map(([href, label]) => (
          <a key={href} href={href} aria-current={current === href ? 'page' : undefined}>{label}</a>
        ))}
        <a className="btn btn--red" href="contatti.html#preventivo">Richiedi un preventivo</a>
      </nav>
    </div>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="slats" aria-hidden="true" />
    <div className="wrap footer__grid">
      <div>
        <p className="footer__name">Pinco Imballaggi Industriali S.r.l.</p>
        <p>{info.street}<br />{info.zip} {info.city} ({info.prov})</p>
      </div>
      <div>
        <p className="footer__h">Contatti</p>
        <p><a href="tel:+390310000000">{info.phone}</a><br /><a href="mailto:info@pinco.example">{info.email}</a></p>
      </div>
      <div>
        <p className="footer__h">Orari</p>
        <p>Lunedì–venerdì<br />8:00–12:00, 13:30–17:30</p>
      </div>
      <nav aria-label="Pagine del sito">
        <p className="footer__h">Sito</p>
        <ul className="footer__links">{nav.map(([h, l]) => <li key={h}><a href={h}>{l}</a></li>)}</ul>
      </nav>
    </div>
    <div className="wrap footer__legal">
      <p>Sito dimostrativo: azienda, indirizzi e numeri sono di esempio.</p>
    </div>
  </footer>
);

const Quote = () => (
  <section className="cta">
    <div className="wrap cta__in">
      <h2>Avete un prodotto difficile da spedire?</h2>
      <p>Mandateci misure, peso e destinazione. Rispondiamo con una proposta di imballo e un preventivo entro due giorni lavorativi.</p>
      <a className="btn btn--ink" href="contatti.html#preventivo">Richiedi un preventivo</a>
    </div>
  </section>
);

const products = [
  { id: 'casse', cap: 'Portata fino a 12 tonnellate', t: 'Casse e gabbie in legno', d: 'Costruite sulle misure del pezzo, con basamento a slitta o a pallet. Abete e OSB trattati ISPM-15, pronte per la spedizione via mare, aerea o su gomma.', spec: [['Materiale', 'Abete, multistrato, OSB'], ['Portata', 'Fino a 12 tonnellate'], ['Tempi', '5–8 giorni lavorativi']] },
  { id: 'pallet', cap: 'Portata da 500 kg a 6 tonnellate', t: 'Pallet standard e fuori misura', d: 'EPAL, a perdere e su disegno per carichi lunghi, pesanti o sbilanciati. Produzione in serie o in piccoli lotti.', spec: [['Formati', 'EPAL 800×1200 e su misura'], ['Portata', 'Da 500 kg a 6 tonnellate'], ['Tempi', '3–5 giorni lavorativi']] },
  { id: 'cartone', cap: 'Portata fino a 800 kg', t: 'Cartone ondulato pesante', d: 'Scatole a tripla onda e contenitori su pallet che sostituiscono il legno quando il peso lo permette. Più leggeri, riciclabili, stampabili.', spec: [['Materiale', 'Doppia e tripla onda'], ['Portata', 'Fino a 800 kg'], ['Tempi', '7–10 giorni lavorativi']] },
  { id: 'barriera', cap: 'Protezione fino a 24 mesi', t: 'Imballo barriera e anticorrosione', d: 'Sacchi barriera termosaldati, sali disidratanti e film VCI per macchinari che viaggiano settimane in container.', spec: [['Protezione', 'Fino a 24 mesi'], ['Norma', 'Calcolo sali DIN 55474'], ['Tempi', 'In giornata, presso di voi']] },
];

const Home = () => (
  <>
    <Header current="index.html" />
    <main id="contenuto">
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__text stack" style={{ '--flow': '1.5rem' }}>
            <h1>Imballaggi industriali su misura, da Cantù a qualsiasi porto.</h1>
            <p className="lead measure">Casse, gabbie, pallet e imballi barriera progettati intorno al vostro prodotto. Trattamento ISPM-15 per l'export e imballaggio direttamente nel vostro stabilimento.</p>
            <div className="hero__actions">
              <a className="btn btn--red" href="contatti.html#preventivo">Richiedi un preventivo</a>
              <a className="btn btn--line" href="prodotti-e-servizi.html">Vedi cosa produciamo</a>
            </div>
          </div>
          <div className="label" role="img" aria-label="Etichetta di spedizione Pinco: mittente Cantù, trattamento ISPM-15, alto, fragile, teme l'umidità">
            <div className="label__row label__row--2">
              <div><span className="label__k">Mittente</span><span className="label__v">Pinco Imballaggi<br />22063 Cantù (CO), Italia</span></div>
              <div><span className="label__k">Collo</span><span className="label__v label__big">1 / 1</span></div>
            </div>
            <div className="label__row">
              <div><span className="label__k">Destinazione</span><span className="label__v label__dest">Il vostro cliente, ovunque sia</span></div>
            </div>
            <div className="label__row label__row--3">
              <div><span className="label__k">Peso lordo</span><span className="label__v">2.480 kg</span></div>
              <div><span className="label__k">Misure cm</span><span className="label__v">320 × 140 × 190</span></div>
              <div><span className="label__k">Trattamento</span><span className="label__v">ISPM-15 HT</span></div>
            </div>
            <div className="label__marks">
              <Mark kind="up" /><Mark kind="fragile" /><Mark kind="dry" />
              <div className="label__bars" aria-hidden="true" />
            </div>
          </div>
        </div>
        <div className="slats" aria-hidden="true" />
      </section>

      <section className="section">
        <div className="wrap">
          <div className="head">
            <h2>Cosa imballiamo</h2>
            <p className="measure">Quattro famiglie di prodotto, una sola regola: l'imballo si disegna sul pezzo, non il contrario.</p>
          </div>
          <ul className="prod">
            {products.map(p => (
              <li key={p.id} className="prod__item">
                <h3><a href={`prodotti-e-servizi.html#${p.id}`}>{p.t}</a></h3>
                <p>{p.d}</p>
                <p className="prod__cap">{p.cap}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--ink">
        <div className="wrap">
          <div className="head">
            <h2>Dal sopralluogo al container, in quattro passaggi</h2>
          </div>
          <ol className="steps">
            <li><span className="steps__n">1</span><h3>Sopralluogo</h3><p>Veniamo da voi, misuriamo il pezzo, individuiamo punti di sollevamento e parti delicate.</p></li>
            <li><span className="steps__n">2</span><h3>Progetto e preventivo</h3><p>Disegno dell'imballo, calcolo dei carichi e prezzo fisso entro due giorni lavorativi.</p></li>
            <li><span className="steps__n">3</span><h3>Produzione</h3><p>Taglio e assemblaggio nel nostro stabilimento di Cantù, con legno già trattato.</p></li>
            <li><span className="steps__n">4</span><h3>Imballaggio e consegna</h3><p>Chiudiamo la cassa da noi o nel vostro reparto e prepariamo i documenti per la spedizione.</p></li>
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="wrap split">
          <div className="stack" style={{ '--flow': '1.25rem' }}>
            <h2>Chi ci affida le proprie spedizioni</h2>
            <p className="measure">Lavoriamo con le aziende della Brianza e del Comasco che esportano: chi costruisce macchine e chi produce arredo di pregio ha lo stesso problema, far arrivare il prodotto intatto.</p>
            <a className="textlink" href="azienda.html">La nostra storia</a>
          </div>
          <dl className="sectors">
            <div><dt>Meccanica e macchine utensili</dt><dd>Basamenti rinforzati, ancoraggi e protezione anticorrosione.</dd></div>
            <div><dt>Arredo e design</dt><dd>Casse su misura per mobili, cucine e pezzi unici destinati a showroom e cantieri esteri.</dd></div>
            <div><dt>Impianti e carpenteria</dt><dd>Gabbie e selle per carichi lunghi e fuori sagoma.</dd></div>
            <div><dt>Elettronica industriale</dt><dd>Imballi antistatici e ammortizzati per quadri e apparecchiature.</dd></div>
          </dl>
        </div>
      </section>
      <Quote />
    </main>
    <Footer />
  </>
);

const Prodotti = () => (
  <>
    <Header current="prodotti-e-servizi.html" />
    <main id="contenuto">
      <section className="pagehead">
        <div className="wrap stack" style={{ '--flow': '1.25rem' }}>
          <h1>Prodotti e servizi</h1>
          <p className="lead measure">Produciamo l'imballo e, se serve, lo montiamo intorno al vostro prodotto. Qui trovate portate, materiali e tempi indicativi per ogni famiglia.</p>
        </div>
        <div className="slats" aria-hidden="true" />
      </section>
      <section className="section">
        <div className="wrap catalog">
          {products.map(p => (
            <article key={p.id} id={p.id} className="catalog__item">
              <div className="stack">
                <h2>{p.t}</h2>
                <p className="measure">{p.d}</p>
              </div>
              <div className="table-scroll">
                <table className="spec">
                  <tbody>{p.spec.map(([k, v]) => <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>)}</tbody>
                </table>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="section section--kraft">
        <div className="wrap">
          <div className="head"><h2>Servizi intorno all'imballo</h2></div>
          <ul className="services">
            <li><h3>Imballaggio presso il cliente</h3><p>Una squadra con attrezzatura propria imballa nel vostro reparto, senza fermare la produzione.</p></li>
            <li><h3>Ritiro e stoccaggio</h3><p>Ritiriamo il pezzo, lo imballiamo a Cantù e lo teniamo a magazzino fino alla partenza.</p></li>
            <li><h3>Documenti per l'export</h3><p>Packing list, dichiarazione ISPM-15 e marcatura dei colli secondo le istruzioni dello spedizioniere.</p></li>
            <li><h3>Fissaggio in container</h3><p>Rizzaggio e bloccaggio del carico, con report fotografico per la vostra assicurazione.</p></li>
          </ul>
        </div>
      </section>
      <Quote />
    </main>
    <Footer />
  </>
);

const Azienda = () => (
  <>
    <Header current="azienda.html" />
    <main id="contenuto">
      <section className="pagehead">
        <div className="wrap stack" style={{ '--flow': '1.25rem' }}>
          <h1>Un'azienda di Cantù, dal 1987</h1>
          <p className="lead measure">Siamo nati come falegnameria al servizio dei mobilifici della zona. Oggi imballiamo macchinari e arredi che partono per più di quaranta paesi.</p>
        </div>
        <div className="slats" aria-hidden="true" />
      </section>
      <section className="section">
        <div className="wrap split">
          <div className="stack measure" style={{ '--flow': '1.1rem' }}>
            <h2>Come siamo arrivati qui</h2>
            <p>Giuseppe Pinco apre il laboratorio nel 1987 per costruire casse ai produttori di mobili di Cantù. Erano imballi fatti uno alla volta, perché ogni mobile era diverso dall'altro.</p>
            <p>Quel modo di lavorare è rimasto. Negli anni Novanta arrivano i primi clienti della meccanica, poi il trattamento termico del legno in sede e il reparto per gli imballi barriera.</p>
            <p>Oggi l'azienda è guidata dalla seconda generazione e occupa ventidue persone tra ufficio tecnico, produzione e squadre esterne.</p>
          </div>
          <dl className="facts">
            <div><dt>1987</dt><dd>Anno di fondazione</dd></div>
            <div><dt>22</dt><dd>Persone in azienda</dd></div>
            <div><dt>3.400 m²</dt><dd>Stabilimento e magazzino coperto</dd></div>
            <div><dt>40+</dt><dd>Paesi di destinazione</dd></div>
          </dl>
        </div>
      </section>
      <section className="section section--ink">
        <div className="wrap">
          <div className="head"><h2>Certificazioni e garanzie</h2></div>
          <ul className="certs">
            <li><h3>ISPM-15</h3><p>Legno trattato termicamente e marchiato in sede, accettato alle dogane di tutto il mondo.</p></li>
            <li><h3>Calcolo dei carichi</h3><p>Ogni cassa oltre i 1.000 kg esce con il suo schema di sollevamento e baricentro.</p></li>
            <li><h3>Assicurazione</h3><p>Copertura di responsabilità civile sul lavoro eseguito presso i clienti.</p></li>
          </ul>
        </div>
      </section>
      <Quote />
    </main>
    <Footer />
  </>
);

const Contatti = () => (
  <>
    <Header current="contatti.html" />
    <main id="contenuto">
      <section className="pagehead">
        <div className="wrap stack" style={{ '--flow': '1.25rem' }}>
          <h1>Contatti</h1>
          <p className="lead measure">Per un preventivo bastano misure, peso e destinazione. Se avete un disegno o una foto del pezzo, ancora meglio.</p>
        </div>
        <div className="slats" aria-hidden="true" />
      </section>
      <section className="section">
        <div className="wrap contact">
          <div className="contact__info stack" style={{ '--flow': '1.75rem' }}>
            <div><h2>Dove siamo</h2><p>{info.street}<br />{info.zip} {info.city} ({info.prov})</p><p className="small">A cinque minuti dall'uscita Cantù della SS 35 Milano–Meda. Accesso per bilici e autogru.</p></div>
            <div><h2>Telefono ed email</h2><p><a href="tel:+390310000000">{info.phone}</a><br /><a href="mailto:info@pinco.example">{info.email}</a></p></div>
            <div><h2>Orari</h2><p>{info.hours}</p></div>
            <a className="btn btn--wa" href="#preventivo">Scrivici su WhatsApp</a>
          </div>
          <form className="quote" id="preventivo" data-demo-form>
            <h2>Richiedi un preventivo</h2>
            <div className="form-grid">
              <div className="field"><label htmlFor="nome">Nome e cognome</label><input id="nome" name="nome" autoComplete="name" required /></div>
              <div className="field"><label htmlFor="azienda">Azienda</label><input id="azienda" name="azienda" autoComplete="organization" required /></div>
              <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
              <div className="field"><label htmlFor="tel">Telefono</label><input id="tel" name="tel" type="tel" autoComplete="tel" /></div>
              <div className="field full"><label htmlFor="tipo">Cosa dovete spedire?</label>
                <select id="tipo" name="tipo"><option>Macchinario o impianto</option><option>Arredo o pezzi di design</option><option>Componenti in serie</option><option>Altro</option></select></div>
              <div className="field full"><label htmlFor="msg">Misure, peso e destinazione</label><textarea id="msg" name="msg" placeholder="Esempio: tornio 320 × 140 × 190 cm, 2.400 kg, via mare per Houston" required /></div>
            </div>
            <button className="btn btn--red" type="submit">Invia la richiesta</button>
            <p className="form-status" data-form-status tabIndex="-1" role="status">Richiesta inviata. In questo sito dimostrativo il modulo non spedisce davvero: sul sito pubblicato il messaggio arriva all'azienda.</p>
          </form>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export const site = {
  name: info.name, domain: 'pinco.vocaia.com', themeColor: '#16232D',
  fonts: [
    { family: 'Big Shoulders Display', weight: '100 900', src: F + '@fontsource-variable/big-shoulders-display/files/big-shoulders-display-latin-wght-normal.woff2' },
    { family: 'IBM Plex Sans', weight: '400', src: F + '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-400-normal.woff2' },
    { family: 'IBM Plex Sans', weight: '600', src: F + '@fontsource/ibm-plex-sans/files/ibm-plex-sans-latin-600-normal.woff2' },
  ],
  jsonld: {
    '@context': 'https://schema.org', '@type': 'LocalBusiness', name: 'Pinco Imballaggi Industriali S.r.l.',
    description: 'Imballaggi industriali su misura: casse e gabbie in legno, pallet, cartone pesante e imballi barriera.',
    url: 'https://pinco.vocaia.com/', telephone: '+39 031 000 0000', email: 'info@pinco.example',
    address: { '@type': 'PostalAddress', streetAddress: "Via dell'Artigianato 12", postalCode: '22063', addressLocality: 'Cantù', addressRegion: 'CO', addressCountry: 'IT' },
    openingHoursSpecification: [{ '@type': 'OpeningHoursSpecification', dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '08:00', closes: '17:30' }],
    areaServed: 'Lombardia',
  },
  pages: [
    { file: 'index.html', slug: '', Component: Home, title: 'Pinco Imballaggi Industriali | Casse, gabbie e pallet su misura a Cantù', description: "Imballaggi industriali su misura a Cantù (CO): casse e gabbie in legno ISPM-15, pallet, cartone pesante e imballi barriera per l'export." },
    { file: 'prodotti-e-servizi.html', slug: 'prodotti-e-servizi', Component: Prodotti, title: 'Prodotti e servizi | Pinco Imballaggi Industriali', description: 'Casse in legno fino a 12 tonnellate, pallet su misura, cartone a tripla onda, imballi barriera VCI e imballaggio presso il cliente.' },
    { file: 'azienda.html', slug: 'azienda', Component: Azienda, title: 'Azienda | Pinco Imballaggi Industriali, a Cantù dal 1987', description: 'Dal 1987 imballiamo macchinari e arredi che partono dalla Brianza per più di quaranta paesi. Legno trattato ISPM-15 in sede.' },
    { file: 'contatti.html', slug: 'contatti', Component: Contatti, title: 'Contatti e preventivi | Pinco Imballaggi Industriali', description: "Richiedi un preventivo per il tuo imballo: Via dell'Artigianato 12, Cantù (CO). Risposta entro due giorni lavorativi." },
  ],
};
