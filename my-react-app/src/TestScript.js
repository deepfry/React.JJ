import {testMessage, notTony} from './Functions';

function TestScript(props) {
  var name = props.name != undefined ? props.name : 'default'
  console.log(name);
  function testing(){
    alert(`testing ${name} hello booty`)
  }
  return (
    <>
      <p onClick={()=>name == 'tony' ? testMessage(name) : notTony(name)}>hello {name}</p>
      {console.log("inline console log?")}
    </>
  );
}

export default TestScript;
