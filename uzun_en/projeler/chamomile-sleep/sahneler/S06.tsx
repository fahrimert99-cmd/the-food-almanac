import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Senkron hap (renkli noktalı)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (1 - eout(ilerle(t, bitis, 0.4)));
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a, display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 28px 10px 20px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

// Sahne 6 — çay ve kapsül: iki form, sonra yaşlı yetişkin sorusu
const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1700]);
  const [sn, an] = pop(t, K(0, "concentrated"), 0.5);
  const bit = K(2, "First") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kam}>
        <Etiket t={t} bas={K(0, "cups of tea")} bitis={bit} capa={[560, 700]} konum={[560, 905]} metin="CUPS OF TEA" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "capsules")} bitis={bit} capa={[1190, 690]} konum={[1020, 330]} metin="CAPSULES" renk={RENK.yesil} />
      </Kamera>
      <div style={{ position: "absolute", left: 1333, top: 868, transform: `translate(-50%,0) scale(${sn})`, opacity: an * (1 - eout(ilerle(t, bit, 0.4))) }}>
        <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert, background: RENK.kagitAcik,
          border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "6px 24px", whiteSpace: "nowrap" }}>CONCENTRATED EXTRACT</div>
      </div>
      <Baslik t={t} bas={K(1, "difference")} bitis={bit} metin="WILL MATTER LATER" x={1860} y={140} boyut={72} hiza="sag" renk={RENK.mercan} />
      <Baslik t={t} bas={K(3, "older adults")} metin="OLDER ADULTS" x={1860} y={140} boyut={84} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(3, "sleep better")} metin="SLEEP BETTER?" x={1860} y={245} boyut={84} hiza="sag" renk={RENK.koyuYesil} />
    </>
  );
};
export default S06;
