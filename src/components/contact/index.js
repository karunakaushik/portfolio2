import React ,{Component} from 'react'
import styles from './src/css/contact.module.css'


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
                       <p>MY Address</p>
                   </div>
                   <div className={styles.socialprofile}>
                       <p>My Social Profile</p>
                   </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.emailMe}>
                        <p>Email Me</p>
                    </div>
                    <div className={styles.callMe}>
                        <p> Call me</p>
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
