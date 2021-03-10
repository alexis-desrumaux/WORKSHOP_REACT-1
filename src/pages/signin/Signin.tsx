import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

interface IProps
{

}

interface IState
{

}

class SignIn extends React.Component<IProps, IState>
{
    constructor(props: IProps)
    {
        super(props);
        this.state = {

        }
    }

    render = (): JSX.Element =>
    {
        return (
            <div>
                SignIn
            </div>
        )
    }
}

function SignInRouter(): JSX.Element
{
    return (
        <Switch>
            <Route exact path={"/signin"}>
                <SignIn/>
            </Route>
        </Switch>
    )
}

export {SignInRouter};