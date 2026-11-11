// Sahne 44 — Adım 3: ikinci öğün etkisi (kuru baklagil kahvaltı/öğle, sonraki öğüne etki)
import React from "react";
import { ANTON, AdimAkisi, Baslik, Etiket, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.5);
  const tSec = K(1, "second");
  const tAkis = K(2, "so");
  const tStudy = K(3, "one");
  const pSol = eout(ilerle(t, 0, 0.6));
  const pSag = eout(ilerle(t, tStudy - 0.3, 0.6));
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        {/* kahvaltı / öğle: saat */}
        <Etiket t={t} bas={K(2, "breakfast")} bitis={8.8} capa={[1147, 250]} konum={[1580, 340]} metin="BREAKFAST OR LUNCH" renk={RENK.altin} />
        {/* mercimek çorbası ve fasulye salatası */}
        <Etiket t={t} bas={K(2, "lentil")} capa={[720, 710]} konum={[600, 590]} metin="LENTIL SOUP" renk={RENK.mercan} />
        <Etiket t={t} bas={K(2, "bean")} bitis={11.4} capa={[1240, 720]} konum={[1520, 610]} metin="BEAN SALAD" renk={RENK.yesil} />
      </Kamera>
      {/* sol panel: pencerenin karışık dokusunu örter, başlık burada */}
      <Panel a={pSol} taraf="sol" genislik={600} opak={0.93} />
      <div style={{ position: "absolute", left: 60, top: 230, width: 100, height: 100, borderRadius: "50%", background: RENK.lacivert,
        color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 68,
        transform: `scale(${sc})`, opacity: al }}>3</div>
      <Baslik t={t} bas={tSec} metin="SECOND MEAL" x={60} y={440} boyut={96} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tSec + 0.2} metin="EFFECT" x={60} y={545} boyut={96} renk={RENK.lacivert} />
      {/* ilk öğün → sonraki öğün */}
      <div style={{ opacity: sol(t, tStudy - 0.4) }}>
        <AdimAkisi t={t} x={1180} y={470} boyut={30} numarali={false} adimlar={[
          { bas: tAkis, metin: "BEANS EARLY", renk: RENK.yesil },
          { bas: K(2, "steady"), metin: "MAY STEADY NEXT MEAL", renk: RENK.altin },
        ]} />
      </div>
      {/* 3. cümle: tek küçük çalışma */}
      <Panel a={pSag} taraf="sag" genislik={560} opak={0.93} />
      <Baslik t={t} bas={tStudy} metin="ONE SMALL" x={1400} y={400} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tStudy + 0.2} metin="STUDY" x={1400} y={495} boyut={84} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(3, "gentle") - 0.1} vurgu="GENTLE BONUS" not="treat it as a bonus" x={1640} y={620} genislik={440} boyut={58} renk={RENK.altin} />
    </>
  );
};

export default S44;
