// Sahne 27 — İki saatte ortalama glukoz: 104 (ısıtılmış) vs 109 (sıcak) mg/dL.
import React from "react";
import { Baslik, CubukGrafik, Etiket, Hap, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0 || t > bitis) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={28} />
    </div>
  );
};

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(0, "two-hour") - 0.1} capa={[1260, 470]} konum={[1700, 250]} metin="2-HOUR MARK" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Baslik t={t} bas={K(0, "average")} metin="AVERAGE GLUCOSE" x={120} y={110} boyut={64} renk={RENK.koyuYesil} />
      <CubukGrafik t={t} bas={1.0} x={120} y={280} w={780} h={230} maks={130} birimEtiketi="mg/dL"
        cubuklar={[
          { etiket: "REHEATED", deger: 104, metin: "104", renk: RENK.yesil, bas: K(0, "104") - 0.05 },
          { etiket: "HOT", deger: 109, metin: "109", renk: RENK.mercan, bas: K(0, "109") - 0.05 },
        ]} />
      <Pil t={t} bas={K(1, "real")} bitis={12.5} x={820} y={115} metin="REAL BUT SMALL GAP" renk={RENK.altin} />
      <Pil t={t} bas={K(1, "young")} x={820} y={115} metin="IN YOUNG ADULTS" renk={RENK.lacivert} />
    </>
  );
};

export default S27;
