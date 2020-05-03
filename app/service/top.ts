import { Service } from 'egg';
import createRequest from '../utils/createRequest';
import {
  iGetTopAlbum,
  AlbumArea,
  iPageParams,
  iGetTopList,
  TopList,
  iGetTopMv,
  iGetQualityPlaylist,
  iGetTopPlaylist,
} from './types/top';

/**
 * Top Service
 */
export default class Top extends Service {
  /**
   * @description 获取最新专辑
   * @param page
   * @param pageSize
   * @param area
   */
  public async getTopAlbum({
    page,
    pageSize,
    area = AlbumArea['ALL'],
  }: iGetTopAlbum): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;

    return createRequest(
      'POST',
      `https://music.163.com/weapi/album/new`,
      {
        offset: page,
        limit: pageSize,
        area,
        total: true,
      },
      { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
    );
  }

  /**
   * @description 获取最新专辑
   * @param page
   * @param pageSize
   */
  public async getTopArtist({ page, pageSize }: iPageParams): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;

    return createRequest(
      'POST',
      `https://music.163.com/weapi/artist/top`,
      {
        offset: page,
        limit: pageSize,
        total: true,
      },
      { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
    );
  }

  /**
   * @description 获取新歌列表
   * @param type
   */
  public async getTopList({ type }: iGetTopList): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;

    return createRequest(
      'POST',
      `https://music.163.com/weapi/v3/playlist/detail`,
      {
        id: TopList[type],
        n: 1000,
      },
      { crypto: 'linuxapi', cookie: query.cookie, proxy: query.proxy }
    );
  }

  /**
   * @description 获取MV排行榜
   * @param page
   * @param pageSize
   * @param area
   */
  public async getTopMv({ page, pageSize, area }: iGetTopMv): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;

    return createRequest(
      'POST',
      `https://music.163.com/weapi/mv/toplist`,
      {
        offset: page,
        limit: pageSize,
        area,
        total: true,
      },
      { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
    );
  }

  /**
   * @description 获取MV排行榜
   * @param page
   * @param pageSize
   * @param area
   */
  public async getQualityPlaylist({
    lasttime,
    pageSize,
    category,
  }: iGetQualityPlaylist): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;

    return createRequest(
      'POST',
      `https://music.163.com/weapi/playlist/highquality/list`,
      {
        cat: category,
        limit: pageSize,
        lasttime,
        total: true,
      },
      { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
    );
  }

  /**
   * @description 获取歌单排行榜
   * @param category
   * @param page
   * @param pageSize
   * @param order
   */
  public async getTopPlaylist({
    category,
    page,
    pageSize,
    order,
  }: iGetTopPlaylist): Promise<any> {
    const { ctx } = this;
    const query = ctx.request.query;

    return createRequest(
      'POST',
      `https://music.163.com/weapi/playlist/list`,
      {
        cat: category,
        offset: page,
        limit: pageSize,
        order,
        total: true,
      },
      { crypto: 'weapi', cookie: query.cookie, proxy: query.proxy }
    );
  }
}
