import React from 'react';
import Layout from '@theme/Layout';
import siteList from './siteList.js';
import './siteList.css'

const data = siteList;

function renderTableHeader() {
  let header = Object.keys(data[0])
  return header.map((key, index) => {
     return <th key={index}>{key.toUpperCase()}</th>
  })
}

function renderTableData() {
  return data.map((data, index) => {
     const { id, websiteName, outcomeUrl, ip, flavor, openPorts, os, infrastructure, provisioning, containerEngine } = data //destructuring
     return (
        <tr key={id}>
           <td>{id}</td>
           <td>{websiteName}</td>
           <td>{outcomeUrl}</td>
           <td>{ip}</td>
           <td>{flavor}</td>
           <td>{openPorts}</td>
           <td>{os}</td>
           <td>{infrastructure}</td>
           <td>{provisioning}</td>
           <td>{containerEngine}</td>           
        </tr>
     )
  })
}

function proxyDocumentation() {
  return (
    <div>
      <h1 id='title'>Production Websites</h1>
      <table id='glasswall'>
          <tbody>
            <tr>
              {renderTableHeader()}
            </tr>
            {renderTableData()}
          </tbody>
      </table>
    </div>
  );
}

export default proxyDocumentation;