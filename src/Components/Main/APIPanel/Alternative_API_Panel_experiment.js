function GetRecipe () {

    const [recipe, setRecipe] = React.useState({
        // mainName: "",
        // mainRecipe: "",
        // contentsName: "",
        // contentsRecipe: "",
        // condimentsName: "",
        // condimentsRecipe: "",
        // seasoningName: "",
        // seasoningRecipe: "",
        // shellName: "",
        // shellRecipe: ""
    });

    useEffect(() => {
        fetch('http://taco-randomizer.herokuapp.com/random/')
        .then(data=>data.json())
            .then(({data : recipe}) => {
                setRecipe(recipe);
                
                    // mainName: data.base_layer.name,
                    // mainRecipe: data.base_layer.recipe,
                    // contentsName: data.mixin.name,
                    // contentsRecipe: data.mixin.recipe,
                    // condimentsName: data.condiment.name,
                    // condimentsRecipe: data.condiment.recipe,
                    // seasoningName: data.seasoning.name,
                    // seasoningRecipe: data.seasoning.recipe,
                    // shellName: data.shell.name,
                    // shellRecipe: data.shell.recipe
            }) 
        }) 
    

        return (
       <div>
            <div className="recipeTitle">
                <h2>{  recipe.base_layer.name } with { recipe.mixin.name }, slathered with {recipe.condiment.name }, topped off with {recipe.seasoning.name} and finally wrapped in {recipe.shell.name} </h2>
            </div>
            <div>
               {/* <button className="button" value="Refresh" onClick={GetRecipe}>Refresh for a different recipe!</button> */}
            </div>    
            {/* <div className="container-main">
                <ReactMarkdown source={this.state.mainRecipe }/>
                <ReactMarkdown source={ this.state.contentsRecipe }/>
                <ReactMarkdown source={ this.state.condimentsRecipe }/>
                <ReactMarkdown source={ this.state.seasoningRecipe }/>
                <ReactMarkdown source={ this.state.shellRecipe }/>
            </div> */}
       </div>
        );
}
export default GetRecipe;
