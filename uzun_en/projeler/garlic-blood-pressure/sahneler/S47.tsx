// Sahne 47 — 2. nokta: ilacı sürdür, doktora/eczacıya danış
import React from "react";
import { ANTON, AltSis, Baslik, Hap, Kamera, Not, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0.05, 0.55);
  const tEsp = K(1, "especially");
  const pKart = eout(ilerle(t, tEsp - 0.2, 0.5));
  const hap = (bas: number, metin: string, renk: string, x: number) => {
    const [h, a] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: x, top: 690, transform: `translate(-50%, -50%) scale(${h})`, opacity: a }}>
        <Hap metin={metin} renk={renk} boyut={36} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        {/* sol çerçeve: ilaca devam */}
        <Baslik t={t} bas={K(1, "Keep")} metin="KEEP TAKING" x={270} y={210} boyut={64} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(1, "prescribed") - 0.1} metin="PRESCRIBED" x={270} y={285} boyut={64} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(1, "medicine") + 0.1} metin="MEDICINE" x={270} y={360} boyut={64} renk={RENK.koyuYesil} />
        {/* sağ çerçeve: danış */}
        <Baslik t={t} bas={K(1, "tell")} metin="TELL YOUR" x={1090} y={205} boyut={56} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(1, "doctor")} metin="DOCTOR OR" x={1090} y={265} boyut={56} renk={RENK.lacivert} />
        <Baslik t={t} bas={K(1, "pharmacist")} metin="PHARMACIST" x={1090} y={325} boyut={56} renk={RENK.koyuYesil} />
        {/* kâğıt kart: riskli ilaçlar */}
        <div style={{ position: "absolute", left: 330, top: 570, width: 1260, height: 220, borderRadius: 30, opacity: pKart * 0.96,
          background: RENK.kagitAcik, boxShadow: "0 12px 30px rgba(48,40,34,0.22)" }} />
        <Not t={t} bas={tEsp} metin="ESPECIALLY IF YOU USE" x={960} y={598} boyut={34} hiza="orta" agirlik={800} renk={RENK.gri} />
        {hap(K(1, "warfarin"), "WARFARIN", RENK.altin, 560)}
        {hap(K(1, "aspirin"), "ASPIRIN", RENK.altin, 900)}
        {hap(K(1, "another"), "BLOOD THINNERS", RENK.altin, 1290)}
      </Kamera>
      <AltSis a={0.9} />
      <div style={{ position: "absolute", left: 90, top: 790, width: 96, height: 96, borderRadius: "50%", background: RENK.altin, color: "#fff",
        display: "flex", alignItems: "center", justifyContent: "center", fontFamily: ANTON, fontSize: 64, transform: `scale(${sc})`, opacity: al }}>2</div>
    </>
  );
};

export default S47;
