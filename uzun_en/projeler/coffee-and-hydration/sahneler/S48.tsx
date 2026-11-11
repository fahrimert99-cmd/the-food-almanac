// Sahne 48 — "Dört: kafeini her kaynaktan say."
import React from "react";
import { ANTON, Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 40, 1920], [50, 60, 1820]);
  const [sn, an] = pop(t, 0.05, 0.5);
  const tAll = K(2, "everything");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={pen}>
        <Etiket t={t} bas={tAll} capa={[700, 560]} konum={[230, 330]} metin="SOURCE 1" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={tAll + 0.3} capa={[960, 300]} konum={[1400, 150]} metin="SOURCE 2" renk={RENK.mercan} boyut={26} />
        <Etiket t={t} bas={tAll + 0.6} capa={[1230, 640]} konum={[1690, 610]} metin="SOURCE 3" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <div style={{ position: "absolute", left: 90, top: 100, width: 110, height: 110, borderRadius: "50%", background: RENK.lacivert, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 76, transform: `scale(${sn})`, opacity: an,
        border: `4px solid ${RENK.kagitAcik}` }}>4</div>
      <Baslik t={t} bas={K(1, "all sources")} bitis={tAll - 0.2} metin="CAFFEINE FROM ALL SOURCES" x={1010} y={85} boyut={80} hiza="orta" renk={RENK.koyuYesil} />
      <BaslikBlok t={t} bas={K(2, "not only")} satirlar={["NOT ONLY", "THE COFFEE"]} x={1860} y={240} boyut={64} hiza="sag" renkler={[RENK.lacivert, RENK.mercan]} />
    </>
  );
};

export default S48;
