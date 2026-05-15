function createNav() {
    const nav = document.createElement('nav');

    nav.innerHTML = `
        <a class="nav-name" href="../">Emma Luk</a>
        <div class="nav-right">
            <a class="nav-btn" href="https://github.com/emma-luky" target="_blank">GitHub</a>
            <a class="nav-btn" href="https://www.linkedin.com/in/emma-h-luk/" target="_blank">LinkedIn</a>
        </div>
  `;

    document.body.appendChild(nav);
}