const Booking_Row = (props) => {
    const { booking_id,returndate,rentalDate,car,user,ammt } = props.item;
    return (
      <tr>
        <td>{booking_id}</td>
        <td>{rentalDate}</td>
        <td>{returndate}</td>
        <td>{car.id}</td>
        <td>{user.user_no}</td>
        <td>{ammt}</td>
      </tr>
    );
  };
  export default Booking_Row;
  