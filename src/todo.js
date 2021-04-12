import { Button, ListItem, ListItemText } from "@material-ui/core";
import React from "react";
import { db } from "./firebase_config";

export default function TodoListItems({todo, inprogress, id}){

    function toggleInProgress(){
        db.collection("todos").doc(id).update({
            inprogress: !inprogress,
        })

    }

    function deleteTodos(){
        db.collection("todos").doc(id).delete();
    }

    return (
        <div style={{display:"flex"}}>
        <ListItem>
        <ListItemText primary={todo} secondary={inprogress ? "In progress" : "Completed"}/>
        </ListItem>
        <Button onClick={toggleInProgress}>{inprogress ? "Done" : "UnDone"}</Button>
        <Button onClick={deleteTodos}>X</Button>
        </div>
    )
}