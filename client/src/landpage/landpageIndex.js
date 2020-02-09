import React, { Fragment } from 'react';
import ScrollAnimation from 'react-animate-on-scroll'


import "./styles.css"
import "./animate.min.css"

export default function LandPage(){
    return(
        <Fragment>
                <header className="header">
            <nav>
                <ul>
                    <a href="/">
                        Cadastro
                    </a>
                    <a href="/">
                        Login
                    </a>
                </ul>
            </nav>
        </header>
    <section  className="container">

        <div className="slide">
            <h1 className="greenree">ree</h1>

            <div  id="slideshow"> 
               {/*  <div className="slick">
                    <h1 className="greenree" style={{fontWeight:"900px"}}>Conectar</h1>
                    <h1 className="cornflowerblue" style={{fontWeight:"900px"}}>Utilizar</h1>
                    <h1 className="crimson" style={{fontWeight:"900px"}}>Unir</h1>
                    <h1 className="gold" style={{fontWeight:"900px"}}>Ciclar</h1>
                    <h1 className="hotpink" style={{fontWeight:"900px"}}>Unir</h1>
                    <h1 className="greenyellow" style={{fontWeight:"900px"}}>Estruturar</h1>
                    <h1 className="purple" style={{fontWeight:"900px"}}>Distribuir</h1>
                </div> */}
            </div>
        </div>            
            <ScrollAnimation animateIn='fadeInLeft'
            animateOut='fadeOutRight'>
                <img  className="banner" src={require("./src/img/conexão.svg")} />
                <h1  className="textobanner"> A diferença está <br/> nas suas mãos. </h1>
            </ScrollAnimation>
            

            <button onclick="scrollToHow()" className="botaobanner"> Entenda! </button>
    </section>

            <section id="how"  className="how">
               
                <ScrollAnimation  animateIn='fadeInLeft'
                animateOut='fadeOutRight'>
                    <div className="ScrollAnimation"> 
                        <img  className="banner" src={require("./src/img/troca.svg")} />
                        <div className= "howtext">
                            <h1> Como funciona? </h1>
                            <h3> Reunir, Reutilizar, Reconectar  </h3>
                        </div>
                    </div>
                </ScrollAnimation>

            </section>

            <section className="how-box">

                <div data-aos="fade-right" className="howtext black ">
                    <h1>    Reunir  </h1>
                    <h2>    Gentileza gera gentileza, <br/> 
                            encontre doadores de produtos tecnológicos <br/>
                            ou então doe você mesmo!
                    </h2>
                </div>
                <img className="banner" src={require("./src/img/2-sentados.svg")} />

            </section>

            <section className="how-box">

                <img className="banner" src={require("./src/img/progresso.svg")}/>

                <div data-aos="fade-left" className="howtext black ">
                    <h1>    Reutilizar  </h1>
                    <h2>    Não importa o estado do seu item,<br/>
                            Doe o que não usa mais para pessoas que precisam e<br/>
                            ajude na redução de lixo eletrônico.<br/>
                            Pode ser útil para alguem!
                    </h2>
                </div>

            </section>

            <section className="how-box">
                <div data-aos="fade-right"className="howtext black ">
                    <h1>    Reconectar </h1>
                    <h2>    Transforme a realidade a sua volta!<br/>
                            Melhore a qualidade de vida da sua Sociedade.<br/>
                            Se reconecte com o mundo! 
                    </h2>
                </div>
                <img className="banner" src={require("./src/img/troca 2.svg")}/>
            </section>

            <img className="banner flex" src={require("./src/img/montanhas.svg")}/>

            <section  className="pense">
                <h1 data-aos="fade-up"className="greenree">...pense nisso:</h1>
                <div data-aos="fade-up" className="cardspense">
                    <div className="cardp">

                        <img className="bannerp"src={require("./src/img/heart-shape-silhouette.svg")}/>

                        <h2 className="hotpink">Pessoas</h2>
                        <h3> Pessoas que possuem baixa 
                            renda podem se cadastrar na 
                            nossa plataforma para receber 
                            um aparelho tecnologico de doação</h3>
                    </div>

                    <div className="cardp">

                        <img className="bannerp" src={require("./src/img/pencil.svg")}/>

                        <h2 className="cornflowerblue">Instituições</h2>
                        <h3> Existem muitas unidades de ensino 
                            precisando de aparelhos eletronicos,
                            para ensinar a consertar</h3>
                    </div>

                    <div className="cardp">

                        <img className="bannerp" src={require("./src/img/book.svg")}/>
                        
                        <h2 className="gold">Ensino</h2>

                        <h3> ajude no ensino tecnológico,
                            envie hardware que pode ser utilizado
                            em aulas.
                        </h3>
                    </div>
                </div>
            </section>

            <section data-aos="fade-up" className="howcad">

                <button className="Cadastro"> faça parte </button>

            </section>

            <section data-aos="fade-down" className="Consci">
            <h1 data-aos="fade-down" className="greenree">O problema do Lixo Eletrônico</h1>
            <div  className="flex">
                <img data-aos="fade-left"className="banner" src={require("./src/img/world.svg")}/>
                <div>
                    <h2 > Brasil é o líder de produção de lixo <br/> eletrônico na América Latina </h2>
                <p>
                    O Brasil está na liderança de produção de lixo eletrônico, da América Latina.<br/> 
                    É o que afirma um estudo da Global e-Waste Monitor 2017, que avalia em todo <br/> 
                    o mundo a quantidade de sujeira criada a partir de computadores, televisores<br/> 
                    e celulares descartados, por exemplo.
                </p>
                <p>
                    Na pesquisa produzida pela Organização das Nações Unidas (ONU),o país produz <br/> 
                    anualmente  1,5 mil tonelada. O Brasil é o sétimo maior produtor de lixo eletrônico<br/> 
                    do mundo!
                </p>
                </div>
            </div>

            </section>

            <section className="about">

                <h1 className="titleabout">A equipe ree</h1>

                <div className="how">
                    <div className="howtext">
                        <h1> Nosso contato direto</h1>

                        <h3 style={{fontSize:"20pt"}}>Pronto para ajudar pessoas? Ligue para nós ou envie um e-mail<br/> e entraremos em 
                        contato com você o mais breve possível!</h3>

                        <div className="flex">

                            <div className="column">
                                <img className="bannerp" src={require("./src/img/telephone-symbol-button.svg")}/>
                                <a className="contato">+55 (21) 91111-2222 </a>
                            </div>
                            
                            <div className="column">
                                <img className="bannerp"src={require("./src/img/envelope.svg")}/>
                                <a className="contato">contato@ree.com </a>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="abouttext">
                    <div className="card">
                        <h1>Bruno</h1>
                        <img className="aboutimg" src={require("./src/img/5.jpg")}/>
                        <h3>lorem ipsum dore it me lorem ipsum dore it me</h3>
                    </div>
                    <div className="card">
                        <h1>Italo</h1>
                        <img className="aboutimg"  src={require("./src/img/3.jpg")}/>
                        <h3>lorem ipsum dore it me lorem ipsum dore it me</h3>
                    </div>
                    <div className="card">
                        <h1>Matheus</h1>
                        <img className="aboutimg" src={require("./src/img/4.jpg")}/>
                        <h3>lorem ipsum dore it me lorem ipsum dore it me</h3>
                    </div>
                    <div className="card">
                        <h1>Rhuan</h1>
                        <img className="aboutimg" src={require("./src/img/2.jpg")}/>
                        <h3>lorem ipsum dore it me lorem ipsum dore it me</h3>
                    </div>
                    <div className="card">
                        <h1>Tayanne</h1>
                        <img className="aboutimg" src={require("./src/img/1.jpg")}/>
                        <h3>lorem ipsum dore it me lorem ipsum dore it me</h3>
                    </div>
                </div>

        <section>

            <footer>
                <a>Instagram</a>
                <a>Twitter</a>
                <a>Facebook</a>
            </footer>
        </section>

          //aimation on scroll



        </section>
    </ Fragment>
    )
}