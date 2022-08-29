import { useState } from "react";
import Modal from "../Modal/Modal";
import { PokemonCardI } from "./card.interface";


const Card = ({ title, img, text }: PokemonCardI) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <div className={`flip-card ${showInfo ? "flip-card-active" : ""}`}>
        <div className="flip-card-inner">
          <div className="pokemon-card flip-card-front">
            <img className="pokemon-img" srcSet={`${img}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={title} loading="lazy" src={img} />
            <div className="d-flex justify-content-around">
              <span onClick={() => setShowInfo(true)} className="text-18 text-card text-capitalize" > {title}</span>
              {false ? (
                <img className="start" width={23} height={23} src="/assets/star.png" />
              ) : (
                <img className="start" width={23} height={23} src="/assets/starYellow.png" />
              )}
            </div>
          </div>

          <div onMouseLeave={() => setShowInfo(false)} className="flip-card-back pokemon-card justify-content-evenly" >
            <div className=" d-flex justify-content-around">
              <span className="text-18 ">{title}</span>
              <div>
                <img alt="pokemon" src="/assets/filterwater.svg" />
                <img alt="pokemon" src="/assets/filterwater.svg" />
              </div>
            </div>
            <p className="text-white p-card">
              Lorem ipsum dolor sit amet lorem consectetur adipisicing elit.
              iure, bet aliquam officiis aspernatur doloribus pariatur eos nulla.
            </p>
            <div className="d-flex justify-content-end">
            <span className="p-card text-18  text-capitalize text-card read-more" //onClick={() => setOpen(true)}
            >Reade more...</span>
              {/* <span className="p-card text-18 text-card">Reade more...</span> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
