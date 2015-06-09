/** @jsx React.DOM */

(function(React, global) {

        mountNode = document.getElementById("todoapp");

var catOne =  [
    {
      "_id" : 1,
      "name" : "RZA",
      "birthName" : "Robert Diggs",
      "born" : "1969"
    },
    {
      "_id" : 2,
      "name" : "Ghostface Killah",
      "birthName" : "Dennis Coles",
      "born" : "1970"
    },
    {
      "_id" : 3,
      "name" : "GZA",
      "birthName" : "Gary Grice",
      "born" : "1966"
    },
    {
      "_id" : 4,
      "name" : "Inspectah Deck",
      "birthName" : "Jason Hunter",
      "born" : "1970"
    },
    {
      "_id" : 5,
      "name" : "Masta Killa",
      "birthName" : "Elgin Turner",
      "born" : "1969"
    },
    {
      "_id" : 6,
      "name" : "Method Man",
      "birthName" : "Clifford Smith",
      "born" : "1971"
    },
    {
      "_id" : 7,
      "name" : "Ol' Dirty Bastard",
      "birthName" : "Russell Jones",
      "born" : "1971",
      "died" : "2004"
    },
    {
      "_id" : 8,
      "name" : "Raekwon",
      "birthName" : "Corey Woods",
      "born" : 1970
    },
    {
      "_id" : 9,
      "name" : "Cappadonna",
      "birthName" : "Darryl Hill",
      "born" : "1969"
    },
    {
      "_id" : 10,
      "name" : "GZA",
      "birthName" : "Gary Grice",
      "born" : "1966"
    }]; 

var CalcTable = React.createClass({
  render: function() {
    var rows = [];
    // var myVar 

  var OriginalGangstas = this.props.cat1;

   function addLastNameKey(){
    
    // var len = OriginalGangstas.length;
      for (var i =0, len = OriginalGangstas.length; i < len; i++){
      var L = OriginalGangstas[i].birthName.split(" ");
      // console.log(L[1]);
      OriginalGangstas[i].lastName = L[1];
      console.log(OriginalGangstas[i].lastName);

      }
  };

addLastNameKey();

cmp = function(a, b) {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
}

    var sortedGangstas = OriginalGangstas.sort(function(a, b) { 
    return cmp(a.born,b.born) || cmp(a.lastName,b.lastName)
})  

    sortedGangstas.forEach(function(item){
        rows.push(
            <CalcRow item={item} key={item.id}/>
        );
    });
    return(
      <table>
        <tbody>
            {rows}
        </tbody>
    </table>
    )
  }
});

var CalcRow = React.createClass({
  render: function() {
        return(
        <tr>
            <td>{this.props.item._id}</td>
            <td>{this.props.item.name}</td>
            <td>{this.props.item.birthName}</td>
            <td>{this.props.item.born}</td>
        </tr>
        )
    }
});

var CalcApp = React.createClass({
        getInitialState: function(){
            return{
                cat1: this.props.wuTang
            }
         },
  render: function() {
    return (
      <div>
          <CalcTable  cat1={this.state.cat1}/>
      </div>
    );
  }
});

React.render(<CalcApp wuTang={catOne}  />, mountNode);

})(window.React, window);
