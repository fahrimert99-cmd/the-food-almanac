// Sahne 44 — yan etkiler: üstte sırayla değişen kutu, solda rozet; imza kalıntısı yamalı.
import React from "react";
import { ANTON, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kagit, kameraYolu, kelimeZamani, sol } from "../kutuphane";

// Krem zeminli tek satırlık bilgi kutusu (üst boş bant)
const Kutu: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; anton?: boolean }> = ({ t, bas, bitis = 1e9, metin, renk, anton }) => {
  const a = eout(ilerle(t, bas, 0.5)) * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 0, right: 0, top: 128, display: "flex", justifyContent: "center", opacity: a, transform: `translateY(${(1 - a) * 14}px)` }}>
      <div style={{ background: "#FCF8EC", border: `4px solid ${renk}`, borderRadius: 22, padding: "10px 30px", boxShadow: "0 10px 26px rgba(48,40,34,0.18)",
        fontFamily: anton ? ANTON : INTER, fontWeight: 800, fontSize: anton ? 56 : 36, color: RENK.lacivert, whiteSpace: "nowrap", letterSpacing: anton ? 1 : 0 }}>{metin}</div>
    </div>
  );
};

const S44: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/44" pencere={kameraYolu(t, s.sure, [60, 60, 1660], [120, 90, 1560])}>
        {/* sağ üstteki kol çizgileri (filigranla çakışmasın) */}
        <div style={{ position: "absolute", left: 1480, top: -40, width: 400, height: 380,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 60%, ${kagit(0)} 100%)` }} />
        {/* sağ alttaki imza kalıntısı */}
        <div style={{ position: "absolute", left: 1500, top: 825, width: 130, height: 60,
          background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${kagit(1)} 0%, ${kagit(1)} 55%, ${kagit(0)} 100%)` }} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Kutu t={t} bas={0.2} bitis={K(1, "stomach") - 0.1} metin="SIDE EFFECTS: UNCOMMON" renk={RENK.yesil} anton />
      <VurguRozet t={t} bas={K(1, "2,166")} vurgu="2,166" not="PEOPLE · 10 TRIALS" x={250} y={330} genislik={340} boyut={80} bitis={K(2, "Very") - 0.1} />
      <Kutu t={t} bas={K(1, "stomach")} bitis={K(1, "though") - 0.1} metin="STOMACH UPSET: SLIGHTLY MORE WITH CRANBERRY" renk={RENK.altin} />
      <Kutu t={t} bas={K(1, "though")} bitis={K(2, "Very") - 0.1} metin="COCHRANE: PROBABLY NO DIFFERENT FROM PLACEBO" renk={RENK.koyuYesil} />
      <Kutu t={t} bas={K(2, "Very")} metin="VERY LARGE AMOUNTS: STOMACH UPSET, DIARRHEA" renk={RENK.mercan} />
    </>
  );
};

export default S44;
