function createNextProjectCard({ id, href, title, titleEm, desc, tools }) {
  const a = document.createElement('a');
  a.className = 'next-project';
  a.href = href;
  a.style.textDecoration = 'none';

  a.innerHTML = `
    <canvas class="proj-aura-canvas" id="${id}"></canvas>
    <div>
      <p class="next-label">Next project</p>
      <p class="next-title">${title} — <em>${titleEm}</em></p>
      <p class="next-desc">${desc}</p>
      <div class="next-meta">
        ${tools.map(t => `<span class="next-tool">${t}</span>`).join('')}
      </div>
    </div>
    <div class="next-arrow">↗</div>
  `;

  document.querySelector('.next-projects').appendChild(a);
}