import {TableItem} from './TableItem'

export const TableRow = ({props, handler}) => {
  return (
    props ? ( 
    <tr className="Table--listUserContainers" key={props.id} onClick={() => handler(props.id)}>
      <TableItem data={props.name} />
      <TableItem data={props.email} />
      <TableItem data={props.phone} />
      <TableItem data={`${props.address.suite} ${props.address.street}, ${props.address.city}`} />
      <TableItem data={props.website} />
  
    </tr>)
  : undefined);
}