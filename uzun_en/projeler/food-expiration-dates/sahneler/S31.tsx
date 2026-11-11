// Sahne 31 — Listeria buzdolabında üreyebilir; dondurma yok etmez.
import React from "react";
import { BaslikBlok, Etiket, IkonYol, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S31: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFr = K(1, "freezing"), a = eout(ilerle(t, tFr, 0.5));
  return (
    <>
      <Kamera gorsel="tam/31" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1860])}>
        <Etiket t={t} bas={K(0, "Listeria")} capa={[1000, 210]} konum={[1450, 200]} metin="LISTERIA" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "refrigerator")} capa={[470, 455]} konum={[1150, 620]} metin="FRIDGE TEMPS" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <BaslikBlok t={t} bas={K(1, "grow")} satirlar={["GROWS IN", "THE FRIDGE"]} x={1860} y={350} boyut={100} hiza="sag" />
      {a > 0 && (
        <div style={{ position: "absolute", left: 1150, top: 740, width: 700, opacity: a, display: "flex", gap: 20, alignItems: "center",
          transform: `translateY(${(1 - a) * 12}px)` }}>
          <span style={{ width: 62, height: 62, flex: "none", borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IkonYol ad="carpi" boyut={34} renk="#fff" />
          </span>
          <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 36, color: RENK.lacivert, lineHeight: 1.2 }}>FREEZING DOES NOT ELIMINATE IT</span>
        </div>
      )}
    </>
  );
};
export default S31;
