/**
 * Playlist usada na home e no guia do dia da sessão. Mantida fora do JSX
 * pelo mesmo motivo dos guias: trocar a playlist não deve exigir editar
 * componente.
 */
export const sessionPlaylist = {
  spotifyId: '6MlFKYieMeFCXyWrWYcsCZ',
  title: 'Para a cadeira',
  description:
    'Uma sessão longa pesa mais no tédio e na tensão do que na dor em si. Serve de distração enquanto você fica parado.',
  preview: [
    'Algo constante, para atravessar as primeiras horas',
    'Nada que faça você querer se mexer junto',
    'Volume que ainda deixe ouvir o tatuador',
    'Fone de ouvido: combine antes com o estúdio',
  ],
} as const;
