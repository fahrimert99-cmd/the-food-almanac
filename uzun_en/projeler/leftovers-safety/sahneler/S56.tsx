// Bonus: buzdolabı termometresi; FDA 40°F, laboratuvar çalışması 46°F'de Listeria daha hızlı katlanır.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S56: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tTh = K(1, "thermometer"), t40 = K(2, "40"), t46 = K(2, "46");
  const pPanel = eout(ilerle(t, t40 - 0.4, 0.8));
  return (
    <>
      <Kamera gorsel="tam/56" pencere={kameraYolu(t, s.sure, [-120, 40, 2200], [-80, 50, 2100])} sinirla={false}>
        <Etiket t={t} bas={tTh} bitis={K(2, "The") + 3} capa={[693, 485]} konum={[900, 110]} metin="THERMOMETER" renk={RENK.altin} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} />
      <Baslik t={t} bas={0.0} metin="BONUS" x={36} y={780} boyut={60} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={0.15} metin="CHECK" x={36} y={845} boyut={60} renk={RENK.koyuYesil} />
      <Panel a={pPanel} taraf="sag" genislik={640} />
      <VurguRozet t={t} bas={t40} vurgu="≤ 40°F" not="FDA: keep it at or below" x={1580} y={230} genislik={420} boyut={100} renk={RENK.yesil} />
      <VurguRozet t={t} bas={t46} vurgu="46°F" not="Listeria doubled much faster (lab study)" x={1580} y={580} genislik={420} boyut={100} renk={RENK.mercan} />
    </>
  );
};

export default S56;
