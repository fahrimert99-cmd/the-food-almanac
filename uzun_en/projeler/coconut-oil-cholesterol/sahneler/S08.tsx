// Sahne 8 — doymuş yağ bütçesi: %10 sınırı, 22 g, bir kaşık ≈ yarısı.
import React from "react";
import { AltSis, ANTON, BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const BX = 1010, BW = 800, BY = 470, BH = 64; // bütçe çubuğu (ekran koordinatı)

const S08: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tYuzde = K(0, "10"), tGun = K(1, "2,000-calorie"), t22 = K(1, "22"), tKasik = K(2, "tablespoon");
  const t11 = K(2, "11"), tYarim = K(2, "half"), tHatirla = K(3, "22,");
  const pPanel = eout(ilerle(t, 0.2, 0.6));
  const aBar = eout(ilerle(t, tGun, 0.5));
  const pTam = eout(ilerle(t, t22, 0.8));
  const pYarim = eout(ilerle(t, t11, 1.0));
  const [s22, a22] = pop(t, t22, 0.5);
  const [sY, aY] = pop(t, tYarim, 0.5);
  const nabiz = 1 + 0.07 * Math.sin(Math.PI * eout(ilerle(t, tHatirla, 0.9)));
  const aOnc = sol(t, tGun - 0.1, 0.4); // ilk rozet bütçe çubuğu gelince küçülmeden solar
  return (
    <>
      <Kamera gorsel="tam/08" pencere={kameraYolu(t, s.sure, [0, 20, 1920], [70, 50, 1780])}>
        <Etiket t={t} bas={tKasik - 0.1} capa={[440, 185]} konum={[760, 130]} metin="ONE TABLESPOON" renk={RENK.altin} boyut={26} />
        <Etiket t={t} bas={K(2, "coconut") - 0.05} capa={[500, 760]} konum={[800, 650]} metin="COCONUT OIL" renk={RENK.altin} boyut={26} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={900} />
      <AltSis a={0.7} yukseklik={150} />
      {s.meta.etiket && <KaynakEtiketi t={t} metin={s.meta.etiket} bas={K(0, "saturated")} />}
      <div style={{ opacity: aOnc }}>
        <VurguRozet t={t} bas={tYuzde} vurgu="< 10%" not="of daily calories" x={1440} y={200} boyut={110} genislik={420} />
      </div>
      {/* 22 g bütçe çubuğu */}
      {aBar > 0 && (
        <div style={{ position: "absolute", left: BX, top: BY - 70, opacity: aBar, fontFamily: INTER, fontWeight: 800, fontSize: 28,
          letterSpacing: 2, color: RENK.lacivert }}>2,000-CALORIE DAY</div>
      )}
      <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
        <g opacity={aBar}>
          <rect x={BX} y={BY} width={BW} height={BH} rx={14} fill="#FCF8EC" stroke={RENK.lacivert} strokeWidth={4} />
          <rect x={BX + 4} y={BY + 4} width={(BW - 8) * pTam} height={BH - 8} rx={10} fill={RENK.altin} opacity={0.35} />
          <rect x={BX + 4} y={BY + 4} width={((BW - 8) / 2) * pYarim} height={BH - 8} rx={10} fill={RENK.mercan} />
          <line x1={BX + BW / 2} x2={BX + BW / 2} y1={BY - 12} y2={BY + BH + 12} stroke={RENK.lacivert} strokeWidth={3} strokeDasharray="8 7" opacity={pYarim} />
        </g>
      </svg>
      <div style={{ position: "absolute", left: BX + BW, top: BY + BH + 14, transform: `translate(-100%, 0) scale(${s22 * nabiz})`,
        transformOrigin: "100% 0", opacity: a22, fontFamily: ANTON, fontSize: 64, color: RENK.lacivert, whiteSpace: "nowrap" }}>≈ 22 G</div>
      <div style={{ position: "absolute", left: BX, top: BY + BH + 20, opacity: pYarim, fontFamily: INTER, fontWeight: 800, fontSize: 28,
        color: RENK.mercan, whiteSpace: "nowrap" }}>1 TBSP ≈ 11 G</div>
      <div style={{ position: "absolute", left: BX + BW / 4, top: BY + 12, transform: `translate(-50%, 0) scale(${sY})`, opacity: aY,
        fontFamily: ANTON, fontSize: 34, color: "#fff", letterSpacing: 2, whiteSpace: "nowrap" }}>≈ HALF</div>
      <BaslikBlok t={t} bas={tYarim + 0.3} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={720} boyut={84} hiza="sag" />
    </>
  );
};

export default S08;
