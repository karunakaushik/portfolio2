import React ,{Component} from 'react'
import styles from  './src/css/about.module.css'
// import AboutCard from './about_card'
// import { AboutInfo } from './aboutInfo'

export default class About extends Component{
    render(){

         var user={
             info1:'Technical Member of THOMSO\'19 (CULTURAL FEST OF IITR), Associate Member (Aug 2018- Oct 2018), Executive Member (July 2019-present).',
             info2:'Executive Member of Wellness Center, IIT Roorkee(Designer).',
             info3:'I am interested in web-development and also in web designing.',
             info4:'Member of NRS(NGO Relation and Sponsorship, IIT Roorkee) and RAA(Rashtriya Avishkar Abhiyan).',
             info5:'Secured fourth state Rank and first rank in district in intermediate board(I.Sc Bihar Board 2017).',
             info6:'Awarded by IIT Roorkee Heritage Foundation Fund 2019.'
         }

        return(
            <div className={styles.outerbox}>
               <div className={styles.box}> 
               <h1 className={styles.about_text}>
                     ABOUT/EXPERIENCE
                 </h1>
                <br />
                <div className={styles.cards}>
                <div className={styles.card1}> {user.info1}</div><br />
                <div className={styles.card1}>{user.info2} </div><br />
                <div className={styles.card1}>{user.info3}</div><br />
                <div className={styles.card1}>{user.info4}</div><br />
                <div className={styles.card1}>{user.info5}</div><br />
                <div className={styles.card1}>{user.info6}</div>

               </div> 
               </div>

               </div>

            
        )
    }
}