// Sahne 23 — yalnızca menopoz sonrası kadınlar incelendi; erkekler için doğrudan bilgi yok.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, K(1, "men"), 0.55);
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [230, 60, 1450], [290, 100, 1340])}>
        <Etiket t={t} bas={K(0, "women,")} bitis={5.4} capa={[560, 320]} konum={[800, 140]} metin="ONLY WOMEN" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "menopause.")} bitis={5.4} capa={[440, 720]} konum={[640, 470]} metin="POSTMENOPAUSAL" renk={RENK.lacivert} />
      </Kamera>
      <div style={{ position: "absolute", left: 1300, top: 300, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin="MEN: NOT STUDIED" renk={RENK.mercan} boyut={40} />
      </div>
    </>
  );
};
export default S23;
