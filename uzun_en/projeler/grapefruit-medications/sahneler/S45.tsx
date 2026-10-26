// Sahne 45 — sıradan portakallar makul takas; 2001 çalışmasında karşılaştırma içeceği.
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, kagit, pop } from "../kutuphane";

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, K(1, "comparison"), 0.5);
  const gec = K(1, "precisely") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 0, 1760])}>
        {/* sağ alttaki imza kalıntısı örtülür */}
        <div style={{ position: "absolute", left: 1640, top: 900, width: 280, height: 180,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(0, "sweet")} bitis={c[1].bas} capa={[1120, 450]} konum={[330, 300]} metin="SWEET ORANGES" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "didn't")} capa={[600, 720]} konum={[330, 480]} metin="GRAPEFRUIT" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "2001")} />
      <VurguRozet t={t} bas={K(1, "10")} vurgu="10" not="volunteers" x={290} y={150} genislik={300} />
      <div style={{ position: "absolute", left: 60, top: 840, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
        <Hap metin="ORANGE JUICE = COMPARISON" renk={RENK.altin} boyut={28} />
      </div>
    </>
  );
};

export default S45;
