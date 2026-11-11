// Sahne 14 — İrlanda çalışması: 3.299 kişi, pepsinojen oranıyla atrofik gastrit taraması.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEkip = K(0, "research team"), tIr = K(0, "Ireland"), tSayi = K(0, "3,299"), tKan = K(1, "blood marker"), tPep = K(1, "pepsinogen"),
    tAG = K(1, "atrophic");
  const [sc, al] = pop(t, tIr, 0.5);
  const solIr = Math.max(0, Math.min(1, 1 - (t - 6.6) / 0.4));
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 10, 1900], [80, 60, 1700])}>
        {/* sağ alttaki sahte imza */}
        <div style={{ position: "absolute", left: 1560, top: 1000, width: 420, height: 120,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 75%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tEkip} bitis={3.3} capa={[1500, 500]} konum={[1200, 250]} metin="RESEARCH TEAM" renk={RENK.altin} />
        <Etiket t={t} bas={tKan} bitis={tPep - 0.1} capa={[330, 640]} konum={[420, 380]} metin="BLOOD MARKER" renk={RENK.mercan} />
        <Etiket t={t} bas={tAG} capa={[960, 700]} konum={[960, 540]} metin="ATROPHIC GASTRITIS" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 140, top: 110, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al * solIr }}>
        <Hap metin="IRELAND + NORTHERN IRELAND" renk={RENK.yesil} boyut={30} />
      </div>
      <VurguRozet t={t} bas={tSayi} bitis={10.1} vurgu="3,299" not="PEOPLE AGED 60 AND OLDER" x={760} y={130} genislik={620} boyut={120} />
      <Baslik t={t} bas={tPep} metin="PEPSINOGEN" x={140} y={150} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={tPep + 0.15} metin="RATIO" x={140} y={250} boyut={96} renk={RENK.koyuYesil} />
    </>
  );
};

export default S14;
