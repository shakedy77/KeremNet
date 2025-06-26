import jsondb from '../../DBs/db.json'
import PostModel from './models/PostModel/PostModel';

const services = {
    getUserList() : string[] {
            return [...new Set(jsondb.posts.map(post => post.publisherName))];
        },
    
    getAllPosts() : PostModel[] {
            return (jsondb.posts as unknown as PostModel[])
        },

    getPostsByName(name : string) : PostModel[] {

    }
    
    




}