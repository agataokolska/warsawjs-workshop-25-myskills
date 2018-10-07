import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as LocalStorageHelper from '../helpers/local-storage-helper'
export class FormComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isTypeScriptLower: 0
        };
    }

    componentDidMount() {
        const user = LocalStorageHelper.read('user')
        this.setState({
            isTypeScriptLower: user.isTypeScriptLower
        })
    }

    onChangeField_isTypeScriptLover() {
        console.log('onChangeField_isTypeScriptLover')
        this.setState({
            isTypeScriptLower: !this.state.isTypeScriptLower
        })
    }

    onSubmit(evt) {
        evt.preventDefault()
        LocalStorageHelper.create('user', this.state)

    }
    render() {
        const userId = this.props.match.params.id;

        return (

            <div>
                <h2>Profil użytkownika ({userId})</h2>
                <Link to="/"> Strona główna</Link>

                <div className="jumbotron">
                    <form onSubmit={(evt) => this.onSubmit(evt)} >
                        <div className="form-group form-check">
                            <label className="form-check-label">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    value="1"
                                    name="isTypeScriptLover"
                                    onChange={() => this.onChangeField_isTypeScriptLover()}
                                    checked={this.state.isTypeScriptLower}
                                />
                                Czy preferujesz pisanie kodu w TypeScript?
                        </label>
                        </div>

                        <div className="form-group">
                            <input className="btn btn-primary" type="submit" value="Zapisz" />
                        </div>

                    </form>
                </div>
            </div>
        );
    }
}
