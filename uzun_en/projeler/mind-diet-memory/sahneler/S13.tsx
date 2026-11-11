// Sahne 13 — 2015 raporu: takvimdeki sahte yazılar temiz bir kartla örtülür; 923 katılımcı, 58–98 yaş, 144 vaka.
import React from "react";
import { ANTON, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S13: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [sc, al] = pop(t, 0, 0.4);
  const t923 = K(0, "923"), tYas = K(0, "ages"), tYil = K(1, "four"), t144 = K(1, "144");
  const bYil = t144 - 0.15;
  const satir = (bas: number, buyuk: string, kucuk: string, renk: string) => {
    const a = eout(ilerle(t, bas, 0.5));
    return (
      <div style={{ opacity: a, transform: `translateY(${(1 - a) * 14}px)`, display: "flex", alignItems: "baseline", gap: 14, justifyContent: "center" }}>
        <span style={{ fontFamily: ANTON, fontSize: 70, color: renk }}>{buyuk}</span>
        <span style={{ fontFamily: INTER, fontWeight: 800, fontSize: 28, letterSpacing: 2, color: RENK.lacivert }}>{kucuk}</span>
      </div>
    );
  };
  return (
    <>
      <Kamera gorsel="tam/13" pencere={kameraYolu(t, s.sure, [0, 20, 1900], [60, 50, 1780])}>
        {/* takvim kartı: görseldeki bozuk yazıları örter */}
        <div style={{ position: "absolute", left: 545, top: 85, width: 530, height: 480, opacity: al, transform: `scale(${sc})`,
          background: "#FCF8EC", border: `5px solid ${RENK.lacivert}`, borderRadius: 18, boxShadow: "0 16px 36px rgba(48,40,34,0.3)",
          display: "flex", flexDirection: "column", justifyContent: "center", gap: 6 }}>
          <div style={{ textAlign: "center", fontFamily: ANTON, fontSize: 150, lineHeight: 1.05, color: RENK.koyuYesil }}>2015</div>
          {satir(t923, "923", "PARTICIPANTS", RENK.altin)}
          {satir(tYas, "58–98", "YEARS OLD", RENK.lacivert)}
        </div>
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={tYil} bitis={bYil + 0.2} vurgu="≈ 4.5 YEARS" not="of follow-up" x={1480} y={560} renk={RENK.lacivert} genislik={420} boyut={70} />
      <VurguRozet t={t} bas={t144 + 0.1} vurgu="144 OF 923" not="developed Alzheimer's disease" x={1480} y={560} renk={RENK.mercan} genislik={500} boyut={78} />
    </>
  );
};

export default S13;
