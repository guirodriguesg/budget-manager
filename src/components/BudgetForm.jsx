import React, { useEffect, useState } from "react";

const BudgetForm = () => {
    const [categoriaValue, setCategoriaValue] = useState('');
    const [quantValue, setQuantValue] = useState();

    const handleChangeCategoria = (event) => {
        setCategoriaValue(event.target.value);
    };
    const handleChangeQuantidade = (event) => {
        setQuantValue(event.target.value);
    };

    function addRow(categoria, quantidade) {
        setBudgetData([...budgetData, {categoria, quantidade }]);
    }

    return (
        <>
            <div>

                <div className="inline">
                    <label htmlFor="idCategoria">Informe a categoria:</label>
                    <input
                        type="text"
                        id="idCategoria"
                        value={categoriaValue}
                        onChange={handleChangeCategoria}
                    />
                </div>
                <div>
                    <label htmlFor="idQuantidade">Informe a quantidade:</label>
                    <input
                        type="text"
                        id="idQuantidade"
                        value={quantValue}
                        onChange={handleChangeQuantidade}
                    />
                </div>
            </div>
            <div>
                <button onClick={() => addRow(categoriaValue, quantValue)}>add</button>

            </div>
        </>
    )
}

export default BudgetForm;