
import './App.css';
import Card from "./Card";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  let details = [
    {
      type:"FREE",
      price:"$0",
      period:"/month",

      features:[
        {
          name:" Single User",
          isEnabled: true,
        },
        {
          name: "5GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Project",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: false,
        },
        {
          name: "Free Subdomain",
          isEnabled: false,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
       
      ]
    
    },
    {
      type:"PLUS",
      price:"$9",
      period:"/month",

      features:[
        {
          name: "5 Users",
          isEnabled: true, 
        },
        {
          name: "50GB Storage",
          isEnabled: true, 
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true, 
        },
        {
          name: "Community Access",
          isEnabled: true, 
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true, 
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true, 
        },
        {
          name: "Free Subdomain",
          isEnabled: true, 
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false, 
        },
       
      ]
    },
    {
      type:"PRO",
      price:"$49",
      period:"/month",

      features:[
        {
          name: "5 Users",
          isEnabled: true, 
        },
        {
          name: "50GB Storage",
          isEnabled: true, 
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true, 
        },
        {
          name: "Community Access",
          isEnabled: true, 
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true, 
        },
        {
          name: "Dedicated Phone Support",
          isEnabled: true, 
        },
        {
          name: "Free Subdomain",
          isEnabled: true, 
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true, 
        },
       
      ]
    },
  
  ]
  
 return(
  <>
  <section class="pricing py-5">
    <div class="container">
      <div class="row">
        {
          details.map((card) => {
            return <Card data={card}></Card>
          })
        }
      </div>
    </div>

  </section>
  </>
 )
}



export default App;
