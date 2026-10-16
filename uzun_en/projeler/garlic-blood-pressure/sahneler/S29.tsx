// Sahne 29 — Çalışmalarda kullanılan ürün: yaşlandırılmış sarımsak ekstresi (görselsiz, kâğıt zemin diyagramı).
import React from "react";
import { AbsoluteFill, ANTON, Baslik, GorselKart, Hap, INTER, Not, RENK, SP, VurguRozet, eout, ilerle, kelimeZamani, pop } from "../kutuphane";

// Tek kapsül: altın + açık yarı, 45° eğik
const Kapsul: React.FC<{ t: number; bas: number; x: number; y: number }> = ({ t, bas, x, y }) => {
  const [sc, al] = pop(t, bas, 0.45);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x - 70, top: y - 32, width: 140, height: 64, opacity: al, transform: `rotate(-35deg) scale(${sc})`,
      display: "flex", borderRadius: 32, overflow: "hidden", border: `4px solid ${RENK.lacivert}`, boxShadow: "0 10px 22px rgba(48,40,34,0.22)" }}>
      <div style={{ flex: 1, background: RENK.altin }} />
      <div style={{ flex: 1, background: RENK.kagitAcik }} />
    </div>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const aBas = eout(ilerle(t, 0.2, 0.6));
  const tKaps = K(1, "four-capsule");
  const tKarsi = K(2, "raw clove");
  const aEs = pop(t, tKarsi - 0.5, 0.5);
  return (
    <AbsoluteFill style={{ background: `radial-gradient(ellipse 85% 75% at 50% 55%, #FBF8F1 0%, ${RENK.kagit} 62%, #EFE9DC 100%)` }}>
      <div style={{ position: "absolute", left: 160, top: 150, height: 6, width: 200 * aBas, background: RENK.altin }} />
      <Baslik t={t} bas={K(0, "aged garlic")} metin="AGED GARLIC EXTRACT" x={156} y={236} boyut={92} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "manufactured")} metin="a manufactured product" x={160} y={308} boyut={38} />
      <div style={{ position: "absolute", left: 160, top: 390 }}>
        <Hap2 t={t} bas={K(0, "S-allylcysteine")} />
      </div>
      {[0, 1, 2, 3].map((i) => (
        <Kapsul key={i} t={t} bas={tKaps + 0.1 + i * 0.12} x={250 + i * 150} y={690} />
      ))}
      <Not t={t} bas={tKaps + 0.5} metin="4 CAPSULES" x={160} y={780} boyut={32} agirlik={800} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "2.4")} vurgu="2.4 MG" not="S-allylcysteine" x={1010} y={600} genislik={400} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1260, top: 600, transform: `translate(-50%, 0) scale(${aEs[0]})`, opacity: aEs[1],
        fontFamily: INTER, fontWeight: 800, fontSize: 120, color: RENK.mercan }}>≠</div>
      <GorselKart t={t} bas={tKarsi - 0.3} gorsel="tam/30" kirp={[300, 150, 1300, 900]} x={1560} y={640} w={380} h={285} aci={2} etiket="RAW CLOVE" />
    </AbsoluteFill>
  );
};

const Hap2: React.FC<{ t: number; bas: number }> = ({ t, bas }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return <div style={{ opacity: al, transform: `scale(${sc})`, transformOrigin: "0% 50%" }}><Hap metin="S-ALLYLCYSTEINE" renk={RENK.altin} boyut={34} /></div>;
};
export default S29;
