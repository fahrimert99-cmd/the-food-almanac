// Sahne 26 — bal şekerin biraz altında; "serbest geçiş" değil (terazi: bal / şeker)
import React from "react";
import { Baslik, Etiket, Hap, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const yama = (l: number, tp: number, w: number, h: number): React.CSSProperties => ({
  position: "absolute", left: l, top: tp, width: w, height: h,
  background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)`,
});

const S26: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const [sc, al] = pop(t, K(1, "little below"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/26" pencere={kameraYolu(t, s.sure, [60, 20, 1800], [140, 60, 1640])}>
        {/* alttaki sahte yazı ve imza kalıntıları örtülür */}
        <div style={yama(100, 950, 500, 130)} />
        <div style={yama(1420, 1030, 220, 50)} />
      </Kamera>
      <Etiket t={t} bas={K(0, "honey")} bitis={c[1].bas + 0.3} capa={[600, 420]} konum={[960, 330]} metin="HONEY" renk={RENK.altin} />
      <Etiket t={t} bas={K(0, "table")} bitis={c[1].bas + 0.3} capa={[1300, 640]} konum={[1300, 380]} metin="TABLE SUGAR" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 960, top: 330, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="A LITTLE BELOW" renk={RENK.yesil} boyut={34} />
      </div>
      <Baslik t={t} bas={K(1, "free")} metin="NOT A FREE PASS" x={1260} y={190} boyut={110} renk={RENK.mercan} hiza="orta" />
    </>
  );
};

export default S26;
