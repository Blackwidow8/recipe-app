

const ImproveSkills = () =>{
    const list =[

        "Learn new recipes",
        "Experiment with food",
        "Write your own recipes",
        "Know nutrition facts",
        "Get cooking tips",
         "Get ranked"

    ]
    
    
    return(


  <div className="section improve-skills">
    <div className="col img">
      <img src="/images/ultimatemilkshake.jpg" alt=""/>
   </div>
        <div className="col typography" >
          <h1 className="title">Master the art of making shakes</h1>
          {list.map((item, index)=>(
 <p  className="skill-item"key={index}>{item}</p>

          ))}
         
       
          <button className='btn'>sign-up now</button>
          
         
        </div>
        
      </div>


    )
}

export default  ImproveSkills