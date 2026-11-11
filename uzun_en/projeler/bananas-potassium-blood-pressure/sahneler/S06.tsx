// Sahne 6 — günlük hedef: erkek 3.400, kadın 2.600 mg; bir muz ≈ 1/8 ve 1/6.
import React from "react";
import { Baslik, CubukGrafik, Etiket, KaynakEtiketi, Kamera, Not, RENK, SP, ANTON, eout, ilerle, kagit, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const X = 1260, Y = 420, W = 560, H = 380;
const Kesir: React.FC<{ t: number; bas: number; cx: number; metin: string }> = ({ t, bas, cx, metin }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: cx, top: 690, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al,
      background: "#FCF8EC", border: `4px solid ${RENK.altin}`, borderRadius: 22, padding: "2px 14px", fontFamily: ANTON, fontSize: 54,
      color: RENK.lacivert, whiteSpace: "nowrap", boxShadow: "0 8px 20px rgba(48,40,34,0.2)" }}>{metin}</div>
  );
};

const S06: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const gw = W / 2;
  const t34 = K(0, "3,400"), t26 = K(0, "2,600");
  return (
    <>
      <Kamera gorsel="tam/06" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [0, 50, 1800])}>
        <div style={{ position: "absolute", left: 1040, top: 955, width: 160, height: 70, borderRadius: "50%",
          background: `radial-gradient(ellipse, ${kagit(1)} 0%, ${kagit(0.9)} 55%, ${kagit(0)} 100%)` }} />
        <Etiket t={t} bas={K(1, "banana")} capa={[900, 800]} konum={[960, 600]} metin="ONE BANANA" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "National")} />
      <Baslik t={t} bas={K(0, "National") + 0.2} metin="DAILY TARGET" x={1860} y={220} boyut={104} renk={RENK.koyuYesil} hiza="sag" />
      <Not t={t} bas={K(0, "adequate")} metin="adequate intake, mg per day" x={1860} y={290} hiza="sag" boyut={32} />
      <CubukGrafik t={t} bas={t34} x={X} y={Y} w={W} h={H} maks={3910} cubuklar={[
        { etiket: "MEN", deger: 3400, metin: "3,400", renk: RENK.koyuYesil, bas: t34 },
        { etiket: "WOMEN", deger: 2600, metin: "2,600", renk: RENK.yesil, bas: t26 },
      ]} />
      <Kesir t={t} bas={K(1, "eighth")} cx={X + gw * 0.5} metin="≈ 1/8" />
      <Kesir t={t} bas={K(1, "sixth")} cx={X + gw * 1.5} metin="≈ 1/6" />
      <Not t={t} bas={K(1, "covers")} metin="share of target from one banana" x={X + W / 2} y={880} hiza="orta" boyut={28} />
    </>
  );
};

export default S06;
