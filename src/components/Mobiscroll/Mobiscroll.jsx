import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import { Select, Page, setOptions, localeTh } from '@mobiscroll/react';

setOptions({
    locale: localeTh,
    theme: 'ios',
    themeVariant: 'light'
});

const singleData = [
    { text: 'Bitcoin', group: 'Крипто-валюты', value: 'atl' },
    { text: 'USDT', group: 'Крипто-валюты', value: 'bos' },
    { text: 'Сбербанк', group: 'Интернет-банкинг', value: 'bat' },
    { text: 'Тинькофф', group: 'Интернет-банкинг', value: 'bri' },
    { text: 'Webmoney', group: 'Электронные', value: 'ber' },
    { text: 'QIWI', group: 'Электронные', value: 'dus' },
    { text: 'PayPal', group: 'Электронные', value: 'col' },
    { text: 'RUB', group: 'Наличные', value: 'par' },
    { text: 'USD', group: 'Наличные', value: 'lyo' },
];

function Mobiscroll() {
    return (
        <Page>
            <Select
                data={singleData}
                label="Пример выбора скриптом"
                inputProps={{
                    inputStyle: 'outline',
                    labelStyle: 'stacked',
                    placeholder: 'Сделайте выбор...'
                }}
            />
            <Select
                data={singleData}
                label="Группировка по категориям"
                showGroupWheel={true}
                inputProps={{
                    inputStyle: 'outline',
                    labelStyle: 'stacked',
                    placeholder: 'Сделайте выбор...'
                }}
            />
        </Page>
    ); 
}


export default Mobiscroll;