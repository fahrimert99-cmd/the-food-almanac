// Sahne 41 — Hallegraeff 2012 çalışması: 80 yetişkin, 6 hafta germe; diğer grup germedi.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S41: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t80 = K(0, "80"), tHal = K(0, "Hallegraeff");
  const tStr = K(1, "stretched"), tCalv = K(1, "calves"), tEvery = K(1, "every"), tSleep = K(1, "sleep"), tSix = K(1, "six");
  const tOther = K(2, "other");
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [80, 50, 1720]);
  const m = s.meta;
  const b = m.baslik ?? { satirlar: ["80 ADULTS", "OVER 55"], vurgu: "6 WEEKS", not: "" };
  const satir = (bas: number, metin: string, renk: string, y: number) => {
    const [sc, al] = pop(t, bas, 0.5);
    return (
      <div style={{ position: "absolute", left: 1600, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: al }}>
        <Hap metin={metin} renk={renk} boyut={26} />
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/41" pencere={p} />
      <KaynakEtiketi t={t} metin={m.etiket ?? ""} bas={tHal - 0.2} bitis={tStr - 0.3} y={850} />
      <div style={{ opacity: sol(t, tStr - 0.3) }}>
        <BaslikBlok t={t} bas={t80} satirlar={b.satirlar} x={1330} y={290} boyut={110} renkler={[RENK.koyuYesil, RENK.lacivert]} />
      </div>
      {satir(tStr, "STRETCHING GROUP", RENK.yesil, 250)}
      {satir(tCalv, "CALVES + HAMSTRINGS", RENK.yesil, 340)}
      {satir(tEvery, "EVERY NIGHT", RENK.yesil, 430)}
      <Etiket t={t} bas={tSleep} capa={[1020, 900]} konum={[1000, 790]} metin="BEFORE SLEEP" renk={RENK.altin} boyut={28} />
      <VurguRozet t={t} bas={tSix} vurgu={b.vurgu ?? "6 WEEKS"} not={b.not} x={1600} y={520} genislik={460} renk={RENK.altin} />
      {satir(tOther, "OTHER GROUP: NO STRETCH", RENK.mercan, 870)}
    </>
  );
};

export default S41;
