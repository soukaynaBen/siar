export default {
    name:"research",
    title:"Research",
    type:"document",
    fields:[
        {
        name:"research",
        title:"Research",
        type:"text",
        validation:(Rule)=>Rule.required()
       }
       
]
}