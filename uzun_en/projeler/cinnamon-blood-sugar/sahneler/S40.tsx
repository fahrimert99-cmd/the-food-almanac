// Sahne 40 — olağan kullanımda gerçek zarar nadir (NIH); ama vakalar belgelenmiş.
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNih = K(1, "National"), tCase = K(2, "cases");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [60, 40, 1800], [140, 90, 1640])} />
      <Baslik t={t} bas={K(0, "harm")} bitis={tNih - 0.2} metin="REAL HARM: RARE" x={140} y={100} boyut={80} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "ordinary")} bitis={tNih - 0.2} metin="from ordinary use" x={144} y={150} boyut={34} />
      <div style={{ position: "absolute", left: 140, top: 60, opacity: Math.min(1, Math.max(0, (t - tNih) * 3)) * (t < tCase - 0.2 ? 1 : 0) }}>
        <Hap metin="NATIONAL INSTITUTES OF HEALTH" renk={RENK.lacivert} boyut={32} />
      </div>
      <Etiket t={t} bas={K(1, "typical")} bitis={tCase - 0.2} capa={[620, 520]} konum={[640, 880]} metin="TYPICAL FOOD AMOUNTS" renk={RENK.yesil} />
      <Ikon t={t} bas={K(1, "enough")} bitis={tCase - 0.2} ad="onay" x={1000} y={880} boyut={80} />
      <Not t={t} bas={K(1, "enough")} bitis={tCase - 0.2} metin="usually not enough for major problems" x={130} y={128} boyut={36} />
      <Etiket t={t} bas={tCase} capa={[1330, 330]} konum={[1500, 160]} metin="CASES DOCUMENTED" renk={RENK.mercan} />
    </>
  );
};
export default S40;
