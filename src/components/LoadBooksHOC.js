function loadBooksHOC(Components){
    return function Feature2(){
        const loadBooks =()=>{
            console.log("Books loaded ")
        }
        return (
            <div>
                <Components/>
                <button onClick={loadBooks}> Load Books</button>
            </div>
        )
    }
}
export default loadBooksHOC;