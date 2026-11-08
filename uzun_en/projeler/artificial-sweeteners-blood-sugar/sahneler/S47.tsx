// Sahne 47 — 2024 takip çalışması: 30 g eritritol vs 30 g glikoz. İki bardak, sonuç hapları.
import React from "react";
import { Etiket, Hap, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

// Pop ile beliren hap (ekran koordinatı)
const PopHap: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string }> = ({ t, bas, x, y, metin, renk }) => {
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
      <Hap metin={metin} renk={renk} boyut={30} />
    </div>
  );
};

const S47: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  return (
    <>
      <Kamera gorsel="tam/47" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 40, 1800])}>
        <Etiket t={t} bas={K(0, "erythritol")} capa={[760, 690]} konum={[800, 90]} metin="30 G ERYTHRITOL" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "glucose")} capa={[1130, 610]} konum={[1420, 150]} metin="30 G GLUCOSE" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <VurguRozet t={t} bas={K(0, "20")} vurgu="≈ 20" not="HEALTHY ADULTS" x={290} y={170} genislik={380} boyut={90} renk={RENK.koyuYesil} />
      <PopHap t={t} bas={K(1, "reactive")} x={640} y={885} metin="ERYTHRITOL: MORE REACTIVE" renk={RENK.mercan} />
      <PopHap t={t} bas={K(1, "not")} x={1330} y={885} metin="GLUCOSE: NOT" renk={RENK.yesil} />
    </>
  );
};

export default S47;
