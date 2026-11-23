// Sahne 13 — 2, 6, 12. saatlerde daha düşük bulantı puanı: sağ panelde saat hapları, gerçek nesnelerde etiket.
import React from "react";
import { BaslikBlok, Etiket, Hap, IkonYol, INTER, Kamera, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SAATLER = [{ ifade: "two,", m: "2 HOURS" }, { ifade: "six", m: "6 HOURS" }, { ifade: "twelve", m: "12 HOURS" }];

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPuan = K(0, "nausea scores");
  const tZen = K(0, "ginger");
  const tTutt = K(1, "held up");
  const aPanel = eout(ilerle(t, tPuan - 0.3, 0.6));
  const [sc, al] = pop(t, tTutt, 0.55);
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 60, 1800])}>
        <Etiket t={t} bas={tZen} bitis={tPuan + 1.5} capa={[830, 860]} konum={[420, 900]} metin="GINGER" renk={RENK.altin} />
      </Kamera>
      <Panel a={aPanel} taraf="sag" genislik={560} opak={0.97} />
      <BaslikBlok t={t} bas={tPuan} satirlar={["NAUSEA", "SCORES LOWER"]} x={1400} y={190} boyut={78} renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Not t={t} bas={tPuan + 0.5} metin="ginger vs placebo" x={1404} y={360} boyut={28} />
      {SAATLER.map((h, i) => {
        const [sh, ah] = pop(t, K(0, h.ifade), 0.5);
        return (
          <div key={h.m} style={{ position: "absolute", left: 1404, top: 450 + i * 90, transform: `scale(${sh})`, transformOrigin: "0% 50%", opacity: ah }}>
            <Hap metin={h.m} renk={RENK.yesil} boyut={32} />
          </div>
        );
      })}
      <div style={{ position: "absolute", left: 1404, top: 770, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
        alignItems: "center", gap: 14, background: RENK.yesil, borderRadius: 999, padding: "10px 28px 10px 12px", whiteSpace: "nowrap" }}>
        <span style={{ width: 38, height: 38, borderRadius: "50%", background: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IkonYol ad="onay" boyut={24} renk={RENK.yesil} kalinlik={7} />
        </span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: "#fff" }}>BENEFIT HELD UP</span>
      </div>
    </>
  );
};
export default S13;
