import React from 'react'
import styled from  'styled-components'
import Cabecalho from './../componentes/CabecalhoPrivado'

export default function adm() {
    return (
        <>
            <Cabecalho />
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
							<Td1>Cesar Szpak</Td1>
							<Td1>Ativo</Td1>
							<Td1>usário</Td1>
							<Td1>10/10/1980 10:15:20</Td1>
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
							<Td1>10/10/1980 10:15:20</Td1>
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
							<Td1>Kiara Arlet</Td1>
							<Td1>Ativo</Td1>
							<Td1>usário</Td1>
							<Td1>10/10/1980 10:15:20</Td1>
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
							<Td1>Ronal Szpak</Td1>
							<Td1>Ativo</Td1>
							<Td1>usário</Td1>
							<Td1>10/10/1980 10:15:20</Td1>
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
							<Td1>Rhuan cinco</Td1>
							<Td1>Ativo</Td1>
							<Td1>usário</Td1>
							<Td1>10/10/1980 10:15:20</Td1>
							<Td>
								<button type="button" class="btn btn-xs btn-primary">Visualizar</button>
								<button type="button" class="btn btn-xs btn-warning">Editar</button>
								<button type="button" class="btn btn-xs btn-danger">Apagar</button>
							</Td>
						</Tr>              
				</tbody>
		</>		         
        
    )
}

const Tr = styled.tr`

    width:1100px;
    display:flex;
    flex-direction:row;
    justify-content: space-between;
`

const Td = styled.td`
    display:flex;
    flex-direction:column;
`

const Td1 = styled.td`
    padding: 0 0 0 20px;
`
const Envelop = styled.div`
background-color:#58FAAC;
`