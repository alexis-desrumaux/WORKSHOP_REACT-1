import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import {SignInRouter} from "./signin/Signin";

interface IProps
{

}

interface IState
{
    display: boolean;
}

class Home extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {
            display: true,
        }
    }

    callBack = (): void =>
    {
        this.setState({display: false});
    }

    render = (): JSX.Element =>
    {
        return (
            <div>
                Hello World
            </div>
        )
    }
}

export function HomeRouter(): JSX.Element
{
    return (
        <Switch>
            <Route exact path={"/"}>
                <Home/>
            </Route>
            <Route path={"/signin"}>
                <SignInRouter/>
            </Route>
        </Switch>
    )
}

export default Home;