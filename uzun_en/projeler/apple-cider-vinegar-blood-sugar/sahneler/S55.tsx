// Sahne 55 — mide yavaşlaması ve dikkat gereken durumlar. Orta boş kâğıtta başlık, sonra uyarı hapları.
import React from "react";
import { BaslikBlok, Baslik, Etiket, IkonYol, INTER, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Hapi: React.FC<{ t: number; bas: number; metin: string; y: number }> = ({ t, bas, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 930, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 12, background: "#FCF8EC", border: `3px solid ${RENK.altin}`, borderRadius: 999,
      padding: "6px 24px 6px 8px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
      <span style={{ width: 40, height: 40, borderRadius: "50%", background: RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad="uyari" boyut={24} renk="#fff" kalinlik={7} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 27, letterSpacing: 1.2, color: RENK.lacivert }}>{metin}</span>
    </div>
  );
};

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS2 = K(1, "that") - 0.1;
  return (
    <>
      {/* pencere sağdan 1720'de biter: sağ alttaki imza dışarıda */}
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 0, 1700], [40, 20, 1640])}>
        <Etiket t={t} bas={K(0, "stomach")} bitis={tS2} capa={[720, 560]} konum={[1050, 480]} metin="STOMACH" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "slowing") - 0.2} bitis={tS2} satirlar={["MAY SLOW", "THE STOMACH"]} x={960} y={160} boyut={92} />
      <Baslik t={t} bas={K(1, "needs care")} metin="NEEDS CARE" x={930} y={150} boyut={72} renk={RENK.koyuYesil} />
      <Hapi t={t} bas={K(1, "slow stomach")} metin="A SLOW STOMACH" y={230} />
      <Hapi t={t} bas={K(1, "tablets")} metin="TABLETS" y={310} />
      <Hapi t={t} bas={K(1, "undiluted")} metin="UNDILUTED DRINKING" y={390} />
      <Hapi t={t} bas={K(1, "some medicines")} metin="SOME MEDICINES" y={470} />
    </>
  );
};

export default S55;
