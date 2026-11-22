import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Ikon, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, ANTON,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sayac } from "../kutuphane";

// Yerinde beliren hap (ekran koordinatı, merkez)
const Pop: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({ t, bas, x, y, metin, renk, boyut = 28, bitis = 1e9 }) => {
  if (t > bitis) return null;
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
};

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1840]);
  const tP = K(1, "pharmacist");
  const bit = K(1, "And") - 0.2;
  const kr = "#EFE8D6";
  return (
    <>
      <Kamera gorsel="tam/45" pencere={w}>
        {/* kusur: şişe etiketlerindeki anlamsız yazıyı boş etiketle kapat */}
        <div style={{ position: "absolute", left: 152, top: 572, width: 76, height: 130, background: kr, borderRadius: 6 }} />
        <div style={{ position: "absolute", left: 246, top: 618, width: 102, height: 110, background: kr, borderRadius: 6 }} />
        <div style={{ position: "absolute", left: 343, top: 546, width: 102, height: 128, background: kr, borderRadius: 6 }} />
        <Etiket t={t} bas={K(1, "supplement")} capa={[300, 830]} konum={[560, 905]} metin="ANY SUPPLEMENT" renk={RENK.altin} />
      </Kamera>
      <Pop t={t} bas={K(0, "kidney")} bitis={bit} x={1650} y={200} metin="EVER HAD A KIDNEY STONE" renk={RENK.mercan} boyut={24} />
      <Pop t={t} bas={K(0, "disease,")} bitis={bit} x={1650} y={290} metin="KIDNEY DISEASE" renk={RENK.mercan} boyut={24} />
      <Pop t={t} bas={K(0, "doctor")} bitis={bit} x={1650} y={400} metin="TALK WITH YOUR DOCTOR" renk={RENK.yesil} boyut={24} />
      <Ikon t={t} bas={K(0, "doctor")} bitis={bit} ad="onay" x={1650} y={500} boyut={80} />
      <Baslik t={t} bas={K(1, "pharmacist") - 0.3} metin="ASK YOUR" x={1650} y={220} boyut={96} renk={RENK.lacivert} hiza="orta" />
      <Baslik t={t} bas={tP} metin="PHARMACIST" x={1650} y={330} boyut={96} renk={RENK.koyuYesil} hiza="orta" />
      <Pop t={t} bas={K(1, "interact")} x={1650} y={470} metin="SOME INTERACT WITH MEDICINES" renk={RENK.mercan} boyut={22} />
    </>
  );
};
export default S45;
