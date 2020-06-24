import React, { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfilesData';

class SocialProfile extends Component {
    render() {
        const { link, image } = this.props.socialProfile;
        return ( <div style={{ display: 'inline-block', margin: 10, width: 50 }} >
           
            <a href={link} target="_blank" rel="noopener noreferrer"><img src={image} style={{width: 50, height: 50}} alt="SocialProfile" /></a>
        </div>)
    }
}

class SocialProfiles extends Component {
    render() {
        return (<div>
             <h4>Connect with me...</h4>
            {  
                SOCIAL_PROFILES.map(PROFILE => {
                    return(<SocialProfile key={PROFILE.id} socialProfile={PROFILE} />)
                })
            }
        </div>)
    }
}
export default SocialProfiles;