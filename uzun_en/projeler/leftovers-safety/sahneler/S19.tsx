// Sahne 19 — Laboratuvar çalışması: peynir ve hazır et, üç sıcaklık, 21 güne kadar.
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tc = K(1, "soft cheese"), tm = K(1, "ready-to-eat"), tt = K(1, "three"), td = K(1, "21");
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 40, 1880], [120, 90, 1700])}>
        <Etiket t={t} bas={K(0, "laboratory")} bitis={tc - 0.15} capa={[1290, 330]} konum={[1500, 170]} metin="LABORATORY STUDY" renk={RENK.altin} />
        <Etiket t={t} bas={tc} capa={[430, 480]} konum={[330, 230]} metin="SOFT CHEESE" renk={RENK.altin} />
        <Etiket t={t} bas={tm} capa={[820, 600]} konum={[900, 780]} metin="READY-TO-EAT MEAT" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={tt} vurgu="3" not="storage temperatures" x={1650} y={190} genislik={380} bitis={td - 0.1} />
      <VurguRozet t={t} bas={td - 0.05} vurgu="21 DAYS" not="checked every day, up to" x={1650} y={190} genislik={380} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "Researchers")} />
    </>
  );
};

export default S19;
