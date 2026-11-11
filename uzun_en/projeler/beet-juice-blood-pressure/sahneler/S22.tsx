// Sahne 22 — kalıcı düşüş, nabız dalgası hızı; küçük çalışma uyarısı.
import React from "react";
import { BaslikBlok, Etiket, Kamera, Not, RENK, SP, kameraYolu, kelimeZamani } from "../kutuphane";

const S22: React.FC<SP> = ({ t, s }) => {
  const K = kelimeZamani(s);
  const tFade = K(0, "did not fade"), tHaf = K(0, "four weeks"), tGeri = K(0, "drifted back"), tDur = K(0, "juice stopped");
  const tPwv = K(1, "pulse wave"), tIyi = K(1, "improved"), tKucuk = K(2, "encouraging");
  const tS1 = s.cumleler[1].bas;
  return (
    <>
      <Kamera gorsel="tam/22" pencere={kameraYolu(t, s.sure, [0, 0, 1920], [90, 50, 1740])}>
        <Etiket t={t} bas={tHaf} bitis={tS1} capa={[1510, 790]} konum={[1500, 500]} metin="4 WEEKS" renk={RENK.altin} />
        <Etiket t={t} bas={tDur} bitis={tS1} capa={[500, 640]} konum={[500, 300]} metin="JUICE STOPPED" renk={RENK.mercan} />
        <Etiket t={t} bas={tPwv} bitis={tKucuk} capa={[960, 480]} konum={[1330, 420]} metin="PULSE WAVE VELOCITY" renk={RENK.lacivert} />
        <Etiket t={t} bas={tIyi} bitis={tKucuk} capa={[960, 640]} konum={[1330, 540]} metin="IMPROVED A LITTLE" renk={RENK.yesil} />
      </Kamera>
      <BaslikBlok t={t} bas={tFade} bitis={tS1} satirlar={["SUSTAINED,", "WHILE DRINKING"]} x={1850} y={170} boyut={84} hiza="sag" />
      <Not t={t} bas={tGeri} bitis={tS1} metin="DRIFTED BACK TOWARD BASELINE" x={1850} y={322} hiza="sag" boyut={32} renk={RENK.mercan} agirlik={800} />
      <BaslikBlok t={t} bas={tKucuk} satirlar={["ENCOURAGING,", "STILL SMALL"]} x={1850} y={170} boyut={84} hiza="sag" />
    </>
  );
};

export default S22;
