// Sahne 28 — defter sayfasında raftaki brokoli: 35 gün gerçekçi değil, 5 gün gerçek hayata yakın.
import React from "react";
import { AltSis, Baslik, BaslikBlok, Ikon, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik?.satirlar ?? ["5 DAYS", "IN THE FRIDGE"];
  const tCaut = K(0, "caution"), t35 = K(1, "thirty-five"), tFar = K(1, "far longer"), t5 = K(2, "five days"), tReal = K(2, "real life");
  const bit1 = K(2, "the 2017") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])} />
      <AltSis a={0.4} />
      {/* sol sayfadaki anlamsız yazılar panelle örtülür */}
      <Panel a={eout(ilerle(t, 0, 0.4))} taraf="sol" genislik={1060} opak={1} />
      <Ikon t={t} bas={tCaut} ad="uyari" x={220} y={260} zemin={RENK.altin} />
      <Baslik t={t} bas={tCaut + 0.1} metin="ONE CAUTION" x={300} y={260} boyut={64} renk={RENK.altin} font="anton" />
      <Baslik t={t} bas={t35} bitis={bit1} metin="35 DAYS" x={150} y={460} boyut={140} renk={RENK.mercan} />
      <Not t={t} bas={tFar} bitis={bit1} metin="far longer than most of us keep broccoli" x={150} y={560} boyut={36} genislik={760} agirlik={800} />
      <BaslikBlok t={t} bas={t5} satirlar={b} x={150} y={440} boyut={120} renkler={[RENK.koyuYesil, RENK.lacivert]} />
      <Not t={t} bas={tReal} metin="2017 study · closer to real life" x={150} y={700} boyut={36} genislik={760} agirlik={800} />
    </>
  );
};

export default S28;
