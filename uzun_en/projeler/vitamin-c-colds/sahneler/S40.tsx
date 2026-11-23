import React from "react";
import { AbsoluteFill, Baslik, BaslikBlok, Etiket, Hap, Ikon, INTER, Kamera, KaynakEtiketi, Not, RENK, SP, VurguRozet, ANTON,
  eout, ilerle, kagit, kameraYolu, kelimeZamani, pop, sayac } from "../kutuphane";

// Yerinde beliren hap (ekran koordinatı, merkez)
const Pop: React.FC<{ t: number; bas: number; x: number; y: number; metin: string; renk: string; boyut?: number; bitis?: number }> = ({ t, bas, x, y, metin, renk, boyut = 28, bitis = 1e9 }) => {
  if (t > bitis) return null;
  const [sc, al] = pop(t, bas, 0.5);
  if (al <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}><Hap metin={metin} renk={renk} boyut={boyut} /></div>;
};

const S40: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 30, 1840]);
  const t436 = K(0, "436"), tTw = K(1, "twice");
  const n = sayac(t, t436, 436, 1.0);
  const [sc, al] = pop(t, t436, 0.5);
  const sol436 = t < K(1, "Men") - 0.1;
  return (
    <>
      <Kamera gorsel="tam/40" pencere={w}>
        <Etiket t={t} bas={K(0, "kidney")} bitis={K(1, "Men") - 0.1} capa={[187, 827]} konum={[330, 925]} metin="KIDNEY STONE" renk={RENK.mercan} boyut={26} />
      </Kamera>
      {sol436 && al > 0 && (
        <div style={{ position: "absolute", left: 1040, top: 150, opacity: al, transform: `scale(${sc})`, transformOrigin: "0 50%" }}>
          <div style={{ fontFamily: ANTON, fontSize: 190, lineHeight: 1, color: RENK.mercan }}>{n}</div>
          <div style={{ fontFamily: INTER, fontWeight: 800, fontSize: 40, color: RENK.lacivert, background: RENK.kagitAcik, padding: "4px 14px", borderRadius: 12, display: "inline-block" }}>MEN DEVELOPED KIDNEY STONES</div>
        </div>
      )}
      <BaslikBlok t={t} bas={K(1, "Men")} satirlar={["SUPPLEMENT USERS"]} x={1040} y={190} boyut={92} renkler={[RENK.lacivert]} />
      <VurguRozet t={t} bas={tTw} vurgu="×2" not={s.meta.baslik?.not} x={1450} y={330} genislik={460} boyut={170} renk={RENK.mercan} />
      <Pop t={t} bas={K(1, "risk")} x={1450} y={700} metin="MORE OFTEN, MORE RISK" renk={RENK.mercan} />
      <Ikon t={t} bas={K(1, "rose")} ad="ok" x={1450} y={790} zemin={RENK.mercan} boyut={80} />
    </>
  );
};
export default S40;
