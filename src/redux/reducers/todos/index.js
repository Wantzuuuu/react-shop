
const todos = [{name : "react" , category: "Work" , done: true , id:"001"}] ;

export default function addTodos(prevState = todos, action){
    const {type , data} = action ;
    
    switch(type){
        case "addTodo" : 
        return [...prevState , data]

        case "changeDoneState": 
            return data 

        default :
            return prevState
    }
}