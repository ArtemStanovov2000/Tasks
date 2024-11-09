import { FC } from "react"
import { createUseStyles } from "react-jss"
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "../../store/tasksList";
import Task from "../../shared/Task/Task";
import { Store } from "../../models/Store";

const useStyles = createUseStyles({
    mainPage: {
        backgroundColor: "#89848B",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginTop: "20px",
        borderRadius: "15px",
    },
    taskList: {
        marginTop: "20px",
        paddingLeft: "15px",
        paddingRight: "15px"
    }
});

const MainPage: FC = () => {
    const classes = useStyles()

    const taskList: string[] = useSelector((store: Store) => store.tasksList.tasksList)

    const dispatch = useDispatch()

    return (
        <div className={classes.mainPage}>
            <ul className={classes.taskList}>
                {taskList.map((element, index) => <Task onClick={() => dispatch(removeTask(index))} key={index} value={element}/>)}
            </ul>
        </div>
    )
}

export default MainPage