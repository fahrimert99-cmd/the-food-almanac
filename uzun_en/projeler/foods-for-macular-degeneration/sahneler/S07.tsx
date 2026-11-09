// Sahne 7 — kitap standı: sayfa ortasındaki leke "merkez solar" vurgusu; alt sağda iki not.
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, einout, ilerle, kameraYolu, kelimeZamani, pop, Hap } from "../kutuphane";

const Not2: React.FC<{ t: number; bas: number; metin: string; renk: string; y: number }> = ({ t, bas, metin, renk, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1500, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S07: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFade = K(1, "blur");
  const pF = einout(ilerle(t, tFade, 1.4));
  return (
    <>
      <Kamera gorsel="tam/07" pencere={kameraYolu(t, s.sure, [0, 40, 1850], [60, 90, 1720])}>
        <Etiket t={t} bas={K(0, "center")} bitis={K(0, "slowly") + 1.2} capa={[720, 480]} konum={[820, 130]} metin="THE CENTER" renk={RENK.altin} />
        {/* merkez solar: sayfa ortasında kâğıt rengi yumuşak yama */}
        <div style={{ position: "absolute", left: 720 - 190, top: 460 - 150, width: 380, height: 300, opacity: 0.85 * pF,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(250,246,236,1) 0%, rgba(250,246,236,0.9) 45%, rgba(250,246,236,0) 100%)" }} />
      </Kamera>
      <Baslik t={t} bas={K(0, "macular")} bitis={K(0, "that center") - 0.1} metin="MACULAR DEGENERATION" x={960} y={110} boyut={72} hiza="orta" renk={RENK.lacivert} />
      <Not2 t={t} bas={K(1, "Side vision")} metin="SIDE VISION USUALLY STAYS" renk={RENK.yesil} y={800} />
      <Not2 t={t} bas={tFade} metin="CENTER CAN BLUR OR FADE" renk={RENK.mercan} y={885} />
    </>
  );
};

export default S07;
