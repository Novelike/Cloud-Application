import React, { Component } from 'react';

class NameChanger extends Component {
    constructor(props) {
        super(props);
        // 초기 상태 설정
        this.state = {
            name: '나리',
        };
    }

    changeName = () => {
        const currentName = this.state.name;

        switch (currentName) {
            case '나리':
                this.setState({
                    name: '둘리',
                });
                break;
            case '둘리':
                this.setState({
                    name: '나리',
                });
                break;
            default:
                this.setState({
                    name: '나리',
                });
        }
    };

    render() {
        return (
            <div>
                <p>현재 이름: {this.state.name}</p>
                <button onClick={this.changeName}>이름 변경</button>
            </div>
        );
    }
}

export default NameChanger;
