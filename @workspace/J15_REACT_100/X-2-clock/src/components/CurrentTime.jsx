let CurrentTime = ()=>{
    let time = new Date();
    return <h1>this is the Current Time: {time.toLocaleDateString()}</h1>
}
export default CurrentTime;