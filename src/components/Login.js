import React from 'react';

import Modal from "./Modal";
import useModal from './useModal';

const Login = () => {
    const { isShowing, toggle } = useModal();
    return (


        <
        Modal isShowing = { isShowing }
        hide = { toggle }
        />

    );
};

export default Login;