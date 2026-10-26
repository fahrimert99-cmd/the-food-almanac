// Sahne 42 — tek kesin kural: ilacı kendi başına bırakma.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const gec = K(2, "missed") - 0.25;
  const pPanel = eout(ilerle(t, 0, 0.6));
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1780])}>
        <Etiket t={t} bas={K(2, "statin")} capa={[400, 450]} konum={[250, 230]} metin="STATIN" renk={RENK.altin} />
        <Etiket t={t} bas={K(2, "pressure")} capa={[790, 570]} konum={[760, 905]} metin="BLOOD PRESSURE PILL" renk={RENK.mercan} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={980} opak={1} />
      <Baslik t={t} bas={K(0, "firm")} bitis={c[1].bas + 0.1} metin="ONE FIRM RULE" x={1860} y={420} boyut={34} renk={RENK.altin} hiza="sag" font="inter" aralik={6} />
      <BaslikBlok t={t} bas={K(1, "Never")} bitis={gec} satirlar={["NEVER STOP", "ON YOUR OWN"]} x={1860} y={400} boyut={92} hiza="sag"
        renkler={[RENK.mercan, RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(2, "missed")} satirlar={["MISSED DOSE", "CAN CAUSE", "ITS OWN PROBLEMS"]} x={1860} y={380} boyut={70} hiza="sag"
        renkler={[RENK.lacivert, RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S42;
