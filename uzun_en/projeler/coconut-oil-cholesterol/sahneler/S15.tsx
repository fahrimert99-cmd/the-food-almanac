// Sahne 15 — yazarların sonucu: hindistan cevizi yağı LDL'yi daha çok yükseltir; bu, yiyecek seçimlerine yön vermeli.
import React from "react";
import { AltSis, Baslik, BaslikBlok, Etiket, Hap, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [s1, a1] = pop(t, K(0, "raises"), 0.5);
  const [s2, a2] = pop(t, K(0, "more"), 0.5);
  const sag = (sc: number, al: number, e: React.ReactNode) => (
    <div style={{ transform: `scale(${sc})`, opacity: al, transformOrigin: "100% 50%" }}>{e}</div>
  );
  return (
    <>
      <Kamera gorsel="tam/15" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 100, 1780])}>
        <Etiket t={t} bas={K(0, "coconut")} capa={[490, 520]} konum={[880, 330]} metin="COCONUT OIL" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={940} />
      <AltSis a={0.7} yukseklik={150} />
      <BaslikBlok t={t} bas={K(0, "concluded")} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={170} boyut={100} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 440, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 22 }}>
        {sag(s1, a1, <Hap metin="COCONUT OIL RAISES LDL" renk={RENK.mercan} boyut={36} />)}
        {sag(s2, a2, <Hap metin="MORE THAN NON-TROPICAL OILS" renk={RENK.yesil} boyut={36} />)}
      </div>
      <Baslik t={t} bas={K(0, "inform")} metin="INFORM FOOD CHOICES" x={1860} y={730} boyut={72} hiza="sag" renk={RENK.altin} />
    </>
  );
};

export default S15;
