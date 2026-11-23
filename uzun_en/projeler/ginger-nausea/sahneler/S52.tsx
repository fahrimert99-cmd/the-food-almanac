// Sahne 52 — doğal ≠ risksiz, ≠ işe yaramaz; sağlık ekibiyle konuşulacak mütevazı seçenek.
import React from "react";
import { Baslik, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S52: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tRisk = K(0, "risk-free"), tUse = K(0, "useless"), tMod = K(1, "modest"), tTeam = K(1, "care team"), tCure = K(1, "not a");
  return (
    <>
      <Kamera gorsel="tam/52" pencere={kameraYolu(t, s.sure, [100, 60, 1700], [200, 100, 1550])}>
        <Etiket t={t} bas={tTeam} capa={[1560, 700]} konum={[1330, 880]} metin="ASK YOUR CARE TEAM" renk={RENK.altin} />
      </Kamera>
      <Baslik t={t} bas={tRisk} bitis={4.0} metin="NOT RISK-FREE" x={70} y={150} boyut={100} renk={RENK.mercan} />
      <Baslik t={t} bas={tUse} bitis={4.0} metin="NOT USELESS" x={70} y={265} boyut={100} renk={RENK.koyuYesil} />
      <Baslik t={t} bas={tMod} metin="A MODEST OPTION" x={70} y={150} boyut={100} renk={RENK.koyuYesil} />
      <Not t={t} bas={tMod + 0.3} metin="worth discussing with your care team" x={76} y={220} boyut={36} />
      <Baslik t={t} bas={tCure} metin="NOT A CURE" x={70} y={330} boyut={100} renk={RENK.mercan} />
    </>
  );
};

export default S52;
