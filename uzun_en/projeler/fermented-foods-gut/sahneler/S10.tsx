// Sahne 10 — diğer fermente yiyecekler; bazıları sonradan ısıtılır ve mikroplar ölür.
import React from "react";
import { Etiket, Hap, Kamera, Panel, RENK, SP, eout, ilerle, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const ADIM = [
  { ifade: "bread", metin: "BREAD", renk: RENK.altin },
  { ifade: "heated afterward", metin: "HEATED AFTERWARD", renk: RENK.mercan },
  { ifade: "kills the microbes", metin: "MICROBES KILLED", renk: RENK.koyuYesil },
];

const S10: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tPanel = K(1, "bread") - 0.35;
  const pPanel = eout(ilerle(t, tPanel, 0.6));
  const son = tPanel + 0.1;
  return (
    <>
      <Kamera gorsel="tam/10" pencere={kameraYolu(t, s.sure, [0, 40, 1920], [60, 70, 1780])}>
        {/* şişedeki bozuk etiket yazısı boş etiketle örtülür */}
        <div style={{ position: "absolute", left: 1166, top: 412, width: 168, height: 126, background: "#EDE6D6",
          border: `3px solid ${RENK.murekkep}`, borderRadius: 6, opacity: 0.98 }} />
        <Etiket t={t} bas={K(0, "kimchi,")} bitis={son} capa={[540, 470]} konum={[330, 150]} metin="KIMCHI" renk={RENK.mercan} />
        <Etiket t={t} bas={K(0, "sauerkraut,")} bitis={son} capa={[813, 400]} konum={[860, 100]} metin="SAUERKRAUT" renk={RENK.altin} />
        <Etiket t={t} bas={K(0, "kombucha")} bitis={son} capa={[1227, 310]} konum={[1510, 220]} metin="KOMBUCHA" renk={RENK.koyuYesil} />
        <Etiket t={t} bas={K(0, "miso.")} bitis={son} capa={[720, 650]} konum={[560, 850]} metin="MISO" renk={RENK.yesil} />
      </Kamera>
      <Panel a={pPanel} taraf="sag" genislik={1100} opak={1} />
      {ADIM.map((a, i) => {
        const [sc, al] = pop(t, K(1, a.ifade), 0.5);
        const y = 330 + i * 150;
        return (
          <React.Fragment key={a.metin}>
            {i > 0 && (
              <div style={{ position: "absolute", left: 1560, top: y - 88, transform: "translateX(-50%)", opacity: al,
                fontFamily: "Anton, sans-serif", fontSize: 54, color: RENK.altin, lineHeight: 1 }}>↓</div>
            )}
            <div style={{ position: "absolute", left: 1560, top: y, transform: `translate(-50%, -50%) scale(${sc})`, opacity: al }}>
              <Hap metin={a.metin} renk={a.renk} boyut={38} />
            </div>
          </React.Fragment>
        );
      })}
    </>
  );
};

export default S10;
