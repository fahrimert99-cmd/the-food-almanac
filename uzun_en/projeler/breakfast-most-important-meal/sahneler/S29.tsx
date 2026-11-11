// Sahne 29 — PROT-AGE: yaşlılarda günde en az 1–1,2 g/kg protein.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kagit, kameraYolu,
  kelimeZamani, pop, sol } from "../kutuphane";

// Açılan hap: x,y = merkez
const Pil: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; bitis?: number; boyut?: number }> = ({
  t, bas, metin, x, y, renk, bitis = 1e9, boyut = 30,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: a }}>
      <Hap metin={metin} renk={renk} boyut={boyut} />
    </div>
  );
};
const S29: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/29" pencere={kameraYolu(t, s.sure, [0, 120, 1700], [130, 160, 1560])}>
        <Etiket t={t} bas={K(0, "protein")} bitis={K(1, "recommended")} capa={[880, 740]} konum={[900, 560]} metin="PROTEIN" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(1, "body")} capa={[500, 335]} konum={[900, 330]} metin="BODY WEIGHT" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "PROT-AGE")} />
      <Baslik t={t} bas={K(1, "at least")} metin="AT LEAST" x={1330} y={90} boyut={44} renk={RENK.altin} hiza="orta" font="inter" agirlik={800} aralik={6} />
      <BaslikBlok t={t} bas={K(1, "1 to")} satirlar={["1 TO 1.2", "G PER KG"]} x={1330} y={190} boyut={112} hiza="orta"
        renkler={[RENK.koyuYesil, RENK.lacivert]} />
      <Pil t={t} bas={K(1, "day")} metin="PER DAY" x={1330} y={440} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(1, "over")} vurgu="OVER 65" x={1330} y={500} genislik={380} boyut={72} />
    </>
  );
};
export default S29;
