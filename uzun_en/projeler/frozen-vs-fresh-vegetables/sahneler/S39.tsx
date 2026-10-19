// Sahne 39 — Mikrodalga ve basınçlı pişirme C vitamininin %90'ından fazlasını korudu (Galgano 2007).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tMicro = K(0, "microwaving"), t90 = K(0, "90"), tMicro2 = K(1, "microwaving"), tPress = K(1, "pressure"),
    tBoil = K(1, "boiling"), tBroc = K(1, "broccoli");
  const [sc, al] = pop(t, tBoil, 0.5);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1760])}>
        {/* kontrol panelindeki bozuk yazı örtülü */}
        <div style={{ position: "absolute", left: 975, top: 790, width: 150, height: 56,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgb(210,207,188) 0%, rgb(210,207,188) 60%, rgba(210,207,188,0) 100%)" }} />
      </Kamera>
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Etiket t={t} bas={tMicro} capa={[590, 540]} konum={[640, 130]} metin="MICROWAVING" renk={RENK.yesil} />
      <VurguRozet t={t} bas={t90} bitis={tMicro2 - 0.2} vurgu=">90%" not="vitamin C kept" x={1560} y={110} genislik={380} />
      <Baslik t={t} bas={tMicro2} metin="OVER 90%" x={1860} y={170} boyut={100} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tMicro2 + 0.18} metin="KEPT" x={1860} y={280} boyut={100} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tBroc} metin="vitamin C after microwaving or pressure cooking" x={1860} y={338} boyut={24} hiza="sag" genislik={900} />
      <Etiket t={t} bas={tPress} capa={[1450, 640]} konum={[1450, 520]} metin="PRESSURE COOKING" renk={RENK.yesil} boyut={26} />
      <div style={{ position: "absolute", right: 60, top: 400, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: al * eout(ilerle(t, tBoil, 0.3)) }}>
        <Hap metin="BOILING & STEAMING: LOST MORE" renk={RENK.mercan} boyut={26} />
      </div>
    </>
  );
};

export default S39;
