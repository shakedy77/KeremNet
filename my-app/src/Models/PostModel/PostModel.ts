import CommentModel from "../CommentModel/CommentModel"

export default class PostModel{
    publisherName : string
    content : string
    publishDate : Date
    likeAmount : number
    comments : CommentModel[]

    constructor(publisherName : string, content : string, publishDate : Date, likeAmount : number, comments : CommentModel[]){
        this.publisherName = publisherName;
        this.content = content;
        this.publishDate = publishDate;
        this.likeAmount = likeAmount;
        this.comments = comments;
    }

}