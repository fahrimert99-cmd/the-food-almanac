// Sahne 18 — sonraki incelemeler: kalori kısa süre düşer, kilo geri döner. Başlık solda, nesneler sağda.
import React from "react";
import { BaslikBlok, Etiket, Kamera, KaynakEtiketi, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S18: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const [l1, l2] = s.meta.baslik!.satirlar;
  const tNorm = K(1, "once normal");
  return (
    <>
      <Kamera gorsel="tam/18" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 40, 1800])}>
        <Etiket t={t} bas={K(1, "juicing")} capa={[1330, 470]} konum={[930, 480]} metin="JUICING" renk={RENK.yesil} />
        <Etiket t={t} bas={K(1, "weight tends")} capa={[1500, 790]} konum={[900, 800]} metin="WEIGHT" renk={RENK.mercan} />
      </Kamera>
      <KaynakEtiketi t={t} metin={s.meta.etiket!} bas={K(1, "Obert")} />
      <BaslikBlok t={t} bas={K(1, "cut calories")} satirlar={[l1]} x={90} y={250} boyut={104} renkler={[RENK.lacivert]} />
      <BaslikBlok t={t} bas={K(1, "weight tends")} satirlar={[l2]} x={90} y={365} boyut={104} renkler={[RENK.mercan]} />
      <Not t={t} bas={K(1, "short time")} bitis={tNorm - 0.1} metin="SHARP CUT, SHORT TIME" x={96} y={450} boyut={30} agirlik={800} />
      <Not t={t} bas={tNorm} metin="NORMAL EATING RESUMES" x={96} y={450} boyut={30} agirlik={800} />
    </>
  );
};

export default S18;
