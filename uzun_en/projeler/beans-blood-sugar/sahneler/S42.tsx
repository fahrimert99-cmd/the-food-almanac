// Sahne 42 — üç kase: üstte "1" rozeti ve başlık, kaselere kaşık/yarım fincan etiketleri, altta sonuç notu.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRush = K(3, "Rushing");
  const [sn, an] = pop(t, K(0, "One."), 0.5);
  const [sh, ah] = pop(t, K(3, "zero"), 0.5);
  const tSon = K(4, "Giving");
  const aBaslik = 1 - eout(ilerle(t, tRush - 0.1, 0.4));
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840])}>
        <Etiket t={t} bas={K(2, "tablespoons")} capa={[380, 530]} konum={[380, 900]} metin="2–4 TABLESPOONS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(2, "half")} capa={[1540, 440]} konum={[1540, 900]} metin="HALF A CUP" renk={RENK.altin} />
      </Kamera>
      {/* sol üst: 1 rozeti + başlık */}
      <div style={{ position: "absolute", left: 140, top: 100, width: 110, height: 110, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "Anton", fontSize: 76, transform: `scale(${sn})`, opacity: an }}>1</div>
      <div style={{ opacity: aBaslik }}>
        <Baslik t={t} bas={K(1, "Start")} metin="START SMALL" x={290} y={170} boyut={104} renk={RENK.lacivert} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 290, transform: `translate(-50%, -50%) scale(${sh})`, opacity: ah }}>
        <Hap metin="ZERO → FULL CUP: TOO FAST" renk={RENK.mercan} boyut={34} />
      </div>
      <Not t={t} bas={tSon} metin="GIVE YOUR BODY TIME" x={960} y={866} hiza="orta" boyut={46} agirlik={800} renk={RENK.koyuYesil} />
    </>
  );
};

export default S42;
