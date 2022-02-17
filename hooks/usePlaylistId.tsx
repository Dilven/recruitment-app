import { createContext, Dispatch, SetStateAction, useState } from "react";

import { useNonNullableContext } from "./useNonNullableContext";

const PlaylistIdContext = createContext<{
  playlistId: string;
  setPlaylistId: Dispatch<SetStateAction<string>>;
} | null>(null);

type Props = Readonly<{
  children: any;
}>;

export const PlaylistIdProvider = ({ children }: Props) => {
  const [playlistId, setPlaylistId] = useState("");
  return (
    <PlaylistIdContext.Provider
      value={{
        playlistId,
        setPlaylistId,
      }}
    >
      {children}
    </PlaylistIdContext.Provider>
  );
};

export const usePlaylistIdContext = () =>
  useNonNullableContext(PlaylistIdContext);
