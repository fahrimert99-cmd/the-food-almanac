// Sahne 18 — 2015 İsrail çalışması: boş koridor/masa, ilk öğün yok.
import React from "react";
import { Etiket, Hap, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} /></div>;
};

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [330, 40, 1590], [420, 70, 1500])}>
        <Etiket t={t} bas={K(0, "first meal")} capa={[700, 640]} konum={[700, 400]} metin="FIRST MEAL MISSING" renk={RENK.mercan} />
      </Kamera>
      <VurguRozet t={t} bas={K(0, "2015")} vurgu="2015" x={1560} y={200} genislik={340} />
      <Pil t={t} bas={K(0, "Israel")} x={1560} y={370} metin="ISRAEL" renk={RENK.altin} />
      <Pil t={t} bas={K(0, "Jakubowicz")} x={1100} y={780} metin="JAKUBOWICZ ET AL." renk={RENK.lacivert} />
    </>
  );
};

export default S18;
