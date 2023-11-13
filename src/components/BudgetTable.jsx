import React, { useEffect, useState } from "react";

const BudgetTable = (props) => {
    const [budgetData, setBudgetData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setBudgetData(loadBudgetData());
        };
        fetchData();
    }, []);

    function loadBudgetData(){
        return [
            {
                "categoria": "Moradia",
                "quantidade": 1,
            },
            {
                "categoria": "Pessoal",
                "quantidade": 2,
            },
            {
                "categoria": "Carro",
                "quantidade": 3,
            },
            {
                "categoria": "Moradia",
                "quantidade": 1,
            },
            {
                "categoria": "Pessoal",
                "quantidade": 2,
            },
            {
                "categoria": "Carro",
                "quantidade": 3,
            }
        ]
    }

    return (
        <>
            <div>

                <table className="border-separate border-spacing-2">
                    <thead>
                        <tr>
                            <th className="">Categoria</th>
                            <th className="">Quantidade</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            budgetData.map((tabela, index) => {
                                return (
                                    <tr key={index}>
                                        <td className="border border-slate-700">{tabela.categoria}</td>
                                        <td className="border border-slate-700">{tabela.quantidade}</td>
                                    </tr >
                                )
                            }
                            )
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default BudgetTable;