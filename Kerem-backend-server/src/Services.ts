import jsondb from './../../DBs/db.json'
import fs from 'fs'

const path = '/../../DBs/db.json';

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
        },
    
    //saves a post into the json file
    postNewPost(Post : PostModel) : void {
        try{
            jsondb.posts.push(Post);
            // let old_data: string = fs.readFileSync('./../DBs/db.json', "utf8")
            // let json_obj: PostModel[] = JSON.parse(old_data) || []
            
        }
        catch (Exception){
            console.log(Exception);
            throw Exception;
        }
    }
}

export default services;