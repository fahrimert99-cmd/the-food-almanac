import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, einout, eout, ilerle, kagit,
  kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

// A1C: şişe rafı + takvim kartı (takvimdeki bozuk yazı kâğıt yamayla örtülür)
const S15: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pencere = kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1800]);
  const pYama = eout(ilerle(t, 0.0, 0.6));
  return (
    <>
      <Kamera gorsel="tam/15" pencere={pencere}>
        {/* takvim kartındaki sahte yazıyı örten yama */}
        <div style={{ position: "absolute", left: 830, top: 120, width: 340, height: 400, opacity: pYama, background: kagit(1),
          boxShadow: `0 0 40px 30px ${kagit(1)}` }} />
        <Etiket t={t} bas={K(0, "blood sugar")} bitis={K(1, "habits")} capa={[420, 500]} konum={[330, 130]} metin="BLOOD TESTS" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "habits")} bitis={K(2, "A")} capa={[960, 640]} konum={[1330, 760]} metin="EATING HABITS" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={K(0, "A1C")} bitis={K(1, "Doctors") - 0.2} metin="A1C" x={1000} y={330} boyut={170} renk={RENK.lacivert} hiza="orta" />
      <Not t={t} bas={K(0, "three months")} bitis={K(1, "Doctors") - 0.2} x={1000} y={470} hiza="orta" genislik={560} boyut={32}
        metin="your average blood sugar over about three months" />
      <Panel a={eout(ilerle(t, K(2, "A") - 0.3, 0.7))} />
      <VurguRozet t={t} bas={K(2, "two tenths")} vurgu="–0.2" not="A1C points: small but clear" x={1560} y={300} renk={RENK.koyuYesil} />
      <Not t={t} bas={K(2, "statistically")} x={1560} y={560} hiza="orta" genislik={560} boyut={32} metin="and statistically solid" />
    </>
  );
};
export default S15;
