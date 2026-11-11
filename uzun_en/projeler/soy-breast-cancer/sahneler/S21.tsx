// Sahne 21 — üç çalışma birleştirildi (2 ABD + 1 Çin), 9.514 hayatta kalan; ≥10 mg izoflavon → nüks −%25.
import React from "react";
import { BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const PopHap: React.FC<{ t: number; bas: number; y: number; metin: string; renk: string }> = ({ t, bas, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: 1100, top: y, transform: `scale(${sc})`, transformOrigin: "0% 50%", opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={34} />
    </div>
  );
};

const S21: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSon = K(1, "Those") - 0.2; // ilk cümle içeriği burada çekilir
  const tBas = K(0, "9,514");
  const tHigh = K(1, "10 milligrams"), tLow = K(1, "under four"), tPct = K(1, "25 percent");
  return (
    <>
      <Kamera gorsel="tam/21" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1760])}>
        <Etiket t={t} bas={K(0, "two")} bitis={tSon} capa={[500, 310]} konum={[290, 200]} metin="U.S. · 2 STUDIES" renk={RENK.yesil} />
        <Etiket t={t} bas={K(0, "one in China")} bitis={tSon} capa={[800, 350]} konum={[1180, 330]} metin="CHINA · 1 STUDY" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.3} />
      <BaslikBlok t={t} bas={tBas} bitis={tSon} satirlar={s.meta.baslik?.satirlar ?? []} x={1860} y={560} boyut={96} hiza="sag" />
      <Not t={t} bas={K(0, "seven years") - 0.1} bitis={tSon} metin="FOLLOWED ABOUT 7 YEARS" x={1860} y={790} hiza="sag" boyut={34} agirlik={800} />
      <PopHap t={t} bas={tHigh - 0.1} y={380} metin="AT LEAST 10 MG A DAY" renk={RENK.yesil} />
      <PopHap t={t} bas={tLow - 0.1} y={470} metin="UNDER 4 MG A DAY" renk={RENK.mercan} />
      <VurguRozet t={t} bas={tPct} vurgu="–25%" not="recurrence, 10 mg or more vs under 4" x={1480} y={580} genislik={560} />
    </>
  );
};

export default S21;
