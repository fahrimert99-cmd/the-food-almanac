// Sahne 60 — erken dondur; 65 yaş sonrası hata payı küçülür.
import React from "react";
import { Baslik, Etiket, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S60: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const cam = kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760]);
  const t65 = K(1, "65,"), tMar = K(1, "margin");
  const pP = eout(ilerle(t, t65 - 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/60" pencere={cam}>
        <Etiket t={t} bas={K(0, "Freeze")} bitis={t65 - 0.1} capa={[1000, 400]} konum={[1450, 780]} metin="FREEZE IT" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "Freeze")} bitis={t65 - 0.1} metin="FREEZE EARLY" x={70} y={880} boyut={80} renk={RENK.koyuYesil} />
      <Panel a={pP} taraf="sag" genislik={760} />
      <VurguRozet t={t} bas={t65} vurgu="AFTER 65" not="" x={1540} y={320} genislik={460} boyut={88} />
      <Baslik t={t} bas={tMar} metin="SMALLER MARGIN" x={1540} y={560} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tMar + 0.2} metin="FOR ERROR" x={1540} y={640} boyut={64} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S60;
