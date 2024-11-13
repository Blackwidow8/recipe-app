import ChefCard from "./ChefCard"
const ChefsSection = () =>{

    const chefs =[
        {
            name: "Chef Patty",
            img: "/images/img1/chef_patty.jpeg",
            recipes: "10",
            specialdrink: "Vanilla special",
        
        },
        {
            name: "Chef Sibahle",
            img: "/images/img1/chef1.jpg",
            recipes: "10",
            specialdrink: "Cool Mint",
        
        },
        {
            name: "Chef Smith",
            img: "/images/img1/chef2.jpeg",
            recipes: "10",
            specialdrink: "Strawberry Marshmallow",
        
        },
        {
            name: "Chef Nyambura",
            img: "/images/img1/chef7.jpeg",
            recipes: "10",
            specialdrink: "Blueberry Cheesecake",
        
        },
        {
            name: "Chef Patrice",
            img: "/images/img1/chef8.jpg",
            recipes: "10",
            specialdrink: "Raspberry & Whitechocolate",
        
        },
        {
            name: "Chef Osikoya",
            img: "/images/img1/chef9.jpeg",
            recipes: "10",
            specialdrink: "Pina Colada",
        
        },
        {
            name: "Chef Tolani",
            img: "/images/img1/chef10.jpg",
            recipes: "10",
            specialdrink: "Triple Nut Caramel",
        
        },
        {
            name: "Chef Aina",
            img: "/images/img1/chef11.jpeg",
            recipes: "10",
            specialdrink: "Neapolitan",
        
        },
        {
            name: "Chef Jacky",
            img: "/images/img1/chef12.jpeg",
            recipes: "10",
            specialdrink: "Choc Malt",
        
        },
        {
            name: "Chef Damien",
            img: "/images/img1/chef9.jpg",
            recipes: "10",
            specialdrink: "Apple Pie Puff",
        
        },
    ]
       

    
    return(
<div className="section chef">
    <h1 className="title-chef">Our Top Chefs</h1>
    <div className="top-chefs-container">
    {/* <ChefCard/>
    <ChefCard/>
    <ChefCard/>
    <ChefCard/>
    <ChefCard/>
    <ChefCard/>
    <ChefCard/>
    <ChefCard/>
    <ChefCard/>
    <ChefCard/> */}
    {chefs.map(chef => <ChefCard key={chef.name} chef={chef}/>)}
    </div>
</div>
    )
}

export default ChefsSection;