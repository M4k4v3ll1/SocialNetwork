import React, {ChangeEvent, Component} from 'react';

type ProfileStatusPropsType = {
    status: string
    updateStatus: (status: string) => void
}

export class ProfileStatus extends Component<ProfileStatusPropsType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <div><input
                        placeholder={'Как дела?'}
                        value={this.state.status}
                        onBlur={this.deactivateEditMode}
                        onChange={this.onStatusChange}
                        autoFocus
                    /></div>
                    : <div><span
                        onDoubleClick={this.activateEditMode}
                    >{this.props.status || '-------'}</span></div>
                }
            </div>
        );
    }
}