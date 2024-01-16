function loadContent() {
    const hash = window.location.hash.substr(1);
    const contentElement = document.getElementById('content');

    // If the hash is empty or it's not one of the predefined pages, load a default page
    const validPages = ['about', 'shop', 'contact'];
    const pageToLoad = validPages.includes(hash) ? hash : 'about';

    // Load content based on the hash or show a default message
    fetch(`${pageToLoad}.html`)
        .then(response => response.text())
        .then(html => {
            contentElement.innerHTML = html;
            highlightNavLink(pageToLoad);
        })
        .catch(error => {
            console.error(`Error loading content: ${error}`);
            contentElement.innerHTML = '<h2>Page not found</h2><p>Please navigate using the links in the navigation bar.</p>';
        });
}

function highlightNavLink(page) {
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${page}`) {
            link.classList.add('active');
        }
    });
}

// Event listener for hash changes (navigation)
window.addEventListener('hashchange', loadContent);

// Initial load of content when the page loads
window.addEventListener('load', loadContent);


