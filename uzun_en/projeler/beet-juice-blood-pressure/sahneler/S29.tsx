// Sahne 29 — Webb 2008: sistolik en düşük ~2,5 saat, diyastolik ~3 saat.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Senkron açılan hap etiketi (ekran koordinatı)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, bitis = 1e9, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.45);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transformOrigin: "0 50%", transform: `scale(${sc})`, opacity: a, display: "flex", alignItems: "center",
      gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999, padding: "10px 28px 10px 18px",
      fontFamily: INTER, fontWeight: 800, fontSize: 30, letterSpacing: 1.5, color: RENK.murekkep, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const p = kameraYolu(t, s.sure, [0, 0, 1920], [50, 30, 1810]);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={p}>
        <Etiket t={t} bas={K(0, "drinking")} capa={[790, 600]} konum={[1130, 470]} metin="BEET JUICE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} bas={K(0, "2008")} metin={s.meta.etiket ?? ""} />
      <Pil t={t} bas={K(0, "systolic")} x={1000} y={620} metin="SYSTOLIC: ≈ 2.5 HOURS" renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(0, "two")} satirlar={["LOWEST AT", "2.5 HOURS"]} x={1000} y={200} boyut={116}
        renkler={[RENK.lacivert, RENK.mercan]} />
      <Pil t={t} bas={K(0, "diastolic")} x={1000} y={730} metin="DIASTOLIC: ≈ 3 HOURS" renk={RENK.altin} />
    </>
  );
};

export default S29;
