import {getAllUsers, usersSLice} from "../store/slices/users";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../store";
import {User} from "../interfaces";

export const UserList = () : JSX.Element => {
    const { list: users } = useSelector((state: RootState) => state.users)
    const [ finish, setFinish ] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUsers())
        setFinish(true);
    },[dispatch, setFinish])

    if (!finish) return (<div>loading...</div>)

    return (
        <>
            <div className={"container py-5"}>
                <div className={"d-flex flex-wrap"}>
                {users.map( (user: User,key) => (
                            <div key={key} className="card m-3">
                                <img src={user.avatar} className="card-img-top" alt={user.first_name}/>
                                <div className="card-body">
                                    <h5 className="card-title">{user.first_name} {user.last_name}</h5>
                                    <p className="card-text">{user.email}</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                ))}
            </div>
            </div>
        </>
    )
}