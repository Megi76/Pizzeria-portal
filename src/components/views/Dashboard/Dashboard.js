import React from 'react';
//import propTypes from 'prop-types';
import styles from './Dashboard.module.scss';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const demoContent = [
  {id: '1', hour: '15:00', status: 'Reserved', orderId: 23, tableNumber: 'Table 1'},
  {id: '2', hour: '15:30', status: 'Event', orderId: 24,  tableNumber: 'Table 2'},
  {id: '3', hour: '16:00', status: 'Reserved',orderId: 25,   tableNumber: 'Table 3'},
  {id: '4', hour: '16:30', status: 'Event', orderId: 26,  tableNumber: 'Table 2'},

];

const Dashboard = (status, renderStatus) => (

  <div className={styles.component}>
    <h2>Statistics</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell># in the house Orders</TableCell>
            <TableCell># to-go Orders</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>0</TableCell>
            <TableCell>134</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
    <h2>Reservations & Events</h2>
    <Paper className={styles.component}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Reservation/Event</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Table</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {demoContent.map(row => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">{row.status}</TableCell>
              <TableCell>{row.hour}</TableCell>
              <TableCell>{row.tableNumber}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  </div>
);

export default Dashboard;
