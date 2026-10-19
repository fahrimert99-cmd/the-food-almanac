// Sahne 53 — ipucu 4: yağ seçimi, haşlama ve poşe.
import React from "react";
import { ANTON, Etiket, INTER, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const AdimNo: React.FC<{ t: number; bas: number; n: number; x: number; y: number }> = ({ t, bas, n, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x - 44, top: y - 44, width: 88, height: 88, borderRadius: "50%", background: RENK.altin,
      color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 56,
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tButter = K(1, "butter");
  const tPoach = K(2, "Poaching");
  const [sc, al] = pop(t, tButter - 0.1, 0.5);
  const cik = tPoach - 0.2;
  const fade = Math.max(0, Math.min(1, (cik + 0.3 - t) / 0.3));
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(1, "olive")} capa={[347, 500]} konum={[680, 230]} metin="OLIVE OIL" renk={RENK.yesil} />
        <Etiket t={t} bas={tPoach} capa={[1107, 790]} konum={[1580, 850]} metin="POACHING, BOILING" renk={RENK.altin} />
      </Kamera>
      <AdimNo t={t} bas={0.05} n={4} x={110} y={185} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 800, top: 105, opacity: al * fade, transform: `scale(${sc})`, display: "flex", alignItems: "center",
          gap: 14, background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "10px 28px 10px 14px",
          fontFamily: INTER, fontWeight: 800, fontSize: 30, color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
          <span style={{ width: 36, height: 36, borderRadius: "50%", background: RENK.mercan, color: "#fff", display: "flex",
            alignItems: "center", justifyContent: "center", fontSize: 24 }}>✕</span>
          LOTS OF BUTTER OR BACON FAT
        </div>
      )}
      <VurguRozet t={t} bas={K(2, "fat")} vurgu="NO FAT" not="poaching and boiling" x={1480} y={110} genislik={460} boyut={96} renk={RENK.yesil} />
    </>
  );
};

export default S53;
