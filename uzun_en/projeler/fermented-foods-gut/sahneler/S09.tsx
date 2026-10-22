// Sahne 9 — yoğurt ve kefir: fermente süt; kefirin başlatıcısı hem bakteri hem maya içerir.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYog = Math.max(0.15, K(0, "Yogurt"));
  const tKef = K(1, "Kefir");
  const tSt = K(1, "starter");
  const tBak = K(1, "bacteria");
  const [sc, al] = pop(t, tBak, 0.5);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [70, 90, 1760])}>
        {/* yoğurt: kâse */}
        <Etiket t={t} bas={tYog} bitis={tKef - 0.2} capa={[690, 470]} konum={[330, 250]} metin="YOGURT" renk={RENK.altin} />
        {/* kefir: bardak */}
        <Etiket t={t} bas={tKef} bitis={tSt - 0.3} capa={[1130, 330]} konum={[1500, 250]} metin="KEFIR" renk={RENK.koyuYesil} />
        {/* başlatıcı: küçük kâsedeki tanecikler */}
        <Etiket t={t} bas={tSt} capa={[1240, 715]} konum={[1560, 560]} metin="STARTER" renk={RENK.yesil} />
        <div style={{ position: "absolute", left: 1560, top: 650, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="BACTERIA + YEASTS" renk={RENK.mercan} boyut={26} />
        </div>
      </Kamera>
    </>
  );
};

export default S09;
