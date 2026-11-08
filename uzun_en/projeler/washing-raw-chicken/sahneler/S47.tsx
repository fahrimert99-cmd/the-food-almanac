// Sahne 47 — daha az kesin: laboratuvar ve ev mutfağı çalışmalarının sınırları.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tLess = K(0, "certain"), tWater = K(0, "clean water"), tPath = K(0, "dangerous pathogens");
  const tTracer = K(0, "harmless tracer"), tSalm = K(0, "real Salmonella");
  const [sc, al] = pop(t, tSalm, 0.5);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1820])}>
        {/* sol üst: pencere dokusunu başlığın altında sustur */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 760, height: 150,
          background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tWater} bitis={tPath - 0.2} capa={[520, 720]} konum={[220, 560]} metin="CLEAN WATER" renk={RENK.lacivert} />
        <Etiket t={t} bas={tPath} capa={[1060, 230]} konum={[1100, 62]} metin="NO DANGEROUS PATHOGENS" renk={RENK.yesil} boyut={26} />
        <Etiket t={t} bas={tTracer} capa={[1280, 780]} konum={[1690, 880]} metin="HARMLESS TRACER" renk={RENK.altin} boyut={24} />
      </Kamera>
      <Baslik t={t} bas={tLess} metin="LESS CERTAIN" x={70} y={80} boyut={84} renk={RENK.altin} />
      <div style={{ position: "absolute", right: 40, top: 650, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="NOT REAL SALMONELLA" renk={RENK.mercan} boyut={22} />
      </div>
    </>
  );
};

export default S47;
