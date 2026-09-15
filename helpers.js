// Funções utilitárias compartilhadas — Simulador Tributário EVP
// Usado por index.html e comprador.html

const fmtBRL = (v) => v.toLocaleString('pt-BR', { style:'currency', currency:'BRL', maximumFractionDigits:0 });
const fmtPct = (v) => v.toLocaleString('pt-BR', { minimumFractionDigits:1, maximumFractionDigits:2 }) + '%';
const parseNum = (str) => {
  if (!str) return 0;
  const cleaned = String(str).replace(/[^\d.,-]/g,'').replace(/\.(?=\d{3})/g,'').replace(',','.');
  const n = parseFloat(cleaned);
  return isNaN(n) ? 0 : n;
};
