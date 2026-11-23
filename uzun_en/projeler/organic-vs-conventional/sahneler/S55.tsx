// Sahne 55 — besin değeri: organik ≈ geleneksel (sepet + terazi).
import React from "react";
import { Baslik, Etiket, Hap, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S55: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tOrg = K(0, "organic"), tConv = K(0, "conventional"), tClose = K(0, "close");
  const t237 = K(1, "237"), tVit = K(1, "consistent"), tAnti = K(1, "antioxidant"), tPay = K(1, "proven");
  const [sc, al] = pop(t, tPay, 0.5);
  return (
    <>
      <Kamera gorsel="tam/55" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [150, 90, 1700])}>
        <></>
      </Kamera>
      <Baslik t={t} bas={tClose} metin="CLOSE ON NUTRITION" x={60} y={60} boyut={84} renk={RENK.koyuYesil} />
      <Etiket t={t} bas={tOrg} bitis={tVit} capa={[520, 560]} konum={[300, 880]} metin="ORGANIC" renk={RENK.yesil} />
      <Etiket t={t} bas={tConv} bitis={tVit} capa={[1320, 700]} konum={[1560, 860]} metin="CONVENTIONAL" renk={RENK.altin} />
      <VurguRozet t={t} bas={t237} bitis={tAnti} vurgu="237" not="STUDIES · STANFORD REVIEW" x={1720} y={300} genislik={340} />
      <Not t={t} bas={tVit} bitis={tAnti} metin="NO CONSISTENT VITAMIN DIFFERENCE" x={1720} y={560} hiza="orta" genislik={340} boyut={28} agirlik={800} />
      <Etiket t={t} bas={tAnti} capa={[250, 520]} konum={[220, 300]} metin="ANTIOXIDANT GAINS" renk={RENK.lacivert} />
      <div style={{ position: "absolute", left: 1330, top: 800, opacity: al * sol(t, 1e9), transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
        <Hap metin="NO PROVEN HEALTH PAYOFF" renk={RENK.mercan} />
      </div>
    </>
  );
};

export default S55;
