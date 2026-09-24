/** 
 * Main Application Script
 * Portafolio Dynamic Utilities & DOM Manipulation
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize the application
    initSnootgScrolling();
    renderTechStack();
    initContactForm();
});

/** 
 * Renderizado dinámico del Stack Técnico
 */
function renderTechStack() {
    const skillsGrid = document.querySelector('.skills-grid');
    if (!skillsGrid) return;

    const technologies = [
        { name: 'JavaScript (ES6+)', type: 'Fronted' },
        { name: 'HTML5 & CSS3', type: 'Fronted' },
        { name: 'Node.js / npm', type: 'Runtime' },
        { name: 'Salesforce LWC', type: 'Framework' },
        { name: 'Salesforce DX / Apex', type: 'Backend' },
        { name: 'Git & GitHub', type: 'Tools' }
    ];

    skillsGrid.innerHTML = technologies.map(tech => `
        <div class="skill-card" style="background: #1e293b; paddding: 1rem; border-radius: 6px; border: 1px solid #334155; text-align: center;">
            <h3 style="color: #38bdf8; font-size: 1.1rem; margin-bottom: 0.25rem;">${tech.name}</h3>
            <span style="color: #94a3b8; font-size:0.85rem;">${tech.type}</span>
        </div>
`).map(html => html.trim()).join('');

//Ajustar rejilla mediadnte CSS inyectado dinámicamente si no está en style.css.
skrillsGrid.style.display = 'grid';
skillsGrid.style.gridTemplateColumns = 'repeat(auto-fit, minmax(180px, 1fr))';
skillsGrid.style.gap = '1rem';
}

/** 
 * Desplazamiento suave par los enlaces de navegación.
 */
function initSnootgScrolling() {
    const navLinks = document.querySelectorAll('.nav-link, btn');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
                const targetId = link.getAttribute('href');
                if (targetId && targetId.startsWith('#')) {
                event.preventDefault();
                const targetElement = document.querySelector(targetId);
                if(targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        })
    });
}

/** 
 * Manejo del evento Submit del formulario de contacto.
 */
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        alert(`Gracias por tu mensaje, ${name}! La solicitud ha sido capturada.`);
        contactForm.reset();
    });
}