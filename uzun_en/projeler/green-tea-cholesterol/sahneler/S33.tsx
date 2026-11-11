// Sahne 33 — yeşil çay dürüstçe nerede durur: tedavi değil, ilacın yerine geçmez.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kameraYolu(t, s.sure, [20, 10, 1880], [100, 60, 1700])} />
      <div style={{ position: "absolute", inset: 0 }}>
        <Etiket t={t} bas={K(0, "green")} bitis={K(2, "At")} capa={[470, 590]} konum={[250, 260]} metin="GREEN TEA" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "doctor")} bitis={K(2, "At")} capa={[850, 330]} konum={[330, 150]} metin="PRESCRIBED MEDICINE" renk={RENK.altin} />
      </div>
      <Baslik t={t} bas={K(1, "cholesterol") - 0.3} metin="NOT A CHOLESTEROL" x={1860} y={150} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "treatment,")} metin="TREATMENT" x={1860} y={240} boyut={84} hiza="sag" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "not") + 0.9} metin="DOES NOT REPLACE:" x={1200} y={320} boyut={32} renk={RENK.gri} agirlik={800} />
      <Liste t={t} isaret="carpi" x={1200} y={375} boyut={38} genislik={600}
        ogeler={[{ bas: K(1, "statin"), metin: "A STATIN", renk: RENK.mercan }]} />
      <Pill t={t} bas={K(2, "pleasant")} metin="A PLEASANT DRINK" renk={RENK.yesil} x={330} y={150} />
      <Pill t={t} bas={K(2, "small")} metin="A SMALL BONUS" renk={RENK.altin} x={330} y={235} />
    </>
  );
};

export default S33;
