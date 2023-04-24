const User_row = (props) => {
  const { user_no, user_city, user_address, user_gender, user_nm } = props.item;
  return (
    <tr>
      <td>{user_nm}</td>
      <td>{user_no}</td>
      <td>{user_gender}</td>
      <td>{user_city}</td>
      <td>{user_address}</td>
    </tr>
  );
};
export default User_row;
