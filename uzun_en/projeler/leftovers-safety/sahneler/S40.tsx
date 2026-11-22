// Sahne 40
import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, BolumKarti, Etiket, INTER, IkonYol, Ikon, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, einout, eout, ilerle, kameraYolu,
  kelimeZamani, kis, pop, sol } from "../kutuphane";

// Yerel hap: pop ile gelir, isteğe bağlı simge
const Pill: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; ikon?: "onay" | "carpi" | "saat" | "uyari"; bitis?: number; boyut?: number }> = ({
  t, bas, x, y, metin, renk, ikon, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a, display: "flex",
      alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: ikon ? "8px 26px 8px 10px" : "10px 26px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      {ikon && <span style={{ width: 44, height: 44, borderRadius: "50%", background: renk, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IkonYol ad={ikon} boyut={28} renk="#fff" kalinlik={6} /></span>}
      {metin}
    </div>
  );
};

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSifir = K(0, "zero"), tUzun = K(0, "indefinitely"), tNem = K(0, "lose"), tAlti = K(1, "six"), tFrz = K(0, "frozen");
  return (
    <>
      <Kamera gorsel="tam/40" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        <Etiket t={t} bas={tFrz} capa={[560, 800]} konum={[1180, 830]} metin="FROZEN LEFTOVERS" renk={RENK.altin} boyut={28} />
      </Kamera>
      <BaslikBlok t={t} bas={tSifir - 0.1} satirlar={["0°F", "PAUSES THE CLOCK"]} x={1040} y={200} boyut={100} />
      <Pill t={t} bas={tUzun - 0.4} bitis={K(1, "American") - 0.2} x={1380} y={470} metin="SAFE INDEFINITELY" renk={RENK.yesil} ikon="onay" />
      <Pill t={t} bas={tNem - 0.2} bitis={K(1, "American") - 0.2} x={1380} y={580} metin="MOISTURE + FLAVOR FADE" renk={RENK.altin} ikon="saat" boyut={28} />
      <VurguRozet t={t} bas={tAlti - 0.2} vurgu="6 MONTHS" not="up to, for good quality · AHA" x={1380} y={450} genislik={560} boyut={90} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(0, "Nebraska")} />
    </>
  );
};
export default S40;
