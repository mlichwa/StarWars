import { PropTypes } from 'mobx-react';
import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.scss'


  const Modal = ({ isShowing, hide, object, characterStore}) => isShowing ? ReactDOM.createPortal(

  <React.Fragment>
    <div className={styles.Overlay}/>
    <div className={styles.Wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
      <div className={styles.Modal}>
        <div className={styles.Header}>
          <button type="button" className={styles.closeButton} data-dismiss="modal" aria-label="Close" onClick={hide}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <p>
          {object.title}
        </p>
        <div>
            {
              
            characterStore.characters.map(object => {
              return(<li key={object.id}>{object.name}</li>)
            })
              }
        </div>


      </div>
    </div>
  </React.Fragment>, document.body
) : null;

export default Modal;