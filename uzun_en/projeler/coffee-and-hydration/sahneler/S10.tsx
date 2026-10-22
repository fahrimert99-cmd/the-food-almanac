// Sahne 10 — hafif idrar söktürücü ≠ susuzluk yapan içecek; su içeri / idrar dışarı.
import React from "react";
import { INTER, Baslik, Etiket, Hap, Ikon, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tM = K(0, "mild"), tD = K(0, "dehydrating"), tW = K(1, "mostly");
  const tQ = K(2, "wins:"), tIn = K(2, "water"), tOut = K(2, "extra");
  const bitisA = K(1, "the") - 0.1;
  const [s1, a1] = pop(t, tM, 0.5);
  const [s2, a2] = pop(t, tD, 0.5);
  const [s3, a3] = pop(t, K(0, "not") + 0.0, 0.5);
  const pill = (txt: string, sc: number, al: number, renk: string, y: number) => (
    <div style={{ position: "absolute", left: 1580, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al * (t < bitisA ? 1 : 0) }}>
      <Hap metin={txt} renk={renk} boyut={38} />
    </div>
  );
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 20, 1700], [20, 60, 1560])}>
        {/* ölçekteki bozuk yazıyı örten etiket */}
        <Etiket t={t} bas={0.3} capa={[900, 640]} konum={[965, 398]} metin="WATER" renk={RENK.yesil} boyut={30} />
        <Etiket t={t} bas={tW} bitis={tQ - 0.1} capa={[330, 440]} konum={[330, 160]} metin="MOSTLY WATER" renk={RENK.yesil} />
      </Kamera>
      {pill("MILD DIURETIC", s1, a1, RENK.altin, 380)}
      {s3 > 0 && t < bitisA && (
        <div style={{ position: "absolute", left: 1580, top: 470, transform: `translate(-50%, -50%) scale(${s3})`, opacity: a3,
          fontFamily: INTER, fontWeight: 800, fontSize: 80, color: RENK.mercan }}>≠</div>
      )}
      {pill("DEHYDRATING DRINK", s2, a2, RENK.mercan, 570)}
      <Baslik t={t} bas={tIn} metin="WATER IN," x={1860} y={320} boyut={96} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={tOut} metin="URINE OUT" x={1860} y={440} boyut={96} hiza="sag" renk={RENK.koyuYesil} />
      <Not t={t} bas={tQ} metin="WHICH WINS?" x={1860} y={560} hiza="sag" boyut={40} agirlik={800} renk={RENK.gri} />
      <Ikon t={t} bas={tQ + 0.2} ad="soru" x={1560} y={720} zemin={RENK.lacivert} />
    </>
  );
};

export default S10;
