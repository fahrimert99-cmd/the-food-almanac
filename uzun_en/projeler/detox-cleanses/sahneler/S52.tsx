// Sahne 52 — İpucu 4: toksini adlandırmayan ürüne şüpheyle bak; insan çalışması sor; FDA ve FTC.
import React from "react";
import { ANTON, Etiket, Hap, IkonYol, Kamera, RENK, SP, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Rozet: React.FC<{ t: number; n: string }> = ({ t, n }) => {
  const [sc, al] = pop(t, 0.05, 0.5);
  return (
    <div style={{ position: "absolute", left: 60, top: 130, width: 112, height: 112, borderRadius: "50%", background: RENK.lacivert,
      color: "#fff", fontFamily: ANTON, fontSize: 72, display: "flex", alignItems: "center", justifyContent: "center",
      transform: `scale(${sc})`, opacity: al, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 8px 22px rgba(48,40,34,0.22)" }}>{n}</div>
  );
};

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSoru = K(1, "without"), tInsan = K(2, "human"), tFda = K(2, "FDA");
  const bit1 = K(2, "ask") - 0.2, bit2 = K(2, "remember") - 0.2;
  const [s1, a1] = pop(t, tSoru, 0.55);
  const [s2, a2] = pop(t, tInsan, 0.55);
  const [s3, a3] = pop(t, tFda, 0.55);
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [0, 330, 1700], [120, 380, 1560])}>
        <div style={{ position: "absolute", left: 1000, top: -100, width: 1700, height: 640, background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(1, "product")} capa={[530, 640]} konum={[330, 900]} metin="BOTTLED PRODUCT" renk={RENK.altin} />
        <Etiket t={t} bas={K(1, "toxins")} capa={[1390, 640]} konum={[1380, 900]} metin="UNNAMED POWDER" renk={RENK.mercan} />
      </Kamera>
      <Rozet t={t} n="4" />
      {/* 2. vuruş: toksinleri adlandırmıyor mu? */}
      <div style={{ position: "absolute", left: 960, top: 90, transform: `translateX(-50%) scale(${s1})`, opacity: a1 * (t < bit1 ? 1 : 0),
        display: "flex", alignItems: "center", gap: 14 }}>
        <div style={{ width: 54, height: 54, borderRadius: "50%", background: RENK.mercan, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="soru" boyut={34} renk="#fff" />
        </div>
        <Hap metin="WHICH TOXINS?" renk={RENK.mercan} boyut={34} />
      </div>
      {/* 3. vuruş: insan çalışmaları, sonra FDA + FTC */}
      <div style={{ position: "absolute", left: 960, top: 90, transform: `translateX(-50%) scale(${s2})`, opacity: a2 * (t < bit2 ? 1 : 0) }}>
        <Hap metin="HUMAN TRIALS?" renk={RENK.yesil} boyut={34} />
      </div>
      <div style={{ position: "absolute", left: 960, top: 90, transform: `translateX(-50%) scale(${s3})`, opacity: a3,
        display: "flex", gap: 18 }}>
        <Hap metin="FDA" renk={RENK.lacivert} boyut={34} />
        <Hap metin="FTC" renk={RENK.lacivert} boyut={34} />
        <Hap metin="ACTED ON FALSE CLAIMS" renk={RENK.altin} boyut={34} />
      </div>
    </>
  );
};
export default S52;
