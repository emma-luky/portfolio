function createFooter(assetPath) {
  const footer = document.createElement('footer');

  footer.innerHTML = `
    <p class="footer-hl">Let's build something<br><em>worth keeping.</em></p>
    <div class="footer-right">
      <div class="footer-socials">
        <a href="https://github.com/emma-luky" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
          <img src="${assetPath}/GitHub_Invertocat_Black_Clearspace.svg" alt="GitHub" width="20" height="20">
        </a>
        <a href="https://www.linkedin.com/in/emma-h-luk/" target="_blank" rel="noopener noreferrer" style="text-decoration:none;">
          <img src="${assetPath}/linkedin-svgrepo-com.svg" alt="LinkedIn" width="15" height="15">
        </a>
      </div>
      <a class="footer-email" href="mailto:emmahluk@gmail.com">emmahluk@gmail.com</a>
      <p class="footer-copy">© 2026 Emma Luk</p>
    </div>
  `;

  document.body.appendChild(footer);
}