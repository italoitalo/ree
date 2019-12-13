import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Catamaran&display=swap');

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
}

html, border-style, #root{
    height:100%;
}

body{
    font:16px 'catamaran', times;
    -webkit-font-smoothing:antialiased !important;

}

ul{
    list-style:none;

}

input{
    box-shadow:0;
    border:0

}

button{
    box-shadow:0;
    border:0;
    border-radius:50px;
    min-height:2.0625rem
}

`;