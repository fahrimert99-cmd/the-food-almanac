// Sahne 32 — ilişki ≠ neden-sonuç; NIH notu: Asya'da var, Batı'da yok.
import React from "react";
import { Baslik, Hap, Kamera, Liste, Not, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBitis = K(2, "And") - 0.1;
  const [sc, al] = pop(t, K(1, "differ"), 0.5);
  const a = al * sol(t, tBitis);
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 80, 1780])} />
      <Baslik t={t} bas={K(0, "association,")} metin="LINKED," x={1860} y={250} boyut={104} hiza="sag" renk={RENK.lacivert} />
      <Baslik t={t} bas={K(0, "not")} metin="NOT PROVEN" x={1860} y={365} boyut={104} hiza="sag" renk={RENK.mercan} />
      {a > 0 && (
        <div style={{ position: "absolute", right: 60, top: 560, transform: `scale(${sc})`, transformOrigin: "100% 50%", opacity: a }}>
          <Hap metin="MANY OTHER DIFFERENCES" renk={RENK.altin} boyut={32} />
        </div>
      )}
      <Not t={t} bas={K(2, "National")} metin="NIH NOTES:" x={1330} y={500} boyut={34} renk={RENK.gri} agirlik={800} />
      <Liste t={t} isaret="onay" x={1330} y={560} boyut={34} genislik={520}
        ogeler={[{ bas: K(2, "Asian"), metin: "ASIAN POPULATIONS: SEEN", renk: RENK.yesil }]} />
      <Liste t={t} isaret="carpi" x={1330} y={660} boyut={34} genislik={520}
        ogeler={[{ bas: K(2, "Western"), metin: "WESTERN ONES: NOT SEEN", renk: RENK.mercan }]} />
    </>
  );
};

export default S32;
