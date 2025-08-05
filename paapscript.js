
// Dynamicky vložíme CSS link do hlavičky
const cssLink = document.createElement('link');
cssLink.rel = 'stylesheet';
cssLink.href = 'https://raw.githubusercontent.com/Pablo-963/papamartin-web-edit/main/papastyles.css';
document.head.appendChild(cssLink);






// vytvoření overall-wrapperu a přesunutí obsahu do něj
const overallWrapper = document.createElement('div');
overallWrapper.classList.add('overall-wrapper');

// přesuneme vše z body kromě scriptů a stylů do overall-wrapper
[...document.body.childNodes].forEach(node => {
    if (node.tagName !== 'SCRIPT' && node.tagName !== 'STYLE') {
        overallWrapper.appendChild(node);
    }
});
document.body.appendChild(overallWrapper);

// Vytvoření vlastního scroll indikátoru
const scrollIndicator = document.createElement('div');
scrollIndicator.classList.add('custom-scroll-indicator');
document.body.appendChild(scrollIndicator);

// Funkce pro aktualizaci pozice indikátoru
function updateScrollIndicator() {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPosition = window.scrollY;
    const scrollPercentage = (scrollPosition / scrollHeight) * 100;

    scrollIndicator.style.top = `${scrollPercentage}%`;
}

// Naslouchání scroll události
window.addEventListener('scroll', updateScrollIndicator);
window.addEventListener('resize', updateScrollIndicator);

// Inicializace
updateScrollIndicator();