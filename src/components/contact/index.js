import React ,{Component} from 'react'
import styles from './src/css/contact.module.css'


export default class Contacts extends Component{

    constructor(props){
        super(props)

        this.state = {
            name : '',
            email : '',
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
                Contact me
                <form className={styles.formcontainer} onSubmit = {this.handleSubmit}>
                <div className={styles.formbox}>
                <label className={styles.labels}>Name : 
                    <input type = "text"
                    id='name'
                    name = 'name'
                    placeholder = "Fullname"
                    value = {this.state.name}
                    onChange={this.handleInputChange}  />
                </label>
                </div>
                {/* <div>
                <label>LastName : 
                    <input type = "text"
                    id='lastname'
                    name = 'lastname'
                    placeholder = "Lastname"
                    value = {this.state.lastname} 
                    onChange={this.handleInputChange} />
                </label>
                </div> */}
                <div >
                <label className={styles.labels}>Email : 
                    <input type = "text"
                    id='email'
                    name = 'email'
                    placeholder = "Email"
                    value = {this.state.email}
                    onChange={this.handleInputChange}  />
                </label>
                </div>
                <div>
                <label className={styles.labels}>Message : 
                    <input type = "text"
                    id='message'
                    name = 'message'
                    placeholder = "type here ...."
                    value = {this.state.message} 
                    onChange={this.handleInputChange} />
                </label>
                </div>
              {/* <div id={styles.open}>submitted</div> */}
               <div>
               <button className={styles.button_submit} type="submit" >                                       
                Send Feedback                                     
                </button>
                   </div> 
                   </form>
                    

            </div>
        )
    }
}
