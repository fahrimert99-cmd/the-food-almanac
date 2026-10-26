// Sahne 44 — Antitrombosit etki + takviye/yemek ayrımı. Sağda büyük şişe, solda boş kâğıt üstü başlıklar.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAnti = K(0, "antiplatelet");
  const tRisk = K(0, "bleeding risk");
  const tSup = K(1, "supplements");
  const tGida = K(1, "turmeric in food");
  const tDur = K(1, "no one should stop");
  const [sc, al] = pop(t, tDur, 0.5);
  const cok = eout(ilerle(t, tRisk, 0.5));
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [0, 0, 1760], [100, 20, 1640])}>
        {/* etiketteki anlamsız sayılar ve alttaki kod kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 1551, top: 478, width: 54, height: 312, background: "#FAF9F5" }} />
        <div style={{ position: "absolute", left: 1360, top: 748, width: 120, height: 40, background: "#FAF9F5" }} />
        <Etiket t={t} bas={tSup} bitis={tGida - 0.2} capa={[1440, 290]} konum={[1100, 200]} metin="SUPPLEMENT CAPSULES" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={tAnti} bitis={tSup - 0.3} satirlar={["MILD", "ANTIPLATELET", "EFFECT"]} x={70} y={110} boyut={84} />
      <Not t={t} bas={tRisk} bitis={tSup - 0.3} metin="could add to bleeding risk with other medicines" x={74} y={110 + 3 * 84 * 1.12 - 6} boyut={30} genislik={760} />
      <Baslik t={t} bas={tSup} metin="SUPPLEMENTS" x={70} y={170} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tGida} metin="NOT TURMERIC IN FOOD" x={74} y={270} boyut={50} renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 74, top: 360, transform: `scale(${sc})`, transformOrigin: "0 0", opacity: al,
        display: "flex", alignItems: "center", gap: 18 }}>
        <Hap metin="DON'T STOP A PRESCRIBED MEDICINE ALONE" renk={RENK.mercan} boyut={30} />
      </div>
    </>
  );
};

export default S44;
