import React from 'react'
// import PropTypes from 'prop-types'
import styles from './src/css/acads_info.module.css'


export default class Acads extends React.Component{
    render(){
        return(
            <div className={styles.info_container}>
                <div className={styles.details}>
                    {this.props.question}   {this.props.answer}
                </div>
            </div>

        )
    }
}