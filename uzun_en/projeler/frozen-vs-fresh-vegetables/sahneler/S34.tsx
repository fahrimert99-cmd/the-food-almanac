// Sahne 34 — finansman notu ve bütün kanıta bakmak
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S34: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/34" pencere={kameraYolu(t, s.sure, [130, 0, 1790], [170, 40, 1750])}>
        {/* imza kadraj dışı; açık kitaptaki sahte yazı örtülür */}
        <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, background: "#F1ECDC",
          clipPath: "polygon(780px 815px, 810px 765px, 930px 722px, 1060px 706px, 1180px 702px, 1268px 722px, 1268px 800px, 1000px 842px, 790px 838px)" }} />
        <Etiket t={t} bas={K(2, "look")} capa={[1340, 710]} konum={[1360, 480]} metin="LOOK AT ALL OF IT" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "thing")} bitis={K(1, "Reports") - 0.1} metin="ONE MORE THING" x={960} y={160} boyut={108} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "Reports")} bitis={K(2, "standard") - 0.2} metin="REPORTED FUNDING" x={960} y={160} boyut={108} hiza="orta" renk={RENK.mercan} />
      <Not t={t} bas={K(1, "frozen-food")} bitis={K(2, "standard") - 0.2} metin="from a frozen-food industry foundation" x={960} y={250} hiza="orta" boyut={38} />
      <Baslik t={t} bas={K(2, "standard")} bitis={K(2, "whole") - 0.1} metin="STANDARD METHODS" x={960} y={160} boyut={108} hiza="orta" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "whole")} metin="THE WHOLE EVIDENCE" x={960} y={160} boyut={108} hiza="orta" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "not")} metin="not one study" x={960} y={250} hiza="orta" boyut={42} renk={RENK.mercan} agirlik={800} />
    </>
  );
};

export default S34;
