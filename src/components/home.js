import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Get_Games, loadMore } from '../store/actions/action';
import Card from './card';
var i = 0;
class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            start_Date: '',
            end_Date: ''

        }
    }
    ren = () => {
        let arr = []
        for (let index = 0; index < this.props.Limit; index++) {
            console.log(index);

            arr.push(this.props.StoreGames[index]);
        }
        return arr;
    }


    get = (start, end) => {
        this.props.getGames(start, end);

    }
    startChange = e => {
        this.setState({ start_Date: e.target.value })
    }
    endChange = e => {
        this.setState({ end_Date: e.target.value })
    }
    render() {
        return (
            <div>
                <div className="container">

                    <br />
                    <h1 className="text-center">Game Search Assignment</h1>
                    <br />
                    <div className="row">

                        <div className="col col-md-6">
                            <label htmlFor="">Starting Date</label><input type="date" name="" id="start" value={this.state.start_Date} className="form-control" onChange={this.startChange} />
                        </div>
                        <div className="col col-md-6">
                            <label htmlFor="">Ending Date</label>  <input type="date" name="" id="end" value={this.state.end_Date} className="form-control" onChange={this.endChange} />
                        </div>
                    </div>
                    <br />
                    <br />
                    <button className="btn btn-dark btn-block  btn-lg" onClick={() => { this.get(this.state.start_Date, this.state.end_Date) }}>Search Games</button>


                </div>


                <br />
                <br />
                {this.props.Error == "true" ? <div className=" text-center alert alert-danger">
                     <button type="button" class="close" data-dismiss="alert">&times;</button>
                    <h4><strong>ERROR!</strong> The starting date should be bigger than the ending date.</h4>
                                                 </div> : null}
                <br />
              
                <div className="container ">
                    {this.props.Loading == "true" ? <h2 className="btn btn-outline-info btn-block btn-lg"> Loading....</h2> : null}
                    <div className="text-center row" >

                        {this.props.StoreGames != "" ? this.ren().map((obj, key) => {

                            return (


                                <Card name={obj.name} Date={obj.original_release_date.substring(0, 10)} link={obj.site_detail_url}
                                    Img={obj.image.medium_url} descrip={obj.deck} />



                            )



                        })
                            : null}

                    </div>
                    {this.props.StoreGames != "" ? <div className="text-center"> <br /><button className="text-center btn btn-warning btn-lg" onClick={this.props.Load}>load more</button><br /> <br /></div> : null}
                </div>
            </div>
        )
    }
}

function mapStateToProp(state) {
    return ({
        StoreGames: state.reducer.Games,
        Limit: state.reducer.CurrentIndex,
        Loading: state.reducer.loading,
        Error: state.reducer.error
    })
}
function mapDispatchToProp(dispatch) {
    return ({
        // changeUserName: ()=>{dispatch(changeUserName())}
        getGames: (start, end) => {
            dispatch(Get_Games(start, end))
        },
        Load: () => {
            dispatch(loadMore());
        }
    })
}

export default connect(mapStateToProp, mapDispatchToProp)(Home);

