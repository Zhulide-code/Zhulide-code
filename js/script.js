const b=document.querySelector('.burger'),n=document.getElementById('menu');
const toggle=o=>{b.setAttribute('aria-expanded',o);n.classList.toggle('open',o)};
b.addEventListener('click',()=>toggle(b.getAttribute('aria-expanded')!=='true'));
n.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggle(false)));
const ks=[...document.querySelectorAll('.k')];
ks.forEach(el=>{
  el.addEventListener('pointerdown',()=>el.classList.add('on'));
  ['pointerup','pointerleave','pointercancel'].forEach(ev=>el.addEventListener(ev,()=>el.classList.remove('on')));
});
addEventListener('keydown',e=>{if(e.metaKey||e.ctrlKey||e.altKey)return;const c=e.key.toUpperCase();ks.filter(x=>x.dataset.k===c).forEach(x=>x.classList.add('on'))});
addEventListener('keyup',e=>{const c=e.key.toUpperCase();ks.filter(x=>x.dataset.k===c).forEach(x=>x.classList.remove('on'))});