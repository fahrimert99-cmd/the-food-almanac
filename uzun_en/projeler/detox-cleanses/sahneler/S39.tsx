// Sahne 39 — müshil ve kolon temizliği riskleri
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kelimeZamani, kameraYolu, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; metin: string; renk: string; x: number; y: number; bitis?: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al0] = pop(t, bas, 0.5);
  const al = al0 * sol(t, bitis);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760]);
  const c1 = c[1].bas - 0.1;
  const c2 = K(1, "colon cleansing") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/39" pencere={w}>
        <Etiket t={t} bas={K(1, "dehydration")} bitis={c2} capa={[890, 480]} konum={[890, 130]} metin="DEHYDRATION" renk={RENK.mercan} boyut={28} />
      </Kamera>
      <Baslik t={t} bas={K(0, "laxatives")} bitis={c1} metin="LAXATIVES" x={70} y={110} boyut={84} renk={RENK.mercan} />
      <Pil t={t} bas={K(0, "colon")} bitis={c1} metin="COLON CLEANSING" renk={RENK.mercan} x={1500} y={180} />
      <Baslik t={t} bas={K(1, "Diarrhea")} bitis={c2} metin="DIARRHEA" x={70} y={110} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "colon cleansing")} metin="HIGHER RISK" x={70} y={110} boyut={84} renk={RENK.mercan} />
      <Pil t={t} bas={K(1, "kidney disease")} metin="KIDNEY DISEASE" renk={RENK.mercan} x={1560} y={180} />
      <Pil t={t} bas={K(1, "heart disease")} metin="HEART DISEASE" renk={RENK.mercan} x={1560} y={270} />
    </>
  );
};

export default S39;
