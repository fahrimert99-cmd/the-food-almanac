// Sahne 14 — kol üstündeki glukoz sensörü; "gerçek hayat testi, laboratuvar değil".
import React from "react";
import { Baslik, Etiket, Hap, Ikon, Kamera, RENK, SP, kameraYolu, kelimeZamani, pop } from "../kutuphane";

const S14: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tSensor = K(0, "glucose"), tGun = K(0, "daily"), tGercek = K(0, "real"), tLab = K(0, "laboratory");
  const [sp, ap] = pop(t, tLab, 0.5);
  return (
    <>
      <Kamera gorsel="tam/14" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [50, 50, 1780])}>
        {/* sensör üzerindeki uydurma "125" yazısını örten düz sensör diski */}
        <svg width={1920} height={1080} style={{ position: "absolute", left: 0, top: 0 }}>
          <ellipse cx={876} cy={456} rx={76} ry={78} fill="#EBC3A8" />
          <ellipse cx={876} cy={456} rx={66} ry={68} fill="#C9DCE2" stroke="#B5503E" strokeWidth={6} />
          <circle cx={876} cy={456} r={22} fill="#8FA9B3" />
        </svg>
        <Etiket t={t} bas={tSensor} bitis={tGun + 1.4} capa={[876, 456]} konum={[760, 230]} metin="GLUCOSE MONITOR" renk={RENK.altin} />
        <Etiket t={t} bas={tGun} capa={[1250, 700]} konum={[1580, 800]} metin="DAILY LIFE" renk={RENK.yesil} />
      </Kamera>
      <Baslik t={t} bas={tGercek} metin="REAL-WORLD TEST" x={80} y={190} boyut={100} renk={RENK.koyuYesil} />
      <Ikon t={t} bas={tLab} ad="carpi" x={118} y={330} boyut={68} zemin={RENK.mercan} />
      <div style={{ position: "absolute", left: 170, top: 330, transform: `translateY(-50%) scale(${sp})`, transformOrigin: "0 50%", opacity: ap }}>
        <Hap metin="NOT A LABORATORY" renk={RENK.mercan} boyut={34} />
      </div>
    </>
  );
};

export default S14;
