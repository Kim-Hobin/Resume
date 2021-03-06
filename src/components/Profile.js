import React, { Component } from 'react';
import styles from '../styles.module.scss';

class Profile extends Component {
    render() {
        var data = this.props.data;
        const tags = data.contents.map((tag) => (
            <a className={styles.SpinButton} href={tag.link}>
                <i class={tag.style}></i>
            </a>
        ))

        return (
            <header>
                <div>
                    <img src='profile.jpg'></img>
                    <h1>{data.name}</h1>
                    <h3>{data.intro}</h3>
                    <div className={styles.contact}>
                        {tags}
                    </div>
                </div>
            </header >
        )
    }
}

export default Profile;