import React from 'react'
import styled from  'styled-components'
import Cabecalho from './../componentes/CabecalhoPrivado'

import Busca from './../componentes/BarraDeBusca'


export default function adm() {

var user = prompt('Usuário')
var senha = prompt('Senha')

    return (
        <>
            <Cabecalho />
          <Container>

		  <Busca/>
		  
		    <h1>Lista de usários</h1>
            <Envelop>
                <Tr>
                    <th>Inscrição</th>
                    <th>Nome</th>
                    <th>Situação</th>
                    <th>Nivel de acesso</th>
                    <th>Cadastrado</th>
                    <th>Ações</th>
                </Tr>
                </Envelop>
                <tbody>
						<Tr>
							<Td1>1</Td1>
							<Td1>Cesar Lipak</Td1>
							<Td1>Ativo</Td1>
							<Td1>usário</Td1>
							<Td1>10/10/2020 14:40:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>2</Td1>
							<Td1>Dylan Saori</Td1>
							<Td1>Ativo</Td1>
							<Td1>usário</Td1>
							<Td1>10/10/2020 11:20:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>3</Td1>
							<Td1>Kiara Arlem</Td1>
							<Td1>Ativo</Td1>
							<Td1>usário</Td1>
							<Td1>10/10/2020 12:41:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>4</Td1>
							<Td1>Ronal Lipak</Td1>
							<Td1>Ativo</Td1>
							<Td1>usário</Td1>
							<Td1>10/10/2020 14:17:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>5</Td1>
							<Td1>Rhuan Manur</Td1>
							<Td1>Ativo</Td1>
							<Td1>Administrador</Td1>
							<Td1>10/10/2020 10:22:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody> <tbody>
						<Tr>
							<Td1>6</Td1>
							<Td1>Bruno Cabral</Td1>
							<Td1>Ativo</Td1>
							<Td1>Administrador</Td1>
							<Td1>10/10/2020 08:35:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
				
				<h1>Lista de Produtos Cadastrados</h1>
            <Envelop>
                <Tr>
                    <th>Id</th>
                    <th>Tipo de Produto</th>
                    <th>Atividade</th>
                    <th>Qualidade</th>
                    <th>Cadastrado</th>
                    <th>Ações</th>
                </Tr>
                </Envelop>
                <tbody>
						<Tr>
							<Td1>1</Td1>
							<Td1>------Celular------</Td1>
							<Td1>Ativo</Td1>
							<Td1>Usado</Td1>
							<Td1>10/10/2020 11:12:10</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>2</Td1>
							<Td1>--Cabeamento--</Td1>
							<Td1>Ativo</Td1>
							<Td1>Usado</Td1>
							<Td1>10/10/2020 10:34:44</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>3</Td1>
							<Td1>-HeadPhones-</Td1>
							<Td1>Ativo</Td1>
							<Td1>Bom</Td1>
							<Td1>10/10/2020 21:45:30</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>4</Td1>
							<Td1>-----Outros-----</Td1>
							<Td1>Ativo</Td1>
							<Td1>Ruim</Td1>
							<Td1>10/10/2020 10:25:07</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>5</Td1>
							<Td1>-Peça Interna-</Td1>
							<Td1>Ativo</Td1>
							<Td1>Bom</Td1>
							<Td1>10/10/2020 07:00:57</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
				
				<h1>Lista de Produtos Doados</h1>
            <Envelop>
                <Tr>
                    <th>Id</th>
                    <th>Tipo de Produto</th>
                    <th>Atividade</th>
                    <th>Qualidade</th>
                    <th>Cadastrado</th>
                    <th>Ações</th>
                </Tr>
                </Envelop>
                <tbody>
						<Tr>
							<Td1>1</Td1>
							<Td1>------Celular------</Td1>
							<Td1>Doado</Td1>
							<Td1>Otimo</Td1>
							<Td1>9/10/2020 11:17:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                <tbody>
						<Tr>
							<Td1>2</Td1>
							<Td1>--Cabeamento--</Td1>
							<Td1>Doado</Td1>
							<Td1>Usado</Td1>
							<Td1>9/10/2020 10:55:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
                
		  </Container>
		</>		         
        
    )
}
const Container = styled.section`
	display:flex;
	flex-direction:column;
	align-items:center;
`

const Tr = styled.tr`
    width:1000px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`

const Td = styled.td`
    display:flex;	
    flex-direction:column;
`

const Td1 = styled.td`
	text-align:center;
    padding: 15px;
`
const Envelop = styled.div`
padding:8px;
border-radius:3px;
background-color:#3ae874
;
`