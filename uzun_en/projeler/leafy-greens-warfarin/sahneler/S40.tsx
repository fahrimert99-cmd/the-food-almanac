// Sahne 40 — Rivaroksaban (ROCKET): 14.264 kişi; 2,1 vs 2,4 %/yıl. İkinci vuruşta kâğıt örtü + grafik.
import React from "react";
import { Baslik, CubukGrafik, Etiket, INTER, Kamera, KaynakEtiketi, Not, Ortu, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const cik = c[1].bas - 0.2;
  const aOrtu = 0.94 * eout(ilerle(t, c[1].bas - 0.3, 0.7));
  const [sc, al] = pop(t, K(1, "similar"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 120, 1920], [60, 160, 1800])}>
        <Etiket t={t} bas={K(0, "Rivaroxaban")} bitis={cik} capa={[1380, 560]} konum={[1560, 250]} metin="RIVAROXABAN" renk={RENK.altin} />
      </Kamera>
      <Ortu a={aOrtu} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <Baslik t={t} bas={K(0, "14,264")} bitis={cik} metin="14,264 PEOPLE" x={64} y={220} boyut={116} renk={RENK.lacivert} />
      <Not t={t} bas={K(0, "same kind")} bitis={cik} metin="same kind of rhythm problem" x={68} y={310} boyut={32} renk={RENK.gri} />
      <Baslik t={t} bas={K(1, "strokes")} metin="STROKES PER YEAR" x={960} y={190} boyut={88} renk={RENK.lacivert} hiza="orta" />
      <CubukGrafik t={t} bas={K(1, "2.1")} x={560} y={330} w={800} h={400} maks={3}
        cubuklar={[
          { etiket: "RIVAROXABAN", deger: 2.1, metin: "2.1%", renk: RENK.altin, bas: K(1, "2.1") },
          { etiket: "WARFARIN", deger: 2.4, metin: "2.4%", renk: RENK.lacivert, bas: K(1, "2.4") },
        ]} />
      <div style={{ position: "absolute", left: 960, top: 840, transform: `translateX(-50%) scale(${sc})`, opacity: al, whiteSpace: "nowrap",
        background: RENK.kagitAcik, border: `3px solid ${RENK.yesil}`, borderRadius: 999, padding: "10px 30px", fontFamily: INTER,
        fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep }}>SIMILAR OVERALL BLEEDING</div>
    </>
  );
};

export default S40;
