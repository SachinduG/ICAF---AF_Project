import React from 'react';

class PostListItem extends React.Component{
    constructor (props){
        super(props);
        this.onShowPaper = this.onShowPaper.bind(this);
    }
    onShowPaper(){
        wiindow.location.pathname = `/paper/${this.props.paper._id}`;
    }

    renderDate(dateString){
        const monthNames = ["January"];
        
        const date = new Date(dateString);

        return `${
            monthNames[date.getMonth()]
        } ${date.getDate()}, ${date.getFullYear}`;
    }

    renderTags(tags){
        return tags.map(tag => {
            return <span key={tag}>{tag}</span>;
        }); 
    }

    render(){
        const { paper } = this.props;
        return (
            <button onClick={this.} key={paper._id}>
                    <h3>{paper.title}</h3>
                    <span>{this.renderDate(paper.createdAt)}</span>
                    <div>{this.renderTags}</div>
            </button>
        );
    }
}

export default PostListItem;