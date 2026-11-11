// Sahne 30 — Semba çalışması: Toskana, 783 yetişkin.
import React from "react";
import { Etiket, Hap, KaynakEtiketi, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S30: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tKapat = K(1, "in tuscany") - 0.05;
  const [sc, al] = pop(t, K(1, "measuring"), 0.5);
  return (
    <>
      {/* şişe etiketi (sahte yazı) kadraj dışında kalır: x <= 1500 */}
      <Kamera gorsel="tam/30" pencere={kameraYolu(t, s.sure, [20, 190, 1480], [90, 230, 1400])}>
        <Etiket t={t} bas={K(0, "eat")} bitis={7.8} capa={[867, 860]} konum={[760, 560]} metin="BREAD" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "drink")} bitis={7.8} capa={[1416, 790]} konum={[1220, 560]} metin="RED WINE" renk={RENK.mercan} />
        <Etiket t={t} bas={K(1, "tuscany")} bitis={13.4} capa={[760, 600]} konum={[760, 360]} metin="TUSCANY, ITALY" renk={RENK.koyuYesil} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} />
      <VurguRozet t={t} bas={K(1, "783")} bitis={tKapat + 0.1} vurgu="783" not="ADULTS AGED 65+" x={1000} y={130} genislik={400} />
      <VurguRozet t={t} bas={K(1, "nine")} vurgu="9 YEARS" not="OF FOLLOW-UP" x={1000} y={130} genislik={420} renk={RENK.koyuYesil} />
      <div style={{ position: "absolute", left: 1000, top: 380, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="RESVERATROL IN URINE" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S30;
