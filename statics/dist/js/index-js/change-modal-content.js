
  const modalContent = {
      'btn-about': {
          title: 'El Equipo',
          body: `
        <div style="text-align:center;">
          <span style="color:#1976d2;">
            <i class="fas fa-users"></i>
          </span>
          <h5 style="margin-top:0.5rem; color:#1976d2;">Somos AscenDev</h5>
          <p>
            <strong>Desarrollo de software = mejora constante.</strong><br>
            Somos un equipo joven y dinámico: cada proyecto es una oportunidad para crecer, aprender y alcanzar nuevos niveles de excelencia.
          </p>
        </div>
        <div style="margin:1rem 0;">
          <span style="color:#fbbc05;"><i class="fas fa-handshake"></i></span>
          <strong style="color:#285563;">Relaciones duraderas</strong>
          <p style="margin-bottom:0.5rem;">
            Más que soluciones digitales, buscamos construir relaciones sólidas y entregar productos que superen expectativas.
          </p>
        </div>
        <div>
          <ul style="list-style:none; padding:0;">
            <li style="margin-bottom:0.7rem;">
              <span style="color:#1976d2;"><i class="fas fa-smile-beam"></i></span>
              <strong> Satisfacción del cliente:</strong> Su visión es nuestra prioridad. Trabajamos de la mano para lograr un resultado perfecto.
            </li>
            <li>
              <span style="color:#7952B3;"><i class="fas fa-graduation-cap"></i></span>
              <strong> Aprendizaje continuo:</strong> Cada desafío nos impulsa a crecer y ofrecer soluciones cada vez más innovadoras.
            </li>
          </ul>
        </div>
      `
      },
      'btn-skills': {
          title: 'Servicios',
          body: `
        <div class="tech-carousel-wrapper">
          <button class="carousel-arrow left" aria-label="Anterior"><i class="fas fa-chevron-left"></i></button>
          <div class="tech-carousel" id="techCarousel">
            <!-- Los íconos se llenan por JS -->
          </div>
          <button class="carousel-arrow right" aria-label="Siguiente"><i class="fas fa-chevron-right"></i></button>
        </div>
        <div style="text-align:center; margin-top:1rem;">
          <small>¡Descubre lo que podemos hacer con cada tecnología!</small>
        </div>
        <div id="tech-desc" style="margin-top:1.2rem; text-align:center; min-height:2.5em;">
          <!-- Aquí irá la descripción -->
        </div>
      `
      },
      'btn-projects': {
          title: 'Portafolio',
          body: `
        <div style="display: flex; flex-direction: column; gap: 1.2rem;">
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="color:#1976d2;">
              <i class="fas fa-utensils"></i>
            </span>
            <div>
              <a href="https://tusitio.com/gestion-pedidos" target="_blank" class="project-link" style="font-weight:600; color:#1976d2; text-decoration:none;">
                Sistema de gestión de pedidos para restaurante
              </a>
              <div style="color:#285563;">
                Optimiza y controla pedidos en tiempo real para establecimientos de comida.
              </div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 1rem;">
            <span style="font-size:2.2rem; color:#7952B3;">
              <i class="fas fa-building"></i>
            </span>
            <div>
              <a href="https://oltec.pythonanywhere.com/index" target="_blank" class="project-link" style="font-weight:600; color:#7952B3; text-decoration:none;">
                Sistema de gestión para empresas
              </a>
              <div style="color:#285563;">
                Administra recursos, empleados y operaciones de manera eficiente.
              </div>
            </div>
          </div>
          


        </div>
        <div style="margin-top:1.5rem; text-align:center;">
          <span style="display:inline-block; background:#e3f0ff; color:#1976d2; font-weight:600; padding:0.5em 1.2em; border-radius:16px;">
            ¡Atento a nuevos proyectos! Esta sección se actualizará con nuestras próximas soluciones.
          </span>
        </div>
      `
      },
      'btn-contact': {
          title: 'Contáctanos',
          body: `<p>Contáctanos para hacer tus ideas realidad:</p>
        <ul style="list-style:none; padding-left:0;">
          <li style="margin-bottom:0.7em;">
            <i class="fas fa-envelope" style="color:#1976d2; font-size:1.2em; margin-right:0.5em;"></i>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ascendevteam@gmail.com&su=Quiero%20desarrollar%20mi%20idea%20con%20AscenDev&body=Hola%2C%20me%20gustaría%20saber%20más%20sobre%20sus%20servicios." target="_blank" style="text-decoration:none;color: #1b3942;">
              ascendevteam@gmail.com
            </a>
          </li>
          <li style="margin-bottom:0.7em;">
            <i class="fa-brands fa-square-whatsapp" style="color:#25D366; font-size:1.2em; margin-right:0.5em;"></i>
            <a href="https://wa.me/584129516391?text=¡Hola!%20Quiero%20hacer%20realidad%20mi%20idea%20con%20AscenDev." target="_blank" style="text-decoration:none;color: #1b3942;">
              WhatsApp (Daniela)
            </a>
          </li>
          <li>
            <i class="fa-brands fa-square-whatsapp" style="color:#25D366; font-size:1.2em; margin-right:0.5em;"></i>
            <a href="https://wa.me/584128252499?text=¡Hola!%20Quiero%20hacer%20realidad%20mi%20idea%20con%20AscenDev." target="_blank" style="text-decoration:none;color: #1b3942;">
              WhatsApp (Víctor)
            </a>
          </li>
        </ul>`
      }
  };

  // Asigna evento a los botones
  document.querySelectorAll('.card-buttons button').forEach(btn => {
    btn.addEventListener('click', function () {
      const key = Array.from(this.classList).find(cls => modalContent[cls]);
      if (key) {
        document.getElementById('mainModalLabel').innerHTML = modalContent[key].title;
        document.getElementById('mainModalBody').innerHTML = modalContent[key].body;
        const modal = new bootstrap.Modal(document.getElementById('mainModal'));
        modal.show();
      }
    });
  });

// Carrusel de tecnologías para la modal de servicios
const techs = [
  {
    name: "HTML5",
    svg: `<svg viewBox="0 0 32 32" width="54" height="54"><g>
      <polygon fill="#E44D26" points="5.5,28.5 3,4.5 29,4.5 26.5,28.5 16,31.5" />
      <polygon fill="#F16529" points="16,29.5 24.5,27.3 26.5,6.5 16,6.5" />
      <polygon fill="#EBEBEB" points="16,13.5 16,10.5 22.2,10.5 22,12.5 16,12.5" />
      <polygon fill="#EBEBEB" points="16,17.5 16,14.5 21.8,14.5 21.5,16.5 16,16.5" />
      <polygon fill="#EBEBEB" points="16,23.5 16,20.5 19.7,20.5 19.5,22.5 16,22.5" />
      <polygon fill="#FFF" points="16,13.5 16,10.5 9.8,10.5 10,12.5 16,12.5" />
      <polygon fill="#FFF" points="16,17.5 16,14.5 10.2,14.5 10.5,16.5 16,16.5" />
      <polygon fill="#FFF" points="16,23.5 16,20.5 12.3,20.5 12.5,22.5 16,22.5" />
    </g></svg>`,
    desc: "¡Da vida a tus ideas! Base sólida para sitios modernos, rápidos y accessibles."
  },
  {
    name: "CSS3",
    svg: `<svg viewBox="0 0 32 32" width="54" height="54"><g>
      <polygon fill="#264de4" points="5.5,28.5 3,4.5 29,4.5 26.5,28.5 16,31.5" />
      <polygon fill="#2965f1" points="16,29.5 24.5,27.3 26.5,6.5 16,6.5" />
      <polygon fill="#ebebeb" points="16,13.5 16,10.5 22.2,10.5 22,12.5 16,12.5" />
      <polygon fill="#ebebeb" points="16,17.5 16,14.5 21.8,14.5 21.5,16.5 16,16.5" />
      <polygon fill="#ebebeb" points="16,23.5 16,20.5 19.7,20.5 19.5,22.5 16,22.5" />
      <polygon fill="#fff" points="16,13.5 16,10.5 9.8,10.5 10,12.5 16,12.5" />
      <polygon fill="#fff" points="16,17.5 16,14.5 10.2,14.5 10.5,16.5 16,16.5" />
      <polygon fill="#fff" points="16,23.5 16,20.5 12.3,20.5 12.5,22.5 16,22.5" />
    </g></svg>`,
    desc: "¡Haz que tu web deslumbre! Estilos únicos, animaciones y experiencias visuales memorables."
  },
  {
    name: "JavaScript",
    svg: `<svg viewBox="0 0 32 32" width="64" height="64">
      <rect width="32" height="32" rx="6" fill="#f7df1e" />
      <path d="M19.6 24.2c.4.7.9 1.3 1.9 1.3.8 0 1.3-.4 1.3-1 0-.7-.5-.9-1.5-1.3l-.5-.2c-1.5-.6-2.5-1.3-2.5-2.8 0-1.4 1.1-2.4 2.8-2.4 1.2 0 2.1.4 2.7 1.5l-1.5 1c-.3-.6-.7-.8-1.2-.8-.6 0-1 .4-1 .8 0 .6.4.8 1.3 1.2l.5.2c1.7.7 2.7 1.4 2.7 3 0 1.7-1.3 2.6-3 2.6-1.7 0-2.7-.8-3.2-1.8zm-7.2.1c.3.6.6 1.1 1.3 1.1.7 0 1.1-.3 1.1-1.3v-6.2h2.1v6.2c0 2.2-1.3 3.2-3.1 3.2-1.7 0-2.7-.9-3.2-1.9z" fill="#222" />
    </svg>`,
    desc: "¡Haz que tu web cobre vida! Animaciones, efectos y funcionalidades inteligentes."
  },
  {
    name: "Bootstrap",
    svg: `<svg viewBox="0 0 32 32" width="54" height="54">
      <rect width="32" height="32" rx="7" fill="#7952B3" />
      <path d="M11.5 8.5h7a4 4 0 0 1 0 8h-7V8.5zm0 9h7a3 3 0 0 1 0 6h-7v-6z" fill="#fff" />
      <path d="M13.5 10.5h4a2 2 0 0 1 0 4h-4v-4zm0 5.5h4a1.5 1.5 0 0 1 0 3h-4v-3z" fill="#fff" />
    </svg>`,
    desc: "¡Diseño profesional y adaptable! Interfaces modernas y responsivas en tiempo récord."
  },
  {
    name: "Python",
    svg: `<svg viewBox="0 0 32 32" width="54" height="54">
      <defs>
        <linearGradient id="python-a3" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#5A9FD4" />
          <stop offset="1" stop-color="#306998" />
        </linearGradient>
        <linearGradient id="python-b3" x1="16" x2="16" y1="2" y2="30" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#FFD43B" />
          <stop offset="1" stop-color="#FFE873" />
        </linearGradient>
      </defs>
      <path d="M16 2c-7 0-7 3-7 3v4h14V5s0-3-7-3z" fill="url(#python-a3)" />
      <path d="M9 9v4c0 0 0 3 7 3s7-3 7-3V9H9z" fill="url(#python-a3)" />
      <circle cx="11.5" cy="7.5" r="1.5" fill="#fff" />
      <path d="M16 30c7 0 7-3 7-3v-4H9v4s0 3 7 3z" fill="url(#python-b3)" />
      <path d="M23 23v-4c0 0 0-3-7-3s-7 3-7 3v4h14z" fill="url(#python-b3)" />
      <circle cx="20.5" cy="24.5" r="1.5" fill="#fff" />
    </svg>`,
    desc: "¡Automatiza y potencia tu negocio! Soluciones inteligentes, análisis de datos y Backend robusto."
  },
  {
    name: "Django",
    svg: `<svg viewBox="0 0 32 32" width="54" height="54">
      <rect width="32" height="32" rx="7" fill="#092e20" />
      <text x="7" y="24" font-size="16" font-family="Arial, sans-serif" fill="#fff" font-weight="bold">Dj</text>
    </svg>`,
    desc: "¡Webs seguras y escalables! Plataformas sólidas, rápidas y listas para crecer contigo."
  }
];

function renderTechCarousel(centerIdx = 2) {
  const total = techs.length;
  const leftIdx = (centerIdx - 1 + total) % total;
  const rightIdx = (centerIdx + 1) % total;
  const $carousel = document.getElementById('techCarousel');
  if (!$carousel) return;

  $carousel.innerHTML = `
    <div class="tech-item tech-left">
      ${techs[leftIdx].svg}
      <div class="tech-label">${techs[leftIdx].name}</div>
    </div>
    <div class="tech-item tech-center">
      ${techs[centerIdx].svg}
      <div class="tech-label">${techs[centerIdx].name}</div>
    </div>
    <div class="tech-item tech-right">
      ${techs[rightIdx].svg}
      <div class="tech-label">${techs[rightIdx].name}</div>
    </div>
  `;

  // Actualiza la descripción dinámica
  const $desc = document.getElementById('tech-desc');
  if ($desc) {
    $desc.textContent = techs[centerIdx].desc;
  }

  $carousel.classList.add('fade');
  setTimeout(() => $carousel.classList.remove('fade'), 350);
}

let techCenterIdx = 0; // HTML al centro por defecto

// Evento para abrir la modal de servicios y renderizar el carrusel
document.addEventListener('click', function (e) {
  if (e.target.closest('.btn-skills')) {
    techCenterIdx = 0;
    setTimeout(() => renderTechCarousel(techCenterIdx), 100); // Espera a que la modal esté visible
  }
});

// Flechas del carrusel
document.addEventListener('click', function (e) {
  if (e.target.closest('.carousel-arrow.left')) {
    techCenterIdx = (techCenterIdx - 1 + techs.length) % techs.length;
    renderTechCarousel(techCenterIdx);
  }
  if (e.target.closest('.carousel-arrow.right')) {
    techCenterIdx = (techCenterIdx + 1) % techs.length;
    renderTechCarousel(techCenterIdx);
  }
});

//bloque de asistencia qr aqui mientras tanto 
//<div style="display: flex; align-items: center; gap: 1rem;">
//<span style="font-size:2.2rem; color:#fbbc05;">
//<i class="fas fa-qrcode"></i>
//</span>
//<div>
//<a href="https://tusitio.com/asistencia-qr" target="_blank" class="project-link" style="font-weight:600; color:#fbbc05; text-decoration:none;">
//Sistema de asistencia con código QR
//</a>
//<div style="font-size:0.98rem; color:#285563;">
//Controla la asistencia de tu equipo de forma rápida y segura usando QR.
//</div>
//</div>
//</div>