// rfc for Boilerplate
import React, { useState, useEffect } from 'react';
import {Col, Row } from "react-bootstrap"
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import players from "./players.json"
import 'bootstrap/dist/css/bootstrap.css';
import Form from 'react-bootstrap/Form';
import StudentForm from "./addPlayers";
// import fs from 'fs';

export function PingPong() {

  const [playerData, setPlayerData] = useState(players);

    //➡️ useEffect : used to save changes in local storage and load them.
    useEffect(()=>{
      let loadedList = JSON.parse(localStorage.getItem("prodArr"));
      if (loadedList){
        setPlayerData(loadedList)
      }
    },[])
  
    // ⚠️ the list at the end of the func states when to call this useEffect, ie call it when productList changes in the func below.
    useEffect(()=> {
      localStorage.setItem('prodArr',JSON.stringify(playerData))
    }, [playerData])

  const addRows = (data) => {
    const totalStudents = playerData.length;
    data.id = totalStudents + 1;
    data.rank = totalStudents + 1;
    const newData = [...playerData];
    newData.push(data);
    setPlayerData(newData);
    // fs.writeFileSync("../data/players.json",JSON.stringify(playerData));
  };

  return (
    <div className="container">
      <h2 className="m-3 rounded text-center py-2">Ping-Pong Leaderboard</h2>
      <StudentForm func={addRows} />
      {/* <Form className="m-3">
        <Form.Group className="mb-3 w-50" controlId="formBasicName">
          <Form.Label>Player Name : </Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add player +
        </Button>
      </Form> */}
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Wins</th>
          <th>Loses</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {playerData.map(item => (
          <tr>
            <td>{item.rank}</td>
            <td>{item.name}</td>
            <td>{item.wins}</td>
            <td>{item.loses}</td>
            <td><Button variant="danger">Challenge!</Button><Button variant="success" className="mx-3">Player Record</Button></td>
          </tr>
        ))}
      </tbody>
    </Table>
    </div>
  )
}
