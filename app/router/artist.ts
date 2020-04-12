import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/artist/:artistId/albums', controller.artist.getArtistAlbums);
  router.get('/artist/:artistId/info', controller.artist.getArtistInfo);
  router.get('/artist/:artistId/mv', controller.artist.getArtistMv);
  router.get('/artist/list', controller.artist.getArtistList);
};
