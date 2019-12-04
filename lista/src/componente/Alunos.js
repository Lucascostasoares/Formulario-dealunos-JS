import React from 'react';

class Alunos extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            alunos: [
                {
                    nome: 'Seu jorge',
                    idade: 58,

                },
                {
                    nome: 'Gabriel',
                    idade: 22,
                },
                {
                    nome: 'Renan',
                    idade: 15,
                },
                {
                    nome: 'Victor',
                    idade: 25,
                },
                {
                    nome: 'Maicon',
                    idade: 23,
                },
                {
                    nome: 'João',
                    idade: 19,
                },
                {
                    nome: 'Cleiton',
                    idade: 19,
                },
                {
                    nome: 'Luan',
                    idade: 19,
                },
                {
                    nome: 'karol',
                    idade: 20,
                },
                {
                    nome: 'Stefanya',
                    idade: 22,
                },
                {
                    nome: 'Lucas',
                    idade: 24,
                },
            ]
        }

    }
    render(){
        return (
            <div>
                <button>AODs fhsn</button>
            </div>
        )
    }
}
export default Alunos;