// Sahne 7 — LDL parçacıkları
import React from "react";
import { BolumKarti, Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860]);
  const [sc, al] = pop(t, K(1, "main goal"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/07" pencere={p}>
        <Etiket t={t} bas={K(0, "particles")} bitis={c[1].bas - 0.1} capa={[505, 420]} konum={[1100, 480]} metin="PARTICLES" renk={RENK.mercan} />
      </Kamera>
      <Panel a={eout(ilerle(t, c[1].bas - 0.4, 0.8))} genislik={1100} />
      <Baslik t={t} bas={K(1, "LDL")} metin={s.meta.baslik!.satirlar[0]} x={900} y={190} boyut={200} renk={RENK.mercan} />
      <Not t={t} bas={K(1, "LDL") + 0.3} metin={s.meta.baslik!.not!} x={900} y={310} boyut={36} genislik={880} />
      <Not t={t} bas={K(1, "higher risk")} metin="Linked with higher heart disease risk" x={900} y={480} boyut={42} genislik={880} agirlik={800} />
      <div style={{ position: "absolute", left: 900, top: 720, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al,
        background: RENK.kagitAcik, border: `3px solid ${RENK.koyuYesil}`, borderRadius: 999, padding: "12px 30px", fontFamily: INTER,
        fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert, whiteSpace: "nowrap" }}>MAIN GOAL: LOWER IT</div>
    </>
  );
};

export default S07;
