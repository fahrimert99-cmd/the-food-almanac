// Sahne 39 — demlenmiş çay: EFSA genel olarak güvenli; nadir bireysel reaksiyonlar
import React from "react";
import { Baslik, BaslikBlok, Etiket, Hap, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const AnimHap: React.FC<{ t: number; bas: number; bitis?: number; metin: string; renk: string; x: number; y: number }> = ({ t, bas, bitis = 1e9, metin, renk, x, y }) => {
  const [sc, al] = pop(t, bas, 0.5);
  const a = al * (t < bitis ? 1 : 0);
  if (a <= 0) return null;
  return <div style={{ position: "absolute", left: x, top: y, transform: `translate(-50%,-50%) scale(${sc})`, opacity: a }}><Hap metin={metin} renk={renk} boyut={28} /></div>;
};

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tBrew = K(0, "Brewed"), tSafe = K(1, "generally safe"), tFive = K(1, "five"), tLim = K(1, "limited"), tRare = K(2, "Rare"), tInd = K(2, "individual");
  const tAway = K(2, "Rare") - 0.15;
  return (
    <>
      <Kamera gorsel={s.meta.gorsel!} pencere={kameraYolu(t, s.sure, [0, 0, 1920], [80, 60, 1740])}>
        <Etiket t={t} bas={tBrew} bitis={tFive} capa={[740, 520]} konum={[1100, 170]} metin="BREWED GREEN TEA" renk={RENK.yesil} />
      </Kamera>
      <Panel a={eout(ilerle(t, tBrew, 0.6))} taraf="sag" genislik={800} />
      <BaslikBlok t={t} bas={tBrew + 0.1} satirlar={["THE BREWED CUP"]} x={1860} y={230} boyut={92} hiza="sag" />
      <Not t={t} bas={tSafe} metin="considered generally safe" x={1860} y={290} hiza="sag" boyut={36} />
      <VurguRozet t={t} bas={tFive} bitis={tAway} vurgu="5+" not="CUPS A DAY: NO RAISED ENZYMES" x={1610} y={400} genislik={460} renk={RENK.yesil} />
      <AnimHap t={t} bas={tLim} bitis={tAway} metin="EVIDENCE LIMITED" renk={RENK.altin} x={1610} y={720} />
      <Baslik t={t} bas={tRare} metin="RARE REACTIONS" x={1860} y={480} boyut={76} renk={RENK.mercan} hiza="sag" />
      <Not t={t} bas={tInd} metin="individual and unpredictable" x={1860} y={540} hiza="sag" boyut={36} />
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
    </>
  );
};

export default S39;
