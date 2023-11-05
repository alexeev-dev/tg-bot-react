import React from 'react'
import './mvp.css'

const MVP = (props) => {
    return (
        <div>
            <form>
                <table>
                <tbody>
                    <tr className="toprow">
                        <th></th>
                        <th>ПОКУПАЮ</th>
                        <th>ПРОДАЮ</th>              
                    </tr>
                    <tr>
                        <th>unstyled</th>
                        <td className="unwrap">
                        <select>
                            <option value="selectbox">выберите</option>
                            <option value="option1">Bitcoin</option>
                            <option value="option2">RUB | Tinkoff</option>
                            <option value="option3">Webmoney</option>
                            <option value="optio4">Наличные</option>
                        </select>
                        </td>
                        <td>
                        <select>
                            <option value="selectbox_1">выберите</option>
                            <option value="option1_1">RUB | Tinkoff</option>
                            <option value="option2_1">Webmoney</option>
                            <option value="option3_1">Bitcoin</option>
                            <option value="optio4_1">Наличные</option>
                        </select>
                        </td>
                    </tr>

                    <tr className="us-form">
                        <th>styled</th>
                        <td className="unwrap">
                        <select>
                            <option value="selectbox_2">выберите</option>
                            <option value="option1_2">RUB | Tinkoff</option>
                            <option value="option2_2">Webmoney</option>
                            <option value="option3_2">Bitcoin</option>
                            <option value="optio4_2">Наличные</option>
                        </select>
                        </td>
                        <td>
                        <span className="us-form-select-wrap">
                        <select>
                            <option value="selectbox_3">выберите</option>
                            <option value="option1_3">RUB | Tinkoff</option>
                            <option value="option2_3">Webmoney</option>
                            <option value="option3_3">Bitcoin</option>
                            <option value="optio4_3">Наличные</option>
                        </select>
                        </span>
                        </td>
                    </tr>
                    <tr className="us-form error">
                        <th>error</th>
                        <td className="unwrap">
                        <select disabled="disabled">
                            <option value="selectbox_4">выберите</option>
                            <option value="option1_4">RUB | Tinkoff</option>
                            <option value="option2_4">Webmoney</option>
                            <option value="option3_4">Bitcoin</option>
                            <option value="optio4_4">Наличные</option>
                        </select>
                        </td>
                        <td>
                        <span className="us-form-select-wrap">
                        <select disabled="disabled">
                            <option value="selectbox_5">выберите</option>
                            <option value="option1_5">RUB | Tinkoff</option>
                            <option value="option2_5">Webmoney</option>
                            <option value="option3_5">Bitcoin</option>
                            <option value="optio4_5">Наличные</option>
                        </select>
                        </span>
                        </td>
                    </tr>
                    <tr className="us-form">
                        <th>disabled</th>
                        <td className="unwrap">
                        <select disabled="disabled">
                            <option value="selectbox_6">выберите</option>
                            <option value="option1_6">RUB | Tinkoff</option>
                            <option value="option2_6">Webmoney</option>
                            <option value="option3_6">Bitcoin</option>
                            <option value="optio4_6">Наличные</option>
                        </select>
                        </td>
                        <td>
                        <span className="us-form-select-wrap">
                        <select disabled="disabled">
                            <option value="selectbox_7">выберите</option>
                            <option value="option1_7">RUB | Tinkoff</option>
                            <option value="option2_7">Webmoney</option>
                            <option value="option3_7">Bitcoin</option>
                            <option value="optio4_7">Наличные</option>
                        </select>
                        </span>
                        </td>
                    </tr>
                    <tr className="us-form darktest">
                        <th>on dark</th>
                        <td className="unwrap">
                        disabled="disabled"
                        </td>
                        <td>
                        <span className="us-form-select-wrap">
                        <select>
                            <option value="selectbox_8">выберите</option>
                            <option value="option1_8">RUB | Tinkoff</option>
                            <option value="option2_8">Webmoney</option>
                            <option value="option3_8">Bitcoin</option>
                            <option value="optio4_8">Наличные</option>
                        </select>
                        </span>
                        </td>
                    </tr>
                </tbody>
                </table>
            </form>
        </div>
    )
}

export default MVP