import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
function Card(cards){
    return(
        <>
        <div class="col-lg-4">
        <div class="card mb-5 mb-lg-0">
          <div class="card-body">
            <h5 class="card-title text-muted text-uppercase text-center">{cards.data.type}</h5>
            <h6 class="card-price text-center">{cards.data.price}<span class="period">{cards.data.period}</span></h6>
            <hr/>
            <ul class="fa-ul">
              {
               cards.data.features.map((list) => {
                 
            return <li className= {list.isEnabled ? '' : 'text-muted'}>
                    <span class="fa-li">
                        <FontAwesomeIcon icon={list.isEnabled ? faCheck : faXmark} />
                    </span>
                    {list.isEnabled ? (
                        <strong>{list.name}</strong>
                    ) : (
                        <span>{list.name}</span>
                    )}
                </li>
                
              
               })
              }
            </ul>
            <div class="d-grid">
            <button  class="btn btn-primary text-uppercase">BUTTON</button>
            </div>
          </div>
        </div>
      </div>
      </>
    )
}
export default Card;