// Sahne 19 — 22 yetişkin, iki test günü: kahvaltılı gün ve kahvaltısız gün.
import React from "react";
import { Baslik, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} /></div>;
};

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t22 = K(0, "22"), t57 = K(0, "average age"), t2g = K(1, "two test days");
  const tBir = K(2, "On one"), tDiger = K(3, "skipped");
  return (
    <>
      {/* alt kenardaki sahte yazılar kadraj dışında kalır (y < 950) */}
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [150, 20, 1600], [190, 40, 1540])}>
        <Etiket t={t} bas={tBir} bitis={9.9} capa={[360, 590]} konum={[430, 440]} metin="BREAKFAST DAY" renk={RENK.yesil} />
        <Etiket t={t} bas={tDiger} capa={[1330, 620]} konum={[1380, 470]} metin="SKIPPED BREAKFAST" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bitis={9.9} />
      <VurguRozet t={t} bas={t22} bitis={t57 - 0.1} vurgu="22" not="ADULTS WITH TYPE 2 DIABETES" x={960} y={500} genislik={420} />
      <VurguRozet t={t} bas={t57} bitis={t2g - 0.1} vurgu="57" not="AVERAGE AGE" x={960} y={500} genislik={420} />
      <Pil t={t} bas={t2g} bitis={9.9} x={960} y={560} metin="TWO TEST DAYS" renk={RENK.altin} />
      <Baslik t={t} bas={10.23} metin="SAME FOOD, NO BREAKFAST" x={960} y={150} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
    </>
  );
};

export default S19;
