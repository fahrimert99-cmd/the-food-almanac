import React from "react";
import { Composition } from "remotion";
import { Kapak } from "./Kapak";
import { Afis, Avatar } from "./Marka";
import { Tam } from "./tam/Tam";
import { TAM } from "./tam/veri";

export const Root: React.FC = () => (
  <>
    <Composition id="Tam" component={Tam} durationInFrames={Math.round(TAM.toplam * TAM.fps)}
      fps={TAM.fps} width={1920} height={1080} />
    <Composition id="Kapak" component={Kapak} durationInFrames={1} fps={30} width={1280} height={720} />
    <Composition id="Afis" component={Afis} durationInFrames={1} fps={30} width={2560} height={1440} />
    <Composition id="Avatar" component={Avatar} durationInFrames={1} fps={30} width={800} height={800} />
  </>
);
