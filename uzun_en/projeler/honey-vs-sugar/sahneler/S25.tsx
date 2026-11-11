// Sahne 25 — fruktoz 15 vs glukoz 103 (glisemik tablo), bal fruktozca zengin
import React from "react";
import { Etiket, Hap, Kamera, KaynakEtiketi, RENK, SP, VurguRozet, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S25: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s), c = s.cumleler;
  const tFr = K(1, "fructose"), tGl = K(1, "glucose");
  const [sc, al] = pop(t, K(2, "more"), 0.5);
  return (
    <>
      <Kamera gorsel="tam/25" pencere={kameraYolu(t, s.sure, [100, 120, 1800], [200, 200, 1620])} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={K(1, "glycemic")} />
      <Etiket t={t} bas={K(0, "honey")} bitis={c[1].bas + 0.3} capa={[1340, 600]} konum={[1100, 470]} metin="HONEY" renk={RENK.altin} />
      <VurguRozet t={t} bas={tFr} vurgu="15" not="FRUCTOSE" x={330} y={170} genislik={300} renk={RENK.yesil} />
      <VurguRozet t={t} bas={tGl} vurgu="103" not="GLUCOSE" x={700} y={170} genislik={300} renk={RENK.mercan} />
      <div style={{ position: "absolute", left: 520, top: 470, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
        <Hap metin="MORE FRUCTOSE THAN GLUCOSE" renk={RENK.altin} boyut={30} />
      </div>
    </>
  );
};

export default S25;
