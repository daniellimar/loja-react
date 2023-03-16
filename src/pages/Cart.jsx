import React, { useState } from 'react'
import { getItem, setItem } from '../services/LocalStorageFuncs'
import { BsCartDashFill } from 'react-icons/bs'
import { ProductsArea } from '../css/style'
import { Header } from '../components/Header'

export const Cart = () => {
    const [data, setData] = useState( getItem('carrinhoYt') || [])
    
    const RemoveItem = (obj) => {
        const arrFilter = data.filter((e) => e.id !== obj.id)
        setData(arrFilter)
        setItem('carrinhoYt', arrFilter)
    }
    const subTotal = data.reduce((acc, cur) => acc + cur.price, 0).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      })
    return (
        <div>
            <Header></Header>
            <h1>Meu carrinho</h1>
            <h4>{`Subtotal: R$ ${subTotal}`}</h4>
            <ProductsArea>
                {
                    data.map((e) => (
                        <div key={e.id}>
                            <h4>{e.title}</h4>
                            <img src={e.thumbnail} alt={e.title} />
                            <h4>
                                {
                                    `R$ ${e.price.toLocaleString('pt-BR', {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2
                                    })}`
                                }
                            </h4>
                            <button onClick={() => RemoveItem(e)}>
                                <BsCartDashFill />
                            </button>
                        </div>
                    ))
                }
            </ProductsArea>
        </div>
    )
}