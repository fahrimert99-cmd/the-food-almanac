// Sahne 58 — çöp kovası: tarih etiketi karışıklığı ve israf (başlık solda, rozetler sağda).
import React from "react";
import { Baslik, Hap, Kamera, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S58: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const t43 = K(1, "43 percent");
  const tTarih = K(1, "near its date");
  const t3 = K(1, "three billion");
  const [sc, al] = pop(t, tTarih, 0.5);
  const pSol = eout(ilerle(t, 0.1, 0.6));
  return (
    <>
      <Kamera gorsel="tam/58" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 28, 1820])}>
        {/* kutudaki bozuk yazıyı "tarih" hapı örter */}
        <div style={{ position: "absolute", left: 860, top: 432, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
          <Hap metin="NEAR ITS DATE" renk={RENK.altin} boyut={26} />
        </div>
      </Kamera>
      <Panel a={pSol} taraf="sol" genislik={560} opak={0.9} />
      <Baslik t={t} bas={0.0} metin="CONFUSION" x={70} y={300} boyut={96} renk={RENK.lacivert} />
      <Baslik t={t} bas={0.74} metin="IS COSTLY" x={70} y={410} boyut={96} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t43} vurgu="43%" not="THREW FOOD OUT NEAR ITS DATE" x={1590} y={150} genislik={440} renk={RENK.mercan} />
      <VurguRozet t={t} bas={t3} vurgu="≈ 3 BILLION LBS" not="WASTED A YEAR · REFED ESTIMATE" x={1590} y={600} genislik={440} boyut={64} />
    </>
  );
};

export default S58;
