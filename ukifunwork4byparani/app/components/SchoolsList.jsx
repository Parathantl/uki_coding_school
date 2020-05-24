var React = require("react");
var SchoolInfo = require("./SchoolInfo.jsx")
var AddSchool = require("./AddSchool.jsx");
var createReactClass = require('create-react-class');

module.exports = createReactClass({
   render:function(){

     var letterStyle = {
                padding: 10,
                margin: 10,
                backgroundColor: "White"
            };

       return(
        <div style={letterStyle}>
           <div className="row">
                <div className="col-sm-6">
                    <AddSchool />
                </div>
                <div className="col-sm-5">
                    <img width="50%" src="https://media.almabaseapp.com/300/alumsite/news/we-want-your-feedback-chalkboard.jpg"/>
                </div>
                <div className="col-md-12">
                    {
                        this.props.schools.map(function(s,index){
                            return(
                                <SchoolInfo info={s} key={"school"+index} />
                            )
                        })
                    }
                </div>
           </div>
</div>
       )
   }
});
