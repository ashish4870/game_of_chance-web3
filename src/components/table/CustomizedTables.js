import React, { useState } from 'react';
import './CustomizedTable.css';
import * as RiIcon from 'react-icons/ri';
import maticLogo from '../../assets/images/polygon-matic-logo.png';

const rows = [
  {
    Bet: 'Won bet',
    Player:
      '0x79bff21f64c180a7adfc35fda1ca2bdae75869ab8a7e4491a53fe1685b16042d',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
  {
    Bet: 'Won bet',
    Player: '0x688f9f9a662751ddee5e38ece496d341a3ea49e4',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
  {
    Bet: 'Busted',
    Player: '0x688f9f9a662751ddee5e38ece496d341a3ea49e4',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
  {
    Bet: 'Won bet',
    Player: '0x2c305888a456e7004663bc12a74395e637eabcbc',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
  {
    Bet: 'Busted',
    Player:
      '0x79bff21f64c180a7adfc35fda1ca2bdae75869ab8a7e4491a53fe1685b16042d',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
    {
    Bet: 'Busted',
    Player: '0x688f9f9a662751ddee5e38ece496d341a3ea49e4',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
  {
    Bet: 'Won bet',
    Player:
      '0x79bff21f64c180a7adfc35fda1ca2bdae75869ab8a7e4491a53fe1685b16042d',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
  {
    Bet: 'Busted',
    Player:
      '0x79bff21f64c180a7adfc35fda1ca2bdae75869ab8a7e4491a53fe1685b16042d',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
  {
    Bet: 'Won bet',
    Player: '0x2c305888a456e7004663bc12a74395e637eabcbc',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
  {
    Bet: 'Won bet',
    Player: '0x688f9f9a662751ddee5e38ece496d341a3ea49e4',
    Target: 6.0,
    Profit: 24,
    Time: 4.0,
  },
];

export default function CustomizedTables() {
  return (
    <div className="tableBlock">
      <table className="customizedTable">
        <tr>
          <th className="tableHeader">Bet</th>
          <th className="tableHeader">Player</th>
          <th className="tableHeader">Target</th>
          <th className="tableHeader">Profit</th>
          <th className="tableHeader">Time</th>
        </tr>
        {rows.map((row) => (
          <tr>
            {row.Bet === 'Busted' ? (
              <td className="tableBet">
                <RiIcon.RiCheckboxBlankCircleFill className="riIconR" />{' '}
                {row.Bet}
              </td>
            ) : (
              <td className="tableBet">
                <RiIcon.RiCheckboxBlankCircleFill className="riIconG" />{' '}
                {row.Bet}
              </td>
            )}
            <td className="tableData">{row.Player}</td>
            <td className="tableData">{row.Target}</td>
            <td className="tableProfitData">
            <img className="maticLogoTable" src={maticLogo} alt="" /> {row.Profit}
              </td>
            <td className="tableData">{row.Time}</td>
          </tr>
        ))}
      </table>
      <div class="pagination">
  <a href="#">&laquo;</a>
  <a href="#">1</a>
  <a href="#" class="active">2</a>
  <a href="#">3</a>
  <a href="#">4</a>
  <a href="#">5</a>
  <a href="#">6</a>
  <a href="#">&raquo;</a>
</div>
    </div>
  );
}
