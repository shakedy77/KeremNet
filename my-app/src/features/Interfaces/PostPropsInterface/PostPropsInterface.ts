import CommentProps from "../CommentPropsInterface/CommentPropsInterface"


export default interface PostProps{
    publisherName : string
    content : string
    publishDate : string
    likeAmount : number
    comments : CommentProps[]

}