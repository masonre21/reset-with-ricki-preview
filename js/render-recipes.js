(function () {
  const data = window.RWR_RECIPES;
  if (!data) return;

  const toc = document.getElementById("recipe-toc");
  const pages = document.getElementById("recipe-pages");
  const dressings = document.getElementById("dressing-grid");
  const formula = document.getElementById("formula-banner");

  if (toc) {
    toc.innerHTML = data.salads
      .map(
        (s, i) => `
      <a class="toc-link" href="#${s.id}">
        <span class="title">${s.name}</span>
        <span class="num">${String(i + 1).padStart(2, "0")}</span>
      </a>`
      )
      .join("");
  }

  if (pages) {
    pages.innerHTML = data.salads
      .map(
        (s, i) => `
      <article class="recipe-page" id="${s.id}">
        <div class="recipe-media" style="background-image:url('${s.image}')" role="img" aria-label="Photo of ${s.name}">
          <span class="badge">Salad ${String(i + 1).padStart(2, "0")}</span>
        </div>
        <div class="recipe-body">
          <div class="page-meta">
            <img class="mark" src="../assets/logo-mark.png" alt="" />
            <span class="week">RESET WITH <span class="script">Ricki</span> · 12-WEEK PROGRAM</span>
          </div>
          <div>
            <p class="eyebrow">Raw salad combination</p>
            <h2>${s.name}</h2>
          </div>
          <ul class="ingredient-list">
            ${s.ingredients.map((item) => `<li>${item}</li>`).join("")}
          </ul>
          <p class="pair-note">
            <strong>Pairs well with</strong>
            ${s.pairs}
          </p>
        </div>
      </article>`
      )
      .join("");
  }

  if (dressings) {
    dressings.innerHTML = data.dressings
      .map(
        (d) => `
      <article class="dressing-card">
        <h3>${d.name}</h3>
        <ul>${d.items.map((item) => `<li>${item}</li>`).join("")}</ul>
      </article>`
      )
      .join("");
  }

  if (formula) {
    formula.innerHTML = `
      <h3>${data.formula.title}</h3>
      <p>${data.formula.body}</p>
      <p style="margin-top:0.85rem"><strong style="color:var(--zest)">Tip:</strong> ${data.formula.tip}</p>
    `;
  }

  const note = document.getElementById("dressings-note");
  if (note) note.textContent = data.dressingsNote;
})();
