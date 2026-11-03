// Sahne 13 — VITAL: kaynak etiketi, büyük başlık, 25,871 rozeti ve yaş grupları.
import React from "react";
import { Baslik, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik;
  const tV = K(0, "VITAL"), tN = K(1, "25,871"), tM = K(1, "men"), tW = K(1, "women");
  const grup = [
    { bas: tM, metin: "MEN 50+", renk: RENK.lacivert },
    { bas: tW, metin: "WOMEN 55+", renk: RENK.koyuYesil },
  ];
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 100, 1700], [90, 150, 1560])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Manson")} />
      <Baslik t={t} bas={tV} metin={b?.satirlar[0] ?? "VITAL"} x={1260} y={210} boyut={150} renk={RENK.koyuYesil} />
      <VurguRozet t={t} bas={tN} vurgu={b?.vurgu ?? ""} not={b?.not} x={1530} y={330} genislik={500} boyut={120} />
      <div style={{ position: "absolute", left: 1290, top: 650, display: "flex", flexDirection: "column", gap: 18 }}>
        {grup.map((g) => {
          const [sc, al] = pop(t, g.bas, 0.5);
          return (
            <div key={g.metin} style={{ transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, alignSelf: "flex-start",
              display: "flex", alignItems: "center", gap: 12, background: RENK.kagitAcik, border: `3px solid ${g.renk}`, borderRadius: 999,
              padding: "10px 28px 10px 16px", fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 1.5, color: RENK.lacivert,
              whiteSpace: "nowrap", boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
              <span style={{ width: 22, height: 22, borderRadius: "50%", background: g.renk }} />{g.metin}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default S13;
