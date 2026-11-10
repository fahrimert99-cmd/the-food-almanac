// Sahne 46 — tek kişi, çok büyük miktar; demlenmiş çay K vitamini kaynağı değil.
import React from "react";
import { Baslik, Etiket, INTER, Ikon, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kapat = K(1, "Laboratory") - 0.2;
  const [sk, ak] = pop(t, K(1, "vitamin"), 0.55);
  const [s2, a2] = pop(t, K(1, "works"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [100, 40, 1720])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "Laboratory")} />
      {/* sol sütun: tek kişi, çok büyük miktar */}
      <Baslik t={t} bas={K(0, "one")} bitis={kapat} metin="ONE PERSON" x={50} y={300} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "very")} bitis={kapat} metin="A VERY" x={50} y={400} boyut={64} renk={RENK.mercan} />
      <Baslik t={t} bas={K(0, "very") + 0.15} bitis={kapat} metin="LARGE AMOUNT" x={50} y={470} boyut={64} renk={RENK.mercan} />
      <Etiket t={t} bas={K(1, "brewed")} bitis={K(2, "ordinary") - 0.1} capa={[800, 300]} konum={[900, 95]} metin="BREWED TEA" renk={RENK.yesil} />
      <Etiket t={t} bas={K(2, "ordinary")} capa={[800, 300]} konum={[900, 95]} metin="A CUP OR TWO" renk={RENK.yesil} />
      {/* sağ üst kart: K vitamini */}
      <div style={{ position: "absolute", left: 1280, top: 125, width: 580, transform: `scale(${sk})`, transformOrigin: "100% 0", opacity: ak,
        background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 24, padding: "16px 24px 18px",
        boxShadow: "0 10px 26px rgba(48,40,34,0.18)" }}>
        <div style={{ paddingLeft: 76, fontFamily: INTER, fontWeight: 800, fontSize: 40, letterSpacing: 2, color: RENK.lacivert }}>VITAMIN K</div>
        <div style={{ fontFamily: INTER, fontWeight: 600, fontSize: 28, color: RENK.lacivert, marginTop: 8 }}>
          not a meaningful source in brewed tea
        </div>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.mercan, marginTop: 10,
          transform: `scale(${s2})`, transformOrigin: "0 50%", opacity: a2 }}>WORKS AGAINST WARFARIN</div>
      </div>
      <Ikon t={t} bas={K(1, "vitamin")} ad="carpi" x={1342} y={178} boyut={60} zemin={RENK.mercan} />
      <Baslik t={t} bas={K(2, "different")} metin="DIFFERENT" x={50} y={700} boyut={64} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(2, "situation")} metin="SITUATION" x={50} y={770} boyut={64} renk={RENK.koyuYesil} />
    </>
  );
};

export default S46;
