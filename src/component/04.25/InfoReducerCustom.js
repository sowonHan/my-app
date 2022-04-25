import React from 'react';
import useInputs from './useInputs';

function InfoReducerCustom(props) {
    const [state, onChange] = useInputs({
        // 이게 초깃값으로 useInputs에서의 initialForm
        name: '',
        nickname: '',
    });
    const { name, nickname } = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange} />
                <input name="nickname" value={nickname} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
}

export default InfoReducerCustom;
