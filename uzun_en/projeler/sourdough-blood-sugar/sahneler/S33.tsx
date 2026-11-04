// Sahne 33 — asitler: somun solda, bakteri dairesi sağda.
import React from "react";
import { Baslik, Hap, Kamera, KaynakEtiketi, Etiket, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Anlatımla senkron hap (ekran koordinatı)
const Pil: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={26} />
    </div>
  );
};

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kp = kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840]);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={kp}>
        <Etiket t={t} bas={K(1, "bacteria")} capa={[1307, 467]} konum={[1090, 470]} metin="BACTERIA" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "acids")} metin="THE ACIDS" x={1040} y={112} boyut={110} renk={RENK.koyuYesil} />
      <Pil t={t} bas={K(1, "lactic")} x={1130} y={790} metin="LACTIC ACID" renk={RENK.altin} />
      <Pil t={t} bas={K(1, "organic acids")} x={1130} y={865} metin="ORGANIC ACIDS" renk={RENK.altin} />
      <KaynakEtiketi t={t} bas={K(2, "Stamataki")} metin="Stamataki et al. · Br J Nutr · 2017" />
      <Not t={t} bas={K(2, "may play")} metin="MAY PLAY A ROLE, NOT CONFIRMED" x={1044} y={182} boyut={30} agirlik={800} renk={RENK.mercan} />
    </>
  );
};
export default S33;
