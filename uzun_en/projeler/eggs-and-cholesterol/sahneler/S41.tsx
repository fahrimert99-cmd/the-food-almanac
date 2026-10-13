// Sahne 41 — AHA bildirisi: "kalıplar, sayılar değil". Sağda başlık, görseldeki yemeklere etiketler.
import React from "react";
import { Baslik, Etiket, Hap, INTER, Kamera, KaynakEtiketi, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKalip = K(0, "patterns,"), tSayi = K(1, "specific"), tZor = K(1, "hard to apply");
  const tMed = K(0, "Mediterranean"), tDash = K(0, "DASH"), tDus = K(0, "naturally low");
  const [sz, az] = pop(t, tZor, 0.5);
  const aDus = eout(ilerle(t, tDus, 0.5));
  return (
    <>
      <Kamera gorsel="tam/41" pencere={kameraYolu(t, s.sure, [0, 10, 1920], [90, 50, 1740])}>
        {/* sol alttaki küçük imza kalıntıları kâğıt rengiyle örtülür */}
        <div style={{ position: "absolute", left: 20, top: 975, width: 360, height: 105,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={tMed} capa={[640, 700]} konum={[1420, 720]} metin="MEDITERRANEAN" renk={RENK.yesil} boyut={32} />
        <Etiket t={t} bas={tDash} capa={[780, 520]} konum={[1420, 590]} metin="DASH" renk={RENK.altin} boyut={32} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tKalip} metin="PATTERNS," x={1860} y={290} boyut={104} renk={RENK.lacivert} hiza="sag" />
      <Baslik t={t} bas={tSayi} metin="NOT NUMBERS" x={1860} y={410} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <div style={{ position: "absolute", right: 60, top: 835, transform: `scale(${sz})`, transformOrigin: "100% 50%", opacity: az }}>
        <Hap metin="DAILY TARGET: HARD TO APPLY" renk={RENK.mercan} boyut={32} />
      </div>
      <div style={{ position: "absolute", right: 60, top: 495, opacity: aDus, fontFamily: INTER, fontWeight: 600, fontSize: 34,
        color: RENK.lacivert, textAlign: "right" }}>naturally low in cholesterol</div>
    </>
  );
};

export default S41;
