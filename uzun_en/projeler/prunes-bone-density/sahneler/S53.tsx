// Sahne 53 — İpucu 2: ekstra değil, takas.
import React from "react";
import { AdimAkisi, BaslikBlok, Etiket, Ikon, Kamera, Not, RENK, SP, VurguRozet, kameraYolu, kelimeZamani } from "../kutuphane";

const S53: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSwap = K(1, "swap");
  return (
    <>
      <Kamera gorsel="tam/53" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [40, 22, 1840])}>
        <Etiket t={t} bas={K(0, "food") - 0.1} capa={[380, 480]} konum={[400, 210]} metin="FOOD, NOT EXTRA" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "count")} satirlar={["TIP 2", "SWAP, DON'T ADD"]} x={1860} y={250} boyut={96} hiza="sag" />
      <VurguRozet t={t} bas={K(1, "120")} vurgu="≈120" not="calories in 50 grams" x={1520} y={470} genislik={420} />
      <AdimAkisi t={t} x={1500} y={790} boyut={30} numarali={false} adimlar={[
        { bas: tSwap, metin: "ANOTHER SNACK", renk: RENK.altin },
        { bas: tSwap + 0.35, metin: "PRUNES", renk: RENK.yesil },
      ]} />
      <Ikon t={t} bas={K(1, "adding")} ad="carpi" x={1300} y={890} boyut={64} zemin={RENK.mercan} />
      <Not t={t} bas={K(1, "adding") + 0.1} metin="ADDING ON TOP" x={1350} y={866} boyut={38} agirlik={800} renk={RENK.mercan} />
    </>
  );
};

export default S53;
