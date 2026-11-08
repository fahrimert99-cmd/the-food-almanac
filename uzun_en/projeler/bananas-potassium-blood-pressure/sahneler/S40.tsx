// Sahne 40 — sınır: yaşlı yetişkinlerde kanıt daha ince; 51 ortalama yaş, tuz ikamesi çalışması 60+
import React from "react";
import { BaslikBlok, Baslik, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOld = K(0, "older adults");
  const tAdults = K(0, "adults");
  const tThin = K(0, "thinner");
  const tRev = K(1, "reviews");
  const tUrine = K(1, "urine study");
  const t51 = K(1, "51");
  const tSalt = K(2, "salt substitute");
  const tClose = K(2, "closest");
  const t60 = K(2, "60");
  const c1 = K(1, "The") - 0.25;
  const c2 = t51 - 0.5;
  const c3 = tSalt - 0.2;
  const [s1, a1] = pop(t, tRev, 0.5);
  const [s2, a2] = pop(t, tUrine, 0.5);
  const [s3, a3] = pop(t, tClose, 0.5);
  const mer = (x: number, y: number, sc: number, al: number, m: string, r: string, bit: number) =>
    t > bit ? null : (
      <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, 0) scale(${sc})`, opacity: al }}>
        <Hap metin={m} renk={r} boyut={36} />
      </div>
    );
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tAdults} bitis={c1} capa={[1340, 470]} konum={[1150, 320]} metin="OLDER ADULT" renk={RENK.altin} />
      </Kamera>
      {/* 1. cümle */}
      <BaslikBlok t={t} bas={tOld} bitis={c1} satirlar={["OLDER ADULTS:", "THINNER EVIDENCE"]} x={960} y={100} boyut={78} hiza="orta"
        renkler={[RENK.lacivert, RENK.mercan]} />
      {/* 2. cümle */}
      {mer(960, 90, s1, a1, "REVIEWS: ALL AGES", RENK.koyuYesil, c2)}
      {mer(960, 170, s2, a2, "URINE STUDY", RENK.lacivert, c2)}
      <VurguRozet t={t} bas={t51} bitis={c3} vurgu="≈ 51" not="average age, urine study" x={960} y={80} genislik={440} />
      {/* 3. cümle */}
      <Baslik t={t} bas={tSalt} metin="SALT SUBSTITUTE TRIAL" x={960} y={110} boyut={72} renk={RENK.koyuYesil} hiza="orta" />
      {mer(960, 170, s3, a3, "CLOSEST TO MANY VIEWERS", RENK.altin, 1e9)}
      <VurguRozet t={t} bas={t60} vurgu="60+" not="people 60 and older" x={960} y={250} genislik={400} renk={RENK.koyuYesil} />
    </>
  );
};

export default S40;
