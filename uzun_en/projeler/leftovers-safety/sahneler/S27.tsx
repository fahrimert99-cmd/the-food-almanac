// Sahne 27 — wok + ocak; sağda 121°C / 250°F rozetleri, yöntemler listesi, sonra Virginia notu.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Ikon, Kamera, KaynakEtiketi, Liste, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t121 = K(0, "121"), t250 = K(0, "250"), tRoast = K(0, "roasting"), tFry = K(0, "frying"), tMicro = K(0, "microwaving.");
  const tVir = K(1, "Virginia"), tBrief = K(1, "brief"), tTox = K(1, "toxin");
  const son0 = K(1, "That") - 0.15;
  const [sc, al] = pop(t, tVir, 0.5);
  const [sc2, al2] = pop(t, tTox, 0.5);
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 30, 1920], [40, 50, 1840])}>
        <Etiket t={t} bas={tBrief} capa={[640, 860]} konum={[1100, 905]} metin="BRIEF HEATING" renk={RENK.altin} boyut={30} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <BaslikBlok t={t} bas={0.3} bitis={son0} satirlar={["FRYING", "DOESN'T FIX IT"]} x={1860} y={250} boyut={100} hiza="sag" />
      {/* sıcaklık rozetleri: 121°C sonra ≈250°F aynı yerde */}
      <VurguRozet t={t} bas={t121} bitis={t250 - 0.05} vurgu="121°C" not="AFTER 2 HOURS" x={1570} y={470} genislik={420} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t250} bitis={son0} vurgu="≈ 250°F" not="AFTER 2 HOURS" x={1570} y={470} genislik={420} renk={RENK.mercan} />
      <Liste t={t} isaret="nokta" x={1330} y={715} aralik={78} boyut={34} genislik={560}
        ogeler={[{ bas: tRoast, metin: "ROASTING", renk: RENK.altin, bitis: son0 }, { bas: tFry, metin: "FRYING", renk: RENK.altin, bitis: son0 },
          { bas: tMicro - 0.2, metin: "MICROWAVING", renk: RENK.altin, bitis: son0 }]} />
      {/* 2. cümle */}
      {al > 0 && (
        <div style={{ position: "absolute", left: 1860, top: 200, transform: `translateX(-100%) scale(${sc})`, transformOrigin: "100% 50%", opacity: al }}>
          <Hap metin="VIRGINIA · 1993" renk={RENK.lacivert} boyut={34} />
        </div>
      )}
      {al2 > 0 && (
        <div style={{ position: "absolute", left: 1860, top: 420, transform: `translateX(-100%) scale(${sc2})`, transformOrigin: "100% 50%", opacity: al2 }}>
          <Hap metin="TOXIN STAYS ACTIVE" renk={RENK.mercan} boyut={34} />
        </div>
      )}
      <Ikon t={t} bas={tTox + 0.15} ad="uyari" x={1560} y={600} zemin={RENK.mercan} />
    </>
  );
};

export default S27;
