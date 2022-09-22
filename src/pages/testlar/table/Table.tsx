import React from 'react'
import { StyledTable } from './TableStyle'
import { Link } from 'react-router-dom'

export default function Table() {

    const arr = [
        {
            id: 1,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 2,
            name: "90***8510  Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 3,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 4,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 5,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 6,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 7,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 8,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 9,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
        {
            id: 10,
            name: "90***8510 Elyor",
            ball: "21 / 72% ",
            finished: "09-12-2021,  15:55:33"
        },
    ]

    return (
        <StyledTable>
            <div className='wrapper'>
                <div className='table_list'>
                    <h2>Natijalar: Matematika</h2>
                    <table>
                        <tr style={{ padding: '14px' }}>
                            <th style={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
                                <p>№</p>
                                <p>Test</p>
                            </th>
                            <th>Natija</th>
                            <th className='visibled_text'>Yakunlandi</th>
                        </tr>
                        {arr.map((i) => (
                            <tr style={{
                                border: '1px solid rgba(49, 57, 73, 0.1)',
                                alignItems: 'center',
                                padding: '16px'
                            }}>
                                <td style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '25px'
                                }}>
                                    <p>{i.id}</p>
                                    <p>{i.name}</p>
                                </td>
                                <td>{i.ball} </td>
                                <td className='visibled_text'>{i.finished}</td>
                            </tr>
                        ))}
                    </table>
                    <div className='natijalar'>
                        <h3>Natijalar 1-20 / Jami 300 ta</h3>
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link to="" className="page-link" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                        <span className="sr-only"></span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link to='' className="page-link" >1</Link></li>
                                <li className="page-item"><Link to="" className="page-link" >2</Link></li>
                                <li className="page-item"><Link to="" className="page-link" >3</Link></li>
                                <li className="page-item">
                                    <Link to="" className="page-link" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                        <span className="sr-only"></span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                    </div>

                </div>

            </div>
            <div className='buttons'>
                <button>Test haqida</button>
                <button style={{ background: '#12AAE4', color: '#fff' }}>Testni boshlash</button>
            </div>
        </StyledTable>
    )
}
