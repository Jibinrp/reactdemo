
import './App.css';
import Card from "./Card";
function App () {
  let PricingCard = [
          {
            type:"FREE",
            price:"$0",
            period:"/month",

            featuer:[
              {
                title :"Single Users",
                enabled : true,
                hihglight: true,
              },
              {
                title :"5GB Storage",
                enabled : true,
              },
              {
                title :"Unlimited Public Projects",
                enabled : true,
              },
              {
                title :"Community Access",
                enabled : true,
              },
              {
                title :"Unlimited Private Projects",
                enabled : false,
              },
              {
                title :"Dedicated Phone Support",
                enabled : false,
              },
              {
                title :"Free Subdomain",
                enabled : false,
              },
              {
                title :"Monthly Status Reports",
                enabled : false,
              },
            ]
          },
          {
            type:"PLUS",
            price:"$9",
            period:"/month",

            featuer:[
              {
                title :"5 Users",
                enabled : true,
                hihglight: true,
              },
              {
                title :"50GB Storage",
                enabled : true,
              },
              {
                title :"Unlimited Public Projects",
                enabled : true,
              },
              {
                title :"Community Access",
                enabled : true,
              },
              {
                title :"Unlimited Private Projects",
                enabled : true,
              },
              {
                title :"Dedicated Phone Support",
                enabled : true,
              },
              {
                title :"Free Subdomain",
                enabled : true,
              },
              {
                title :"Monthly Status Reports",
                enabled : false,
              },
            ]
          },
          {
            type:"PRO",
            price:"$49",
            period:"/month",

            featuer:[
              {
                title :"Unlimited Users",
                enabled : true,
                hihglight: true,
              },
              {
                title :"150GB Storage",
                enabled : true,
              },
              {
                title :"Unlimited Public Projects",
                enabled : true,
              },
              {
                title :"Community Access",
                enabled : true,
              },
              {
                title :"Unlimited Private Projects",
                enabled : true,
              },
              {
                title :"Dedicated Phone Support",
                enabled : true,
              },
              {
                title :"Unlimited Free Subdomain",
                enabled : true,
                hihglight: true,
              },
              {
                title :"Monthly Status Reports",
                enabled : true,
              },
            ]
          }
  ]


return (
  <>
  <div className="App">
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {
            PricingCard.map((card) =>{
              return <Card card={card}></Card>
            })
          }
        </div>
      </div>
    </section>
  </div>
  </>
)
        }
export default App;
