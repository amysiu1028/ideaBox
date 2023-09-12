var ideasArray = []
var FavoriteIdeas = []

var title = document.getElementById("title").value 
var body = document.getElementById("body").value
var id = Date.now()

function createNewIdea(){
    var newIdea = {
        title:title,
        body:body,
        id:id
    }
    ideasArray.push(newIdea)
    title.value = ""
    body.value = ""
}