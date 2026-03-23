(function () {
  const cfg = window.MCS_CONFIG || {};
  document.querySelectorAll('[data-email]').forEach(el => {
    const email = cfg.contactEmail || 'mancampsouth@gmail.com';
    el.textContent = email;
    if (el.tagName === 'A') el.href = `mailto:${email}`;
  });

  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const timeline = document.getElementById('timeline');
  if (timeline && cfg.event?.schedule) {
    timeline.innerHTML = cfg.event.schedule.map(([title, desc]) => `
      <div class="timeline-item">
        <h3>${title}</h3>
        <p>${desc}</p>
      </div>`).join('');
  }

  const details = document.getElementById('event-details');
  if (details && cfg.event?.details) {
    details.innerHTML = cfg.event.details.map(([k,v]) => `
      <div class="kv-row"><strong>${k}</strong><div>${v}</div></div>`).join('');
  }

  const bring = document.getElementById('bring-list');
  if (bring && cfg.event?.bring) {
    bring.innerHTML = cfg.event.bring.map(item => `<div><span class="check">✓</span><span>${item}</span></div>`).join('');
  }

  const products = document.getElementById('products-grid');
  if (products && cfg.products) {
    products.innerHTML = cfg.products.map(item => {
      const disabled = !item.buyUrl || item.buyUrl === '#';
      return `
      <article class="product-card">
        <div class="product-media"><img src="${item.image}" alt="${item.name}"></div>
        <div class="product-body">
          <span class="tag">${item.category}</span>
          <h3>${item.name}</h3>
          <p>${item.description}</p>
          <div class="product-meta">
            <div class="price">${item.price}</div>
            <div class="small">${item.status || ''}</div>
          </div>
          <a class="btn ${disabled ? 'btn-secondary btn-disabled' : 'btn-primary'}" ${disabled ? 'aria-disabled="true"' : `href="${item.buyUrl}" target="_blank" rel="noreferrer"`}>
            ${disabled ? 'Checkout link coming soon' : 'Buy now'}
          </a>
        </div>
      </article>`;
    }).join('');
  }
})();
