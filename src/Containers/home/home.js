import React,{Component} from 'react';
import './home.css';
import CurrentClips from '../../Components/currentClips/currentClips';
import AddClip from '../../Components/addClip/addClip';
import axios from 'axios';

class Home extends Component{
    state={
        clip:"",
        data:[]
    }
    componentDidMount(){
        axios.get('').then(data=>{
        let copy={...data.data};
        let copy2=Object.keys(copy);
        let final=copy2.map(each=>{
            return {...data.data[each],vals:each}
        });
        
        this.setState({data:final});
        console.log("done"+final)});
    }
    deleteHandler=(vals)=>{
        console.log(vals);
        axios.delete(``).then(()=>{
            setTimeout(()=> window.location.reload(),1000);
        }).catch(err=>alert(err));
        
    }
    clipHandler=(e)=>{
        this.setState({clip:e.target.value});
    }
    postClip=()=>{
        const obj={item:this.state.clip};
        axios.post('',obj).then(response=>{
            window.location.reload();

            console.log(response);
        }).catch(err=>{
            alert(err);
            console.log(err);
        });
        
    }
    render(){
        return(
            <div className="Home">
                <header className="homeHeader">
                    <nav>
                        <h1>Clipboards</h1>
                    </nav>
                </header>
                <AddClip valv={this.state.clip} clip={this.clipHandler} post={this.postClip}/>
                <CurrentClips delete={this.deleteHandler} data={this.state.data}/>
                <footer>
                    <p>Multiplatform Clipboard. Add clips and they will be uploaded on the database. Then you can retrieve them on any of your device.</p>
                    <a href="mailto:aashishpeepra.ap@gmail.com">aashishpeepra.ap@gmail.com</a>
                    <a href="https://ironprogrammers.com">Ironprogrammers</a>
                </footer>
            </div>
        )
    }
}
export default Home;
