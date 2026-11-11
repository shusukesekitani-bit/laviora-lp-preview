(function () {
  "use strict";

  // 広告のリンク先例: https://meta.laviora-clinical.jp/?src_store=sakae
  // 店舗の目印から、共有されたLステップ流入経路URLへ切り替えます。
  // タグの付与はLステップ側のアクションで設定してください。
  const routes = {
    roppongi: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=7QnXRi&liff_id=2009185552-ObuWGDkG",
    sakaihigashi: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=x08Nqb&liff_id=2009185552-ObuWGDkG",
    // 栄店
    sakae: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=UETKdU&liff_id=2009185552-ObuWGDkG",
    // 名駅店
    meieki: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=bXrKt4&liff_id=2009185552-ObuWGDkG",
    // 心斎橋店
    shinsaibashi: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=GgcFA9&liff_id=2009185552-ObuWGDkG",
    // 川西店
    kawanishi: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=TC7vbT&liff_id=2009185552-ObuWGDkG",
    // 三宮店
    sannomiya: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=NhNAjF&liff_id=2009185552-ObuWGDkG",
    // 明石店
    akashi: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=wJuRlS&liff_id=2009185552-ObuWGDkG",
    // 川崎店
    kawasaki: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=2JhMCo&liff_id=2009185552-ObuWGDkG",
    // 西大寺店
    saidaiji: "https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=nNtQCY&liff_id=2009185552-ObuWGDkG",
  };

  const storeValues = new URLSearchParams(window.location.search).getAll("src_store");
  // LINEへの遷移先は登録済みの8店舗のみ。共通URLへの転送は行いません。
  // HTMLの初期状態にはhrefを持たせず、有効な目印のときだけ設定します。
  const links = document.querySelectorAll("a[data-cta]");
  if (storeValues.length === 1 && Object.prototype.hasOwnProperty.call(routes, storeValues[0])) {
    const destination = routes[storeValues[0]];
    links.forEach((link) => {
      link.href = destination;
      link.removeAttribute("aria-disabled");
      link.removeAttribute("role");
      link.removeAttribute("tabindex");
    });
    return;
  }

  // 未指定・未登録・複数指定のときは、操作時に案内だけを表示します。
  const explainUnavailable = (event) => {
    const link = event.target?.closest?.("a[data-cta]");
    if (!link || link.getAttribute("aria-disabled") !== "true") return;
    if (event.type === "keydown" && event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    window.alert("店舗を確認できません。ご覧になった広告のリンクから、もう一度ページを開いてください。");
  };
  document.addEventListener("click", explainUnavailable);
  document.addEventListener("keydown", explainUnavailable);
})();
