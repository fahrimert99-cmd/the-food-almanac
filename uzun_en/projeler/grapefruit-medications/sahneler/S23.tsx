// Sahne 23 — kalp ritmi ilaçları: amiodarone şişesi, ≈ HALF rozeti, kaynak etiketi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Hap biçimli küçük etiket (pop ile gelir). x,y = sol-orta (hiza sol) ya da orta.
const Chip: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; boyut?: number; orta?: boolean; bitis?: number }> = ({
  t, bas, metin, x, y, renk, boyut = 30, orta, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${orta ? "-50%" : "0"}, -50%) scale(${sc})`, transformOrigin: orta ? "50% 50%" : "0% 50%",
      opacity: a, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "9px 24px 9px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: boyut * 0.65, height: boyut * 0.65, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
};


const S23: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/23" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 30, 1800])}>
        <Etiket t={t} bas={K(1, "Pacerone.") - 0.3} capa={[1500, 580]} konum={[1290, 450]} metin="SOLD AS PACERONE" renk={RENK.altin} />
        {/* boş şişe etiketine ilaç adı */}
        <Baslik t={t} bas={K(1, "amiodarone,")} metin="AMIO-" x={1602} y={720} boyut={38} renk={RENK.lacivert} hiza="orta" />
        <Baslik t={t} bas={K(1, "amiodarone,") + 0.1} metin="DARONE" x={1602} y={762} boyut={38} renk={RENK.lacivert} hiza="orta" />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "heart-rhythm")} satirlar={b.satirlar} x={1130} y={160} boyut={96} hiza="orta" renkler={[RENK.lacivert, RENK.mercan]} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(2, "In")} />
      <Chip t={t} bas={K(2, "11")} metin="11 HEALTHY VOLUNTEERS" x={56} y={150} renk={RENK.yesil} boyut={26} />
      <VurguRozet t={t} bas={K(2, "about")} vurgu="≈ HALF" not="higher levels, single dose" x={1290} y={600} genislik={420} boyut={96} />
    </>
  );
};

export default S23;
