export default class CommentModel{

    publisherName : String;
    content : String;
    likeAmount : number;


    constructor(publisherName : String, content : String, likeAmount : number){
        this.publisherName = publisherName;
        this.content = content;
        this.likeAmount = likeAmount;
    }



}