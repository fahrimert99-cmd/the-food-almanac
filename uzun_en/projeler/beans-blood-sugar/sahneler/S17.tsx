import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// yazı zeminli hap (karışık görsel üstünde okunurluk)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; x: number; y: number; hiza?: "orta" | "sag" }> = ({ t, bas, bitis = 1e9, metin, x, y, hiza = "orta" }) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", top: y, ...(hiza === "orta" ? { left: x, transform: "translateX(-50%)" } : { right: 1920 - x }), opacity: a,
    background: RENK.lacivert, color: "#fff", borderRadius: 999, padding: "10px 28px", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: 28, letterSpacing: 1.5, whiteSpace: "nowrap" }}>{metin}</div>;
};

// Tansiyon: manşon ve su bardağı arasında rozet
const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 40, 1920], [100, 90, 1720]);
  return (
    <>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <Kamera gorsel="tam/17" pencere={pencere}>
        <Etiket t={t} bas={K(0, "pressure")} bitis={K(1, "fell")} capa={[950, 700]} konum={[600, 330]} metin="BLOOD PRESSURE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "top number")} bitis={K(1, "fell")} capa={[1480, 540]} konum={[1500, 260]} metin="SYSTOLIC: TOP NUMBER" renk={RENK.lacivert} />
      </Kamera>
      <VurguRozet t={t} bas={K(1, "4.5")} vurgu="–4.5" not="mm Hg more than the wheat fiber diet" x={1000} y={90} renk={RENK.koyuYesil} genislik={460} />
      <Pil t={t} bas={K(1, "legume")} x={960} y={890} metin="LEGUME DIET VS. WHEAT FIBER DIET" />
    </>
  );
};
export default S17;
