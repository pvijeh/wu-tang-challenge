/** @jsx React.DOM */

(function(React, global) {

  // initialize global variable to store json data 
  var result;

  // get data using jQuery AJAX call
  $.ajax({
      url: '../data.json',
      dataType: 'json',
      async: false,
      success: function(data) {
          result = data;
          console.log(result)
      }
  });

  var compton = result.data;

  mountNode = document.getElementById("originalGangsters");

  // renders table 
  // Child of: WuApp
  // Parent of: WuRow
    var WuTable = React.createClass({
      render: function() {
      var rows = [];

      var OriginalGangstas = this.props.cat1;

        // Gets the last name and adds it to data object
       function addLastNameKey(){
          for (var i =0, len = OriginalGangstas.length; i < len; i++){
          var L = OriginalGangstas[i].birthName.split(" ");
          OriginalGangstas[i].lastName = L[1];
        }
    };

    addLastNameKey();

    // enable sort by multiple keys 
    comp = function(a, b) {
      if (a > b) return +1;
      if (a < b) return -1;
      return 0;
    }

    // sort by date born and last name 
    var sortedGangstas = OriginalGangstas.sort(function(a, b) { 
      return comp(a.born,b.born) || comp(a.lastName,b.lastName)
    });

    // delete all duplicates from the array
    for( var i=0; i<sortedGangstas.length-1; i++ ) {
      if ( sortedGangstas[i].name == sortedGangstas[i+1].name ) {
        delete sortedGangstas[i];
      }
    }

    // populates table with rows of data 
    sortedGangstas.forEach(function(item){
        rows.push(
            <WuRow item={item} key={item._id}/>
        );
    });

    return(
      <table>
        <thead>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>BirthName</td>
                <td>Born</td>
                <td>Died</td>
            </tr>
        </thead>
        <tbody>
            {rows}
        </tbody>
    </table>
    )
  }
});

// renders row to go inside of WuTable 
// Child of: WuTable
// Parent of: None
var WuRow = React.createClass({
  render: function() {
        return(
        <tr>
            <td>{this.props.item._id}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.birthName}</td>
            <td>{this.props.item.born}</td>
            <td>{this.props.item.died}</td>
        </tr>
        )
    }
});

// renders the App with WuTable and WuRow components as descendant components  
// Child of: None
// Parent of: WuTable

var WuApp = React.createClass({
    getInitialState: function(){
            return{
                cat1: this.props.wuTang
            }
         },
  render: function() {
    return (
      <div>
          <WuTable  cat1={this.state.cat1}/>
      </div>
    );
  }
});

React.render(<WuApp wuTang={compton}  />, mountNode);

})(window.React, window);
