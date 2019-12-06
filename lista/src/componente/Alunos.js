import React from 'react';
import '../App.css'

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

    // listarAlunos = () => {
    //     this.state.alunos.map(nome => {
    //         console.log(alunos.nome);
    //     })
    //     this.state.alunos.map(alunos => {
    //         if(alunos.idade > 30) {
    //             console.log(alunos.nome)
    //         }
    //     })
    //     this.state.alunos.filter(alunos => 
    //         alunos.idade > 30
    //         && alunos.idade < 70
    //         && console.log('filter',alunos.nome))
    //        }
           

    render(){
        return (
            <div className='form'>

                {/* <button> onCLick={this.listaAlunos}>Click me</button> */}
                {this.state.alunos.map((alunos, index) => {
                    console.log(alunos.nome);
                    return (
                        <div className='imagem' key={index}>
                            <h1>{alunos.nome}</h1>
                            <p>alunos.idade</p>
                        </div>
                    )
                })}
            </div>    
        )
    }
}
export default Alunos;