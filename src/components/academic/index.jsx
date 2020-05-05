import React ,{Component} from 'react'
import styles from './src/css/acads.module.css'
import {Acads_info} from './info_details'
import Acads from './acads_info'

export default class Academic extends Component{
    render(){
        return(
            <div className={styles.container}>
               <div className={styles.box}> 
                <h1 className={styles.acad_text}>
                        Academics
                 </h1>
                </div>

              {/* <div className={styles.skill_text2}> */}
              <div className={styles.infoAcad}> 
                    {Acads_info.map((acads ,index) =>{
                        return(
                     
                            <div key={index} className={styles.main_div}>
                                <Acads question={acads.info} answer={acads.detail} />
                            </div>
                  
                        )
                    })
             
                    }
              </div>
                 
              </div>

            

            
        )
    }
}

