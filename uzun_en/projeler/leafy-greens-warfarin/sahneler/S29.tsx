// Sahne 29 — kural sıfır değil, sınırsız da değil; düzenli miktar.
import React from "react";
import { Etiket, Ikon, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Ölçü kabındaki bozuk rakamları örten cam renkli yama (görsel koordinatı)
const Yama: React.FC = () => (
  <div style={{ position: "absolute", left: 1262, top: 355, width: 150, height: 250,
    background: "radial-gradient(ellipse 50% 50% at 50% 50%, #D9E0E5 0%, #D9E0E5 62%, rgba(217,224,229,0) 100%)" }} />
);

const Hapcik: React.FC<{ t: number; bas: number; metin: string; y: number }> = ({ t, bas, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1540, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${RENK.mercan}`, borderRadius: 999,
      padding: "8px 24px 8px 10px", fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 1.5, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <Ikon t={t} bas={bas} ad="carpi" x={22} y={22} boyut={44} renk="#fff" zemin={RENK.mercan} />
      <span style={{ marginLeft: 38 }}>{metin}</span>
    </div>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={w}>
        <Yama />
        <Etiket t={t} bas={K(0, "leafy green")} bitis={K(1, "zero") - 0.1} capa={[560, 420]} konum={[560, 150]} metin="LEAFY GREENS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "regular amount")} capa={[1250, 330]} konum={[1640, 480]} metin="REGULAR AMOUNT" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "clinic")} capa={[1500, 760]} konum={[1160, 905]} metin="PLAN WITH CLINIC" renk={RENK.lacivert} />
      </Kamera>
      <Hapcik t={t} bas={K(1, "zero,")} metin="NOT ZERO" y={190} />
      <Hapcik t={t} bas={K(1, "unlimited")} metin="NOT UNLIMITED" y={290} />
    </>
  );
};

export default S29;
