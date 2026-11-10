// Sahne 21 — Raf: 18–34 yaş ve etiketi yanlış anlayanlar daha sık atıyor (2016 anketi).
import React from "react";
import { Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAge = K(0, "18 to 34"), tDates = K(0, "dates"), tMore = K(0, "significantly more"), tMis = K(0, "misunderstood");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1820])}>
        {/* kap üzerindeki anlamsız yazı: boş etiket gibi çizilmiş oval ile örtülür */}
        <div style={{ position: "absolute", left: 1070, top: 598, width: 130, height: 94, borderRadius: "50%",
          background: "#EFECDD", border: `3px solid ${RENK.murekkep}`, boxSizing: "border-box" }} />
        <Etiket t={t} bas={tDates} bitis={tMore + 1.2} capa={[823, 427]} konum={[250, 330]} metin="DATE LABEL" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={tAge} vurgu="18–34" not="YEARS OLD" x={1700} y={150} genislik={340} boyut={92} />
      <Not t={t} bas={tMore} metin="DISCARDED MORE OFTEN" x={1700} y={345} hiza="orta" genislik={380} boyut={26} agirlik={800} />
      <VurguRozet t={t} bas={tMis} vurgu="MISREAD" not="THE LABELS" x={1700} y={500} genislik={340} boyut={64} renk={RENK.mercan} />
    </>
  );
};

export default S21;
