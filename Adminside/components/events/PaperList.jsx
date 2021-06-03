import React from "react";
import axios from "axios";
import PaperListItem from "./PaperListItem";

class PaperList extends React.Component{
    state = {
        papers: []
    };
    
    componentDidMount(){
        this.getPapers();
    }

    getPapers(){
        const res = await axios.get("http://localhost:5000/paper/");
        this.setState({ papers: res.data });
    }
    
    renderList(){
        return this.state.papers.map(paper => {
            return <PaperListItem paper={paper} key={paper._id} />;
            
        });
    }

    render(){
        return <div>{this.renderList()}</div>;
    }
}

export default PaperList;