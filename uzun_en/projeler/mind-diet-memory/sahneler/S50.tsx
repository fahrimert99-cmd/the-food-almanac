// Sahne 50 — güvenlik notu: kuru yeşillik/K vitamini, eczacıya danış, dikkat edilecek durumlar listesi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, IkonYol, INTER, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S50: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNot = K(0, "safety"), tThin = K(1, "blood thinner"), tWar = K(1, "warfarin"), tVit = K(1, "vitamin"), tAsk = K(1, "ask");
  const tAlso = K(2, "also"), tNut = K(2, "nut"), tDia = K(2, "diabetes"), tKid = K(2, "kidney");
  const [sc, al] = pop(t, tNot, 0.5);
  return (
    <>
      <Kamera gorsel="tam/50" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [0, 40, 1800])}>
        <Etiket t={t} bas={tVit} bitis={tAlso - 0.2} capa={[800, 300]} konum={[1230, 470]} metin="LEAFY GREENS: VITAMIN K" renk={RENK.koyuYesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1150, top: 70, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%", display: "flex",
        alignItems: "center", gap: 14 }}>
        <IkonYol ad="uyari" boyut={54} renk={RENK.altin} />
        <div style={{ background: RENK.altin, borderRadius: 999, padding: "10px 30px", fontFamily: INTER, fontWeight: 800, fontSize: 34,
          letterSpacing: 4, color: "#fff" }}>SAFETY NOTE</div>
      </div>
      <Baslik t={t} bas={tThin} bitis={tAsk - 0.1} metin="BLOOD THINNER" x={1150} y={230} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={tWar} bitis={tAsk - 0.1} metin="WARFARIN" x={1150} y={330} boyut={84} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={tAsk} satirlar={["ASK YOUR", "PHARMACIST"]} x={1150} y={230} boyut={92} />
      <Not t={t} bas={tAlso} metin="ALSO CHECK FIRST IF YOU HAVE:" x={1150} y={560} boyut={30} agirlik={800} renk={RENK.altin} />
      <Liste t={t} isaret="nokta" boyut={32} aralik={84} x={1150} y={620} genislik={760}
        ogeler={[
          { bas: tNut, metin: "A NUT ALLERGY", renk: RENK.altin },
          { bas: tDia, metin: "DIABETES", renk: RENK.altin },
          { bas: tKid, metin: "A KIDNEY CONDITION WITH DIET LIMITS", renk: RENK.altin },
        ]} />
    </>
  );
};

export default S50;
