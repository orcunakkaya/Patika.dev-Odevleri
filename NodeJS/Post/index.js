const arguments = process.argv.slice(2)

const posts = [
    { header: "Lorem", post:"Lorem ipsum dolor sit amet." },
    { header: "Lorem", post:"Lorem ipsum dolor sit amet." },
    { header: "Lorem", post:"Lorem ipsum dolor sit amet." },
    { header: "Lorem", post:"Lorem ipsum dolor sit amet." },
]


function Posts () {
    posts.map(value =>{
        console.log(value);
    })
}

const newPost = (h, p) =>{
    return new Promise((resolve, reject) => {
        if(h && p){
            resolve(posts.push({header: h, post: p}))
        }else{
            reject("Bir hata oluştu")
        }
    }) 
}

async function addPost(a, b) {
    try{
        console.log("Postların ilk hali");
        Posts()
        await newPost(a, b)
        console.log("----------------------------------------------");
        console.log("Yeni bir post eklendikten sonra");
        Posts()
    }catch(error){
        console.log(error);
    }
}
addPost(arguments[0], arguments[1])
