// Sahne 36 — Yaşam kalitesi skorları, susuzluk sıkıntısı, ölüm/hastaneye yatış: sağ sütunda sırayla rozetler.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; metin: string; y: number }> = ({ t, bas, metin, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: 1250, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al }}>
      <Hap metin={metin} renk={RENK.yesil} boyut={24} />
    </div>
  );
};

const S36: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800]);
  const tBitis = c[1].bas - 0.15;
  const tBas = K(1, "thirst");
  return (
    <>
      <Kamera gorsel="tam/36" pencere={pen} />
      <Not t={t} bas={K(0, "quality")} bitis={tBitis} metin="QUALITY OF LIFE SCORE" x={1560} y={110} hiza="orta" genislik={700} boyut={30} agirlik={800} renk={RENK.gri} />
      <VurguRozet t={t} bas={K(0, "74.0")} bitis={tBitis} vurgu="74.0" not="NO LIMIT" x={1440} y={170} genislik={270} renk={RENK.yesil} />
      <VurguRozet t={t} bas={K(0, "72.2")} bitis={tBitis} vurgu="72.2" not="WITH LIMIT" x={1740} y={170} genislik={270} renk={RENK.altin} />
      <Not t={t} bas={K(0, "statistically")} bitis={tBitis} metin="NOT STATISTICALLY CLEAR" x={1590} y={410} hiza="orta" boyut={34} agirlik={800} renk={RENK.lacivert} />
      <Etiket t={t} bas={tBas} capa={[742, 665]} konum={[1010, 420]} metin="THIRST DISTRESS" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={c[1].bas + 0.1} satirlar={["MORE THIRST", "NO CLEAR GAIN"]} x={1280} y={190} boyut={86}
        renkler={[RENK.mercan, RENK.koyuYesil]} />
      <Pill t={t} bas={K(2, "deaths")} metin="DEATHS: NO DIFFERENCE" y={520} />
      <Pill t={t} bas={K(2, "hospitalizations")} metin="HOSPITALIZATIONS: NO DIFFERENCE" y={600} />
    </>
  );
};

export default S36;
