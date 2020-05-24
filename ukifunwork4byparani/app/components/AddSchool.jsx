var React = require("react");
var actions = require("../actions/SchoolActions");
    var createReactClass = require('create-react-class');


module.exports = createReactClass({
    getInitialState:function(){
      return {
          name:"",
          tagline:""
      }
    },
    addSchool:function(e){
        e.preventDefault();
        actions.addSchool(this.state);
    },
    handleInputChange:function(e){
      e.preventDefault();
      var name = e.target.name;
      var state = this.state;
      state[name] = e.target.value;
      this.setState(state);
    },


    render:function(){

        return(
          <div>
          <form className="form" onSubmit={this.addSchool}>
                      <div className="form-group">
                          <label className="control-label" htmlFor="name">Phone Model:</label>
                          <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Phone Model" />
                      </div>
                      <div className="form-group">
                          <label className="control-label" htmlFor="tagline">Expert:</label>
                          <input type="text" className="form-control" id="tagline" name="tagline" value={this.state.address} onChange={this.handleInputChange} placeholder="Expert" />
                      </div>
                      <div className="form-group">
                          <button className="btn btn-success" type="submit">Add </button>
                      </div>
                  </form>
</div>

        )
    }
})
