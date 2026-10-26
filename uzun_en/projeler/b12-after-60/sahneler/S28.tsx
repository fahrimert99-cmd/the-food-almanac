// Sahne 28 — terazi: gözlemsel çalışma; alttaki sahte yazı yamayla örtülü.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [130, 80, 1660])}>
        <div style={{ position: "absolute", left: 560, top: 860, width: 800, height: 110,
          background: `radial-gradient(ellipse closest-side, ${kagit(1)} 0%, ${kagit(1)} 70%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "higher doses")} bitis={K(0, "weaker") - 0.2} capa={[1367, 470]} konum={[1300, 270]}
          metin="HIGHER DOSES, HIGHER ODDS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "weaker")} bitis={K(1, "but") - 0.1} capa={[540, 580]} konum={[540, 330]}
          metin="WEAKER AFTER STOPPING" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(1, "observational")} satirlar={b.satirlar} x={960} y={140} boyut={100} hiza="orta" />
      <Not t={t} bas={K(1, "couldn't")} metin="OTHER FACTORS NOT FULLY RULED OUT" x={960} y={350} hiza="orta" boyut={32}
        genislik={760} agirlik={800} />
    </>
  );
};

export default S28;
