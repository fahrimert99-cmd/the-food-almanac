// Sahne 29 — Baudry ve ekibi: 68.946 Fransız yetişkin, 4,5 yıl; çoğu kadın, ortalama yaş 44.
import React from "react";
import { Kamera, KaynakEtiketi, Not, Panel, RENK, SP, einout, eout, ilerle, kameraYolu, kelimeZamani, kagit, VurguRozet, Hap } from "../kutuphane";

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBau = K(0, "Baudry"), tN = K(0, "68,946"), tYr = K(0, "four and a half"), tW = K(1, "women"), tAge = K(1, "average age");
  const pP = einout(ilerle(t, tN - 0.5, 0.8));
  const cx = 1560;
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [-20, 20, 1850])} sinirla={false}>
        <div style={{ position: "absolute", left: 1640, top: 270, width: 240, height: 200, background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tBau - 0.1} />
      <Panel a={pP} taraf="sag" genislik={700} />
      <VurguRozet t={t} bas={tN} vurgu="68,946" not="FRENCH ADULTS" x={cx} y={190} renk={RENK.lacivert} genislik={460} boyut={96} />
      {t >= tYr && (
        <div style={{ position: "absolute", left: cx, top: 470, transform: "translateX(-50%)" }}><Hap metin="4.5 YEARS AVG. FOLLOW-UP" renk={RENK.altin} boyut={28} /></div>
      )}
      {t >= tW && (
        <div style={{ position: "absolute", left: cx, top: 590, transform: "translateX(-50%)" }}><Hap metin="MOSTLY WOMEN" renk={RENK.koyuYesil} boyut={32} /></div>
      )}
      <VurguRozet t={t} bas={tAge} vurgu="44" not="AVERAGE AGE" x={cx} y={710} renk={RENK.mercan} genislik={300} boyut={90} />
    </>
  );
};

export default S29;
