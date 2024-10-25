


function Container(props){
    return (
        <div className={`max-w-screen-lg mx-auto ${props.className}`}>{props.children}</div>
    )
}
export default Container;