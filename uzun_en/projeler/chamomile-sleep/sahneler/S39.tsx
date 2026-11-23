// S39 — mütevazı beklenti: küçük bir kayma
import React from "react";
import { BaslikBlok, Etiket, Hap, Ikon, Kamera, RENK, SP, VurguRozet, eout, ilerle, kameraYolu, kelimeZamani, pop, sol } from "../kutuphane";

const S39: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const c0 = K(1, "lying awake"), c1 = K(1, "sleeping like"), son1 = K(2, "A small") - 0.1;
  const [s0, a0] = pop(t, c0, 0.5), [s1, a1] = pop(t, c1, 0.5);
  const f = sol(t, son1);
  return (
    <>
      <Kamera gorsel="tam/39" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [60, 40, 1800])}>
        <Etiket t={t} bas={K(2, "evidence")} capa={[1000, 880]} konum={[1500, 900]} metin="BEST EVIDENCE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={K(0, "expectations")} bitis={K(1, "Not")} satirlar={["MODEST", "EXPECTATIONS"]} x={90} y={170} boyut={92} />
      <div style={{ opacity: f }}>
        <div style={{ position: "absolute", left: 1560, top: 400, transform: `translate(-50%,-50%) scale(${s0})`, opacity: a0 }}>
          <Hap metin="LYING AWAKE FOR HOURS" renk={RENK.mercan} boyut={26} />
        </div>
        <div style={{ position: "absolute", left: 1560, top: 600, transform: `translate(-50%,-50%) scale(${s1})`, opacity: a1 }}>
          <Hap metin="SLEEPING LIKE A LOG" renk={RENK.mercan} boyut={26} />
        </div>
        <Ikon t={t} bas={c1 + 0.2} ad="carpi" x={1560} y={500} zemin={RENK.mercan} boyut={80} />
      </div>
      <VurguRozet t={t} bas={K(2, "shift")} vurgu="SMALL SHIFT" not="in how rested you feel" x={1560} y={330} boyut={80} genislik={470} renk={RENK.yesil} />
    </>
  );
};
export default S39;
