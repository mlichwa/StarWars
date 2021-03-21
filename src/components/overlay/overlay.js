import React, { Component } from 'react'
import { observer } from 'mobx-react';
import styles from './overlay.module.scss'
import classNames from 'classnames'
import Modal from '../../store/models/Modal'

const Overlay = observer(
    class Overlay extends Component {

        constructor(props){
            super(props)
            this.state = {
                
                isLoading : true,
                
            }
            this.listRef = React.createRef()
            this.escFunction = this.escFunction.bind(this);
        }

        componentDidMount() {
            console.log("The componentDidMount method is only fired the first time the component is mounted");

            // const filmsStore = useFilmsStore()
            // const characterStore = useCharacterStore()
        }


		escFunction(event){
			if(event.keyCode === 27) {
			  //Do whatever when esc is pressed
			  console.log("ESC on Modal")
			//   Overlay.closeModal()	
			}
		 }


        loadCharacters = () =>{
            
            return(
                    Modal.characters.map(object =>{
                        return(<li key={object.name} >{object.name}</li>)
                    })
                
            )
        }

        closeModal = () => {
            Modal.toggleModal();
        }


        render() {
            
            const showModal = Modal.showModal ? styles.show : null
            const allCharacters = Modal.characters.length !== 0 ? this.loadCharacters() : null
            // const { show } = this.props;
            return (
                // <div className={classNames([styles.overlay, showModal])} id="overlay">
                //         {show &&
                //             this.props.children
                //         }
                // </div>


                <div>
                    <div className={classNames([styles.overlay, showModal])}>
                        <div className={styles.Wrapper} aria-modal aria-hidden tabIndex={-1} role="dialog">
                            <div className={styles.Modal}>
                                <div className={styles.Header}>
                                    <button type="button" className={styles.closeButton} data-dismiss="modal" aria-label="Close" onClick={() => this.closeModal()}>
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <p>
                                {/* {object.title} */}
                                </p>
                                <div>
                                    {allCharacters}
                                    {/* {
                                    
                                    characterStore.characters.map(object => {
                                    return(<li key={object.id}>{object.name}</li>)
                                    })
                                    } */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            )
        }
    }
)
export default Overlay