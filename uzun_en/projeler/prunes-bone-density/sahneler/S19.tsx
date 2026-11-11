// Sahne 19 — bırakma oranı: solda masa, sağda üç çubuk (41 / 15 / 10 %).
import React from "react";
import { Baslik, CubukGrafik, Hap, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [20, 12, 1860]);
  const tIpucu = K(0, "practical"), tBaslik = K(1, "Dropout");
  const t41 = K(1, "41 percent"), t15 = K(1, "15 percent"), t10 = K(1, "10 percent"), tWhy = K(2, "does not say why");
  const cubuklar = [
    { etiket: "100 G", deger: 41, metin: "41%", renk: RENK.mercan, bas: t41 - 0.1 },
    { etiket: "50 G", deger: 15, metin: "15%", renk: RENK.altin, bas: t15 - 0.1 },
    { etiket: "NO PRUNES", deger: 10, metin: "10%", renk: RENK.yesil, bas: t10 - 0.1 },
  ];
  const [sW, aW] = pop(t, tWhy, 0.55);
  return (
    <>
      <Kamera gorsel="tam/19" pencere={pencere} />
      <Panel a={eout(ilerle(t, t41 - 0.4, 0.6))} genislik={860} />
      <Not t={t} bas={tIpucu} metin="A PRACTICAL CLUE" x={150} y={60} boyut={30} renk={RENK.altin} agirlik={800} />
      <Baslik t={t} bas={tBaslik} metin="DROPOUT" x={150} y={150} boyut={100} renk={RENK.mercan} />
      <Not t={t} bas={tBaslik + 0.4} metin="left the 100 gram group, vs 10% with no prunes" x={1190} y={250} boyut={30} genislik={630} />
      <CubukGrafik t={t} bas={t41} cubuklar={cubuklar} x={1130} y={420} w={690} h={340} maks={45} />
      <div style={{ position: "absolute", left: 1475, top: 870, transform: `translate(-50%, 0) scale(${sW})`, opacity: aW, whiteSpace: "nowrap" }}>
        <Hap metin="THE ABSTRACT DOES NOT SAY WHY" renk={RENK.lacivert} boyut={26} />
      </div>
    </>
  );
};

export default S19;
