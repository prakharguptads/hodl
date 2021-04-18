import React  , {Component} from 'react';
import "./table.css";
import {Table} from 'reactstrap'
class Table1 extends Component {
    render() {
        return (
            <div>
            <table className="table text-center">
            <thead>
            <tr>
            <th>
            <h4>
            <span class="pointer">
            #</span>
            </h4>
            </th>
            <th>
            <h4>
            <span class="pointer">
            Platform</span>
            </h4>
            </th>
            <th>
            <h4>
            <span class="pointer">Last Traded Price</span>
            </h4>
            </th>
            <th>
            <h4><span class="pointer">Buy / Sell Price</span></h4>
            </th><th><h4><span class="pointer">Difference</span></h4></th>
            <th><h4><span class="pointer">Savings</span></h4></th>
            </tr>
            </thead>
            <tbody><tr class="tr"><td class="align-middle"><h4 class="table-text">1</h4></td>
            <td class="align-middle"><a target="_blank" href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn"><h4 class="table-text">
            <span class="exchange-name "/>
            <span>WazirX</span>
            </h4></a>
            </td><td class="align-middle"><h4 class="table-text">₹ 47,81,647</h4></td>
            <td class="align-middle"><h4 class="table-text">
            <span>₹ 47,81,647 / ₹ 47,89,253</span></h4></td>
            <td class="align-middle"><h4 class="table-text color-green">8.30 %</h4></td><td class="align-middle">
                <h4 class="table-text color-green">▲ ₹ 3,66,364</h4></td></tr>
            <tr class="tr">
            <td class="align-middle">
            <h4 class="table-text">2</h4></td><td class="align-middle">
                <a target="_blank" href="https://bit.ly/2BJxccc"><h4 class="table-text">
                <img width="15px" src="/images/p.png" className="exchange-logo"/>
                <span class="exchange-name ">Bitbns</span></h4></a>
                </td><td class="align-middle"><h4 class="table-text">₹ 47,67,008</h4></td>
                <td class="align-middle"><h4 class="table-text"><span>₹ 47,67,018 / ₹ 47,70,630</span>
                </h4></td><td class="align-middle"><h4 class="table-text color-green">7.97 %</h4></td><td class="align-middle">
                <h4 class="table-text color-green">▲ ₹ 3,51,726</h4></td></tr>
                <tr class="tr"><td class="align-middle"><h4 class="table-text">3</h4>
                </td><td class="align-middle"><a target="_blank" href=" "><h4 class="table-text">  
                    <span class="exchange-name ">CoinDCX</span>
                    </h4></a></td><td class="align-middle"><h4 class="table-text">₹ 47,89,999</h4></td>
                    <td class="align-middle"><h4 class="table-text"><span>₹ 47,79,887 / ₹ 47,89,999</span></h4></td><td class="align-middle"><h4 class="table-text color-green">8.49 %</h4></td><td class="align-middle"><h4 class="table-text color-green">▲ ₹ 3,74,717</h4></td></tr>
                    </tbody></table>
                    </div>
        );
    }
}
export default Table1;