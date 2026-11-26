(() => {
  const cards = [...document.querySelectorAll('.project')];
  if (!cards.length || !matchMedia('(hover: none)').matches) return;

  cards.forEach(card => {
    card.addEventListener('click', e => {
      if (card.classList.contains('on')) return;
      e.preventDefault();
      cards.forEach(c => c.classList.remove('on'));
      card.classList.add('on');
    });
  });

  document.addEventListener('click', e => {
    if (!e.target.closest('.project')) cards.forEach(c => c.classList.remove('on'));
  });
})();