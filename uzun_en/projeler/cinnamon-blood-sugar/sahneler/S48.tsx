// Sahne 48 — kapsül + büyüteç: kapsülde doz yoğun, etikette tür yazmayabilir; 60 yaş üstü için bilgi sınırlı.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Cip: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string; boyut?: number }> = ({
  t, bas, bitis = 1e9, x, y, metin, renk, boyut = 28,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};

const S48: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tCaps = K(0, "capsules"), tExtra = K(0, "extra"), tConc = K(0, "concentrated"), tLab = K(0, "label");
  const tAd = K(1, "adults"), tOver = K(1, "over");
  return (
    <>
      <Kamera gorsel="tam/48" pencere={kameraYolu(t, s.sure, [40, 20, 1840], [120, 60, 1680])}>
        <Etiket t={t} bas={tCaps} bitis={6.9} capa={[470, 330]} konum={[330, 170]} metin="CAPSULE" renk={RENK.altin} />
        <Etiket t={t} bas={tConc} bitis={6.9} capa={[620, 760]} konum={[400, 880]} metin="CONCENTRATED DOSE" renk={RENK.mercan} boyut={26} />
      </Kamera>
      <BaslikBlok t={t} bas={tExtra} bitis={6.9} satirlar={["EXTRA", "CAUTION"]} x={1850} y={190} boyut={96} hiza="sag" renkler={[RENK.mercan, RENK.lacivert]} />
      <Cip t={t} bas={tLab} bitis={6.9} x={1560} y={470} metin="TYPE MAY NOT BE NAMED" renk={RENK.altin} boyut={24} />
      <BaslikBlok t={t} bas={tAd} satirlar={["ADULTS WITH", "TYPE 2 DIABETES"]} x={1850} y={180} boyut={64} hiza="sag" renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <VurguRozet t={t} bas={tOver} vurgu="OVER 60" not="CAN'T SAY MUCH" x={1620} y={400} genislik={380} boyut={80} renk={RENK.mercan} />
    </>
  );
};

export default S48;
