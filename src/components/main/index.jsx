import React ,{Component} from 'react'
import styles from './src/css/main.module.css'
// import kaushik from './src/img/kaushik.jpg'
// import {Link} from 'react-router-dom'
// import About from '../about';
// import Academic from '../academic';
// import Skill from '../skill';
import ScrollUp from './src/img/scrollup.svg'
import About from '../about'
import Skill from '../skill'
import Academic from '../academic'
import Contacts from '../contact'
import Footer from '../footer'


export default class Header extends Component{
    // const 
    //   this.state{

    //   }
    scrollToacademic = () => {
      const height = window.innerHeight
      const push = (2)*height
      window.scroll({top: push, behavior: 'smooth'})
  }
  scrollToabout = () => {
    const height = window.innerHeight
    const push = (1)*height
    window.scroll({top: push, behavior: 'smooth'})
}
    scrollToskill = () => {
      const height = window.innerHeight
      const push = (3)*height
      window.scroll({top: push, behavior: 'smooth'})
  }
  scrollTocontact = () => {
    const height = window.innerHeight
    const push = (4)*height
    window.scroll({top: push, behavior: 'smooth'})
}
scrollToUp = () => {

  const height = window.innerHeight;
  const push = (0)*height;
  window.scroll({top: push, behavior: 'smooth'});

}
    render(){
        var name="Karuna";
         var last_name="Kumari Kaushik";
         var details = "I am a student of IIT Roorkee"

        return(
          <React.Fragment>
             {/* <div className={styles.navBox}> */}
             <div className={styles.main_container}>
                  <div className={styles.outerBox}>
                          <div className={styles.box}>
                            Home
                          </div>
                         <div className={styles.box} onClick={this.scrollToabout}>
                           {/* <Link className={styles.about} to="/about"> About</Link> */}
                           About
                         </div>
                       <div className={styles.box} onClick={this.scrollToacademic}>
                            {/* <Link className={styles.acad} to="/acads" >Academic</Link> */}
                            Academic
                        </div>
                      <div className={styles.box} onClick={this.scrollToskill}>
                      {/* <Link className={styles.skill} to="/skill" >Skills</Link> */}
                      Skills
                         </div>
                      <div className={styles.box} onClick={this.scrollTocontact}>
                        {/* <Link className={styles.contact} to="/contact" >Contacts</Link> */}
                        Contacts
                         </div>
                   </div>
                   {/* </div> */}

             <div className={styles.photo}>
                   <div className={styles.circle_div}>
                   {/* <img className={styles.kkk} src= {kaushik} alt='kkk'></img> */}
                     <p className={styles.text_name}>
                        {name} {last_name}
                    </p>
                    <p className={styles.text_details}>
                        {details}
                    </p>
                  </div>
                   
            </div>       
            
              </div>
              {/* <div className={styles.scroll_div}> */}
            <div className={styles.scrollUp} onClick={this.scrollToUp}>
              <img className={styles.scrollimg} src={ScrollUp} alt='Scrollup' /> 
              </div>

                {/* </div> */}
    
         <About />
         <Academic />
         <Skill />
         <Contacts />
         <Footer />
         </React.Fragment>
        )
    }
} 