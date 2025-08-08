function Random(){
  let no = Math.floor(Math.random() * 100);
  return <h3 style={{'background-color': 'green'}}>random no is {no}</h3>


}
export default Random;