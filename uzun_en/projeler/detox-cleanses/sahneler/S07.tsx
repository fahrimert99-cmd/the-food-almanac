// Sahne 7 — gerçek zehirlenme ve şelasyon tedavisi
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pw = kameraYolu(t, s.sure, [0, 40, 1920], [80, 120, 1700]);
  const cik0 = K(1, "For") - 0.15, cik1 = K(2, "That") - 0.15;
  const [sc, al] = pop(t, K(1, "CDC"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={pw}>
        <Etiket t={t} bas={K(2, "medicine,")} capa={[330, 520]} konum={[560, 250]} metin="NOT A JUICE" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "Real")} bitis={cik0} satirlar={["REAL", "POISONING"]} x={1400} y={200} boyut={110} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
      <div style={{ position: "absolute", left: 1000, top: 150, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * (cik1 > 0 ? 1 : 1) }}>
        <Hap metin="CDC" renk={RENK.lacivert} boyut={40} />
      </div>
      <Baslik t={t} bas={K(1, "chelation")} bitis={cik1} metin="CHELATION THERAPY" x={1400} y={330} boyut={84} hiza="orta" renk={RENK.koyuYesil}
        style={{ background: "rgba(251,248,241,0.92)", padding: "0 24px", borderRadius: 14 }} />
      <Baslik t={t} bas={K(2, "medicine,")} metin="MEDICINE" x={1400} y={800} boyut={120} hiza="orta" renk={RENK.lacivert}
        style={{ background: "rgba(251,248,241,0.92)", padding: "0 30px", borderRadius: 14 }} />
      <Ikon t={t} bas={K(2, "juice.")} ad="carpi" x={1400} y={900} boyut={80} zemin={RENK.mercan} />
    </>
  );
};
export default S07;
