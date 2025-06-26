import jsondb from '../../DBs/db.json'
import PostModel from './models/PostModel/PostModel';

const services = {
    // returns all users
    getUserList() : string[] {
            return [...new Set(jsondb.posts.map(post => post.publisherName))];
        },
    
    //returns all posts
    getAllPosts() : PostModel[] {
            return (jsondb.posts as unknown as PostModel[]);
        },
    
    // returns filtered posts by name
    getPostsByName(name : string) : PostModel[] {
            return (jsondb.posts.filter(post => post.publisherName === name) as unknown as PostModel[]);
        }
}

export default services;