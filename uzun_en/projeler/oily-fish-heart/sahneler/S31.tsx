// Sahne 31 — madeni para yığınları: 12.0% vs 12.2%; AF 2.2% vs 1.3%
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tB = c[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840])}>
        <div style={{ position: "absolute", left: 1385, top: 0, width: 700, height: 1080,
          background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 100%)` }} />
        {/* kutu etiketindeki sahte yazı için yama */}
        <Etiket t={t} bas={K(0, "12.0")} bitis={tB} capa={[540, 450]} konum={[540, 360]} metin="OMEGA-3" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "12.2")} bitis={tB} capa={[840, 450]} konum={[840, 360]} metin="COMPARISON" renk={RENK.gri} />
        <Etiket t={t} bas={K(1, "2.2")} capa={[540, 450]} konum={[540, 360]} metin="OMEGA-3" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "1.3")} capa={[840, 450]} konum={[840, 360]} metin="COMPARISON" renk={RENK.gri} />
      </Kamera>
      <Baslik t={t} bas={K(0, "12.0")} bitis={tB} metin="12.0% VS" x={80} y={110} boyut={110} renk={RENK.yesil} />
      <Baslik t={t} bas={K(0, "12.2")} bitis={tB} metin="12.2%" x={80} y={215} boyut={110} renk={RENK.gri} />
      <Not t={t} bas={K(0, "Major")} bitis={tB} metin="MAJOR HEART EVENTS — NO CLEAR DIFFERENCE" x={84} y={290} boyut={28} agirlik={800} />
      <Baslik t={t} bas={K(1, "fibrillation")} metin="ATRIAL FIBRILLATION" x={80} y={100} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "2.2")} metin="2.2%" x={80} y={205} boyut={110} renk={RENK.mercan} />
      <Baslik t={t} bas={K(1, "against")} metin="VS" x={370} y={205} boyut={70} renk={RENK.gri} />
      <Baslik t={t} bas={K(1, "1.3")} metin="1.3%" x={500} y={205} boyut={110} renk={RENK.gri} />
    </>
  );
};

export default S31;
