function Card ({card}) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{card.type}</h5>
          <h6 class="card-price text-center">{card.price}<span class="period">/month</span></h6>
          <hr />
          <ul class="fa-ul">
           {card.featuer.map((items) => {
            return <li class= {items.enabled ? "" : "text-muted"}><span class="fa-li"> <i class= {items.enabled ? "fas fa-check" : "fas fa-times"}></i></span>{items.highlight ?  <strong>{items.title}</strong> : <span>{items.title}</span>}</li>
           })}
          </ul>
          <div class="d-grid">
            <button class="btn btn-primary text-uppercase">Button</button>
          </div>
        </div>
      </div>
    </div>
  )
}


export default Card;