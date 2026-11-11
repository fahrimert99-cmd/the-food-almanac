// Sahne 30 — hype freni: iki şişe (görseldeki gerçek etiketler), sağda "anlamlı fark yok", sonra kazancın geldiği yer.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tHype = K(0, "hype"), tFark = K(1, "no significant"), tGain = K(2, "gain");
  const tTer = K(2, "butter"), tMar = K(2, "margarine"), tMayo = K(2, "mayonnaise");
  const bit = tGain - 0.2;
  const pil = (bas: number, y: number, m: string) => {
    const [sc, al] = pop(t, bas, 0.5);
    return <div style={{ position: "absolute", left: 1720, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}><Hap metin={m} renk={RENK.yesil} boyut={30} /></div>;
  };
  return (
    <>
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [80, 50, 1740])} />
      <Baslik t={t} bas={tHype} metin="HYPE" x={100} y={190} boyut={110} renk={RENK.mercan} />
      <Baslik t={t} bas={tHype + 0.2} metin="CHECK" x={100} y={300} boyut={110} renk={RENK.lacivert} />
      <Baslik t={t} bas={tFark} bitis={bit} metin="NO SIGNIFICANT" x={1700} y={250} boyut={64} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tFark + 0.2} bitis={bit} metin="DIFFERENCE" x={1700} y={330} boyut={64} renk={RENK.mercan} hiza="orta" />
      <Not t={t} bas={tFark + 0.5} bitis={bit} metin="olive oil vs. other vegetable oils" x={1700} y={400} boyut={26} hiza="orta" genislik={380} />
      <Baslik t={t} bas={tGain} metin="THE GAIN" x={1700} y={250} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
      {pil(tMayo, 460, "MAYONNAISE")}
      {pil(tMar, 540, "MARGARINE")}
      <Etiket t={t} bas={tTer} capa={[1500, 830]} konum={[1720, 640]} metin="BUTTER" renk={RENK.yesil} />
    </>
  );
};

export default S30;
