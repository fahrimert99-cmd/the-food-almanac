// Sahne 1 — kadeh + kalp; kitabın bozuk yazısı sağ panelle örtülü, rakamlar panelde.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S01: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const w = kameraYolu(t, s.sure, [0, 0, 1920], [40, 20, 1800]);
  return (
    <>
      <Kamera gorsel="tam/01" pencere={w} sinirla={false}>
        {/* kitap yazısını baştan sona örten kâğıt zemin (görsel koordinatında) */}
        <div style={{ position: "absolute", left: 540, top: -200, width: 1700, height: 1500,
          background: `linear-gradient(to right, ${kagit(0)} 0%, ${kagit(0.98)} 8%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={K(1, "Light drinkers")} capa={[560, 470]} konum={[330, 190]} metin="RED WINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "risk")} capa={[300, 800]} konum={[250, 640]} metin="HEART" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={0.2} />
      <VurguRozet t={t} bas={K(0, "107")} vurgu="107" not="STUDIES" x={1130} y={190} genislik={340} />
      <VurguRozet t={t} bas={K(0, "4.8")} vurgu="4.8M" not="PEOPLE" x={1560} y={190} genislik={340} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={K(1, "Light drinkers") - 0.1} metin="LIGHT DRINKERS" x={820} y={520} boyut={34} renk={RENK.altin} font="inter" aralik={5} />
      <Baslik t={t} bas={K(1, "no")} metin="NO SIGNIFICANT" x={816} y={610} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "drop")} metin="DROP IN THE" x={816} y={716} boyut={92} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "risk")} metin="RISK OF DYING" x={816} y={822} boyut={92} renk={RENK.koyuYesil} />
    </>
  );
};

export default S01;
