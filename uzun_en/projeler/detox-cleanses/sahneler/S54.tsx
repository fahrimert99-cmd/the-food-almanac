// Sahne 54 — komodin: belirtiler, meyve suyu ve telefon.
import React from "react";
import { AbsoluteFill, Baslik, Etiket, INTER, Kamera, RENK, SP, kagit, kameraYolu, eout, ilerle, kelimeZamani, pop, sol } from "../kutuphane";

// Belirti hapı (sağ üst boş kâğıt alanı)
const Belirti: React.FC<{ t: number; bas: number; bitis: number; metin: string; y: number }> = ({ t, bas, bitis, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a,
      background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999, padding: "8px 26px",
      fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap",
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>{metin}</div>
  );
};

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tStop = K(0, "stop");
  const pOrtu = eout(ilerle(t, tStop - 0.2, 0.5));
  return (
    <>
      <Kamera gorsel="tam/54" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [150, 70, 1650])}>
        <Etiket t={t} bas={K(0, "juice-only")} bitis={tStop - 0.1} capa={[1580, 470]} konum={[1470, 800]} metin="JUICE-ONLY PLAN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "call your")} capa={[1390, 440]} konum={[1180, 160]} metin="CALL YOUR DOCTOR" renk={RENK.mercan} />
      </Kamera>
      {/* STOP başlığı için sağ üstte yumuşak zemin */}
      <div style={{ position: "absolute", right: 0, top: 0, width: 900, height: 330, opacity: pOrtu,
        background: `radial-gradient(ellipse 70% 80% at 80% 40%, ${kagit(0.92)} 0%, ${kagit(0)} 100%)` }} />
      <Belirti t={t} bas={K(0, "dizzy,")} bitis={tStop - 0.1} metin="DIZZY" y={104} />
      <Belirti t={t} bas={K(0, "weak,")} bitis={tStop - 0.1} metin="WEAK" y={168} />
      <Belirti t={t} bas={K(0, "less urine") } bitis={tStop - 0.1} metin="MUCH LESS URINE" y={232} />
      <Baslik t={t} bas={tStop} metin="STOP." x={1840} y={190} boyut={130} renk={RENK.mercan} hiza="sag" />
    </>
  );
};

export default S54;
