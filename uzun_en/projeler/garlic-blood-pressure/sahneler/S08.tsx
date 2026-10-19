// Sahne 8 — küçük düşüşler önemli: Law 2009 (BMJ), –22% koroner olay, –41% inme.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKay = K(1, "2009"), tOn = K(1, "ten point"), tYuzde22 = K(1, "22"), tKor = K(1, "coronary");
  const tYuzde41 = K(1, "41"), tInme = K(1, "strokes.");
  const [sk, ak] = pop(t, tKay, 0.5);
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810])} />
      {/* 0. cümle: basınç ölçer */}
      <Etiket t={t} bas={K(0, "small")} bitis={tKay - 0.2} capa={[560, 330]} konum={[1180, 500]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
      {/* kaynak hapı (sağ üst filigran bölgesinin dışında) */}
      <div style={{ position: "absolute", left: 1330, top: 112, transform: `translate(-50%, -50%) scale(${sk})`, opacity: ak }}>
        <Hap metin={s.meta.etiket ?? ""} renk={RENK.altin} />
      </div>
      <BaslikBlok t={t} bas={tOn} satirlar={["10 POINTS", "LOWER"]} x={1860} y={230} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={tYuzde22} vurgu="–22%" not="coronary events" x={1240} y={560} genislik={380} renk={RENK.mercan} />
      <VurguRozet t={t} bas={tYuzde41} vurgu="–41%" not="strokes" x={1650} y={560} genislik={380} />
      <Etiket t={t} bas={tKor} capa={[900, 190]} konum={[1160, 440]} metin="CORONARY EVENTS" renk={RENK.mercan} />
      <Etiket t={t} bas={tInme} capa={[690, 880]} konum={[1180, 880]} metin="STROKES" renk={RENK.koyuYesil} />
    </>
  );
};

export default S08;
