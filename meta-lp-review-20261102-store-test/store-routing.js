(function () {
  'use strict';
  const codes = {
    sakae:'UETKdU', meieki:'bXrKt4', shinsaibashi:'GgcFA9', kawanishi:'TC7vbT',
    sannomiya:'NhNAjF', akashi:'wJuRlS', kawasaki:'2JhMCo', saidaiji:'nNtQCY',
    sakaihigashi:'x08Nqb', roppongi:'7QnXRi', kakogawa:'lRkf6y', himeji:'8ujnHQ', miyakojima:'MTCzCD'
  };
  const stores = new URLSearchParams(location.search).getAll('src_store');
  const key = stores.length === 1 && Object.prototype.hasOwnProperty.call(codes, stores[0]) ? stores[0] : null;
  document.querySelectorAll('[data-cta]').forEach((link) => {
    if (key) {
      link.href = 'https://liff.line.me/2009185552-ObuWGDkG/landing?follow=%40125apoat&lp=' + encodeURIComponent(codes[key]) + '&liff_id=2009185552-ObuWGDkG';
      link.removeAttribute('aria-disabled');
      link.removeAttribute('tabindex');
      link.rel = 'noopener noreferrer';
    } else {
      link.addEventListener('click', () => alert('店舗を確認できません。店舗指定付きの確認URLから開いてください。'));
      link.addEventListener('keydown', (event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); link.click(); } });
    }
  });
}());
