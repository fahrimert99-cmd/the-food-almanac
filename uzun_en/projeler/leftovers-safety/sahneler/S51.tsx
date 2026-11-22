// Alışkanlık 1: iki saat kuralı. Sol panelde başlık + rozetler, görsel sağa kayık.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tWatch = K(1, "Watch"), tIki = K(1, "two hours");
  const tPut = K(2, "Put leftovers"), t2 = K(2, "two hours"), t1 = K(2, "one hour"), tDin = K(2, "after dinner");
  const pPanel = eout(ilerle(t, 0.1, 0.7));
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [-400, -10, 2100], [-360, 10, 2000])} sinirla={false}>
        <Etiket t={t} bas={tIki} bitis={tPut - 0.1} capa={[1253, 673]} konum={[1480, 760]} metin="THE CLOCK" renk={RENK.altin} />
        <Etiket t={t} bas={tPut} bitis={t1 - 0.2} capa={[1400, 400]} konum={[980, 70]} metin="PUT AWAY" renk={RENK.yesil} />
        <Etiket t={t} bas={tDin} capa={[987, 713]} konum={[987, 870]} metin="AFTER DINNER" renk={RENK.mercan} />
      </Kamera>
      {/* sol panel: yazı alanı */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 640, opacity: pPanel,
        background: `linear-gradient(to right, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
      <Baslik t={t} bas={0.1} metin="HABIT 1" x={64} y={250} boyut={34} renk={RENK.altin} font="inter" aralik={7} />
      <Baslik t={t} bas={tWatch} metin="WATCH THE" x={60} y={340} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={tIki} metin="TWO HOURS" x={60} y={440} boyut={92} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={t2} vurgu="2 HOURS" not="put leftovers away" x={330} y={520} genislik={420} boyut={84} renk={RENK.yesil} />
      <VurguRozet t={t} bas={t1} vurgu="1 HOUR" not="on a hot day" x={330} y={740} genislik={420} boyut={84} renk={RENK.mercan} />
    </>
  );
};

export default S51;
