// Sahne 54 — market rafı: sağ panelde alışveriş listesi, sonra etiket/uyarı notları.
import React from "react";
import { Baslik, Etiket, Kamera, Liste, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S54: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800]);
  const cik = c[1].bas - 0.2;
  return (
    <>
      <Kamera gorsel="tam/54" pencere={p}>
        <Etiket t={t} bas={K(0, "plain tofu")} bitis={cik} capa={[560, 330]} konum={[560, 85]} metin="PLAIN TOFU" renk={RENK.altin} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.1, 0.6))} taraf="sag" genislik={820} opak={0.96} />
      <Baslik t={t} bas={K(0, "look for")} bitis={cik} metin="LOOK FOR" x={1240} y={140} boyut={34} renk={RENK.altin} font="inter" aralik={6} />
      <Liste t={t} x={1240} y={200} aralik={88} boyut={36} isaret="onay" genislik={620} ogeler={[
        { bas: K(0, "plain tofu"), metin: "PLAIN TOFU", bitis: cik },
        { bas: K(0, "edamame"), metin: "EDAMAME", bitis: cik },
        { bas: K(0, "tempeh"), metin: "TEMPEH", bitis: cik },
        { bas: K(0, "unsweetened"), metin: "UNSWEETENED SOY MILK", bitis: cik },
        { bas: K(0, "miso"), metin: "MISO", bitis: cik },
      ]} />
      <Baslik t={t} bas={K(1, "check labels")} metin="CHECK LABELS" x={1240} y={140} boyut={34} renk={RENK.altin} font="inter" aralik={6} />
      <Liste t={t} x={1240} y={210} aralik={110} boyut={38} isaret="nokta" genislik={620} ogeler={[
        { bas: K(1, "added sugar"), metin: "ADDED SUGAR", renk: RENK.mercan },
        { bas: K(1, "miso is salty"), metin: "MISO IS SALTY", renk: RENK.altin },
      ]} />
      <Not t={t} bas={K(1, "added sugar") + 0.3} metin="Unsweetened is the pick." x={1244} y={440} boyut={30} renk={RENK.gri} genislik={560} />
    </>
  );
};

export default S54;
