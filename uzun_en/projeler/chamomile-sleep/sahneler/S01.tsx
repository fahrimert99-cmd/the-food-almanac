import React from "react";
import { Baslik, Etiket, Ikon, INTER, Kamera, KaynakEtiketi, MARKA, Not, RENK, SP, VurguRozet, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Senkron hap (renkli noktalı)
const Pil: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number; boyut?: number }> = ({
  t, bas, bitis = 1e9, metin, renk, x, y, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (1 - eout(ilerle(t, bitis, 0.4)));
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: a, display: "flex",
      alignItems: "center", gap: 14, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`, borderRadius: 999,
      padding: "10px 28px 10px 20px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5, color: RENK.murekkep,
      boxShadow: "0 8px 22px rgba(48,40,34,0.14)" }}>
      <span style={{ width: 20, height: 20, borderRadius: "50%", background: renk, flex: "none" }} />{metin}
    </div>
  );
};

// Sahne 1 — iki kavanoz: aynı bitki, zıt sonuçlar
const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [60, 20, 1800]);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={kam}>
        <Etiket t={t} bas={K(0, "Older adults")} bitis={K(1, "But")} capa={[300, 330]} konum={[340, 80]} metin="OLDER ADULTS" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "long-term insomnia")} capa={[760, 330]} konum={[820, 80]} metin="LONG-TERM INSOMNIA" renk={RENK.mercan} />
      </Kamera>
      {/* masa kenarını örten sağ zemin */}
      <div style={{ position: "absolute", left: 960, top: 0, right: 0, bottom: 0,
        background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(1)} 18%, ${kagit(1)} 100%)` }} />
      <Baslik t={t} bas={K(0, "chamomile")} metin="SAME HERB," x={1190} y={330} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "But")} metin="OPPOSITE RESULTS" x={1190} y={430} boyut={84} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(0, "four weeks")} metin="four weeks of chamomile extract" x={1194} y={510} boyut={30} renk={RENK.gri} />
      <Pil t={t} bas={K(0, "slept better")} metin="OLDER ADULTS: SLEPT BETTER" renk={RENK.yesil} x={1190} y={640} />
      <Pil t={t} bas={K(1, "no clear")} metin="INSOMNIA: NO CLEAR DIFFERENCE" renk={RENK.mercan} x={1190} y={740} />
    </>
  );
};
export default S01;
