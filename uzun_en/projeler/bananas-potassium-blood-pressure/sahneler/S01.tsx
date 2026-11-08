// Sahne 1 — 22 deney incelemesi: muz + tansiyon aleti, sağda başlık ve rozet.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, Not, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBas = K(0, "22");
  const tPot = K(0, "potassium");
  const tBp = K(0, "blood pressure");
  const tFive = K(0, "five");
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kameraYolu(t, s.sure, [0, 40, 1860], [0, 70, 1700])}>
        <Etiket t={t} bas={tPot} bitis={tBp + 0.4} capa={[210, 520]} konum={[560, 190]} metin="POTASSIUM" renk={RENK.altin} />
        <Etiket t={t} bas={tBp} capa={[615, 745]} konum={[1000, 590]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, tBas - 0.4, 0.6))} taraf="sag" genislik={760} opak={0.9} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Baslik t={t} bas={tBas} metin="22 TRIALS" x={1860} y={250} boyut={110} renk={RENK.lacivert} hiza="sag" />
      <Not t={t} bas={tBas + 0.5} metin="Review of potassium trials" x={1860} y={330} hiza="sag" boyut={32} genislik={620} />
      <VurguRozet t={t} bas={tFive} vurgu="–5.3" not={s.meta.baslik?.not} x={1560} y={440} genislik={440} boyut={120} />
    </>
  );
};

export default S01;
