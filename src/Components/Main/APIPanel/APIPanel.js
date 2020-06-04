import React from 'react';
import './APIPanel.css';
const ReactMarkdown = require('react-markdown/with-html')

class GetRecipe extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            mainName: "",
            mainRecipe: "",
            contentsName: "",
            contentsRecipe: "",
            condimentsName: "",
            condimentsRecipe: "",
            seasoningName: "",
            seasoningRecipe: "",
            shellName: "",
            shellRecipe: ""
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData = () => {
        fetch('http://taco-randomizer.herokuapp.com/random/')
            .then(data => data.json())
            .then((data) => {

                this.setState({
                    mainName: data.base_layer.name,
                    mainRecipe: data.base_layer.recipe,
                    contentsName: data.mixin.name,
                    contentsRecipe: data.mixin.recipe,
                    condimentsName: data.condiment.name,
                    condimentsRecipe: data.condiment.recipe,
                    seasoningName: data.seasoning.name,
                    seasoningRecipe: data.seasoning.recipe,
                    shellName: data.shell.name,
                    shellRecipe: data.shell.recipe
                })
            })
    }



    render() {
        return (
            <div>
                <div className="recipeTitle">
                    <h2>{this.state.mainName} with {this.state.contentsName}, slathered with {this.state.condimentsName}, topped off with {this.state.seasoningName} and finally wrapped in {this.state.shellName} </h2>
                    <h2> See below for recipe or...</h2>
                    <button className="button" value="Refresh" onClick={this.getData}>Refresh for a new recipe!</button>
                </div>

                <div className="container-main">
                    <div className="recipeSection">
                        <ReactMarkdown source={this.state.mainRecipe} />
                        <ReactMarkdown source={this.state.contentsRecipe} />
                        <ReactMarkdown source={this.state.condimentsRecipe} />
                        <ReactMarkdown source={this.state.seasoningRecipe} />
                        <ReactMarkdown source={this.state.shellRecipe} />
                    </div>
                </div>
            </div>
        )
    }
}
export default GetRecipe;
