// import React from 'react'
import styles from "./main.module.css"
import { TailSpin } from 'react-loader-spinner'
;
const Loader = () => {
  return (
    // <div className={styles.div}>
    //         <div className={styles.loader}></div>
    // </div>
    <TailSpin   // Type of spinner
    height="80"
    width="80"
    color="#4fa94d"
    ariaLabel="tail-spin-loading"
    radius="1"
    
    wrapperStyle={{}}
    wrapperClass={styles.loader}
    visible={true}
/>

  )
}

export default Loader

