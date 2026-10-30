// Sahne 24 — +100 µg K = INR yaklaşık –0,2 (Khan 2004)
import React from "react";
import { Baslik, Etiket, IkonYol, INTER, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const Hap2: React.FC<{ t: number; bas: number; bitis: number; y: number; metin: string; renk: string; ok: "yukari" | "asagi" }> = ({ t, bas, bitis, y, metin, renk, ok }) => {
  const [sc, al] = pop(t, bas, 0.55);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1000, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a, display: "flex", alignItems: "center",
      gap: 14, background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "8px 30px 8px 12px", boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ display: "flex", transform: `rotate(${ok === "yukari" ? -90 : 90}deg)`, background: renk, borderRadius: 10, padding: 4 }}>
        <IkonYol ad="ok" boyut={40} renk="#fff" kalinlik={7} />
      </span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 32, letterSpacing: 2, color: renk }}>{metin}</span>
    </div>
  );
};

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const pen = kameraYolu(t, s.sure, [0, 0, 1920], [30, 30, 1800]);
  const tK = c[1].bas - 0.1;
  const b = s.meta.baslik ?? { satirlar: ["+100 MICROGRAMS"], vurgu: "–0.2" };
  return (
    <>
      <Kamera gorsel="tam/24" pencere={pen}>
        <Etiket t={t} bas={K(0, "vitamin K")} capa={[420, 400]} konum={[560, 190]} metin="VITAMIN K" renk={RENK.yesil} />
      </Kamera>
      <Panel a={1} taraf="sag" genislik={860} opak={0.98} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.1} />
      <Hap2 t={t} bas={K(0, "higher")} bitis={tK} y={330} metin="VITAMIN K HIGHER" renk={RENK.yesil} ok="yukari" />
      <Hap2 t={t} bas={K(0, "lower")} bitis={tK} y={440} metin="INR LOWER" renk={RENK.mercan} ok="asagi" />
      <Baslik t={t} bas={K(1, "100")} metin={b.satirlar[0]} x={1000} y={300} boyut={96} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(1, "daily")} metin="per day in the diet" x={1004} y={370} boyut={34} />
      <VurguRozet t={t} bas={K(1, "0.2")} vurgu={`${b.vurgu} INR`} not="on average" x={1330} y={470} genislik={460} boyut={110} renk={RENK.mercan} />
    </>
  );
};

export default S24;
