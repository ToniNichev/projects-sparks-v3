export default { 
  '/about' : {
    template: "Html",    
    layout: [ 
      {
        span: [12],
        style: {
          display: "block"
        },        
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        style: {
          display: "block"
        },        
        components:[
          {
            name: "About",
            props: {}
          }
        ] 
      }         
    ]    
  },
  '/words' : {
    template: "Html",              
    layout: [ 
      {
        span: [0],
        style: {
          display: "block",
          border: "10px solid red",
        },
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: [70,30],
        style: {
          display: "flex"
        },
        components:[
          {
            name: "Words",
            props: {},
            style: {
              width: '80%'
            }
          },
          {
            name: "LeftRail",
            props: {},
            style: {
              width: '20%'
            }            
          },          
        ] 
      },        
    ]
  },  
  '/home' : {
    template: "Html",              
    layout: [ 
      {
        span: 12,
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "Home",
            props: {}
          }
        ] 
      },        
    ]
  },
  '/setup' : {
    template: "Html",    
    layout: [ 
      {
        span: 12,        
        components: [
          {
            name: "Header",
            props: {}
          }
        ]
      },
      {
        span: 12,
        components:[
          {
            name: "Setup",
            props: {}
          }
        ] 
      },        
    ]
  },
  '/other-template' : {
    template: "OtherHtml",      
    layout: [ 
      {
        span: 12,
        components:[
          {
            name: "Greetings",
            props: {}
          }
        ] 
      },        
    ]
}    
}
