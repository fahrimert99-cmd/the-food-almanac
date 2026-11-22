// Sahne 23 — Kutuyu tarihle: Rutgers önerisi; 3. gün mü 6. gün mü?
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

// Takvim yüzü (bozuk rakamlar) — kavanoz kapağını kesmeyen çokgen, görsel koordinatı
const YUZ = [[430, 135], [728, 135], [728, 425], [545, 425], [545, 285], [525, 252], [480, 232], [430, 228]]
  .map(([x, y]) => `${Math.round(x * 4 / 3)}px ${Math.round(y * 4 / 3)}px`).join(", ");

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tD = K(1, "date");
  const aD = eout(ilerle(t, K(1, "cooked"), 0.5));
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 30, 1880], [80, 60, 1760])}>
        {/* takvim yüzü kâğıtla örtülü; yazı "cooked" denince gelir */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, clipPath: `polygon(${YUZ})` }}>
          <div style={{ position: "absolute", left: 585, top: 180, width: 400, height: 400, background: "#FBF8F1" }} />
          {[0, 1, 2, 3].map((i) => (
            <div key={i} style={{ position: "absolute", left: 640, width: 280, top: 330 + i * 52, height: 3, background: RENK.murekkep, opacity: 0.18 }} />
          ))}
          <div style={{ position: "absolute", left: 585, width: 400, top: 215, textAlign: "center", opacity: aD, fontFamily: INTER, fontWeight: 800,
            fontSize: 34, letterSpacing: 3, color: RENK.lacivert }}>DATE COOKED</div>
        </div>
        <Etiket t={t} bas={K(1, "marking")} bitis={tD + 2.5} capa={[790, 820]} konum={[1000, 900]} metin="WRITE THE DATE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "leftovers")} bitis={tD + 2.5} capa={[480, 640]} konum={[200, 900]} metin="LEFTOVERS" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={0.15} satirlar={["DATE THE", "CONTAINER"]} x={1860} y={250} boyut={100} hiza="sag" />
      <KaynakEtiketi t={t} metin="RUTGERS · FS588" bas={K(1, "Rutgers")} />
      <VurguRozet t={t} bas={K(1, "three")} vurgu="DAY 3?" x={1440} y={560} genislik={280} boyut={80} />
      <VurguRozet t={t} bas={K(1, "six")} vurgu="DAY 6?" x={1740} y={560} genislik={280} boyut={80} renk={RENK.mercan} />
    </>
  );
};

export default S23;
