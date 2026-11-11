// Sahne 24 — sonuç: sakarin ve sukraloz grupları biraz yüksek, aspartam ve stevia değil. Görsel solda, sağda başlık.
import React from "react";
import { BaslikBlok, Etiket, Ikon, Kamera, KaynakEtiketi, Not, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const S24: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSac = K(0, "saccharin"), tPk = K(0, "result:"), tAsp = K(1, "aspartame");
  const aPanel = eout(ilerle(t, 0.2, 0.7));
  return (
    <>
      <Kamera gorsel="tam/24" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [50, 70, 1780])}>
        <Etiket t={t} bas={tPk} bitis={8.5} capa={[860, 700]} konum={[1000, 470]} metin="SWEETENER" renk={RENK.altin} />
      </Kamera>
      <Panel a={aPanel} taraf="sag" genislik={760} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? ""} bas={0.2} />
      <BaslikBlok t={t} bas={tSac} satirlar={s.meta.baslik?.satirlar ?? []} x={1290} y={250} boyut={92} bitis={8.5}
        renkler={[RENK.mercan, RENK.mercan]} />
      <Not t={t} bas={K(0, "responses")} metin={s.meta.baslik?.not ?? ""} x={1294} y={460} boyut={36} genislik={560} bitis={8.5} />
      <div style={{ position: "absolute", left: 0, top: 0, width: 1920, height: 1080, transformOrigin: "1400px 650px", transform: "rotate(-90deg)" }}>
        <Ikon t={t} bas={K(0, "slightly")} ad="ok" x={1400} y={650} zemin={RENK.mercan} boyut={84} bitis={8.5} />
      </div>
      <BaslikBlok t={t} bas={tAsp} satirlar={["ASPARTAME", "STEVIA"]} x={1290} y={250} boyut={92}
        renkler={[RENK.yesil, RENK.yesil]} />
      <Not t={t} bas={K(1, "did not")} metin="did not show that" x={1294} y={460} boyut={36} genislik={560} />
      <Ikon t={t} bas={K(1, "did not")} ad="onay" x={1400} y={650} zemin={RENK.yesil} boyut={84} />
    </>
  );
};

export default S24;
