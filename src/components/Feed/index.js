import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Fetcher } from '../../actions/FetchAction';
import { uri } from '../../api/uri.config';

class Feed extends Component {
    componentDidMount() {
        this.props.fetch(); //fetching
    }

    render() {

        const { fetch_status } = this.props;

        if(fetch_status.is_loading) return (<h3>Loading...</h3>);

        if(fetch_status.is_failed) return (<h3 style={{color:'red'}}>Fetching failed!!</h3>);

        if(fetch_status.is_success) {
            return (
                <ItemFeed dataLists = { fetch_status.data }/>
            );
        }

        return(
            <h1>Wrong!!</h1>
        );

    }
}


class ItemFeed extends Component {
    render() {
        const { dataLists } = this.props;

        return (
            <ul>
               { dataLists.map(post => (
                    <li key={post.id}>
                        <h3>{ post.title }</h3>
                        <div><img src={ post.url }/></div>
                        
                    </li>   
                ))
                }
            </ul>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetch: () => {
            dispatch(Fetcher(uri.photos))
        }
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        fetch_status: state.fetch
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Feed);
