// Sahne 9 — Bath Breakfast Project: tasarım, katılımcılar, kahvaltı / açlık, altı hafta.
import React from "react";
import { Baslik, Etiket, INTER, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S09: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tProje = K(0, "Breakfast"), tBitis = K(0, "researchers") - 0.1;
  const t33 = K(0, "33"), t23 = K(0, "23"), tYas = K(0, "aged");
  const tEat = K(0, "eat"), tFast = K(0, "fast until"), tSix = K(0, "six");
  const tGrupSon = tSix - 0.15;
  const z = ilerle(t, 0, s.sure);
  return (
    <>
      <Kamera gorsel="tam/09" pencere={[0, 80 + 20 * z, 1920 - 80 * z]}>
        <Etiket t={t} bas={tEat} capa={[427, 787]} konum={[560, 600]} metin="BREAKFAST" renk={RENK.yesil} />
        <Etiket t={t} bas={tFast} capa={[1340, 713]} konum={[1340, 570]} metin="FAST UNTIL NOON" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={tProje - 0.1} bitis={tBitis} metin="BATH BREAKFAST" x={140} y={250} boyut={130} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tProje + 0.5} bitis={tBitis} metin="PROJECT · ENGLAND" x={146} y={375} boyut={64} renk={RENK.lacivert} />
      <VurguRozet t={t} bas={t33} vurgu="33" not="LEAN ADULTS" x={430} y={150} renk={RENK.yesil} genislik={360} bitis={tGrupSon} />
      <VurguRozet t={t} bas={t23} vurgu="23" not="WITH OBESITY" x={830} y={150} renk={RENK.altin} genislik={360} bitis={tGrupSon} />
      <VurguRozet t={t} bas={tYas} vurgu="21–60" not="YEARS OLD" x={1240} y={150} renk={RENK.lacivert} genislik={360} bitis={tGrupSon} />
      <Baslik t={t} bas={tSix} metin="SIX WEEKS" x={960} y={200} boyut={150} renk={RENK.koyuYesil} hiza="orta" />
      <Baslik t={t} bas={tSix + 0.3} metin={s.meta.baslik?.not ?? ""} x={960} y={330} boyut={38} renk={RENK.lacivert} hiza="orta" font="inter" agirlik={700} />
    </>
  );
};

export default S09;
