// Sahne 53 — özet: LDL +10, HDL +4. Özne sağda, sol panelde büyük sayılar. Alt köşelerdeki küçük izler kamera dışında.
import React from "react";
import { Baslik, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.15, 0.6));
  const aKural = eout(ilerle(t, K(0, "sixteen"), 0.6));
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [40, 0, 1800], [110, 20, 1700])}>
        <Etiket t={t} bas={K(0, "coconut")} capa={[1330, 760]} konum={[980, 560]} metin="COCONUT OIL" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={900} />
      <div style={{ position: "absolute", left: 100, top: 170, height: 6, width: 200 * aKural, background: RENK.altin }} />
      <Baslik t={t} bas={K(0, "sixteen")} metin="16 TRIALS" x={100} y={235} boyut={40} renk={RENK.altin} font="inter" aralik={6} />
      <Baslik t={t} bas={K(0, "LDL")} metin="LDL +10" x={100} y={380} boyut={150} renk={RENK.mercan} />
      <Not t={t} bas={K(0, "compared")} metin="mg/dL · vs. non-tropical vegetable oils" x={100} y={470} boyut={30} agirlik={700} genislik={700} />
      <Baslik t={t} bas={K(1, "HDL")} metin="HDL +4" x={100} y={640} boyut={150} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "four")} metin="mg/dL" x={100} y={730} boyut={30} agirlik={700} genislik={700} />
    </>
  );
};

export default S53;
