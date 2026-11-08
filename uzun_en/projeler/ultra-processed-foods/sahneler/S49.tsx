// Sahne 49 — Nutrition Facts: %DV 5 düşük, 20 yüksek; hangisini azalt/artır.
import React from "react";
import { Baslik, Etiket, INTER, IkonYol, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const SATIRLAR = [
  { m: "ADDED SUGARS", ifade: "added", yon: "asagi" }, { m: "SODIUM", ifade: "sodium", yon: "asagi" },
  { m: "SATURATED FAT", ifade: "saturated", yon: "asagi" }, { m: "FIBER", ifade: "fiber", yon: "yukari" },
];

const S49: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tNut = K(1, "Nutrition"), t5 = K(2, "5"), t20 = K(2, "20"), tDV = K(2, "Daily");
  const tLower = K(3, "lower"), tHigher = K(3, "higher");
  const [sh, ah] = pop(t, tDV, 0.5);
  const [sl, al] = pop(t, tLower, 0.5);
  const [sH, aH] = pop(t, tHigher + 0.0, 0.5);
  return (
    <>
      <Kamera gorsel="tam/49" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 90, 1720])}>
        {/* kutudaki bozuk yazılar kutu rengi yamayla örtülür */}
        <div style={{ position: "absolute", left: 385, top: 848, width: 150, height: 64,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #f9e4ad 0%, #f9e4ad 70%, rgba(249,228,173,0) 100%)" }} />
        <div style={{ position: "absolute", left: 212, top: 890, width: 110, height: 70,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, #8a6a40 0%, #8a6a40 65%, rgba(138,106,64,0) 100%)" }} />
        <Etiket t={t} bas={tNut} bitis={t5 - 0.15} capa={[470, 640]} konum={[900, 500]} metin="NUTRITION FACTS" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={0.05} metin="THREE:" x={140} y={170} boyut={100} renk={RENK.lacivert} />
      <Baslik t={t} bas={tNut - 0.3} metin="5% LOW · 20% HIGH" x={140} y={290} boyut={100} renk={RENK.koyuYesil} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={tNut} y={400} />
      <VurguRozet t={t} bas={t5} bitis={s.cumleler[3].bas - 0.1} vurgu="≤ 5%" not="LOW" x={1200} y={470} renk={RENK.yesil} genislik={340} />
      <VurguRozet t={t} bas={t20} bitis={s.cumleler[3].bas - 0.1} vurgu="≥ 20%" not="HIGH" x={1600} y={470} renk={RENK.mercan} genislik={340} />
      <div style={{ position: "absolute", left: 1400, top: 720, transform: `translate(-50%,0) scale(${sh})`, opacity: ah * (t < s.cumleler[3].bas - 0.1 ? 1 : 0),
        fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 3, color: RENK.lacivert, whiteSpace: "nowrap" }}>OF THE DAILY VALUE</div>
      {/* hedef: azalt / artır */}
      <div style={{ position: "absolute", left: 1000, top: 440, transform: `scale(${sl})`, transformOrigin: "0 50%", opacity: al,
        fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 4, color: RENK.altin }}>AIM LOWER</div>
      {SATIRLAR.map((r, i) => {
        const tr = K(3, r.ifade);
        const [sc, a] = pop(t, tr - 0.05, 0.5);
        const yuk = r.yon === "yukari";
        const y = 495 + i * 92 + (yuk ? 70 : 0);
        return (
          <React.Fragment key={r.m}>
            {yuk && (
              <div style={{ position: "absolute", left: 1000, top: y - 64, transform: `scale(${sH})`, transformOrigin: "0 50%", opacity: aH,
                fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 4, color: RENK.yesil }}>AIM HIGHER</div>
            )}
            <div style={{ position: "absolute", left: 1000, top: y, transform: `scale(${sc})`, transformOrigin: "0 50%", opacity: a, display: "flex",
              alignItems: "center", gap: 18, background: RENK.kagitAcik, border: `3px solid ${RENK.murekkep}`, borderRadius: 999,
              padding: "8px 34px 8px 10px", boxShadow: "0 8px 22px rgba(48,40,34,0.2)", whiteSpace: "nowrap" }}>
              <span style={{ width: 52, height: 52, borderRadius: "50%", background: yuk ? RENK.yesil : RENK.altin, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ display: "flex", transform: `rotate(${yuk ? -90 : 90}deg)` }}><IkonYol ad="ok" boyut={34} renk="#fff" kalinlik={7} /></span>
              </span>
              <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 34, letterSpacing: 2, color: RENK.lacivert }}>{r.m}</span>
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default S49;
