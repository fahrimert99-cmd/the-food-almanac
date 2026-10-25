// Sahne 42 — uyarı belirtileri (sol panelde liste) + durup sağlık çalışanına başvurma; kaynak NCCIH.
import React from "react";
import { Baslik, Etiket, Kamera, KaynakEtiketi, Liste, Panel, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani } from "../kutuphane";

const BELIRTILER = [
  { ifade: "tiredness", metin: "UNUSUAL TIREDNESS" },
  { ifade: "nausea", metin: "NAUSEA" },
  { ifade: "poor appetite", metin: "POOR APPETITE" },
  { ifade: "dark urine", metin: "DARK URINE" },
  { ifade: "yellow skin", metin: "YELLOW SKIN OR EYES" },
];

const S42: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const pPanel = eout(ilerle(t, 0.05, 0.6));
  const tStop = K(0, "stop");
  const tCont = K(0, "contact");
  return (
    <>
      <Kamera gorsel="tam/42" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [30, 20, 1860])}>
        {/* şişe etiketindeki anlamsız yazıyı boş etiket gibi örter */}
        <div style={{ position: "absolute", left: 1014, top: 622, width: 120, height: 134, borderRadius: 6, background: "#F2EDE0",
          boxShadow: "inset 0 0 0 3px #E2DACA" }} />
        <Etiket t={t} bas={tCont} capa={[1330, 690]} konum={[1400, 500]} metin="CONTACT A PROVIDER" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sol" genislik={1000} />
      <Baslik t={t} bas={0.1} metin="IF YOU NOTICE" x={90} y={190} boyut={60} renk={RENK.altin} font="inter" aralik={6} />
      <Liste t={t} x={90} y={270} aralik={92} boyut={40} isaret="nokta" genislik={800}
        ogeler={BELIRTILER.map((b) => ({ bas: K(0, b.ifade), metin: b.metin, renk: RENK.altin }))} />
      <VurguRozet t={t} bas={tStop} vurgu="STOP" not="taking turmeric" x={1350} y={150} genislik={380} boyut={110} renk={RENK.mercan} />
      <KaynakEtiketi t={t} metin={s.meta.etiket ?? "NCCIH · NIH · Turmeric"} bas={K(1, "same federal")} y={48} />
    </>
  );
};

export default S42;
