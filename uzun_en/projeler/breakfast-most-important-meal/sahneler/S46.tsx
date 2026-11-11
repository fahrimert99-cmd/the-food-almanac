// Sahne 46 — metformin: sol üstte başlık ve yan etki hapları, şişe ve tost etiketli.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Madde: React.FC<{ t: number; bas: number; y: number; metin: string }> = ({ t, bas, y, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 140, top: y, transform: `translate(0,-50%) scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
      <Hap metin={metin} renk={RENK.mercan} boyut={38} />
    </div>
  );
};

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [90, 60, 1740]);
  return (
    <>
      <Kamera gorsel="tam/46" pencere={pencere}>
        <Etiket t={t} bas={K(0, "diabetes")} bitis={c[1].bas} capa={[1330, 640]} konum={[1630, 520]} metin="DIABETES MEDICINE" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "meals")} bitis={c[1].bas} capa={[800, 700]} konum={[600, 450]} metin="WITH MEALS" renk={RENK.yesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <Baslik t={t} bas={0.05} bitis={c[1].bas - 0.1} metin="METFORMIN" x={140} y={215} boyut={120} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "lists")} metin="COMMON SIDE EFFECTS" x={140} y={215} boyut={76} renk={RENK.lacivert} />
      <Madde t={t} bas={K(1, "diarrhea")} y={320} metin="DIARRHEA" />
      <Madde t={t} bas={K(1, "nausea")} y={405} metin="NAUSEA" />
      <Madde t={t} bas={K(1, "indigestion")} y={490} metin="INDIGESTION" />
    </>
  );
};

export default S46;
