// Sahne 27 — sıcaklık: mikrodalga ve fırın, alliinaz kaybı (sıçan çalışması)
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, INTER, ANTON, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Kutu: React.FC<{ t: number; bas: number; bitis?: number; ust: string; alt?: string; renk: string }> = ({ t, bas, bitis = 1e9, ust, alt, renk }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1630, top: 830, width: 470, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, textAlign: "center",
      background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 24, padding: "12px 20px 14px", boxShadow: "0 10px 24px rgba(48,40,34,0.18)" }}>
      <div style={{ fontFamily: ANTON, fontSize: 42, color: renk, lineHeight: 1.15, letterSpacing: 1 }}>{ust}</div>
      {alt && <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 24, color: RENK.lacivert }}>{alt}</div>}
    </div>
  );
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKayip = K(2, "loss") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1760])}>
        <Etiket t={t} bas={K(1, "60")} capa={[1100, 440]} konum={[1000, 215]} metin="60 SEC MICROWAVE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "45")} capa={[1180, 790]} konum={[1000, 925]} metin="45 MIN OVEN" renk={RENK.altin} />
      </Kamera>
      <BaslikBlok t={t} bas={0.05} satirlar={["HEAT AND", "ALLIINASE"]} x={70} y={190} boyut={84} />
      <KaynakEtiketi t={t} metin="Song & Milner · J Nutr · 2001" bas={K(1, "2001")} />
      <Not t={t} bas={K(1, "rat")} metin="A RAT STUDY, NOT ABOUT BLOOD PRESSURE" x={1860} y={115} hiza="sag" genislik={560} boyut={30} agirlik={800} />
      <Kutu t={t} bas={K(1, "wiped")} bitis={tKayip} ust="PROTECTIVE EFFECT LOST" alt="in a cancer-related test" renk={RENK.mercan} />
      <Kutu t={t} bas={tKayip + 0.2} ust="LOSS MATCHED" alt="the loss of alliinase" renk={RENK.koyuYesil} />
    </>
  );
};

export default S27;
