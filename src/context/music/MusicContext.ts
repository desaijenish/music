import { createContext } from "react";

interface Music {
  image: string;
  music: string;
  title?: string;
}
interface MusicContextProps {
  musicData: Music[];
  index: number;
  startIndexHandler: (i: number) => void | undefined;
  nextHandlerleft: () => void | undefined;
  nextHandlerRight: () => void | undefined;
}
const MusicContext = createContext<MusicContextProps | undefined>(undefined);

export default MusicContext;
