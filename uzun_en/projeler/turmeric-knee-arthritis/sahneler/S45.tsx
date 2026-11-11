// Sahne 45 — Safra kesesi: safra akışı ve takviye uyarıları. Solda organlar, sağ panelde başlık ve liste.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, Liste, Panel, Parcaciklar, RENK, SP, eout, ilerle, kagit, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKes = K(0, "gallbladder");
  const tSafra = K(1, "bile flow");
  const tAvrupa = K(1, "European");
  const tKarsi = K(1, "advises against");
  const tTas = K(1, "gallstones");
  const tKanal = K(1, "blocked bile duct");
  const tKaraciger = K(1, "liver disease");
  const tDoktor = K(2, "ask your doctor");
  const [sc, al] = pop(t, tDoktor, 0.55);
  const pPanel = eout(ilerle(t, 0.3, 0.8));
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1880], [20, 30, 1720])}>
        {/* alttaki kopuk kök çizimi kâğıt rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 880, top: 740, width: 600, height: 340,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tKes} bitis={tKarsi - 0.3} capa={[850, 560]} konum={[1080, 640]} metin="GALLBLADDER" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={tKaraciger} capa={[300, 330]} konum={[330, 105]} metin="LIVER" renk={RENK.mercan} />
        <Parcaciklar t={t} bas={tSafra} kaynak={[650, 410]} hedef={[520, 610]} adet={26} aralik={0.12} omur={1.6} yayilma={20}
          kavis={0} hedefYayilma={30} tohum="safra" boyut={7} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={900} />
      <BaslikBlok t={t} bas={tKes - 0.1} bitis={K(1, "so") - 0.1} satirlar={["THE", "GALLBLADDER"]} x={1860} y={210} boyut={110} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 130, opacity: eout(ilerle(t, tAvrupa, 0.5)), transform: `translateX(${(1 - eout(ilerle(t, tAvrupa, 0.5))) * 30}px)` }}>
        <Hap metin="EUROPEAN HERBAL GUIDANCE" renk={RENK.altin} boyut={32} />
      </div>
      <Baslik t={t} bas={tKarsi} metin="ADVISES AGAINST SUPPLEMENTS" x={1860} y={290} boyut={58} hiza="sag" renk={RENK.lacivert} />
      <Liste t={t} x={1210} y={360} aralik={92} boyut={36} isaret="nokta" genislik={650}
        ogeler={[
          { bas: tTas, metin: "GALLSTONES", renk: RENK.altin },
          { bas: tKanal, metin: "BLOCKED BILE DUCT", renk: RENK.altin },
          { bas: tKaraciger, metin: "LIVER DISEASE", renk: RENK.altin },
        ]} />
      <div style={{ position: "absolute", left: 1530, top: 700, transform: `translate(-50%,0) scale(${sc})`, opacity: al }}>
        <Hap metin="ASK YOUR DOCTOR FIRST" renk={RENK.yesil} boyut={40} />
      </div>
    </>
  );
};

export default S45;
