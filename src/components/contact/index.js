import React ,{Component} from 'react'
import styles from './src/css/contact.module.css'
import fb from './src/img/facebook.svg'
// import whatsapp from './src/img/whatsapp.svg'
import linkedin from './src/img/linkedin.svg'
import insta from './src/img/instagram.svg'
import git from './src/img/git.svg'

export default class Contacts extends Component{

    constructor(props){
        super(props)

        this.state = {
            name : '',
            email : '',
            subject: '',
            message : ''
        
        }
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 

    }
    
    handleInputChange(event) {        
        const target = event.target;        
        const value = target.type === 'checkbox' ? target.checked : target.value;        
        const name = target.name;            
        this.setState({          
            [name]: value        
        });    
    }
    handleSubmit(event) {        
        console.log('Current State is: ' + JSON.stringify(this.state));        
        // alert('Current State is: ' + JSON.stringify(this.state));        
        event.preventDefault(); 
        // this.refs.form.reset();
 
        // event.target.reset();   
        
        var url = 'http://localhost:3002/send'
    fetch(url, {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */* ',
            'Content-Type': 'application/json'
        },
        
        body:JSON.stringify(this.state),
    })
    .then(response => response.json())
    // .catch(error => console.error('Error:', error))
    // .then(json => console.log(json))
    .then((response) => {
        if (response.status === 'success'){
            alert("message sent");
            // this.handleFormReset();
        }
        else if(response.status === 'fail'){
            alert("message failed to send")
        }
    })
    

    }

    // handleFormReset = () => {
    //     this.setState(() => this.this.state)
    //   }

    render() {
        return(
            <div className={styles.outerbox}>
                <div className={styles.innercontainer}>
                <p className={styles.contactheading}>Contact ---------- </p> 
                <h1 className={styles.contactmetext}>
                    CONTACT ME
                </h1>
                <div className={styles.row1}>
                   <div className={styles.address}>
                       <p style={{margin:"3px"}}> My Address</p>
                       <p className={styles.addressInfo}>
                           Aurangabad, BIHAR
                       </p>
                   </div>
                   <div className={styles.socialprofile}>
                       <p style={{margin:"3px"}}>My Social Profile</p>
                       <div className={styles.socialInfo}>
                           <div className={styles.icon}><a href='https://www.facebook.com/karuna.kumari.14268769' target='blank'> <img className={styles.iconimg} src= {fb} alt="fb"></img></a></div>
                           {/* <div className={styles.icon}><a href='https://web.whatsapp.com' target='blank'><img className={styles.iconimg} src= {whatsapp} alt="whatsapp"></img></a></div> */}
                           <div className={styles.icon}> <a href='https://github.com/karunakaushik' target='blank'><img className={styles.iconimg} src= {git} alt="git"></img></a></div>
                           <div className={styles.icon}><a href='https://www.instagram.com/_k_k_k_22/' target='blank'> <img className={styles.iconimg} src= {insta} alt="insta"></img></a></div>
                           <div className={styles.icon}><a href='https://www.linkedin.com/in/karuna-kumari-a15178177/' target='blank'> <img className={styles.iconimg} src= {linkedin} alt="linkedin"></img></a></div>
                           
                        </div>
                   </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.emailMe}>
                        <p style={{margin:"3px"}}>Email Me</p>
                        <p className={styles.emailInfo}>
                            kkaushik@bt.iitr.ac.in
                        </p>
                    </div>
                    <div className={styles.callMe}>
                        <p style={{margin:"3px"}}> Call me</p>
                        <p className={styles.callInfo}>9027493916</p>
                    </div>
                </div>
                <div className={styles.row3}>
                <form className={styles.formcontainer} onSubmit = {this.handleSubmit}>
                <div className={styles.formbox}>
                    <div className={styles.contactFormRow1_1}>
                    {/* <label className={styles.labels}>Name :  */}
                    <input type = "text"
                    className={styles.fullname}
                    id='name'
                    name = 'name'
                    placeholder = "Your name"
                    value = {this.state.name}
                    onChange={this.handleInputChange}  />
                {/* </label> */}
                </div>
                <div className={styles.contactFormRow1_2}>
                    {/* <label className={styles.labels}>Email :  */}
                        <input type = "text"
                        className={styles.email}
                            id='email'
                            name = 'email'
                            placeholder = "Your email"
                            value = {this.state.email}
                            onChange={this.handleInputChange}  />
                    {/* </label> */}
                </div>
                </div>
                     
                <div className={styles.contactFormRow2}>
                    {/* <label className={styles.labels}>Subject :  */}
                        <input type = "text"
                        className={styles.subject}
                            id='subject'
                            name = 'subject'
                            placeholder = "Subject"
                            value = {this.state.subject}
                            onChange={this.handleInputChange}  />
                    {/* </label> */}
                </div>
                <div className={styles.contactFormRow3}>
                    {/* <label className={styles.labels}>Message :  */}
                        <textarea type = "text"
                        className={styles.message}
                            id='message'
                            name = 'message'
                            placeholder = "Type Message Here ...."
                            value = {this.state.message} 
                            onChange={this.handleInputChange} />
                    {/* </label> */}
                </div>
               <div className={styles.buttonDiv}>
                    <button className={styles.button_submit} type="submit" >                                       
                        Send Feedback                                     
                    </button>
                   </div> 
            </form>
                    
                </div>

   
                </div>

            </div>
        )
    }
}
