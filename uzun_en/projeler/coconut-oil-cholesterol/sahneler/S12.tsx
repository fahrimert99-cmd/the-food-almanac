// Sahne 12 — araştırmacılar, dört veritabanı, Haziran 2019; ölçüt: en az iki hafta, hindistan cevizi yağı vs diğer yağlar.
import React from "react";
import { AltSis, Baslik, Etiket, Hap, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const bit = c[1].bas - 0.15; // 1. cümle öğeleri 2. cümleden önce solar
  const [sJ, aJ] = pop(t, K(0, "June"), 0.5);
  const [sC, aC] = pop(t, K(1, "compared"), 0.5);
  const [sO, aO] = pop(t, K(1, "other"), 0.5);
  const sol = 1 - eout(ilerle(t, bit, 0.4));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 90, 1790])}>
        <Etiket t={t} bas={K(0, "searched")} bitis={bit} capa={[735, 930]} konum={[1100, 640]} metin="SEARCHING" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Panel a={eout(ilerle(t, 0.2, 0.6))} taraf="sag" genislik={1000} />
      <AltSis a={0.7} yukseklik={150} />
      <Baslik t={t} bas={K(0, "Nithya")} bitis={bit} metin="NITHYA NEELAKANTAN" x={960} y={160} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "Rob")} bitis={bit} metin="ROB VAN DAM" x={960} y={245} boyut={66} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "colleague")} bitis={bit} metin="+ A COLLEAGUE" x={960} y={330} boyut={66} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={K(0, "four")} bitis={bit} vurgu="4" not="research databases" x={1700} y={110} boyut={110} genislik={300} />
      <div style={{ position: "absolute", left: 960, top: 440, transform: `scale(${sJ})`, transformOrigin: "0 50%", opacity: aJ * sol }}>
        <Hap metin="THROUGH JUNE 2019" renk={RENK.altin} boyut={32} />
      </div>
      <VurguRozet t={t} bas={K(1, "least")} vurgu="2+ WEEKS" not="trial length, at least" x={1300} y={150} boyut={96} genislik={460} />
      <div style={{ position: "absolute", left: 960, top: 450, display: "flex", gap: 20, alignItems: "center" }}>
        <div style={{ transform: `scale(${sC})`, opacity: aC, transformOrigin: "0 50%" }}><Hap metin="COCONUT OIL" renk={RENK.altin} boyut={32} /></div>
        <div style={{ transform: `scale(${sO})`, opacity: aO, transformOrigin: "0 50%" }}><Hap metin="OTHER FATS" renk={RENK.yesil} boyut={32} /></div>
      </div>
    </>
  );
};

export default S12;
