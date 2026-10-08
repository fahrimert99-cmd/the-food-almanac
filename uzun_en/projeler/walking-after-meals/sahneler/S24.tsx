// Sahne 24 — Yazarların çekinceleri: iyi bir ipucu, kanıt değil. Lamba + defter görseli, sağda boş sayfa.
import React from "react";
import { BaslikBlok, Etiket, Hap, IkonYol, Kamera, Liste, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const son = (bas: number, metin: string, renk: string, ad: "onay" | "soru") => {
    const [sc, al] = pop(t, bas, 0.5);
    if (al <= 0) return null;
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 14, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <span style={{ width: 62, height: 62, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad={ad} boyut={38} renk="#fff" />
        </span>
        <Hap metin={metin} renk={renk} boyut={32} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 0, 1760], [60, 30, 1600])} />
      <Etiket t={t} bas={K(0, "careful")} bitis={2.5} capa={[600, 740]} konum={[620, 560]} metin="CAREFUL AUTHORS" renk={RENK.altin} />
      <BaslikBlok t={t} bas={K(0, "authors") + 0.2} satirlar={s.meta.baslik?.satirlar ?? []} x={820} y={180} boyut={104}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Liste t={t} isaret="nokta" x={820} y={440} aralik={82} boyut={38} genislik={1000} ogeler={[
        { bas: K(1, "short"), metin: "SHORT TRIALS", renk: RENK.altin },
        { bas: K(1, "walks and meals"), metin: "WALKS AND MEALS VARIED", renk: RENK.altin },
        { bas: K(1, "not always"), metin: "NOT ALWAYS RIGHT AFTER A MEAL", renk: RENK.altin },
      ]} />
      <div style={{ position: "absolute", left: 820, top: 700, display: "flex", gap: 24 }}>
        {son(K(2, "supports"), "SUPPORTS THE IDEA", RENK.yesil, "onay")}
        {son(K(2, "does not"), "DOES NOT SETTLE IT", RENK.mercan, "soru")}
      </div>
    </>
  );
};

export default S24;
