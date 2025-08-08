function Hello(){
  let mynam= "Hello, this is a future export";
  let myname=()=>{
    return "Hello, this is a future export";
  }
  return <h3>{mynam}this is future export,{myname()}</h3>
}
export default Hello;