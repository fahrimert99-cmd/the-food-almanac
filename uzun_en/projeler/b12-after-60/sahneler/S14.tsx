// Sahne 14 — laboratuvar masası: 3.299 kişilik çalışma ve pepsinojen oranı.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sayac } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTeam = K(0, "research team"), tIre = K(0, "Ireland"), tN = K(0, "3,299"), tAged = K(0, "aged");
  const tBlood = K(1, "blood marker"), tPep = K(1, "pepsinogen"), tSpot = K(1, "spot");
  const [sh, ah] = pop(t, tIre, 0.5);
  const [sg, ag] = pop(t, tSpot, 0.5);
  // pencere y=0: sağ alttaki sahte imza hiç kadraja girmez
  const pencere = kameraYolu(t, s.sure, [0, 0, 1800], [90, 0, 1750]);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={pencere}>
        <Etiket t={t} bas={tTeam} bitis={tIre - 0.1} capa={[960, 740]} konum={[960, 520]} metin="RESEARCH STUDY" renk={RENK.altin} />
        <Etiket t={t} bas={tBlood} bitis={tPep + 0.4} capa={[310, 640]} konum={[480, 400]} metin="BLOOD MARKER" renk={RENK.mercan} />
      </Kamera>
      {/* Ireland hapı → 3,299 rozeti */}
      <div style={{ position: "absolute", left: 110, top: 130, transform: `scale(${sh})`, transformOrigin: "0 50%", opacity: t < tN - 0.2 ? ah : 0 }}>
        <Hap metin="IRELAND + NORTHERN IRELAND" renk={RENK.yesil} boyut={30} />
      </div>
      <VurguRozet t={t} bas={tN} bitis={c1(s) - 0.1} vurgu={sayac(t, tN, 3299, 1.0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        not="PEOPLE AGED 60 AND OLDER" x={470} y={100} genislik={520} boyut={110} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tPep} metin="PEPSINOGEN RATIO" x={110} y={230} boyut={100} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 110, top: 310, transform: `scale(${sg})`, transformOrigin: "0 50%", opacity: ag }}>
        <Hap metin="SPOTS ATROPHIC GASTRITIS" renk={RENK.mercan} boyut={32} />
      </div>
    </>
  );
};

const c1 = (s: SP["s"]) => s.cumleler[1].bas;

export default S14;
