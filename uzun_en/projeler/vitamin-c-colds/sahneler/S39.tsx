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

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800]);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={w}>
        {/* kusur: kesikli yay yaması */}
        <div style={{ position: "absolute", left: 995, top: 300, width: 260, height: 440, background: `radial-gradient(ellipse at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 62%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "kidney")} capa={[250, 620]} konum={[330, 905]} metin="KIDNEY STONES" renk={RENK.mercan} />
      </Kamera>
      <Pop t={t} bas={K(0, "Swedish")} x={1360} y={160} metin="SWEDISH STUDY" renk={RENK.altin} />
      <Pop t={t} bas={K(0, "Karolinska")} x={1360} y={245} metin="KAROLINSKA INSTITUTET" renk={RENK.lacivert} boyut={26} />
      <Baslik t={t} bas={K(0, "23,355")} metin="23,355 MEN" x={1060} y={440} boyut={120} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "11")} metin="11 YEARS" x={1060} y={580} boyut={120} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "Their")} />
    </>
  );
};
export default S39;
