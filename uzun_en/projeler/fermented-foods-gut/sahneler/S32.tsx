// Sahne 32 — kefir vs süt denemesi: sağ panelde başlık, sonra 22 kişi / 12 + 10 noktaları.
import React from "react";
import { AbsoluteFill, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

// kişi noktaları: satır başına n nokta, bas'tan itibaren sırayla belirir
const Noktalar: React.FC<{ t: number; bas: number; n: number; x: number; y: number; renk: string; ad: string }> = ({ t, bas, n, x, y, renk, ad }) => {
  const [sc, al] = pop(t, bas, 0.5);
  return (
    <div style={{ position: "absolute", left: x, top: y, opacity: al, transform: `scale(${0.9 + 0.1 * sc})`, transformOrigin: "0 50%" }}>
      <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 2, color: renk, marginBottom: 10 }}>{n} {ad}</div>
      <div style={{ display: "flex", gap: 10 }}>
        {Array.from({ length: n }, (_, i) => {
          const [s2, a2] = pop(t, bas + 0.05 + i * 0.05, 0.35);
          return <span key={i} style={{ width: 34, height: 34, borderRadius: "50%", background: renk, opacity: a2, transform: `scale(${s2})` }} />;
        })}
      </div>
    </div>
  );
};

const S32: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tBitis = c[1].bas - 0.15;
  const pPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/32" pencere={kameraYolu(t, s.sure, [0, 40, 1800], [60, 90, 1660])}>
        <Etiket t={t} bas={K(0, "kefir")} capa={[330, 640]} konum={[250, 900]} metin="KEFIR" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "plain milk")} capa={[700, 600]} konum={[700, 900]} metin="PLAIN MILK" renk={RENK.altin} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={1000} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      {/* 1. cümle: tasarım ve doz */}
      <BaslikBlok t={t} bas={K(0, "randomized")} bitis={tBitis} satirlar={["KEFIR VS", "MILK"]} x={1860} y={250} boyut={104} hiza="sag" />
      <VurguRozet t={t} bas={K(0, "twelve")} bitis={tBitis} vurgu="12 WEEKS" not="180 ml every day" x={1620} y={520} genislik={420} boyut={84} />
      {/* 2. cümle: kaç kişi bitirdi */}
      <VurguRozet t={t} bas={K(1, "22")} vurgu="22" not="people finished" x={1560} y={190} genislik={380} renk={RENK.lacivert} />
      <Noktalar t={t} bas={K(1, "12")} n={12} x={1100} y={560} renk={RENK.yesil} ad="ON KEFIR" />
      <Noktalar t={t} bas={K(1, "10")} n={10} x={1100} y={720} renk={RENK.altin} ad="ON MILK" />
    </>
  );
};

export default S32;
