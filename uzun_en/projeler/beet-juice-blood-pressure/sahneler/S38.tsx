// Sahne 38 — mekanizmaya dayalı önlem: içecekle antiseptik gargara arasına zaman koy; diş hekimine danış.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S38: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMek = K(0, "mechanism,"), tDirect = K(0, "direct"), tAnt = K(0, "antiseptic"), tZaman = K(0, "time"), tBeet = K(0, "beet");
  const tDiş = K(1, "dentist"), tOnlem = K(2, "precaution,");
  const tEtiketSon = K(1, "Ask") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/38" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 80, 1700])}>
        <Etiket t={t} bas={tAnt} bitis={tEtiketSon} capa={[1385, 560]} konum={[1250, 100]} metin="MOUTHWASH" renk={RENK.mercan} />
        <Etiket t={t} bas={tZaman} bitis={tEtiketSon} capa={[945, 480]} konum={[945, 100]} metin="TIMING" renk={RENK.lacivert} />
        <Etiket t={t} bas={tBeet} bitis={tEtiketSon} capa={[513, 560]} konum={[560, 100]} metin="BEET JUICE" renk={RENK.altin} />
      </Kamera>
      {/* cümle 0: mekanizma, doğrudan deneme değil */}
      <Baslik t={t} bas={tMek - 0.3} metin="MECHANISM-BASED" x={960} y={50} boyut={80} renk={RENK.koyuYesil} hiza="orta" bitis={tAnt - 0.1} />
      <Not t={t} bas={tDirect} metin="NOT A DIRECT TRIAL" x={960} y={128} hiza="orta" boyut={34} agirlik={800} bitis={tAnt - 0.1} />
      {/* cümle 1: diş hekimi */}
      <Baslik t={t} bas={tDiş - 0.4} metin="ASK YOUR DENTIST" x={960} y={60} boyut={96} renk={RENK.lacivert} hiza="orta" bitis={tOnlem - 0.2} />
      {/* cümle 2: önlem, kural değil */}
      <Baslik t={t} bas={tOnlem - 0.2} metin="A PRECAUTION," x={880} y={60} boyut={76} renk={RENK.altin} hiza="sag" />
      <Baslik t={t} bas={K(2, "not")} metin="NOT A RULE" x={910} y={60} boyut={76} renk={RENK.lacivert} hiza="sol" />
    </>
  );
};

export default S38;
