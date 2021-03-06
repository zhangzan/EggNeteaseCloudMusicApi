import { Controller } from 'egg';
import { Default_Offset, Default_Limit } from '../utils/common';

export default class ArtistController extends Controller {
  /**
   * @description 获取资源评论
   */
  public async getResourceComments() {
    const { ctx } = this;
    const { resourceId } = ctx.params;
    const {
      type,
      beforeTime = 0,
      offset = Default_Offset,
      limit = Default_Limit,
    } = ctx.query;
    ctx.body = await ctx.service.comment.getResourceComments({
      type,
      resourceId,
      beforeTime,
      offset,
      limit,
    });
  }

  /**
   * @description 获取资源热门评论
   */
  public async getResourceHotComments() {
    const { ctx } = this;
    const { resourceId } = ctx.params;
    const {
      type,
      beforeTime = 0,
      offset = Default_Offset,
      limit = Default_Limit,
    } = ctx.query;
    ctx.body = await ctx.service.comment.getResourceHotComments({
      type,
      resourceId,
      beforeTime,
      offset,
      limit,
    });
  }

  /**
   * @description 获取资源云村热评
   */
  public async getCommentHotwall() {
    const { ctx } = this;

    ctx.body = await ctx.service.comment.getCommentHotwall();
  }

  /**
   * @description 点赞 ｜ 取消点赞 评论
   */
  public async postResourceCommentLike() {
    const { ctx } = this;
    const { resourceId, actionType } = ctx.params;
    const { type, commentId } = ctx.request.body;
    ctx.body = await ctx.service.comment.postResourceCommentLike({
      type,
      commentId,
      resourceId,
      actionType,
    });
  }

  /**
   * @description 发表资源评论
   */
  public async postResourceCommentSend() {
    const { ctx } = this;
    const { resourceId } = ctx.params;
    const { type, content } = ctx.request.body;
    ctx.body = await ctx.service.comment.postResourceCommentSend({
      type,
      resourceId,
      content,
    });
  }

  /**
   * @description 删除资源评论
   */
  public async deleteResourceComment() {
    const { ctx } = this;
    const { resourceId } = ctx.params;
    const { type, commentId } = ctx.request.body;
    ctx.body = await ctx.service.comment.deleteResourceComment({
      type,
      resourceId,
      commentId,
    });
  }

  /**
   * @description 回复资源评论
   */
  public async postResourceCommentReply() {
    const { ctx } = this;
    const { resourceId, commentId } = ctx.params;
    const { type, content } = ctx.request.body;
    ctx.body = await ctx.service.comment.postResourceCommentReply({
      type,
      resourceId,
      commentId,
      content,
    });
  }
}
