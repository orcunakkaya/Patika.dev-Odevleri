
let inputDOM = document.querySelector("#task");
let localItemsDOM = [];


if(localStorage.getItem("listContent") && localStorage.getItem("listContent").length > 1){
    localItemsDOM = JSON.parse(localStorage.getItem('listContent'))
    for(let i=0; i<localItemsDOM.length; i++){
        let listeDOM = document.querySelector("ul");
        let liDOM = document.createElement("li");

        let iconDOM = `<i onclick="removeHandler()" class="fas fa-trash-alt"></i>`
        liDOM.innerHTML = `${localItemsDOM[i]}` + iconDOM;

        listeDOM.insertBefore(liDOM, listeDOM.firstChild);
    }
}else if(localStorage.getItem("listContent").length == "1"){
    localItemsDOM = localStorage.getItem("listContent");
}


function newElement(){
    if(inputDOM.value.trim() == ""){
        alert("boş değer giremezsin")
    }
    else{
        let listeDOM = document.querySelector("ul");
        let liDOM = document.createElement("li");  // yeni liste elemanı

        let iconDOM = `<i onclick="removeHandler()" class="fas fa-trash-alt"></i>`  // yeni liste elemanının içine icon koyulması

        liDOM.innerHTML = `${inputDOM.value}` + iconDOM;  // icon ve içeriğin yeni liste elemanına yerleştirilmesi
        console.log(iconDOM)

        listeDOM.insertBefore(liDOM, listeDOM.firstChild); // yeni liste elemanının liste içinde en başa yerleştirilmesi

        localItemsDOM.push(inputDOM.value)  // içeriğin localstorage için oluşturulmuş diziye atılması
        window.localStorage.setItem("listContent", JSON.stringify(localItemsDOM));  // dizinin localstorage a atılması

        inputDOM.value = " ";
    }
}

// liste elemanına tıklandığında oluşacak görsel
var listeDOM = document.querySelector("ul");
listeDOM.addEventListener("click", function(event){ //liste elemanlarından herhangi birine tıklanırsa class a checked ı ata
    event.target.classList.toggle("checked");  
})


// listeden içerik silinmesi 
var removeContent = document.getElementsByTagName("i");  // bütün çöp kutusu iconlarını değişkene ata
for (let i = 0; i < removeContent.length; i++) {  // her bir iconu basıldı mı diye kontrol et
    removeContent[i].onclick = function(){  // basılan icon için işlem yap
        var liElement = this.parentElement;  // iconun bağlı olduğu ana elementi değişkene ata
        var contentDOM = liElement.innerHTML // li elementinin içerğini değişkene ata
        var content = contentDOM.indexOf("<")  // iconun başladığı kısma kadar yani içeriğin bittiği index i değişkene ata
        var localContent = contentDOM.slice(0, content);  // içeriğin tamamını değişkene ata
        localRemove(localContent);  // 

        liElement.remove();  // içerğinin buldunduğu elementi sil
         
    }
}


// silinmiş olan içeriği local storage dan da sil
function localRemove(content){ 
    localItemsDOM = localItemsDOM.filter(function(item){  // silinen içerik dışındaki tüm içerikleri alıp local strorage için oluşturulmuş diziye ata
        return item != content 
    })
    localStorage.setItem("listContent", JSON.stringify(localItemsDOM))  // yeni diziyi localstorage a ata
    console.log("yeni localstorage:  ",localItemsDOM); 
}