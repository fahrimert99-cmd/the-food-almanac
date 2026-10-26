// Sahne 33 — Framingham: takviye kullananlar %8, kullanmayanlar %20 düşük B12.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S33: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  // dalga çizimi sol tarafta kalır; kamera sağdaki kâseye bakar
  const pencere = kameraYolu(t, s.sure, [480, 315, 1360], [520, 315, 1300]);
  const t8 = K(1, "8 percent"), t20 = K(1, "20 percent");
  const [sc, al] = pop(t, K(1, "Framingham"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/33" pencere={pencere}>
        <Etiket t={t} bas={K(1, "supplement")} capa={[880, 960]} konum={[1180, 780]} metin="SUPPLEMENT USERS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "evidence")} />
      <Baslik t={t} bas={K(0, "evidence")} metin="THE EVIDENCE" x={90} y={190} boyut={80} renk={RENK.lacivert} bitis={K(1, "Framingham") - 0.1} />
      <div style={{ position: "absolute", left: 90, top: 280, transform: `scale(${sc})`, transformOrigin: "0 0", opacity: al,
        fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: RENK.altin }}>FRAMINGHAM OFFSPRING STUDY · 2,999 ADULTS</div>
      <VurguRozet t={t} bas={t8} vurgu="8%" not="SUPPLEMENT USERS" x={300} y={400} renk={RENK.yesil} genislik={340} />
      <VurguRozet t={t} bas={t20} vurgu="20%" not="NON-USERS" x={300} y={640} renk={RENK.mercan} genislik={340} />
      <Not t={t} bas={t8} metin="had a low B12 blood level" x={300} y={360} hiza="orta" boyut={26} agirlik={800} renk={RENK.lacivert} />
    </>
  );
};

export default S33;
