import React from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowDown, ArrowRight, BriefcaseBusiness, Building2, CalendarDays, Camera, Check, Globe2, Hotel, House, Layers3, MapPinned, Menu, MonitorSmartphone, Play, Sparkles, TabletSmartphone, X } from 'lucide-react';
import './styles.css';

const plans = [
  {name:'Essential', tag:'Espacios pequeños y medianos', intro:'Una experiencia directa, clara y fácil de compartir.', items:['Hasta 30 fotografías panorámicas 360°','Recorrido virtual directo','Hotspots informativos','Visualización web y móvil']},
  {name:'Business', tag:'Hoteles, venues y propiedades', intro:'Una plataforma completa para organizar múltiples espacios.', featured:true, items:['Hasta 60 fotografías panorámicas 360°','Plataforma interactiva personalizada','Menú de áreas','Fotografía, video, hotspots y enlaces','Web, móvil y tablet']},
  {name:'Enterprise', tag:'Proyectos de gran escala', intro:'Una solución flexible para experiencias más complejas.', items:['Hasta 100 fotografías panorámicas 360°','Múltiples áreas o edificios','Integración avanzada de contenido','Mayor personalización visual y funcional']}
];

const sectors = [
  ['Hoteles y resorts','Habitaciones, amenidades, restaurantes y experiencias.',Hotel],
  ['Venues y eventos','Salones, jardines, terrazas y espacios complementarios.',CalendarDays],
  ['Haciendas y quintas','Propiedades amplias con múltiples áreas por descubrir.',House],
  ['Desarrollos inmobiliarios','Modelos, departamentos muestra, amenidades y entorno.',Building2],
  ['Espacios turísticos','Destinos, cabañas y propiedades vacacionales.',MapPinned],
  ['Proyectos corporativos','Campus, clubes, hospitales y espacios de gran escala.',BriefcaseBusiness]
];

const portfolioProjects = [
  {name:'Casa Loreto 1893', client:'Hotel boutique', location:'Mérida, Yucatán', type:'Plataforma interactiva', kind:'platform', image:'/projects/casa-loreto.jpg', url:'https://casaloreto1893.netlify.app/'},
  {name:'Quinta Montes Molina', client:'Quinta y venue', location:'Mérida, Yucatán', type:'Plataforma interactiva', kind:'platform', image:'/projects/quinta-montes-molina.jpg', url:'https://quintamm.netlify.app/'},
  {name:'Bosques de Monterreal', client:'Mountain resort', location:'Arteaga, Coahuila', type:'Plataforma interactiva', kind:'platform', image:'/projects/bosques-monterreal.jpg', url:'https://monterreal.netlify.app/'},
  {name:'Las Nubes Eventos', client:'Salones y jardines', location:'Santiago, Nuevo León', type:'Plataforma interactiva', kind:'platform', image:'/projects/las-nubes.jpg', url:'https://nubeseventos.netlify.app/'},
  {name:'Quinta Villa de Cristo', client:'Quinta para eventos', location:'Santiago, Nuevo León', type:'Recorrido 360°', kind:'tour', image:'/projects/villa-de-cristo.jpg', url:'https://kuula.co/share/collection/7Mm9d?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'},
  {name:'Quinta Campestre Osmar', client:'Quinta para eventos', location:'Cadereyta, Nuevo León', type:'Recorrido 360°', kind:'tour', image:'/projects/quinta-osmar.jpg', url:'https://kuula.co/share/collection/7MZqW?logo=0&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'},
  {name:'Salón Jardín', client:'Las Nubes Eventos', location:'Santiago, Nuevo León', type:'Recorrido 360°', kind:'tour', image:'/projects/salon-jardin.jpg', url:'https://kuula.co/share/collection/7DQrP?logo=1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'},
  {name:'Salón Nubes', client:'Las Nubes Eventos', location:'Santiago, Nuevo León', type:'Recorrido 360°', kind:'tour', image:'/projects/salon-nubes.jpg', url:'https://kuula.co/share/collection/7DrL4?logo=1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'},
  {name:'Cabaña Yellowstone', client:'Bosques de Monterreal', location:'Arteaga, Coahuila', type:'Recorrido 360°', kind:'tour', image:'/projects/cabana-yellowstone.jpg', url:'https://kuula.co/share/collection/7T0bn?logo=1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'},
  {name:'Spa', client:'Bosques de Monterreal', location:'Arteaga, Coahuila', type:'Recorrido 360°', kind:'tour', image:'/projects/spa-monterreal.jpg', url:'https://kuula.co/share/collection/7T0Hs?logo=1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'},
  {name:'Habitación Master', client:'Casa Loreto 1893', location:'Mérida, Yucatán', type:'Recorrido 360°', kind:'tour', image:'/projects/habitacion-master.jpg', url:'https://kuula.co/share/collection/7TpqS?logo=1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'},
  {name:'Oficinas', client:'Las Nubes Eventos', location:'Santiago, Nuevo León', type:'Recorrido 360°', kind:'tour', image:'/projects/oficinas-las-nubes.jpg', url:'https://kuula.co/share/collection/7TXlk?logo=1&info=0&fs=1&vr=1&sd=1&initload=0&thumbs=1'}
];

function Portfolio(){
  const [filter,setFilter]=React.useState('all');
  const visible=filter==='all'?portfolioProjects:portfolioProjects.filter(project=>project.kind===filter);
  return <><header className="nav portfolio-nav"><a className="brand" href="/" aria-label="Volver a Immersion Studio"><img src="/logo-immersion.png" alt="Immersion Studio"/></a><nav><a href="/">Inicio</a><a className="nav-cta" href="/#contacto">Solicitar demo</a></nav></header><main className="portfolio-page"><section className="portfolio-hero dark"><p className="eyebrow">PROYECTOS IMMERSION</p><h1>Conoce algunos de nuestros proyectos.</h1><p>Una selección de experiencias virtuales, plataformas interactivas y recorridos 360° creados para distintos tipos de espacios.</p></section><section className="portfolio-content"><div className="portfolio-filters" aria-label="Filtrar proyectos"><button className={filter==='all'?'active':''} onClick={()=>setFilter('all')}>Todos</button><button className={filter==='platform'?'active':''} onClick={()=>setFilter('platform')}>Plataformas interactivas</button><button className={filter==='tour'?'active':''} onClick={()=>setFilter('tour')}>Recorridos 360°</button></div><div className="portfolio-grid">{visible.map(project=><a className="portfolio-card" href={project.url} target="_blank" rel="noreferrer" key={`${project.client}-${project.name}`}><div className="portfolio-image"><img src={project.image} alt={`${project.name}, ${project.client}`}/><span>{project.type}</span></div><div className="portfolio-meta"><small>{project.client} · {project.location}</small><h2>{project.name}</h2><span>Explorar proyecto <ArrowRight/></span></div></a>)}</div></section><section className="cta"><div><p className="eyebrow">EMPECEMOS UN PROYECTO</p><h2>¿Quieres presentar tus espacios de esta manera?</h2></div><a className="button light" href="mailto:hola@immersion.mx">Solicitar una demo <ArrowRight/></a></section></main></>
}

function App(){
  const [open,setOpen]=React.useState(false);
  const close=()=>setOpen(false);
  return <>
    <header className="nav"><a className="brand" href="#top" aria-label="Immersion Studio inicio"><img src="/logo-immersion.png" alt="Immersion Studio"/></a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Abrir menú">{open?<X/>:<Menu/>}</button><nav className={open?'open':''}><a onClick={close} href="#soluciones">Soluciones</a><a onClick={close} href="#aplicaciones">Aplicaciones</a><a onClick={close} href="#proyectos">Proyectos</a><a onClick={close} href="#planes">Planes</a><a onClick={close} className="nav-cta" href="#contacto">Solicitar demo</a></nav></header>

    <main id="top">
      <section className="hero dark">
        <div className="orb one"/><div className="orb two"/>
        <div className="hero-copy"><p className="eyebrow">RECORRIDOS 360° · PLATAFORMAS INTERACTIVAS</p><h1>Convierte tus espacios en una <em>experiencia interactiva.</em></h1><p className="lead">Creamos recorridos virtuales 360° y plataformas interactivas para presentar propiedades, hoteles, venues y desarrollos de forma inmersiva y fácil de explorar.</p><div className="actions"><a className="button primary" href="#proyectos">Ver proyectos <ArrowRight/></a><a className="button ghost" href="#contacto">Solicitar una demo</a></div></div>
        <div className="experience" aria-label="Vista de una experiencia virtual 360°"><div className="xp-top"><span>IMMERSION / RECORRIDO 360°</span><span>01 — 05</span></div><div className="xp-scene hero-tour"><span className="hotspot h1">+</span><span className="hotspot h2">+</span><span className="room-label">EXPERIENCIA 360°<br/><small>Explorar espacio</small></span></div><div className="xp-bottom"><span>←</span><div><b>Experiencia 360°</b><small>Navega · Descubre · Decide</small></div><span>→</span></div></div>
        <a className="scroll" href="#soluciones"><ArrowDown/> Descubre Immersion</a>
      </section>

      <section className="intro section" id="soluciones"><div className="section-label">01 / QUÉ HACEMOS</div><div className="intro-grid"><h2>Experiencias virtuales que transforman la forma de presentar tus espacios.</h2><div><p className="big-copy">Integramos navegación, fotografía, video, información y contenido multimedia en una sola experiencia digital.</p><p>Cada proyecto se diseña para comunicar mejor el valor de una propiedad y hacer que explorarla sea claro, visual y memorable.</p></div></div><div className="service-grid"><article><Camera/><span>01</span><h3>Recorridos 360°</h3><p>Captura panorámica profesional de habitaciones, áreas, amenidades y espacios principales.</p></article><article><Layers3/><span>02</span><h3>Plataformas interactivas</h3><p>Navegación por áreas, hotspots, información, imágenes, video y enlaces en un solo lugar.</p></article><article><Sparkles/><span>03</span><h3>Experiencias personalizadas</h3><p>Diseño, estructura y contenido adaptados a la identidad y necesidades de cada proyecto.</p></article></div></section>

      <section className="steps dark section"><div className="section-label">02 / CÓMO FUNCIONA</div><h2>Exploran.<br/>Conocen.<br/><em>Deciden.</em></h2><div className="step-list"><article><b>01</b><div><h3>Exploran</h3><p>Recorren los espacios libremente desde cualquier dispositivo.</p></div></article><article><b>02</b><div><h3>Conocen</h3><p>Descubren áreas, servicios, amenidades y puntos relevantes dentro de una misma experiencia.</p></div></article><article><b>03</b><div><h3>Deciden</h3><p>Acceden a mayor contexto antes de reservar, visitar o continuar un proceso comercial.</p></div></article></div></section>

        <section className="platform section"><div className="section-label">03 / LA PLATAFORMA</div><div className="platform-grid"><div><h2>Todo el contenido en una sola experiencia.</h2><p className="big-copy">Un entorno intuitivo que conecta recorridos 360°, fotografías, video, información y navegación entre diferentes áreas.</p><ul className="check-list"><li><Check/> Experiencia adaptada a tu identidad</li><li><Check/> Contenido organizado y fácil de actualizar</li><li><Check/> Acceso directo o integración en tu sitio</li></ul></div><div className="device-showcase" aria-label="Plataforma interactiva adaptada a computadora y celular"><div className="showcase-glow"/><div className="device-laptop"><div className="device-camera"/><div className="device-display"><img src="/plataforma-monterreal.jpg" alt="Plataforma de Bosques de Monterreal en computadora"/></div><div className="laptop-base"/></div><div className="device-phone"><div className="phone-speaker"/><div className="device-display"><img src="/plataforma-monterreal.jpg" alt="Plataforma de Bosques de Monterreal en celular"/></div></div></div></div></section>

      <section className="device-band"><div><Globe2/><h3>Web</h3><p>Enlace directo o integrado en tu sitio.</p></div><div><TabletSmartphone/><h3>Móvil y tablet</h3><p>Una experiencia adaptada a cada pantalla.</p></div><div><MonitorSmartphone/><h3>Realidad virtual</h3><p>Presentaciones, exposiciones y usos inmersivos.</p></div></section>

        <section className="applications section" id="aplicaciones"><div className="section-label">04 / APLICACIONES</div><div className="split-head"><h2>Una experiencia para cada tipo de espacio.</h2><p>Soluciones flexibles para hospitality, eventos, real estate y proyectos de mayor escala.</p></div><div className="sector-grid">{sectors.map((s,i)=>{const Icon=s[2];return <article key={s[0]}><span>{String(i+1).padStart(2,'0')}</span><Icon/><h3>{s[0]}</h3><p>{s[1]}</p></article>})}</div></section>

        <section className="projects dark section" id="proyectos"><div className="section-label">05 / PROYECTOS</div><div className="split-head projects-head"><h2>Proyectos Immersion.</h2><a className="button ghost" href="/proyectos">Ver proyectos <ArrowRight/></a></div><div className="project-card"><div className="project-art"><img src="/casa-loreto.jpg" alt="Experiencia virtual 360° de Casa Loreto 1893"/></div><div className="project-info"><small>HOTEL · MÉRIDA, YUCATÁN</small><h3>Casa Loreto</h3><p>Experiencia virtual para presentar habitaciones, espacios comunes y la identidad de la propiedad.</p><a className="text-link" href="https://casaloreto1893.netlify.app/" target="_blank" rel="noreferrer">Ver experiencia 360° <ArrowRight/></a></div></div></section>

      <section className="pricing section" id="planes"><div className="section-label">06 / PLANES</div><div className="split-head"><h2>Una solución para cada proyecto.</h2><p>Elige un punto de partida. Cada experiencia puede adaptarse a tus espacios, contenidos y objetivos.</p></div><div className="plans">{plans.map(p=><article className={p.featured?'featured':''} key={p.name}>{p.featured&&<span className="recommended">MÁS COMPLETO</span>}<small>{p.tag}</small><h3>{p.name}</h3><p>{p.intro}</p><ul>{p.items.map(x=><li key={x}><Check/>{x}</li>)}</ul><a href="#contacto">Solicitar cotización <ArrowRight/></a></article>)}</div><p className="custom">¿Necesitas algo diferente? <b>Desarrollamos soluciones personalizadas según el proyecto.</b></p></section>

      <section className="commercial dark section"><div className="section-label">07 / USOS COMERCIALES & VR</div><div className="commercial-grid"><h2>Una herramienta para presentar, vender y compartir espacios.</h2><div className="use-list">{['Presentaciones comerciales','Ferias y exposiciones','WhatsApp y correo','Sitios web','Showrooms','Realidad virtual'].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><b>{x}</b><ArrowRight/></div>)}</div></div></section>

      <section className="process section"><div className="section-label">08 / PROCESO</div><h2>Nos encargamos de todo el proceso.</h2><div className="process-line">{['Planeación','Captura 360°','Postproducción','Diseño de experiencia','Integración','Publicación y entrega'].map((x,i)=><div key={x}><span>{i+1}</span><p>{x}</p></div>)}</div></section>

      <section className="cta" id="contacto"><div><p className="eyebrow">EMPECEMOS UN PROYECTO</p><h2>Convierte tus espacios en una experiencia interactiva.</h2></div><a className="button light" href="mailto:hola@immersion.mx">Solicitar una demo <ArrowRight/></a></section>
    </main>
    <footer><a className="brand footer-brand" href="#top"><img src="/logo-immersion.png" alt="Immersion Studio"/></a><div><a href="mailto:hola@immersion.mx">hola@immersion.mx</a><p>Monterrey, México</p></div><p>© {new Date().getFullYear()} Immersion Studio</p></footer>
  </>
}

createRoot(document.getElementById('root')).render(window.location.pathname.startsWith('/proyectos')?<Portfolio/>:<App/>);
