import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from './assets/profile2.jpg';

class App extends Component {

    state = {displayBio: false};

    toggleDisplayBio = () => {
        this.setState({ displayBio: !this.state.displayBio });
    }

    render() {
        return (<div>
            <img src={profile} alt='ProfilePicture' className='profile-image'></img>
            <h1>Hello !</h1>
            <p>My name is Manoj. I'm a Full Stack Software Developer.</p>
            <p>I'm always looking forward to working on meaningful projects.</p>
            {
                this.state.displayBio ? (<div>
                    <p>I live in Coimbatore, and code every day.</p>
                    <p>My favourite Language is JavaScript, and I think ReactJS is awesome.</p>
                    <p>Besides coding, I love music.</p>
                    <button onClick={this.toggleDisplayBio}>Show Less</button>
                </div>) : <div>
                        <button onClick={this.toggleDisplayBio}>Read More</button>
                    </div>
            }

            <hr />
            <Projects />
            <hr />
            <SocialProfiles />

        </div>)
    }
}

export default App;