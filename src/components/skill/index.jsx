import React ,{Component} from 'react'
import styles from './src/css/skill.module.css'

export default class Skill extends Component{
    render(){
        return(
            <div className={styles.container}>
               <div className={styles.box}> 
                <h1 className={styles.skill_text}>
                     Skills
                 </h1>
                </div>

              <div className={styles.skills}> 
              <ul>
                      <li>HTML</li>
                      <li>  CSS </li>
                      <li>  CPP </li>
                      <li>  Java Script </li>
                       <li> React Js </li>
                         <li>MySQL </li>
                         <li>Node js</li>
                             <li>Ms Office</li>
                            <li>Adobe Illustrator</li>
                           <li>Adobe Photoshop</li>
                           <li>Git</li>
                           <li>Python</li>
                  
                  </ul>
              </div>
                 
              </div>


            
        )
    }
}