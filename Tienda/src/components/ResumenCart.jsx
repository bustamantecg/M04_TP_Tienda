import React from 'react'

const ResumenCart = ({importe, cantidad}) => {
    return (

        <div className="overflow-x-auto">
            <table className="table table-zebra">
                {/* head */}
                <thead>
                    <tr className='text-blue-500'>
                        <th>Importe Total</th>                        
                        <th>Cantidad de Productos</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>                        
                        <td>$ {importe}</td>   
                        <td>{cantidad}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default ResumenCart