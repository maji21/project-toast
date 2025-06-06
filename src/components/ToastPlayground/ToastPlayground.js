import React from 'react';

import Button from '../Button';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
 
  const [message,setMessage] = React.useStae('');
  const [variant,setVariant] = React.useStae(VARIANT_OPTIONS[0]);
 

 
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" className={styles.messageInput} />
            value={message}
            onChange={(Event)=> {
            setMessage(Event.targrt.value)
            }}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            {VARIANT_OPTIONS.map((option)=>{
              const id = `variant-$ {option}`
              return(
              <label htlFor={id}>
              <input
                id= {id}
                type="radio"
                name="variant"
                value= {option}
                checked = {option === variant}
                onChange= {(Event) => {
                  setVariant= (Event.target.value);
                  //setVariant= (Event.target.value); -> geht auch, obere ist Längere Variante
                }}
              />
              {option}
            </label>
              );
            })}
            

            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={()=> {window.alert('${variant} - ${message}');
              
            }}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
