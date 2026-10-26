// Sahne 28 — dengeli terazi: gözlemsel çalışma sınırı. Önce doz/bırakma maddeleri, sonra "OBSERVED, NOT PROVEN".
import React from "react";
import { BaslikBlok, Etiket, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S28: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tDoz = K(0, "doses"), tDur = K(0, "weaker"), tGozlem = K(1, "observational"), tDiger = K(1, "other");
  const gec = K(1, "but") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/28" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [80, 90, 1760])}>
        {/* terazinin altındaki anlamsız yazıyı örten kâğıt rengi yama */}
        <div style={{ position: "absolute", left: 740, top: 880, width: 520, height: 56,
          background: "rgb(252,251,221)" }} />
        <Etiket t={t} bas={tDoz} bitis={gec} capa={[1375, 600]} konum={[1375, 290]} metin="HIGHER DOSES" renk={RENK.mercan} />
      </Kamera>
      <Liste t={t} x={90} y={150} boyut={36} isaret="nokta" genislik={1000} aralik={80} ogeler={[
        { bas: tDoz, metin: "HIGHER DOSES, HIGHER ODDS", renk: RENK.mercan, bitis: gec },
        { bas: tDur, metin: "WEAKER AFTER STOPPING", renk: RENK.yesil, bitis: gec },
      ]} />
      <BaslikBlok t={t} bas={tGozlem} satirlar={s.meta.baslik?.satirlar ?? []} x={960} y={190} boyut={112} hiza="orta" />
      <Not t={t} bas={tDiger} metin="OTHER FACTORS NOT FULLY RULED OUT" x={960} y={420} hiza="orta" boyut={38} />
    </>
  );
};

export default S28;
