import React from "react";
import axios from "axios";

class Paper extends React.Component{
    state = {
        paper : {}
    };

    componentDidMount(){
        this.getPaper();
    }
    
    async getPaper(){
        const res = await axios.get(
            `http://localhost:5000/paper/${this.props.match.params.id}`
            );
        this.setState({paper: res.data});
    }

    renderHTML(){
        return { __html: this.state.paper.html };
    }

    renderPaper(){
        return <div dangerouslySetInnerHTML={this.renderHTML()}></div>;
    }

    render(){
        return <div>{this.renderPaper}</div>;
    }
}

export default Paper;