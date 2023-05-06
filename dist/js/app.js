// ====menu====
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId);
	const nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu');
		});
	}
};

showMenu('nav_toggle', 'nav_menu');

// vanish-mobile-menu
const navLink = document.querySelectorAll('.nav-link');

function linkAction() {
	const navMenu = document.getElementById('nav_menu');
	navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

// scroll-to-section-on-active-link
const activeSection = document.querySelectorAll('section[id]');

function scrollToActiveSection() {
	const scrollY = window.pageYOffset;

	activeSection.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50;
		sectionId = current.getAttribute('id');

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			document
				.querySelector('.nav-menu a[href*=' + sectionId + ']')
				.classList.add('active-link');
		} else {
			document
				.querySelector('.nav-menu a[href*=' + sectionId + ']')
				.classList.remove('active-link');
		}
	});
}

window.addEventListener('scroll', scrollToActiveSection);

// show-scroll-to-top
function scrollToTop() {
	const scrollTop = document.getElementById('scroll-top');

	if (this.scrollY >= 200) scrollTop.classList.add('show-scroll-btn');
	else scrollTop.classList.remove('show-scroll-btn');
}

window.addEventListener('scroll', scrollToTop);

//dark-mode js
const themeBtn = document.getElementById('dark-mode-btn');
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = () =>
	document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = () =>
	document.body.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';

if (selectedTheme) {
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
	document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](
		darkTheme
	);
}

themeBtn.addEventListener('click', () => {
	document.body.classList.toggle(darkTheme);
	themeBtn.classList.toggle(iconTheme);

	localStorage.setItem('selected-theme', getCurrentTheme());
	localStorage.setItem('selected-icon', getCurrentIcon());
});

// scale-handlers

// -------add scale-----
function scaleToPdf() {
	document.body.classList.add('scale-cv');
}

// -------remove scale-----
function removeScaleToPdf() {
	document.body.classList.remove('scale-cv');
}

// pdf-handlers
let genPdf = document.getElementById('cv-button');
let printCv = document.getElementById('print-cv');

//-----function to generate resume as pdf

function generateCV() {
	html2pdf(printCv, opt);
}
// -----call scale-handler functions-----
genPdf.addEventListener('click', () => {
	scaleToPdf();
	generateCV();
	setTimeout(removeScaleToPdf, 5000);
});

let opt = {
	margin: 0,
	filename: 'clinton otieno - resume.pdf',
	image: { type: 'jpeg', quality: 0.98 },
	html2canvas: { scale: 4 },
	jsPDF: { format: 'a4', orientation: 'portrait' },
};
