console.log("start")



// const promiseBy = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("promise resolved")
//     },3000)
// })

// async function check(){
//     const data = await promiseBy;
//     console.log(data);
// }
// check();

// const grandParent = document.getElementById('grandParent');
// const parent = document.getElementById('parent');
// const child = document.getElementById('child');

// grandParent.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log("grandParent clicked");
// })

// parent.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log("Parent clicked");
// })

// child.addEventListener('click',(e)=>{
//     e.stopPropagation();
//     console.log("child clicked");
// })


// function addmi(group,zone){
//     console.log(`student name is ${this.name} and class is ${this.class} group is: ${group} and zone is ${zone}`);
// }

// const s1 ={
//     name:"Rahul",
//     class:12
// }
// const s2 = {
//     name:"Rohan",
//     class:12
// }

// addmi.call(s1,"ZETA","punjab")
// addmi.apply(s2,["ALPHA","himachal"])
// const b1 = addmi.bind(s2,"ALPHA","himachal")
// b1();



async function fetchDataProducts(){
    const data = await fetch("https://dummyjson.com/products")
    const finalData = await data.json();
    return finalData;
}


const area =  document.getElementById('area');
async function display(){
    const data = await fetchDataProducts();
    console.log(data);
    area.innerHTML = data.products.map((item)=>{
        return `
        <div class="card row" style="width: 18rem;">
        <img src=${item.images[0]} class="card-img-top" alt=${item.id}>
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">${item.description}</p>
            <a href="#" class="btn btn-primary">Buy</a>
        </div>
        </div>
        `
    })
}

display();