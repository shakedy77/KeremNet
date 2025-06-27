export default class CommentModel{

    publisherName : string;
    content : string;
    likeAmount : number;


    constructor(publisherName : string, content : string, likeAmount : number){
        this.publisherName = publisherName;
        this.content = content;
        this.likeAmount = likeAmount;
    }



}