// Sahne 3 — videonun sözü: ye mi, atla mı; içine ne; sabah ilaçları ne zaman.
import React from "react";
import { BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S03: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/03" pencere={kameraYolu(t, s.sure, [0, 80, 1760], [90, 130, 1640])}>
        <Etiket t={t} bas={K(0, "put in")} capa={[520, 790]} konum={[600, 620]} metin="WHAT TO PUT IN" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "when")} capa={[1030, 925]} konum={[1020, 690]} metin="MORNING PILLS" renk={RENK.mercan} />
        {/* sağ alttaki sahte imza masa rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1690, top: 925, width: 230, height: 90,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(234,197,140) 0%, rgb(234,197,140) 60%, rgba(234,197,140,0) 100%)" }} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "eat")} satirlar={b.satirlar} x={960} y={190} boyut={118} hiza="orta" adim={0.35}
        renkler={[RENK.koyuYesil, RENK.mercan]} />
    </>
  );
};

export default S03;
