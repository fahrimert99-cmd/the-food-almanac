// Sahne 37 — "gluten-free" etiketi neyin eksik olduğunu söyler; sağlık halesi.
import React from "react";
import { Baslik, BaslikBlok, Etiket, Kamera, RENK, SP, eout, ilerle, kagit, kameraYolu, kelimeZamani } from "../kutuphane";

const S37: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const kam = kameraYolu(t, s.sure, [0, 0, 1920], [30, 10, 1800]);
  const b1 = K(2, "Yet") - 0.2;
  const tHale = K(2, "halo");
  const p = eout(ilerle(t, tHale, 0.7));
  return (
    <>
      <Kamera gorsel="tam/37" pencere={kam}>
        {/* alt raftaki sahte yazılı kutular kâğıt rengine geçirilir */}
        <div style={{ position: "absolute", left: 0, top: 640, width: 1200, height: 440,
          background: `linear-gradient(to bottom, ${kagit(0)} 0%, ${kagit(1)} 22%, ${kagit(1)} 100%)` }} />
        <Etiket t={t} bas={K(0, "gluten-free")} bitis={K(0, "what's") - 0.1} capa={[725, 500]} konum={[1380, 560]} metin="GLUTEN-FREE" renk={RENK.altin} />
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0, overflow: "visible" }}>
          <ellipse cx={725} cy={365} rx={95 * p} ry={22 * p} fill="none" stroke={RENK.altinAcik} strokeWidth={10} opacity={p} />
          <ellipse cx={725} cy={365} rx={95 * p} ry={22 * p} fill="none" stroke={RENK.altin} strokeWidth={3} opacity={p} />
        </svg>
      </Kamera>
      <Baslik t={t} bas={K(0, "what's")} bitis={K(1, "It") - 0.1} metin="WHAT'S MISSING" x={1180} y={260} boyut={84} renk={RENK.lacivert} />
      <Baslik t={t} bas={K(1, "nutritious")} bitis={b1} metin="NUTRITIOUS?" x={1180} y={380} boyut={96} renk={RENK.mercan} />
      <BaslikBlok t={t} bas={K(2, "health")} satirlar={["A HEALTH", "HALO?"]} x={1180} y={280} boyut={110} />
    </>
  );
};

export default S37;
