import React, { Component } from 'react'
import Child from "./Child";

export default class Footer extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: "roshan kyada",
            name: "tandulker",
            show: true
        }
    }

    static getDerivedStateFromProps(props, state) {
        if (props.name !== state.name) {
            return {
                name: props.name
            }
        }
        return null
    }

    changeName = () => {
        this.setState({ name: "roshan" })
        console.log(this.state.name)
    }

    // shouldComponentUpdate() {
    // return false;

    getData() {
        setTimeout(() => {
            console.log('Our data is fetched');
            this.setState({
                data: 'Hello WallStreet',
            })
        }, [2000])

    }

    componentDidMount() {
        console.log('componentDidMount is here')
        this.getData();
    }

    componentWillMount() {
        console.log('First this called');

    }

    // getSnapshotBeforeUpdate(prevProps, prevState) {
    //     document.getElementById("div1").innerHTML =
    //         "Before the update, the favorite was " + prevState.name;
    // }

    // componentDidUpdate() {
    //     document.getElementById("div1").innerHTML =
    //         "The updated favorite is " + this.state.favoritecolor;
    //}

    childRemove = () => {
        this.setState({ show: false });
    }
    render() {
        let myheader;
        if (this.state.show) {
            myheader = <Child />;
        };
        return (
            <div>
                {myheader}
                <button onClick={this.childRemove}>remove child</button>
                <p>{this.state.data}</p>
                <p>this state is {this.state.name}</p>
                <button onClick={this.changeName}>color change</button>
                <p id="div1"></p>
            </div>
        )
    }
}
