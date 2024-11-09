import { FC } from "react"
import { createUseStyles } from "react-jss"
import PlusSVG from "../../assets/images/PlusSVG";
import ListSVG from "../../assets/images/ListSVG";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask, removeAllTasks } from "../../store/tasksList";
import { isValidTask } from "./isValidTask";
import { Store } from "../../models/Store";

const useStyles = createUseStyles({
    header: {
        backgroundColor: "#89848B",
        paddingTop: "20px",
        paddingBottom: "20px",
        borderRadius: "15px",
        display: "flex",
        justifyContent: "space-around"
    },
    buttonAddTask: {
        display: "flex",
        gap: "10px",
        backgroundColor: "#517EB6",
        padding: "10px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        boxShadow: "1px 2px 6px 0px rgba(34, 60, 80, 0.5)"
    },
    buttonRemoveAllTasks: {
        display: "flex",
        gap: "10px",
        backgroundColor: "#B25054",
        padding: "10px 16px",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
        alignItems: "baseline",
        boxShadow: "1px 2px 6px 0px rgba(34, 60, 80, 0.5)"
    },
    buttonDesk: {
        color: "#ffffff",
        textTransform: "uppercase",
        fontSize: "14px",
        margin: "0"
    },
    input: {
        color: "#ffffff",
        backgroundColor: "inherit",
        fontSize: "14px",
        fontWeight: "600",
        border: "none",
        borderBottom: "2px solid #58555A"
    }
});

const Header: FC = () => {
    const classes = useStyles()

    const taskList: string[] = useSelector((store: Store) => store.tasksList.tasksList)
    const [task, setTask] = useState("")

    const dispatch = useDispatch()

    const getInputValue = (e: any) => {
        setTask(e.target.value)
    }

    const addTast = () => {
        if(isValidTask(taskList, task)) {
            dispatch(addTask(task))
        }
    }
    
    return (
        <header className={classes.header}>
            <button onClick={addTast} className={classes.buttonAddTask}>
                <PlusSVG />
                <p className={classes.buttonDesk}>Добавить</p>
            </button>
            <input onInput={getInputValue} className={classes.input} placeholder="Пополните список ..."/>
            <button onClick={() => dispatch(removeAllTasks(""))} className={classes.buttonRemoveAllTasks}>
                <p className={classes.buttonDesk}>Очистить</p>
                <ListSVG />
            </button>
        </header>
    )
}

export default Header