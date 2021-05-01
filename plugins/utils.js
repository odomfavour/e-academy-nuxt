// const unsubscribe = firebase.firestore()
//     .collection('users')
//     .where('role', '==', 'admin')
//     .onSnapshot(snapshot => {
//         this.users = snapshot.docs;
//     }, error => {
//         console.trace(error)
//     })
//     unsubscribe()

import firebase from "./firebase";




 const generateRandomSequence = () => {
    return `${Math.random()}${Date.now() || (new Date).getTime()}`
}

 const getFileExtension = fileName => {
    return fileName.split(".")[fileName.split(".").length - 1]
}

export {
    generateRandomSequence,
    getFileExtension
}



// const fileRef = firebase.firestore().ref(`teachers/${generateRandomSequence()}.${getFileExtension(file.name)}`)

// const progress = fileRef.put(file)

// progress.on('state_changed', snap => {
//     let percentage = (snap.bytesTransferred/snap.totalBytes) * 100;

//     if (percentage == 100){
//         // hide modal

//         fileRef.getDownloadURL().then(url => {
//             // use the url to set the image
//         }).catch(err => {
//             console.trace(err)
//             console.warn('network error')
//         })
//     }

//     switch (snap.status) {
//         case 'paused':
//             (() => {
//                 // paused
//             })()
//             break;

//         case 'running':
//             (() => {
//                 // running
//             })()
    
//         default:
//             break;
//     }
// }, err => {
//     console.trace(err)
// };

// progress.cancel()
