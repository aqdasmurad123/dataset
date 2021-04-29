import {DAILY_INCOME , FETCH_POST , UPDATE_POST,FETCH_ABOUT,FETCH_SERVICE ,FETCH_JOBS,FETCH_REMOTE, DELETE_POST} from './type'
import firebase from 'firebase/app'

import {db} from '../firebase'
const blogs = db.collection("blogs");
const jobs = db.collection("jobs");
const about = db.collection("about");
const service = db.collection("service");
const cvs = db.collection("cvs");
const remoteHiring = db.collection("remoteHiring");
// export function addPost(post) {
// 	console.log(post)
//     return function (dispatch) {
//         posts.add(post).then(() => {
//             dispatch({
//                 type: DAILY_INCOME,
// 				payload: post,
				
//             });
//             dispatch(fetchPosts(post.uid));
//         });
//     };
// }
// export function deletePost(postId ,userid) {

	

// 	return function (dispatch) {
// 		posts
// 			.doc(postId)
// 			.delete()
// 			.then(() => {
// 				dispatch({
// 					type: DELETE_POST,
// 					payload: postId,
// 				});
// 				dispatch(fetchPosts(userid));
// 			});
// 	};
// }
// export function editPost(postId, post) {
// 	return function (dispatch) {
// 		// console.log(postId);
// 		console.log(postId);
//              posts
// 			.doc(postId)
// 			.update(post)
// 			.then(() => {
// 				dispatch({
// 					type: UPDATE_POST,
// 					payload: post,
// 				});
// 				dispatch(fetchPosts(post.userid));
// 			});
// 	};
// }


export const fetchPosts=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		blogs.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_POST,
                payload: data,
            });
        });
    // };
}  

export const fetchJobs=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		jobs.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_JOBS,
                payload: data,
            });
        });
    // };
}
export const fetchRemoteHiring=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		remoteHiring.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_REMOTE,
                payload: data,
            });
        });
    // };
}
export const fetchService=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		service.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_SERVICE,
                payload: data,
            });
        });
    // };
}
export const fetchAbout=()=>(dispatch)=> {
	
	
	// console.log(data);
    // return function (dispatch) {
		about.onSnapshot(snapshot => {
			let data = [];
		
			 console.log(snapshot);
			   snapshot.forEach((doc) => {
				 data.push({ ...doc.data(), id: doc.id });
			   });
            dispatch({
                type: FETCH_ABOUT,
                payload: data,
            });
        });
    // };
}

export const addNewCv = (blog) => async (dispatch) => {
	console.log(blog)
	let customkey = firebase.firestore().collection("cvs").doc();
  // GET NAME FROM THE FILE

  // 
  var filename =blog.cvFile.name;
  console.log(filename);
  // GET EXTENSION OF THE IMAGE
  let ext2 = filename.slice(filename.lastIndexOf("."));

  var image_name= customkey.id + ext2.toLowerCase();
  console.log(image_name);
  // UPLOAD IT ON FIREBASE STORAGE
  var storageRef= await firebase
    .storage()
    .ref("jobImages/" + customkey.id + ext2.toLowerCase())
    .put(blog.cvFile)
 


console.log("names",image_name)
  
   
  // GET URL
  // 

 
 var url= await storageRef.ref.getDownloadURL()
 console.log(url);

 const obj={
    role:blog.role,
    name:blog.name,
    email:blog.email,
    desireRole:blog.desireRole,
    salary:blog.salary,
    cvFile:url,
    image_name:image_name

 }
   

   
  
  // VIEW THAT URL
 
	try {
		cvs.add(obj).then(() => {
            
                
				alert('cv added successfully')
				
        
      
        });
	} catch (error) {
		console.log(error.message)
	}
    
      
   
}