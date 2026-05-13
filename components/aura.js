// ── AURA PAINTER ─────────────────────────────────────────
function paintAura(canvas, baseFill, blobs) {
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  function resize() {
    const p = canvas.parentElement;
    canvas.width  = p.offsetWidth;
    canvas.height = p.offsetHeight;
  }
  resize();
  window.addEventListener('resize', resize);
  function draw(t) {
    const W = canvas.width, H = canvas.height;
    ctx.clearRect(0,0,W,H);
    ctx.fillStyle = baseFill;
    ctx.fillRect(0,0,W,H);
    blobs.forEach(b => {
      const a  = t * b.sp + b.ph;
      const cx = (b.x + Math.sin(a * 1.2) * 0.20) * W;
      const cy = (b.y + Math.cos(a * 0.85) * 0.16) * H;
      const r  = b.r * Math.max(W, H) * 0.75;
      const g  = ctx.createRadialGradient(cx,cy,0,cx,cy,r);
      const [rr,gr,bl] = b.col;
      g.addColorStop(0,   `rgba(${rr},${gr},${bl},.52)`);
      g.addColorStop(0.5, `rgba(${rr},${gr},${bl},.16)`);
      g.addColorStop(1,   `rgba(${rr},${gr},${bl},0)`);
      ctx.globalCompositeOperation = 'screen';
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(cx,cy,r,0,Math.PI*2); ctx.fill();
    });
    ctx.globalCompositeOperation = 'source-over';
    requestAnimationFrame(draw);
  }
  requestAnimationFrame(draw);
}

// Hero — cream & forest green
paintAura(document.getElementById('aura'), '#0b2318', [
  {x:.18,y:.40,r:.55,col:[42,92,69],   sp:.00017,ph:0},
  {x:.78,y:.20,r:.50,col:[74,155,114], sp:.00022,ph:1.3},
  {x:.55,y:.82,r:.48,col:[15,55,38],   sp:.00014,ph:2.5},
  {x:.70,y:.55,r:.42,col:[110,190,145],sp:.00019,ph:3.7},
  {x:.10,y:.70,r:.38,col:[215,235,215],sp:.00016,ph:0.8},
]);

// SOUR — deep yellow
paintAura(document.getElementById('c-sour'), '#ba8e23', [
  {x:.15,y:.5, r:.65,col:[42,110,72],  sp:.00013,ph:0},
  {x:.80,y:.3, r:.58,col:[80,180,120], sp:.00017,ph:2.1},
  {x:.5, y:.85,r:.50,col:[20,70,45],   sp:.00011,ph:4.2},
]);
paintAura(document.getElementById('c-next-sour'), '#ba8e23', [
  {x:.15,y:.5, r:.65,col:[42,110,72],  sp:.00013,ph:0},
  {x:.80,y:.3, r:.58,col:[80,180,120], sp:.00017,ph:2.1},
  {x:.5, y:.85,r:.50,col:[20,70,45],   sp:.00011,ph:4.2},
]);

// TechMoms — deep plum
paintAura(document.getElementById('c-techmoms'), '#3D1A35 ', [
  {x:.2, y:.45,r:.62,col:[160,90,20],  sp:.00014,ph:0.5},
  {x:.78,y:.25,r:.55,col:[205,135,45], sp:.00019,ph:1.9},
  {x:.55,y:.80,r:.50,col:[100,55,10],  sp:.00012,ph:3.5},
]);

// Chip — cool blue
paintAura(document.getElementById('c-chip'), '#0d1a28', [
  {x:.18,y:.5, r:.60,col:[30,80,165],  sp:.00014,ph:1.0},
  {x:.82,y:.28,r:.55,col:[55,125,205], sp:.00018,ph:2.8},
  {x:.55,y:.82,r:.48,col:[15,50,115],  sp:.00012,ph:0.3},
  {x:.40,y:.20,r:.42,col:[80,160,220], sp:.00016,ph:4.0},
]);