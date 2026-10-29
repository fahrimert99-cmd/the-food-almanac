// Sahne 17 — PROT-AGE çalışma grubu, makale (etiketler kitaplar ve kâğıt yığını üstünde)
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGrup = K(0, "PROT-AGE");
  const tArast = K(0, "research");
  const tMakale = K(0, "position paper");
  const tDergi = K(0, "Journal of the American");
  const [sc, al] = pop(t, tDergi, 0.5);
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])} />
      <Etiket t={t} bas={tGrup} bitis={4.3} capa={[700, 600]} konum={[640, 330]} metin="PROT-AGE GROUP" renk={RENK.altin} />
      <Etiket t={t} bas={tArast} bitis={4.3} capa={[1080, 610]} konum={[1130, 200]} metin="THE RESEARCH" renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tMakale} capa={[1420, 700]} konum={[1380, 430]} metin="POSITION PAPER" renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 960, top: 884, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="JOURNAL OF THE AMERICAN MEDICAL DIRECTORS ASSOCIATION" renk={RENK.lacivert} boyut={28} />
      </div>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
    </>
  );
};

export default S17;
