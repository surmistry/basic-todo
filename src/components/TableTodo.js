import {TableItem} from './TableItem'

export const TableTodo = ({props}) => {
  return (
    props ? ( 
    <tr className="Table--listUserContainers" key={props.id}>
      <TableItem data={props.title} />
      <input type="checkbox" defaultChecked={props.completed} disabled/>
    </tr>)
  : undefined);
}