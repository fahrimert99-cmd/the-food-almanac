// Sahne 12 — EFSA 2010: 22 kaynak, 3 meta-analiz, 19 randomize çalışma; sonuç 3 g/gün.
import React from "react";
import { ANTON, Baslik, Etiket, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu,
  kelimeZamani, pop } from "../kutuphane";

const S12: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tEfsa = K(0, "European");
  const tSonuc = K(0, "concluded");
  const SATIRLAR = [
    { bas: K(0, "22"), sayi: "22", ad: "REFERENCES" },
    { bas: K(0, "three meta"), sayi: "3", ad: "META-ANALYSES" },
    { bas: K(0, "19"), sayi: "19", ad: "RANDOMIZED TRIALS" },
  ];
  const pPanel = eout(ilerle(t, 0.3, 0.7));
  return (
    <>
      <Kamera gorsel="tam/12" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [90, 60, 1740])}>
        <Etiket t={t} bas={K(0, "oat beta-glucan")} capa={[1030, 440]} konum={[1030, 250]} metin="OAT BETA-GLUCAN" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={800} opak={0.96} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} />}
      <Baslik t={t} bas={0.26} metin="2010" x={70} y={240} boyut={150} renk={RENK.lacivert} />
      <Baslik t={t} bas={tEfsa} metin="EFSA REVIEW" x={74} y={370} boyut={64} renk={RENK.koyuYesil} />
      {SATIRLAR.map((r, i) => {
        const [sc, al] = pop(t, r.bas, 0.5);
        if (al <= 0) return null;
        return (
          <div key={r.ad} style={{ position: "absolute", left: 70, top: 470 + i * 150, display: "flex", alignItems: "center", gap: 26,
            transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
            <div style={{ minWidth: 150, fontFamily: ANTON, fontSize: 116, lineHeight: 1.05, color: RENK.altin }}>{r.sayi}</div>
            <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 36, letterSpacing: 2, color: RENK.lacivert }}>{r.ad}</div>
          </div>
        );
      })}
      <VurguRozet t={t} bas={K(0, "three grams a day")} vurgu="3 g" not="LOWERS LDL" x={1660} y={160} genislik={360} boyut={96} />
    </>
  );
};

export default S12;
