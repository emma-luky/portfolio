// ── TICKER ────────────────────────────────────────────────
const achievements = [
  "$2,700 in startup funding secured",
  "Top 8 | Tim Draper Entrepreneurship Challenge",
  "1st place | TechMoms Social Impact Challenge",
  "GPA 3.9 | University of Utah",
  "Dean's List | 4 consecutive years",
  "Kahlert Scholar",
  "BS Software Development | Minor Entrepreneurship",
  "Society of Women Engineers",
];

const track = document.getElementById('ticker');
// duplicate for seamless loop
[...achievements, ...achievements].forEach(a => {
  const item = document.createElement('span');
  item.className = 'ticker-item';
  item.innerHTML = `${a}<span class="ticker-dot"></span>`;
  track.appendChild(item);
});