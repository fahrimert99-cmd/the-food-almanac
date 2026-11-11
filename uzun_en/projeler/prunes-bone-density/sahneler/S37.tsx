// Sahne 37 — dışkı kıvamı daha çok düzeldi; zorlanma ve genel belirtilerde fark yok.
import React from "react";
import { BaslikBlok, Etiket, Hap, IkonYol, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string; onay?: boolean }> = ({ t, bas, y, metin, renk, onay }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1230, top: y, transform: `translateY(-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: al,
      display: "flex", alignItems: "center", gap: 14 }}>
      {onay && (
        <span style={{ width: 52, height: 52, borderRadius: "50%", background: RENK.yesil, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={32} renk="#fff" />
        </span>
      )}
      <Hap metin={metin} renk={renk} boyut={28} />
    </div>
  );
};

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik ?? { satirlar: [] as string[], not: "" };
  const tStrain = K(1, "Straining");
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 70, 1760])}>
        <Etiket t={t} bas={K(0, "prunes")} bitis={tStrain - 0.1} capa={[450, 500]} konum={[450, 200]} metin="PRUNES" renk={RENK.mercan} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "improved")} satirlar={b.satirlar} x={1230} y={250} boyut={112} adim={0.2} />
      <Not t={t} bas={K(1, "did not")} metin="NO DIFFERENCE BETWEEN TREATMENTS" x={1230} y={470} boyut={26} renk={RENK.gri} agirlik={800} genislik={640} />
      <Cip t={t} bas={tStrain} y={590} metin="STRAINING" renk={RENK.altin} />
      <Cip t={t} bas={K(1, "overall")} y={670} metin="OVERALL SYMPTOMS" renk={RENK.altin} />
      <Cip t={t} bas={K(1, "well tolerated")} y={780} metin="WELL TOLERATED" renk={RENK.yesil} onay />
    </>
  );
};

export default S37;
