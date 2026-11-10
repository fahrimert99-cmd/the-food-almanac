// Sahne 45 — Limon: küçük çalışmalarda gerçek limonlu limonata idrar sitratını ve hacmini artırdı; "belki", tedavi değil.
import React from "react";
import { Baslik, Etiket, Hap, IkonYol, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Sağ sütun hapı (ekran koordinatı, sağa yaslı)
const SagHap: React.FC<{ t: number; bas: number; bitis?: number; metin: string; y: number; renk: string; ikon?: "yukari" | "carpi" | "soru" }> = ({
  t, bas, bitis = 1e9, metin, y, renk, ikon,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (t < bitis ? 1 : Math.max(0, 1 - (t - bitis) / 0.35));
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", right: 60, top: y, opacity: a, transform: `scale(${sc})`, transformOrigin: "100% 50%", display: "flex", alignItems: "center", gap: 12 }}>
      {ikon === "yukari" && <div style={{ transform: "rotate(-90deg)" }}><IkonYol ad="ok" boyut={46} renk={RENK.yesil} kalinlik={8} /></div>}
      {ikon === "carpi" && <IkonYol ad="carpi" boyut={40} renk={RENK.mercan} kalinlik={8} />}
      {ikon === "soru" && <IkonYol ad="soru" boyut={44} renk={RENK.altin} kalinlik={7} />}
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S45: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tSon = c[2].bas - 0.15;
  return (
    <>
      <Kamera gorsel="tam/45" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1800])} sinirla={false}>
        <Etiket t={t} bas={K(1, "lemonade")} bitis={tSon} capa={[760, 330]} konum={[215, 150]} metin="LEMONADE" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "real lemon juice")} bitis={tSon} capa={[1380, 770]} konum={[1620, 610]} metin="REAL LEMON JUICE" renk={RENK.yesil} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "lemon")} bitis={c[1].bas + 0.2} metin="LEMON?" x={1860} y={200} boyut={140} renk={RENK.altin} hiza="sag" />
      <SagHap t={t} bas={K(1, "urine citrate")} bitis={tSon} metin="URINE CITRATE" y={190} renk={RENK.yesil} ikon="yukari" />
      <SagHap t={t} bas={K(1, "urine volume")} bitis={tSon} metin="URINE VOLUME" y={285} renk={RENK.yesil} ikon="yukari" />
      <SagHap t={t} bas={K(2, "tiny")} metin="TINY STUDIES" y={190} renk={RENK.altin} />
      <Baslik t={t} bas={K(2, "maybe")} metin="A MAYBE" x={1860} y={340} boyut={130} renk={RENK.lacivert} hiza="sag" />
      <SagHap t={t} bas={K(2, "not a treatment")} metin="NOT A TREATMENT" y={440} renk={RENK.mercan} ikon="carpi" />
    </>
  );
};

export default S45;
