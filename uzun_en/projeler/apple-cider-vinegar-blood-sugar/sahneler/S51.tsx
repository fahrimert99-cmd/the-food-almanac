// Sahne 51 — ölçülü kal. Başlık sol üstte; "tabak" cümlesinde etiketler, doktor cümlesinde liste + kart.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, INTER, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S51: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tS2 = K(2, "if") - 0.1;
  const [sc, al] = pop(t, K(2, "check"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/51" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={K(1, "vinegar")} bitis={tS2} capa={[1560, 470]} konum={[1560, 200]} metin="VINEGAR" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "refined")} bitis={tS2} capa={[1260, 700]} konum={[1150, 395]} metin="REFINED CARBS" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={0.15} satirlar={s.meta.baslik?.satirlar ?? []} x={120} y={190} boyut={100} bitis={tS2} />
      <Liste t={t} x={120} y={170} aralik={90} boyut={38} isaret="nokta" genislik={640} ogeler={[
        { bas: K(2, "diabetes"), metin: "DIABETES", renk: RENK.altin },
        { bas: K(2, "kidney"), metin: "KIDNEY DISEASE", renk: RENK.altin },
        { bas: K(2, "regular"), metin: "REGULAR MEDICATION", renk: RENK.altin },
      ]} />
      {al > 0 && (
        <div style={{ position: "absolute", left: 1090, top: 200, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
          display: "flex", alignItems: "center", gap: 18, background: RENK.lacivert, borderRadius: 28, padding: "16px 34px 16px 18px",
          boxShadow: "0 10px 26px rgba(48,40,34,0.22)", whiteSpace: "nowrap" }}>
          <span style={{ width: 56, height: 56, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="onay" boyut={34} renk="#fff" kalinlik={7} />
          </span>
          <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: "#fff", lineHeight: 1.3 }}>
            CHECK WITH YOUR DOCTOR<br />OR PHARMACIST
          </span>
        </div>
      )}
    </>
  );
};

export default S51;
