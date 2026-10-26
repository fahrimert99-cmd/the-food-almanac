// Sahne 5 — diz osteoartriti: başlık, kıkırdak etiketi, belirtiler.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Belirti: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1000, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={40} />
    </div>
  );
};

const S05: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [120, 70, 1700]);
  const tCart = K(1, "cartilage"), tThins = K(1, "thins");
  return (
    <>
      <Kamera gorsel="tam/05" pencere={pen}>
        <Etiket t={t} bas={tCart} bitis={K(1, "and") - 0.1} capa={[560, 468]} konum={[950, 620]} metin="CARTILAGE" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "and")} bitis={K(1, "painful") - 0.15} capa={[560, 468]} konum={[950, 620]} metin="THINNING OVER YEARS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "knee")} metin="KNEE" x={1860} y={150} boyut={130} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={K(0, "osteoarthritis")} metin="OSTEOARTHRITIS" x={1860} y={290} boyut={130} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "wear-and-tear")} metin="the wear-and-tear kind of arthritis" x={1860} y={390} hiza="sag" boyut={36} renk={RENK.gri} />
      <Belirti t={t} bas={K(1, "painful")} metin="PAINFUL" renk={RENK.mercan} y={620} />
      <Belirti t={t} bas={K(1, "stiff")} metin="STIFF" renk={RENK.mercan} y={720} />
      <Belirti t={t} bas={K(1, "after")} metin="AFTER SITTING STILL" renk={RENK.altin} y={820} />
    </>
  );
};

export default S05;
