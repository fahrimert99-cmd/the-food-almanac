// Sahne 15 — katarakt: göz ve şişe üzerinde etiketler; sağda 872 / 945 satırları ve –9% rozeti.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const Satir: React.FC<{ t: number; bas: number; y: number; sayi: string; ad: string; renk: string }> = ({ t, bas, y, sayi, ad, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1290, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al, display: "flex",
      alignItems: "center", gap: 18, background: RENK.kagitAcik, border: `4px solid ${renk}`, borderRadius: 20, padding: "8px 28px 8px 20px",
      boxShadow: "0 8px 22px rgba(48,40,34,0.16)", whiteSpace: "nowrap" }}>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 52, color: renk }}>{sayi}</span>
      <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 26, letterSpacing: 1.5, color: RENK.lacivert }}>{ad}</span>
    </div>
  );
};

const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tGoz = K(0, "eyes"), tKat = K(1, "Cataracts"), t872 = K(1, "872"), tVit = K(1, "multivitamin"), t945 = K(1, "945"), t9 = K(1, "9");
  const cam = kameraYolu(t, s.sure, [0, 40, 1800], [40, 70, 1720]);
  return (
    <>
      <Kamera gorsel="tam/15" pencere={cam} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <Etiket t={t} bas={tGoz - 0.3} bitis={tKat + 1} capa={[520, 540]} konum={[560, 190]} metin="THE EYES" renk={RENK.lacivert} />
      <Baslik t={t} bas={tKat} metin="CATARACTS" x={1290} y={210} boyut={104} renk={RENK.koyuYesil} />
      <Satir t={t} bas={t872} y={330} sayi="872" ad="MULTIVITAMIN" renk={RENK.yesil} />
      <Satir t={t} bas={t945} y={450} sayi="945" ad="PLACEBO" renk={RENK.altin} />
      <Etiket t={t} bas={tVit} bitis={t945} capa={[985, 520]} konum={[1010, 190]} metin="MULTIVITAMIN" renk={RENK.yesil} />
      <VurguRozet t={t} bas={t9 - 0.1} vurgu="–9%" not="ABOUT 9% FEWER" x={1480} y={620} genislik={380} boyut={110} renk={RENK.koyuYesil} />
    </>
  );
};

export default S15;
