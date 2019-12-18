import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Catamaran&display=swap');

*{
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family:'Catamaran', sans-serif;
}

html, border-style, #root{
    height:100%;
}

body{
    font:16px 'catamaran', times;
        /*BARRA DE SCROLL CUSTOMIZADA*/
        ::-webkit-scrollbar {
        width: 8px;
        }
        ::-webkit-scrollbar-track {
        background: whitesmoke;
        }
        ::-webkit-scrollbar-thumb {
        background: lightgray;
        border-radius:20px;
        }
        ::-webkit-scrollbar-thumb:hover {
        background: darkgray;
        }

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