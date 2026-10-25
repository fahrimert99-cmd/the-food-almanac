// Sahne 47 — ipucu 1: önce doktora danışın.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1820])}>
        {/* not kâğıdındaki bozuk başlık yazısını kâğıt rengi yama ile gizle */}
        <div style={{ position: "absolute", left: 805, top: 372, width: 175, height: 62, transform: "rotate(-17deg)",
          background: "radial-gradient(ellipse at 50% 50%, #EFEADB 0%, #EFEADB 70%, rgba(239,234,219,0) 100%)" }} />
      </Kamera>
      <Baslik t={t} bas={0.05} metin="ONE" x={60} y={90} boyut={96} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={K(1, "doctor")} capa={[1000, 500]} konum={[1250, 160]} metin="DOCTOR FIRST" renk={RENK.yesil} />
      <Liste t={t} x={60} y={190} aralik={90} boyut={32} genislik={480} isaret="nokta" ogeler={[
        { bas: K(1, "blood"), metin: "BP MEDICINE", renk: RENK.lacivert },
        { bas: K(1, "kidney"), metin: "KIDNEY DISEASE", renk: RENK.altin },
        { bas: K(1, "had"), metin: "KIDNEY STONES", renk: RENK.mercan },
      ]} />
    </>
  );
};

export default S47;
