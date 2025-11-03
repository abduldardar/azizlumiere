// Gestion de la date et de l'heure
function updateDateTime() {
    const now = new Date();
    const options = { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const dateTimeStr = now.toLocaleDateString('fr-FR', options);
    
    const datetimeElement = document.getElementById('datetime');
    if (datetimeElement) {
        datetimeElement.textContent = dateTimeStr;
    }
}

// Chargement des articles
async function loadArticles() {
    try {
        const response = await fetch('./data/articles.json');
        if (!response.ok) {
            throw new Error('Erreur lors du chargement des articles');
        }
        
        const data = await response.json();
        displayArticles(data.articles);
        
        // Si nous sommes sur la page archives, afficher aussi les archives
        if (window.location.pathname.includes('archives.html')) {
            displayArchives(data.articles);
        }
    } catch (error) {
        console.error('Erreur:', error);
        const container = document.getElementById('articles-container') || document.getElementById('archives-container');
        if (container) {
            container.innerHTML = '<p>Erreur lors du chargement des articles. Veuillez réessayer plus tard.</p>';
        }
    }
}

// Affichage des articles sur la page d'accueil
function displayArticles(articles) {
    const container = document.getElementById('articles-container');
    if (!container) return;
    
    // Trier les articles par date (du plus récent au plus ancien)
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    // Prendre les 7 articles les plus récents
    const recentArticles = articles.slice(0, 7);
    
    container.innerHTML = '';
    
    recentArticles.forEach(article => {
        const articleElement = createArticleElement(article);
        container.appendChild(articleElement);
    });
}

// Affichage des archives
function displayArchives(articles) {
    const container = document.getElementById('archives-container');
    if (!container) return;
    
    // Trier les articles par date (du plus récent au plus ancien)
    articles.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    container.innerHTML = '';
    
    articles.forEach(article => {
        const archiveElement = createArchiveElement(article);
        container.appendChild(archiveElement);
    });
}

// Création d'un élément article
function createArticleElement(article) {
    const articleDiv = document.createElement('div');
    articleDiv.className = 'article-card';
    
    articleDiv.innerHTML = `
        <img src="${article.url_image}" alt="${article.titre}" class="article-image">
        <div class="article-content">
            <span class="article-date">${formatDate(article.date)}</span>
            <h3 class="article-title">${article.titre}</h3>
            <p class="article-summary">${article.resume}</p>
            <a href="${article.lien_source}" target="_blank" class="article-source">Voir la source</a>
        </div>
    `;
    
    return articleDiv;
}

// Création d'un élément archive
function createArchiveElement(article) {
    const archiveDiv = document.createElement('div');
    archiveDiv.className = 'archive-item';
    
    archiveDiv.innerHTML = `
        <a href="#" class="archive-link" data-id="${article.id}">
            <span class="archive-title">${article.titre}</span>
            <span class="archive-date">${formatDate(article.date)}</span>
        </a>
    `;
    
    return archiveDiv;
}

// Formatage de la date
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('fr-FR', options);
}

// Gestion du formulaire de contact
function setupContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Récupération des données du formulaire
            const formData = new FormData(this);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');
            
            // Ici, vous pouvez ajouter le code pour envoyer les données à un serveur
            // Pour l'instant, nous allons simplement afficher un message de confirmation
            alert('Merci pour votre message, ' + name + '! Nous vous répondrons dans les plus brefs délais.');
            
            // Réinitialisation du formulaire
            this.reset();
        });
    }
}

// Initialisation
document.addEventListener('DOMContentLoaded', function() {
    updateDateTime();
    setInterval(updateDateTime, 60000); // Mise à jour toutes les minutes
    
    loadArticles();
    setupContactForm();
});