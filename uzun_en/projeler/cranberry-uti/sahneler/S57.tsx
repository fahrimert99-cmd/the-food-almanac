// Sahne 57 — özet: suyu mu kapsül mü, şeker ve varfarin uyarısı.
import React from "react";
import { ANTON, Baslik, Etiket, Ikon, INTER, Kamera, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S57: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSu = K(0, "juice"), tKaps = K(0, "capsules"), tKimse = K(1, "nobody");
  const tSeker = K(2, "sugar"), tVarf = K(2, "warfarin");
  const [sc, al] = pop(t, tVarf, 0.55);
  const aN = eout(ilerle(t, tVarf + 0.3, 0.5));
  return (
    <>
      <Kamera gorsel="tam/57" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 34, 1800])}>
        <Etiket t={t} bas={tSu} bitis={3.0} capa={[780, 440]} konum={[340, 400]} metin="JUICE" renk={RENK.mercan} boyut={32} />
        <Etiket t={t} bas={tKaps} bitis={3.0} capa={[1260, 520]} konum={[1640, 400]} metin="CAPSULES" renk={RENK.altin} boyut={32} />
        <Etiket t={t} bas={tSeker} bitis={tVarf - 0.1} capa={[1010, 780]} konum={[1560, 880]} metin="SUGAR" renk={RENK.mercan} boyut={32} />
      </Kamera>
      <Baslik t={t} bas={tKimse} bitis={3.0} metin="NOBODY CAN SAY YET" x={960} y={110} boyut={92} renk={RENK.lacivert} hiza="orta" />
      {al > 0 && (
        <div style={{ position: "absolute", left: 60, top: 190, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
          background: RENK.kagitAcik, border: `4px solid ${RENK.mercan}`, borderRadius: 26, padding: "14px 30px 16px 18px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.2)", display: "flex", alignItems: "center", gap: 20 }}>
          <Ikon t={t} bas={tVarf} ad="uyari" x={50} y={50} boyut={84} zemin={RENK.mercan} />
          <div style={{ marginLeft: 84 }}>
            <div style={{ fontFamily: ANTON, fontSize: 64, lineHeight: 1.1, color: RENK.mercan }}>ON WARFARIN?</div>
            <div style={{ opacity: aN, fontFamily: INTER, fontWeight: 800, fontSize: 36, color: RENK.lacivert }}>ASK FIRST</div>
          </div>
        </div>
      )}
    </>
  );
};

export default S57;
