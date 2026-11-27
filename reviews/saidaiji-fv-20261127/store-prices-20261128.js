(function () {
  const storePrices = new Map([
    ["kakogawa", 4800],
    ["sannomiya", 7800],
    ["nishinomiya", 4800],
    ["miyakojima", 5800],
    ["akashi", 4800],
    ["himeji", 4800],
    ["fukushima", 5800],
    ["hyogo", 5800],
    ["shinsaibashi", 5800],
    ["tennoji", 5800],
    ["kyoto", 6800],
    ["kawanishi", 4800],
    ["tenjin", 4800],
    ["umeda", 5800],
    ["hirakata", 4800],
    ["saidaiji", 4800],
    ["esaka", 5800],
    ["sakae", 4800],
    ["karasuma", 5800],
    ["kashihara", 4800],
    ["kawasaki", 5800],
    ["meieki", 4800],
    ["sakaihigashi", 4800],
    ["roppongi", 4800],
  ]);

  const stores = new URLSearchParams(window.location.search).getAll("src_store");
  const store = stores.length === 1 ? stores[0] : "";
  const price = storePrices.get(store) ?? 5800;
  const label = price.toLocaleString("ja-JP");
  const page = document.documentElement;
  page.dataset.firstVisitPrice = price;
  page.style.setProperty("--price-band-digit", '"' + String(price)[0] + '"');

  document.addEventListener("DOMContentLoaded", () => {
    document.title = "初回" + label + "円・症例・漫画｜La Viora確認版";
    document.querySelector(".preview-price-band").setAttribute("aria-label", "初回限定 " + label + "円");
    document.querySelectorAll("[data-first-visit-price-text]").forEach((amount) => {
      amount.textContent = label;
    });
  });
})();
