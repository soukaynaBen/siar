export default {
    name:"publications",
    title:"Publications",
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
        name:"descriptions",
        title:"Descriptions",
        validation:(Rule)=>Rule.required(),
        type:"array",
        of: [{type: 'string'}]
       },
        {
        name:"footer",
        title:"Footer",
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