import * as React from 'react';
import { useEffect, useState } from 'react';

const Modal = ({ props }: any) => {
  const [open, setOpen] = useState(false);


  useEffect(() => {
    // const root = document.getElementById("root");
    // const modal = document.getElementById("myModal");
    // const span = document.getElementById("read-more")

    // if (!open) {
    //   span?.before(modal || "");
    //   return
    // }

    // root?.before(modal || "");
  }, [open])

  return (
    <>
    
      {open &&
        <div className="modal show modal-dialog-centered" id="myModal" aria-modal="true" role="dialog" style={{ display: "block", background: "#0b0a0aa1" }}>
          <div className="modal-dialog modal-max">
            <div className="modal-content modal-purple">
              <div className="border-0 d-flex justify-content-end modal-header">
                <button onClick={() => setOpen(false)}>
                  <img className='' style={{ cursor: "pointer" }}  width="20" src='/assets/x.svg' />
                  </button>
              </div>

              <div className="modal-body">
                {/* <div className="pokemon-card flip-card-front"> */}
                <img className="pokemon-img" srcSet={`${props?.img || ""}?w=248&fit=crop&auto=format&dpr=2 2x`} alt={props?.title || ""}
                  loading="lazy"
                  src={`https://github.com/Superviral/Pokemon-GO-App-Assets-and-Images/blob/master/Pokemon%20Models%20(PNG%20Format)/001%20-%20ymJUN7U.png?raw=true?w=248&fit=crop&auto=format`}
                />

                {/* </div> */}
              </div>


            </div>
          </div>
        </div>
      }
    </>
  )
}

export default Modal

