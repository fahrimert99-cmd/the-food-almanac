// Sahne 45 — Üçüncü: safra kesesi. Solda karaciğer gravürü, sağda başlık ve kaçınma listesi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Liste, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pen = kameraYolu(t, s.sure, [0, 50, 1520], [40, 80, 1420]);
  const tThird = K(0, "third");
  const tGall = K(0, "gallbladder");
  const tBile = K(1, "bile flow");
  const tEU = K(1, "European");
  const tAdv = K(1, "advises");
  const tStones = K(1, "gallstones");
  const tDuct = K(1, "blocked");
  const tLiver = K(1, "liver disease");
  const tAsk = K(2, "ask");
  const [sc, al] = pop(t, tAsk, 0.55);
  return (
    <>
      <Kamera gorsel="tam/45" pencere={pen}>
        <Etiket t={t} bas={tGall} bitis={2.7} capa={[845, 440]} konum={[1130, 600]} metin="GALLBLADDER" renk={RENK.koyuYesil} boyut={34} />
        <Etiket t={t} bas={tBile} bitis={5.6} capa={[628, 450]} konum={[1130, 280]} metin="BILE FLOW" renk={RENK.altin} boyut={34} />
        <Etiket t={t} bas={tLiver} capa={[800, 300]} konum={[820, 150]} metin="LIVER" renk={RENK.mercan} boyut={34} />
      </Kamera>
      <BaslikBlok t={t} bas={tThird} bitis={2.7} satirlar={["THE", "GALLBLADDER"]} x={1860} y={190} boyut={110} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <KaynakEtiketi t={t} metin="EUROPEAN HERBAL GUIDANCE" bas={tEU - 0.1} />
      <Baslik t={t} bas={tAdv} metin="TURMERIC SUPPLEMENTS" x={1860} y={215} boyut={64} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tAdv + 0.2} metin="NOT ADVISED WITH" x={1860} y={290} boyut={40} renk={RENK.mercan} hiza="sag" font="inter" aralik={3} />
      <Liste t={t} isaret="carpi" x={1240} y={350} aralik={92} boyut={38} genislik={640}
        ogeler={[{ bas: tStones - 0.1, metin: "GALLSTONES", renk: RENK.mercan }, { bas: tDuct - 0.1, metin: "BLOCKED BILE DUCT", renk: RENK.mercan },
          { bas: tLiver - 0.1, metin: "LIVER DISEASE", renk: RENK.mercan }]} />
      <div style={{ position: "absolute", left: 1860, top: 700, transform: `translateX(-100%) scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
        <Hap metin="ASK YOUR DOCTOR FIRST" renk={RENK.yesil} boyut={44} />
      </div>
    </>
  );
};

export default S45;
