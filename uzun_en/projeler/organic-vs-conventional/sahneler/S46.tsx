// Sahne 46 — asıl soru: organik mi değil mi değil, hangi ürün değer?
import React from "react";
import { Baslik, Etiket, Kamera, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, sol } from "../kutuphane";

const S46: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tQ = K(0, "smartest"), tIsnt = K(0, "isn't"), tWhich = K(1, "which items"), tWorth = K(1, "worth"), tAny = K(1, "if any");
  const cizgi = einout(ilerle(t, tIsnt, 0.5));
  const aUst = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/46" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={tAny} capa={[1245, 790]} konum={[1520, 880]} metin="IF ANY" renk={RENK.altin} />
      </Kamera>
      {/* üst boşluğa yumuşak zemin */}
      <div style={{ position: "absolute", left: 560, width: 800, top: 0, height: 250, opacity: aUst,
        background: "radial-gradient(ellipse 50% 60% at 50% 40%, rgba(251,248,241,0.95) 0%, rgba(251,248,241,0.9) 55%, rgba(251,248,241,0) 100%)" }} />
      <Baslik t={t} bas={tQ} bitis={tWhich - 0.15} metin="ORGANIC OR NOT?" x={960} y={95} boyut={86} renk={RENK.lacivert} hiza="orta" />
      <div style={{ position: "absolute", left: 960 - 330, top: 93, width: 660 * cizgi, height: 8, background: RENK.mercan, borderRadius: 4,
        opacity: sol(t, tWhich - 0.15) }} />
      <Baslik t={t} bas={tWhich} metin="WHICH ITEMS?" x={960} y={85} boyut={80} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tWorth} metin="WORTH THE COST?" x={960} y={175} boyut={66} renk={RENK.lacivert} hiza="orta" />
    </>
  );
};

export default S46;
