// Sahne 27 — deneyin tasarımı: atlanan kahvaltı + büyük sabit öğle yemeği; öğle yemeğinin içeriği de önemli.
import React from "react";
import { AltSis, Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, kagit, kameraYolu,
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

const S27: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t1 = s.cumleler[1].bas - 0.1;
  return (
    <>
      <Kamera gorsel="tam/27" pencere={kameraYolu(t, s.sure, [0, 60, 1900], [80, 110, 1730])}>
        {/* saatteki anlamsız "17" rakamı açık yüzle örtülür */}
        <div style={{ position: "absolute", left: 1309, top: 473, width: 48, height: 48, borderRadius: "50%", background: "#F2EFE8" }} />
        <Etiket t={t} bas={K(0, "big,")} bitis={t1} capa={[900, 650]} konum={[760, 360]} metin="BIG, FIXED LUNCH" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "not only")} capa={[420, 520]} konum={[860, 395]} metin="NOT ONLY BREAKFAST" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={K(0, "skipped")} bitis={K(1, "What")} metin="SKIPPED BREAKFAST" x={90} y={150} boyut={96} renk={RENK.lacivert} />
      <BaslikBlok t={t} bas={K(1, "What")} satirlar={["WHAT YOU EAT", "AT LUNCH"]} x={90} y={150} boyut={96}
        renkler={[RENK.lacivert, RENK.koyuYesil]} />
      <Pil t={t} bas={K(1, "matters")} metin="MATTERS TOO" x={1080} y={150} renk={RENK.yesil} />
    </>
  );
};
export default S27;
