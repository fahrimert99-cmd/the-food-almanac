// Sahne 9 — iki çalışma ailesi: iki kitap yığını etiketlenir, sağda başlık + not.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPhs = K(0, "Physicians'"), tCos = K(0, "COSMOS"), tYas = K(0, "adults"), tEski = K(1, "older");
  const cam = kameraYolu(t, s.sure, [0, 40, 1800], [90, 90, 1650]);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={cam} />
      <Panel a={eout(ilerle(t, 0.1, 0.8))} genislik={560} />
      <BaslikBlok t={t} bas={0.3} satirlar={s.meta.baslik!.satirlar} x={1390} y={190} boyut={84} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Etiket t={t} bas={tPhs} capa={[420, 400]} konum={[470, 220]} metin="PHYSICIANS' HEALTH STUDY II" renk={RENK.lacivert} boyut={26} />
      <Etiket t={t} bas={tCos} capa={[850, 520]} konum={[900, 330]} metin="COSMOS" renk={RENK.altin} boyut={28} />
      <div style={{ position: "absolute", left: 1370, top: 560, opacity: eout(ilerle(t, tYas, 0.5)) }}>
        <Hap metin="COSMOS: ADULTS OVER 60" renk={RENK.altin} boyut={22} />
      </div>
      <div style={{ position: "absolute", left: 1370, top: 650, opacity: eout(ilerle(t, tEski, 0.5)) }}>
        <Hap metin="START WITH THE OLDER ONE" renk={RENK.lacivert} boyut={22} />
      </div>
    </>
  );
};

export default S09;
