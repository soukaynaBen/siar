export default {
    name:"awards",
    title:"Awards",
    type:"document",
    fields:[
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
       },
    
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