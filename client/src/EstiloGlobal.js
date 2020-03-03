import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle `
    @import url('https://fonts.googleapis.com/css?family=Catamaran:100,200,300,400,500,600,700,800,900&display=swap');
    @import url('https://fonts.googleapis.com/css?family=Merriweather+Sans&display=swap');

@keyframes fadeIn {
    from {
        opacity: 0.6;
        transform: translateY(-8px)
    }
    to{
        opacity: 1;
        transform: translateY(0)
    }
}

*{  
    transition:0.5s;
    margin:0;
    padding:0;
    outline:0;
    box-sizing:border-box;
    font-family:'Catamaran', sans-serif;
    animation: fadeIn 0.5s;
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
textarea{ 
    border: none;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none;
    &:hover{
        background:whitesmoke;
        transition:0.3s;
        border-radius:10px;
        border-bottom:1px solid white;
    }
}
input{
    box-shadow:0;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);

    font-family: Catamaran;
    font-size: 13px;
    font-weight:bolder;
    color:  #51B981; 

    &::placeholder{
    font-weight:bolder;
}
    
    &:hover{
        background:whitesmoke;
        transition:0.3s;
        border-radius:10px;
        border-bottom:1px solid white;
    }
    
}
a{
    cursor:pointer;
}
button{
    background:white;
    box-shadow:0;
    border:0;
    border-radius:8px;
    cursor:pointer;
    transition: 0.4s;

    &:hover{
    transition: 0.4s;
    }
}
textarea{
    box-shadow:0;
    border:0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    border-radius:0;

    font-family: Catamaran;
    font-size: 13px;
    color:  #51B981;
}
`;