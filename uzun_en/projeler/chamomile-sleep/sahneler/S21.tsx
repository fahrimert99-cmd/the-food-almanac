// Sahne 21 — çay ve kapsül köprüsü: farklı ölçümler, kısa etki; sonra yeni anneler, yaşlı yetişkin değil.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pill: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: al * sol(t, bitis) }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCay = K(0, "tea also"), tKaps = K(0, "capsules"), tFark = K(0, "different measures"), tKisa = K(0, "short one");
  const tAnne = K(1, "new mothers"), tYas = K(1, "not older");
  const son = K(1, "and these") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [120, 60, 1700], [200, 110, 1560])}>
        <Etiket t={t} bas={tCay} capa={[740, 410]} konum={[380, 200]} metin="TEA" renk={RENK.altin} />
        <Etiket t={t} bas={tKaps} capa={[1290, 700]} konum={[1500, 860]} metin="CAPSULES" renk={RENK.yesil} />
      </Kamera>
      <Pill t={t} bas={tFark} bitis={son} x={1130} y={150} metin="DIFFERENT MEASURES" renk={RENK.koyuYesil} />
      <Pill t={t} bas={tKisa} bitis={son} x={1130} y={250} metin="BUT A SHORT LIFT" renk={RENK.mercan} />
      <Pill t={t} bas={tAnne} x={1130} y={150} metin="NEW MOTHERS" renk={RENK.yesil} />
      <Pill t={t} bas={tYas} x={1130} y={250} metin="NOT OLDER ADULTS" renk={RENK.mercan} />
    </>
  );
};

export default S21;
