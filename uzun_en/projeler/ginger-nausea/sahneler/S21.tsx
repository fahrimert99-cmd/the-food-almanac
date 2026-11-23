// Sahne 21 — Crichton 2019: 18 makale; ≤1 g/gün, >3 gün → daha az akut kusma.
import React from "react";
import { Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; bitis?: number; metin: string; x: number; y: number; renk: string }> = ({ t, bas, bitis = 1e9, metin, x, y, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 1920 - x, top: y, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a,
      display: "flex", alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "10px 28px 10px 18px", fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 1.5,
      color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 22, height: 22, borderRadius: "50%", background: renk }} />{metin}
    </div>
  );
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const son0 = K(1, "Ginger") - 0.2;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 30, 1800], [70, 80, 1680])}>
        <Etiket t={t} bas={K(0, "review")} bitis={son0} capa={[580, 230]} konum={[1100, 200]} metin="2019 REVIEW" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "Ginger")} capa={[1130, 700]} konum={[1300, 850]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "Crichton") - 0.3} />
      <Baslik t={t} bas={K(0, "18") - 0.1} bitis={son0} metin={b.satirlar[0]} x={1860} y={400} boyut={116} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "adults")} bitis={son0} metin={b.not!} x={1860} y={500} hiza="sag" genislik={560} />
      <Hap2 t={t} bas={K(1, "one gram")} metin="1 G A DAY OR LESS" x={1860} y={170} renk={RENK.yesil} />
      <Hap2 t={t} bas={K(1, "more than three")} metin="MORE THAN 3 DAYS" x={1860} y={265} renk={RENK.yesil} />
      <BaslikBlok t={t} bas={K(1, "less acute")} satirlar={["LESS ACUTE", "VOMITING"]} x={1860} y={430} boyut={104} hiza="sag"
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={K(1, "the kind")} metin="the kind in the first day" x={1860} y={670} hiza="sag" genislik={560} />
    </>
  );
};

export default S21;
