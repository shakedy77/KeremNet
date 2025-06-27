import jsondb from '../../DBs/db.json'

const path = './models/PostModel/PostModel';

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
    
    // postNewPost(Post : PostModel) : void {

    //     let old_data: string = fs.readFileSync(path, "utf8")
    //     let json_obj: PostModel[] = JSON.parse(old_data) || [] // No longer need extra array; initialoze as an empty array if needed
    //     json_obj.push(Post)

    // }
}

export default services;