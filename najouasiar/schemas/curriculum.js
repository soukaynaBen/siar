export default {
    name:"curriculum",
    title:"Curriculum",
    type:"document",
    fields:[
        {
        name:"year",
        title:"Year",
        type:"string",
        validation:(Rule)=>Rule.required()
       },
        {
        name:"title",
        title:"Title",
        type:"string",
        validation:(Rule)=>Rule.required()
       },
        {
        name:"description",
        title:"Description",
        type:"string",
        validation:(Rule)=>Rule.required()
       },
       {
        name:"order",
        title:"Order",
        type:"number",
        validation:(Rule)=>Rule.required()

       }
],
orderings: [
    {
      name:"order",
      title:"Order",
      by: [
        {field: 'order', direction: 'asc'}
      ]
    },
  ]
}