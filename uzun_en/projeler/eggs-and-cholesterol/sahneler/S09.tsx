// Sahne 9 — kan kolesterolü ve LDL parçacıkları (tüp solda, başlık sağda).
import React from "react";
import { BaslikBlok, kagit, Etiket, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tL = K(2, "LDL");
  const tYig = K(2, "build up");
  const cik = tL - 0.3;
  const pPanel = eout(ilerle(t, tL - 0.4, 0.7));
  return (
    <>
      <Kamera gorsel="tam/09" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 110, 1680])}>
        {/* imza yaması */}
        <div style={{ position: "absolute", left: 480, top: 900, width: 260, height: 100, background: `radial-gradient(ellipse at center, ${kagit(1)} 45%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "cholesterol")} bitis={cik} capa={[300, 500]} konum={[760, 420]} metin="BLOOD CHOLESTEROL" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "particles")} bitis={cik} capa={[345, 690]} konum={[820, 580]} metin="IN PARTICLES" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={1000} />
      <BaslikBlok t={t} bas={tL} satirlar={["LDL", "THE ONE", "TO WATCH"]} x={1860} y={330} boyut={100} hiza="sag"
        renkler={[RENK.mercan, RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tYig} metin="CAN BUILD UP IN ARTERY WALLS" x={1860} y={720} hiza="sag" boyut={36} agirlik={800} genislik={760} />
    </>
  );
};

export default S09;
