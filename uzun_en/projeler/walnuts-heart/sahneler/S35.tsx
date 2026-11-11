// Sahne 35 — Barselona alt grup analizi: iki değer rozeti, "borderline" notu.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 960, top: 150, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={32} />
    </div>
  );
};

const S35: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tAfter = K(0, "after"), tBar = K(1, "Barcelona"), tA = K(1, "0.037"), tB = K(1, "0.097"), tBord = K(2, "borderline");
  const tSon = tBord - 0.2;
  return (
    <>
      <Kamera gorsel="tam/35" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tBar} bitis={tBord} capa={[230, 378]} konum={[480, 250]} metin="BARCELONA" renk={RENK.altin} />
      </Kamera>
      <Pil t={t} bas={tAfter} bitis={tBar - 0.1} metin="AFTER THE FACT" renk={RENK.altin} />
      <VurguRozet t={t} bas={tA} bitis={tSon} vurgu="–0.037" not="WALNUT GROUP" x={820} y={90} genislik={340} boyut={70} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tB} bitis={tSon} vurgu="–0.097" not="NO WALNUTS" x={1230} y={90} genislik={340} boyut={70} renk={RENK.mercan} />
      <Pil t={t} bas={tBord} metin="BORDERLINE EVIDENCE" renk={RENK.altin} />
    </>
  );
};

export default S35;
