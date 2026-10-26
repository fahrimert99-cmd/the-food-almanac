// Sahne 19 — simvastatin 3.6× (Lilja 2004): sol üst başlık + zincir çipleri, sağ üstte rozet.
import React from "react";
import { BaslikBlok, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kagit, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// Hap biçimli küçük etiket (pop ile gelir). x,y = sol-orta (hiza sol) ya da orta.
const Chip: React.FC<{ t: number; bas: number; metin: string; x: number; y: number; renk: string; boyut?: number; orta?: boolean; bitis?: number }> = ({
  t, bas, metin, x, y, renk, boyut = 30, orta, bitis = 1e9,
}) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * sol(t, bitis);
  if (a <= 0) return null;
  return (
    <div style={{ position: "absolute", left: x, top: y, transform: `translate(${orta ? "-50%" : "0"}, -50%) scale(${sc})`, transformOrigin: orta ? "50% 50%" : "0% 50%",
      opacity: a, display: "flex", alignItems: "center", gap: 12, whiteSpace: "nowrap", background: RENK.kagitAcik, border: `3px solid ${renk}`,
      borderRadius: 999, padding: "9px 24px 9px 16px", fontFamily: INTER, fontWeight: 800, fontSize: boyut, letterSpacing: 1.5,
      color: RENK.lacivert, boxShadow: "0 8px 22px rgba(48,40,34,0.16)" }}>
      <span style={{ width: boyut * 0.65, height: boyut * 0.65, borderRadius: "50%", background: renk, flex: "none" }} />
      {metin}
    </div>
  );
};


const Yama: React.FC<{ x: number; y: number; w: number; h: number; renk?: string }> = ({ x, y, w, h, renk }) => (
  <div style={{ position: "absolute", left: x - w / 2, top: y - h / 2, width: w, height: h,
    background: `radial-gradient(ellipse 50% 50% at 50% 50%, ${renk ?? kagit(1)} 0%, ${renk ?? kagit(1)} 60%, ${kagit(0)} 100%)` }} />
);

const S19: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const b = s.meta.baslik!;
  return (
    <>
      <Kamera gorsel="tam/19" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [120, 130, 1700])}>
        {/* sahte yazı ("Grapefruit 5") ve greyfurt ortasındaki "2B" örtülür */}
        <Yama x={970} y={1040} w={380} h={140} />
        <Yama x={976} y={813} w={62} h={50} renk="#F4E6C9" />
        {/* silindirdeki anlamsız ölçek çizikleri soluk amber yamayla örtülür */}
        <Yama x={1635} y={780} w={130} h={200} renk="#FAEBA0" />
        <Etiket t={t} bas={K(0, "glass")} capa={[640, 800]} konum={[330, 720]} metin="DAILY GLASS" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "simvastatin")} capa={[1575, 600]} konum={[1230, 330]} metin="SIMVASTATIN LEVEL" renk={RENK.mercan} bitis={K(0, "3.6") - 0.2} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(0, "2004")} />
      <BaslikBlok t={t} bas={K(0, "randomized")} satirlar={b.satirlar} x={100} y={210} boyut={104} renkler={[RENK.koyuYesil]} />
      <Chip t={t} bas={K(0, "10")} metin="10 HEALTHY ADULTS" x={100} y={340} renk={RENK.yesil} />
      <Chip t={t} bas={K(0, "three")} metin="3 DAYS" x={100} y={410} renk={RENK.lacivert} />
      <Chip t={t} bas={K(0, "7")} metin="ABOUT 7 OUNCES" x={100} y={480} renk={RENK.altin} />
      <VurguRozet t={t} bas={K(0, "3.6")} vurgu={b.vurgu!} not="higher levels with daily juice" x={1580} y={150} genislik={440} />
    </>
  );
};

export default S19;
