import React, {Component} from 'react'
import styles from './src/css/footer.module.css'
import fb from './src/img/facebook.svg'
import whatsapp from './src/img/whatsapp.svg'
import linkedin from './src/img/linkedin.svg'
import insta from './src/img/instagram.svg'
import ScrollUp from './src/img/scrollup.svg'
import git from './src/img/git.svg'

export default class Footer extends Component{


    scrollToUp = () => {

        const height = window.innerHeight;
        const push = (0)*height;
        window.scroll({top: push, behavior: 'smooth'});

    }
    render() {
        return(
            <div className={styles.container}>

                  <div className={styles.icons}>
                   <div className={styles.icon}><a href='https://www.facebook.com/karuna.kumari.14268769' target='blank'> <img className={styles.icon} src= {fb} alt="fb"></img></a></div>
                    <div className={styles.icon}><a href='https://web.whatsapp.com' target='blank'><img className={styles.icon} src= {whatsapp} alt="whatsapp"></img></a></div>
                    {/* <div className="icon"> <a href='#' target='blank'><img className="icon" src= {phone}></img></a></div> */}
                     <div className={styles.icon}> <a href='https://github.com/karunakaushik' target='blank'><img className={styles.icon} src= {git} alt="git"></img></a></div>
                   <div className={styles.icon}><a href='https://www.instagram.com/_k_k_k_22/' target='blank'> <img className={styles.icon} src= {insta} alt="insta"></img></a></div>
                   <div className={styles.icon}><a href='https://www.linkedin.com/in/karuna-kumari-a15178177/' target='blank'> <img className={styles.icon} src= {linkedin} alt="linkedin"></img></a></div>
                    </div> 
                    <br />
                    <div className={styles.email}>
                        Email : kkaushik@bt.iitr.ac.in
                    </div>
                    <br />

                    <div className={styles.scrollUp} onClick={this.scrollToUp}><img className={styles.scrollimg} src={ScrollUp} alt='Scrollup' /> </div>
            </div>
        )
    }
}