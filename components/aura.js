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

// SOUR — warm terracotta + orange
const yellowBlobs = [
  {x:.15,y:.5, r:.65,col:[255,176,30],  sp:.00013,ph:0},
  {x:.80,y:.3, r:.58,col:[126,180,81],  sp:.00017,ph:2.1},
  {x:.5, y:.85,r:.50,col:[255,219,50],  sp:.00011,ph:4.2},
  {x:.30,y:.20,r:.44,col:[180,220,100], sp:.00015,ph:1.8},
];
paintAura(document.getElementById('c-sour'), '#5c2010', yellowBlobs);
paintAura(document.getElementById('c-sour-hero'), '#5c2010', yellowBlobs);
paintAura(document.getElementById('c-next-sour'), '#5c2010', yellowBlobs);

// TechMoms — deep plum + teal
const plumBlobs = [
  {x:.15,y:.5, r:.65,col:[61,26,53],  sp:.00013,ph:0},
  {x:.80,y:.3, r:.58,col:[42,157,143],sp:.00017,ph:2.1},
  {x:.5, y:.8, r:.52,col:[100,30,80], sp:.00011,ph:4.2},
  {x:.65,y:.2, r:.44,col:[42,157,143],sp:.00015,ph:1.5},
];
paintAura(document.getElementById('c-techmoms'), '#3D1A35', plumBlobs);
paintAura(document.getElementById('c-next-techmoms'), '#3D1A35', plumBlobs);
paintAura(document.getElementById('c-techmoms-hero'),    '#3D1A35', plumBlobs);
paintAura(document.getElementById('c-flyers'),  '#3D1A35', [
  {x:.2,y:.5,r:.7,col:[42,157,143],sp:.00014,ph:0.3},
  {x:.75,y:.4,r:.55,col:[61,26,53],sp:.00018,ph:1.8},
]);
paintAura(document.getElementById('c-social'),  '#3D1A35', [
  {x:.3,y:.4,r:.65,col:[42,157,143],sp:.00013,ph:1.0},
  {x:.8,y:.6,r:.5, col:[80,20,60], sp:.00017,ph:3.2},
]);
paintAura(document.getElementById('c-posters'), '#3D1A35', [
  {x:.2,y:.6,r:.6, col:[42,157,143],sp:.00015,ph:0.7},
  {x:.7,y:.3,r:.55,col:[61,26,53], sp:.00019,ph:2.4},
]);
paintAura(document.getElementById('c-web'),     '#3D1A35', [
  {x:.4,y:.5,r:.65,col:[42,157,143],sp:.00012,ph:1.5},
  {x:.8,y:.2,r:.5, col:[80,30,65], sp:.00016,ph:0.2},
]);

// Chip — Gold palette
const goldBlobs = [
    { x: .18, y: .40, r: .55, col: [186, 142, 35],  sp: .00017, ph: 0   },
    { x: .78, y: .20, r: .50, col: [230, 180, 50],  sp: .00022, ph: 1.3 },
    { x: .55, y: .82, r: .48, col: [140, 100, 20],  sp: .00014, ph: 2.5 },
    { x: .70, y: .55, r: .42, col: [200, 160, 60],  sp: .00019, ph: 3.7 },
    { x: .10, y: .70, r: .38, col: [240, 220, 160], sp: .00016, ph: 0.8 },
];
paintAura(document.getElementById('c-chip'), '#2a1f05', goldBlobs);
paintAura(document.getElementById('c-next-chip'), '#2a1f05', goldBlobs);
paintAura(document.getElementById('c-chip-hero'),      '#2a1f05', goldBlobs);
paintAura(document.getElementById('c-wireframe'), '#2a1f05', goldBlobs);
paintAura(document.getElementById('c-syd'), '#1a1005', [
    { x: .2,  y: .5,  r: .65, col: [186, 142, 35], sp: .00013, ph: 0   },
    { x: .8,  y: .3,  r: .55, col: [230, 180, 50], sp: .00017, ph: 2.1 },
]);

paintAura(document.getElementById('c-marshall'), '#1a1005', [
    { x: .3,  y: .6,  r: .60, col: [200, 160, 40], sp: .00014, ph: 1.0 },
    { x: .75, y: .25, r: .52, col: [150, 110, 20], sp: .00018, ph: 3.2 },
]);