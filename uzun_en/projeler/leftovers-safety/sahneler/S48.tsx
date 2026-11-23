// Sahne 48 — Listeria çalışması: yaşlı tüketici alışkanlıkları.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOld = K(0, "older"), tRte = K(1, "ready-to-eat"), tWarm = K(1, "refrigerators");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={tOld} bitis={tRte - 0.3} capa={[930, 270]} konum={[430, 150]} metin="OLDER ADULTS" renk={RENK.altin} />
        <Etiket t={t} bas={tRte} bitis={tWarm - 0.2} capa={[1387, 667]} konum={[1380, 900]} metin="READY-TO-EAT FOODS" renk={RENK.mercan} />
        <Etiket t={t} bas={tWarm} capa={[1400, 80]} konum={[1020, 70]} metin="FRIDGE RUNS TOO WARM" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Listeria")} />
    </>
  );
};
export default S48;
