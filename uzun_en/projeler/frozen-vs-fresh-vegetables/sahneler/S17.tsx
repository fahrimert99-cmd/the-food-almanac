// Sahne 17 — C vitamini: 8 gıdanın 5'inde fark yok, 3'ünde dondurulmuş yüksek
import React from "react";
import { Baslik, BaslikBlok, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S17: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  const tF = K(0, "five"), tT = K(1, "three");
  return (
    <>
      <Kamera gorsel="tam/17" pencere={kameraYolu(t, s.sure, [60, 0, 1800], [120, 20, 1700])}>
        {/* kâse altındaki anlamsız küçük yazı örtülür */}
        <div style={{ position: "absolute", left: 1590, top: 800, width: 240, height: 90,
          background: "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(251,249,216,1) 0%, rgba(251,249,216,1) 60%, rgba(251,249,216,0) 100%)" }} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={0.2} satirlar={b.satirlar} x={100} y={190} boyut={104} renkler={[RENK.altin, RENK.koyuYesil]} />
      <Not t={t} bas={K(0, "vitamin")} metin={b.not!} x={104} y={380} boyut={32} agirlik={800} />
      {/* 8 gıda: 5 fark yok (gri), 3 dondurulmuş yüksek (yeşil) */}
      <div style={{ position: "absolute", left: 104, top: 440, display: "flex", gap: 16 }}>
        {Array.from({ length: 8 }, (_, i) => {
          const yesil = i >= 5;
          const [sc, al] = pop(t, (yesil ? tT + (i - 5) * 0.25 : tF + i * 0.12), 0.4);
          return <div key={i} style={{ width: 52, height: 52, borderRadius: "50%", opacity: al, transform: `scale(${sc})`,
            background: yesil ? RENK.yesil : RENK.gri, border: `4px solid ${RENK.kagitAcik}`, boxShadow: "0 4px 10px rgba(48,40,34,0.2)" }} />;
        })}
      </div>
      <VurguRozet t={t} bas={tT} vurgu="3 OF 8" not="higher in frozen" x={1560} y={150} renk={RENK.yesil} genislik={420} />
    </>
  );
};

export default S17;
